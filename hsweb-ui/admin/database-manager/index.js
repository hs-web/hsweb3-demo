importResource("/admin/css/common.css");
importResource("/admin/css/common.css");
importResource("/plugins/font-awesome/4.7.0/css/font-awesome.css");

importMiniui(function () {
    require(["miniui-tools", "message", "request"], function (tools, message, request) {
        var datasourceList = [{name: "默认数据源", children: [{name: "加载中..."}], id: "", type: "database"}];
        mini.parse();
        var databaseTree = mini.get("database-tree");
        var tabs = mini.get("code-tabs");
        request.get("datasource", function (res) {
            if (res.status === 200) {
                if (res.result) {
                    $(res.result).each(function () {
                        this.type = "database";
                        this.children = [{name: "加载中..."}];
                        datasourceList.push(this);
                    });

                    databaseTree.loadData(datasourceList);
                    databaseTree.selectNode(datasourceList[0]);
                    newSqlWindow();
                }
            } else {
                message.showTips("获取数据源配置失败");
            }
        });
        databaseTree.on("drawnode", renderIcon)
        databaseTree.on("beforeexpand", function (e) {
            var node = e.node;
            if (node.type === 'database' && !node.loaded) {
                e.cancel = true;
                request.get("database/manager/metas/" + node.id, function (res) {
                    if (res.status === 200) {
                        node.loaded = true;
                        var table = res.result.TABLE;
                        $(table).each(function () {
                            this.type = "table";
                            this.expanded = false;
                            this.children = this.columns;
                        });
                        // node.children=table;
                        node.children = [];
                        databaseTree.addNodes(table, node)
                        databaseTree.expandNode(node);
                    }
                })
            }
        });

        tabs.on("activechanged", function (e) {
            changeTx(e.tab);
        })

        function renderIcon(e) {
            var node = e.node;
            if (node.type === 'database') {
                e.iconCls = "fa fa-database"
                e.isLeaf = false;
            } else if (node.type === 'table') {
                e.iconCls = "fa fa-table"
            } else {
                e.iconCls = "fa fa-columns";
            }
            if (node.comment) {
                e.nodeHtml = node.name + "(" + node.comment + ")";
            }
        }

        var templateMap = {};

        // importResource('/plugins/miniui/themes/bootstrap/skin.css');

        function changeTx(tab) {
            var commitTxButton = $("#commit_tx").unbind("click");

            var rowBackButton = $("#rollback_tx").unbind("click");

            if (tab.tx_id) {
                mini.get("commit_tx").setEnabled(true);
                commitTxButton.on("click", function () {
                    request.post("database/manager/transactional/" + (tab.tx_id) + "/commit", {}, function (resp) {
                        getConsole(tab).log("info", "commit transactional " + tab.tx_id);
                        tab.tx_id = 0;
                        tab.sqlCount = 0;
                        changeTx(tab);
                    })
                });
                mini.get("rollback_tx").setEnabled(true);
                rowBackButton.on("click", function () {
                    request.post("database/manager/transactional/" + (tab.tx_id) + "/rollback", {}, function (resp) {
                        getConsole(tab).log("info", "rollback transactional " + tab.tx_id);
                        tab.sqlCount = 0;
                        tab.tx_id = 0;
                        changeTx(tab);
                    });
                })
            } else {
                mini.get("commit_tx").setEnabled(false);
                mini.get("rollback_tx").setEnabled(false);

            }
        }


        function getConsole(tab) {
            tab = tab || tabs.getActiveTab();

            var resultTabs = mini.get(tab.id + "_result");

            var consoleTab = resultTabs.getTabs()[0];
            var el = $(resultTabs.getTabBodyEl(consoleTab));

            return {
                sql: function (sql) {
                    el.append($("<span class='sql'>").text("sql> ")).append(sql)
                        .append("<br>");
                    el.scrollTop(el[0].scrollHeight);
                },
                log: function (level, log) {
                    el.append($("<span class='" + level + "'>")
                        .append("[" + (mini.formatDate(new Date(), "yyyy-MM-dd HH:mm:ss") ) + "] ").append(log))
                        .append("<br>");
                    el.scrollTop(el[0].scrollHeight);
                }
            }
        }

        $(".execute-sql").on("click", function () {
            var time = new Date().getTime();
            var tab = tabs.getActiveTab();
            if (!tab) {
                return;
            }
            var sqlEditor = tab.sqlEditor;
            var sql = sqlEditor.editor.getSelectedText();
            if (!sql) {
                sql = sqlEditor.getScript();
            }
            if (!sql) {
                return;
            }
            var autoCommit = $("#auto-commit").prop("checked");
            if (!autoCommit) {
                if (!tab.tx_id) {
                    //GET /database/manager/transactional/new
                    request.get("database/manager/transactional/new/" + tab.datasource, function (resp) {
                        if (resp.status === 200) {
                            tab.tx_id = resp.result;
                            getConsole().log("info", "new transaction " + resp.result);
                            doExecute(resp.result);
                            changeTx(tab);
                        }
                    })
                } else {
                    doExecute(tab.tx_id)
                }
            } else {
                doExecute(null);
            }

            function doExecute(tx) {
                if (tx) {
                    getConsole().log("info", "set transaction " + tx);
                } else {
                    getConsole().log("info", "set transaction auto commit");
                }
                getConsole().log("danger", "request execute:<br>" + (sql.replace("\n", "<br>")));
                //POST /database/manager/transactional/execute/{transactionalId}/{dataSourceId}
                request.post("database/manager/" + (tx ? "transactional/" : "") + "execute/" + ( tx ? tx + "/" : "" ) + tab.datasource, sql,
                    function (resp) {
                        if (resp.status !== 200) {
                            tab.tx_id = null;
                        }
                        getConsole(tab).log("info", "completed in " + (new Date().getTime() - time) + "ms");
                        initResult(resp);
                        changeTx(tab);
                    },
                    true, "text/plain")
            }


            function initQueryResult(info) {
                var resultTabs = mini.get(tab.id + "_result");

                var sql = info.sqlInfo.sql;
                if (sql.length > 20) {
                    sql = sql.substr(0, 20) + "...";
                }
                var queryTab = {showCloseButton: true, title: sql};
                queryTab = resultTabs.addTab(queryTab);
                var el = $(resultTabs.getTabBodyEl(queryTab));
                var tableId = "t_" + Math.round(Math.random() * 100000);

                el.append("<div class='mini-fit'>")
                    .append($("<div style='width: 100%;height: 100%' class='mini-datagrid'>")
                        .attr({
                            id: tableId,
                            showPager: false
                        }));
                mini.parse();
                var columns = [];
                var datas = [];
                var grid = mini.get(tableId);

                $(info.result).each(function () {
                    var columnArr = this.columns;
                    var dataArr = this.data;

                    $(columnArr).each(function (index, column) {
                        columns.push({
                            field: "column_" + index,
                            header: column,
                            align: 'center',
                            headerAlign: 'center'
                        })
                    });
                    $(dataArr).each(function (index, data) {
                        var dataObj = {};
                        $(data).each(function (i, d) {
                            dataObj["column_" + i] = d;
                        });
                        datas.push(dataObj);
                    })
                });
                grid.set({
                    columns: columns
                });
                grid.setData(datas);
                resultTabs.activeTab(queryTab);
                var info = $("<span style='cursor: pointer;color:green;' >");
                info.text("select result: " + columns.length + " columns " + datas.length + " rows ");
                info.on("click", function () {
                    resultTabs.activeTab(queryTab);
                });
                getConsole().log("info", info);
            }

            function initResult(result) {
                if (result.status === 200) {
                    $(result.result).each(function () {
                        var info = this;
                        if (info.success) {
                            getConsole().sql(info.sqlInfo.sql);
                            if (info.sqlInfo.type === 'select') {
                                initQueryResult(info);
                            } else {
                                tab.sqlCount = tab.sqlCount ? ++tab.sqlCount : 1;
                                getConsole().log("info", info.sqlInfo.type + " " + info.result + " rows ");
                                var resultTabs = mini.get(tab.id + "_result");
                                resultTabs.activeTab(resultTabs.getTabs()[0]);
                            }
                        } else {
                            getConsole(tab).log("error", info.result);
                        }

                    });
                } else {
                    getConsole(tab).log("error", result.message);
                }
            }

        });

        function newSqlWindow() {
            var node = databaseTree.getSelected();
            var id = "sql_" + Math.round(Math.random() * 100000);
            //add tab
            var tab = {id: id, title: node.name, showCloseButton: true};
            tab.datasource = node.id;

            tab = tabs.addTab(tab);

            //tab body
            var el = tabs.getTabBodyEl(tab);

            var main = $("<div class=\"mini-splitter\" vertical=\"true\" style=\"width:100%;height:100%\">");

            $(el).append(main);

            var scriptContainer = $("<div size=\"70%\" showCollapseButton=\"false\">");
            scriptContainer.append("<pre>").attr("id", id)
                .css({
                    margin: 0,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    "font-size": "16px",
                    width: "100%",
                    height: "70%"
                });

            main.append(scriptContainer);

            var resultTabs = $("<div class='mini-tabs' style='width: 100%;height: 100%'>")
                .attr("id", id + "_result");

            resultTabs.append("<div title='Console' style='overflow-y: auto'>");

            main.append($("<div showCollapseButton='false'>").append(
                $("<div class='mini-fit'>").append(resultTabs)));

            mini.parse();

            require(['script-editor'], function (buidler) {
                buidler.createEditor(id, function (editor) {
                    editor.init("sql", "");
                    tab.sqlEditor = editor;
                })
            });
            //active tab
            tabs.activeTab(tab);
        }

        $(".new-sql").on('click', newSqlWindow);
    });
});

function onBeforeOpen(e) {
    var menu = e.sender;
    var tree = mini.get("database-tree");
    var node = tree.getSelectedNode();
    if (!node) {
        e.cancel = true;
        return;
    }

    $(".db-menu").hide();
    $(".db-menu-" + node.type).show();
}