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
                }
                databaseTree.loadData(datasourceList);
            } else {
                message.showTips("获取模板配置失败");
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

        importResource('/plugins/miniui/themes/bootstrap/skin.css');

        $(".execute-sql").on("click",function () {
            var tab = tabs.getActiveTab();
            if(!tab){
                return;
            }
            var sqlEditor = tab.sqlEditor;
            var sql = sqlEditor.editor.getSelectedText();
            if(!sql){
                sql=sqlEditor.getScript();
            }
            var autoCommit = $("#auto-commit").prop("checked");
            //todo
            if(!autoCommit){
                if(!tab.tx_id){

                }
            }else{

            }
            function doExecute(tx) {
                request.post("database/manager/"+(tx?tx+"/":"")+"execute/"+tab.datasource,sql,function (resp) {
                    console.log(resp);
                })
            }
            console.log(autoCommit);
            // request.post("")
            console.log(sql);
        });
        $(".new-sql").on('click', function () {
            var node = databaseTree.getSelected();
            var id = "sql_" + Math.round(Math.random() * 100000);
            //add tab
            var tab = {id: id, title: node.name, showCloseButton: true};
            tab.datasource=node.id;

            tab = tabs.addTab(tab);

            //tab body
            var el = tabs.getTabBodyEl(tab);

           var main= $("<div class=\"mini-splitter\" vertical=\"true\" style=\"width:100%;height:100%\">");

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

            main.append($("<div showCollapseButton='false'>").append($("<div class='mini-fit'>").attr("id",id+"_result")));
            mini.parse();

            require(['script-editor'], function (buidler) {
                buidler.createEditor(id, function (editor) {
                    editor.init("sql", "");
                    tab.sqlEditor = editor;
                })
            });
            //active tab
            tabs.activeTab(tab);
        })
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