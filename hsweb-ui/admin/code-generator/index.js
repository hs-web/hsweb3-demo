importResource("admin/css/common.css");
importResource("plugins/font-awesome/4.7.0/css/font-awesome.css");
var nowTemplateId, nowTabId;
var templateUtils = {
    string: {
        //下划线转驼峰
        ul2ca: function (str) {
            var re = /_(\w)/g;
            return str.replace(re, function ($0, $1) {
                return $1.toUpperCase();
            });
        },
        package2path: function (pkg) {
            return pkg.replace(/\./g, "/");
        },
        path2package: function (path) {
            return path.replace(/\//g, ".");
        },
        lowFirst: function (str) {
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1);
            });
        },
        upFirst: function (str) {
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1);
            });
        }
    }
};

importMiniui(function () {
    require(["miniui-tools", "message", "request"], function (tools, message, request) {
        request.get("user-setting/me/code-generator/all", function (res) {
            if (res.status === 200 && res.result && res.result.setting) {
                initTemplate(JSON.parse(res.result.setting));
            } else {
                require(["text!template.json"], function (json) {
                    json = JSON.parse(json);
                    initTemplate(json);
                });
            }
        });
        $(document.body).fadeIn(200);
        mini.parse();

        var templateMap = {};

        function createButton(template) {
            templateMap[template.id] = template;
            var html = $("<a  onclick=\"loadTable('" + template.id + "')\" >").css({
                "width": "90%",
                "height": "60px",
                "line-height": "60px",
                "margin": "5px",
                "font-size": "25px"
            }).attr("id", "button-" + template.id)
                .text(template.name)
                .addClass("mini-button")
                .addClass("template-button")
                .addClass("mini-button-primary");
            $(".template-container").append(html);
        }

        function initTemplate(templateList) {
            $(".template-container").html("");
            $(templateList).each(function () {
                createButton(this);
            });
            mini.parse();

            loadTable(templateList[0].id);
            $(".add-template").on("click", function () {
                tools.openWindow("admin/code-generator/template.html", "编辑模板", "80%", "80%", function (onClose) {
                    if (typeof onClose === 'object') {
                        if (!templateMap[onClose.id]) {
                            templateList.push(onClose);
                            createButton(onClose);
                            mini.parse();
                        }
                        templateMap[onClose.id] = onClose;
                        loadTable(onClose.id);
                    }
                });
            });
            $(".edit-template").on("click", function () {
                tools.openWindow("admin/code-generator/template.html", "编辑模板", "90%", "90%", function (onClose) {
                    if (typeof onClose === 'object') {
                        if (!templateMap[onClose.id]) {
                            templateList.push(onClose);
                            createButton(onClose);
                            mini.parse();
                        }
                        templateMap[onClose.id] = onClose;
                        loadTable(onClose.id, true);
                    }
                }, function () {
                    var iframe = this.getIFrameEl();
                    var win = iframe.contentWindow;

                    function init() {
                        if (win) {
                            win.onload = function (bind) {
                                bind.setTemplate(mini.clone(templateMap[nowTemplateId]));
                            };
                        }
                    }

                    init();
                    $(iframe).on("load", init);
                });
            });
            $(".copy-template").on("click", function () {
                message.prompt("复制模板", "请输入新的模板id", function (id) {
                    if (!id) {
                        message.showTips("请输入id", "danger");
                        return false;
                    }
                    tools.openWindow("admin/code-generator/template.html", "编辑模板", "90%", "90%", function (onClose) {
                        if (typeof onClose === 'object') {
                            if (!templateMap[onClose.id]) {
                                templateList.push(onClose);
                                createButton(onClose);
                                mini.parse();
                            }
                            templateMap[onClose.id] = onClose;
                            loadTable(onClose.id, true);
                        }
                    }, function () {
                        var iframe = this.getIFrameEl();
                        var win = iframe.contentWindow;

                        function init() {
                            if (win) {
                                win.onload = function (bind) {
                                    var newTemp = mini.clone(templateMap[nowTemplateId]);
                                    newTemp.id = id;
                                    bind.setTemplate(newTemp, true);
                                };
                            }
                        }

                        init();
                        $(iframe).on("load", init);
                    });
                });

            });
            $(".save-template").on("click", function () {
                var newList = [];
                for (var f in templateMap) {
                    newList.push(templateMap[f]);
                }
                request.patch("user-setting/me/code-generator"
                    , {name: "代码生成器配置", settingId: "all", setting: JSON.stringify(newList)}
                    , function (res) {
                        if (res.status === 200) {
                            message.showTips("保存成功");
                        } else {
                            message.showTips("保存失败:" + res.message, "danger");
                        }
                    });
            })
        }

        window.loadTable = function (id, reload) {
            if (!reload && nowTemplateId === id) {
                return;
            }
            var tmp = templateMap[id];

            $(".template-button").each(function () {
                mini.get(this.id).setChecked(false);
            });
            initTable(tmp);
            mini.get("button-" + id).setChecked(true);
            mini.get("button-" + id).setText(tmp.name);
            nowTemplateId = id;
            request.get("user-setting/me/code-gen-set" + nowTemplateId + "/latest", function (res) {
                if (res.status === 200 && res.result && res.result.setting) {
                    var conf = JSON.parse(res.result.setting);
                    new mini.Form("#" + nowTemplateId + "-form").setData(conf.vars);
                    var table = conf.table;
                    for (var t in table) {
                        mini.get(t + "-grid").setData(table[t]);
                    }
                }
            });
        };

        function addRow(row) {
            var grid = mini.get(nowTabId + "-grid");
            if (grid) {
                if (grid.addNode) {
                    grid.addNode(row);
                } else if (grid.addRow) {
                    grid.addRow(row, -1);
                }
            }
        }

        function renderIcon(e) {
            var node = e.node;
            if (node.type === 'dir') {
                e.iconCls = "fa fa-folder" + (node.expanded ? "-open" : "");
            } else {
                e.iconCls = "fa fa-file-code-o";
            }
        }

        function initTable(obj) {
            if (obj.script) {
                try {
                    eval(obj.script);
                } catch (e) {
                    console.error(e);
                }
            }
            var tables = obj.tables;
            var tabs = mini.get("code-tabs");
            tabs.removeAll();
            tabs.on("activechanged", function (e) {
                if (e.tab)
                    nowTabId = e.tab.id;
            });
            $(tables).each(function () {
                var tab = {title: this.name, id: this.var};
                tab = tabs.addTab(tab);
                var el = tabs.getTabBodyEl(tab);
                el.innerHTML = createGridHtml(this);
            });
            var height = obj.vars.length * 22 + 50;

            $("#var-container").html("").append(createSettingForm());
            mini.parse();
            mini.get("var-window").setHeight(height);

            $(tables).each(function () {
                var columns = createTableColumn(this);
                var grid = mini.get(this.var + "-grid");
                grid.set({
                    columns: columns
                });
            });
            tabs.activeTab(0);

            $(".add-column-button")
                .unbind("click")
                .on("click", function () {
                    addRow({});
                });
            $(".nex-step").unbind("click").on("click", function () {
                mini.get("var-window").show();
            });
            $(".do-generate").unbind("click").on("click", doGenerateCode);

            function createGridHtml(table) {
                var id = table.var;
                if (table.type === 'tree') {
                    return "<div id=\"" + id + "-grid\" class=\"mini-treegrid\"\n" +
                        "style=\"width:100%;height:100%;margin: auto;\"\n" +
                        "idField=\"id\"  allowCellEdit=\"true\" parentField=\"parentId\" resultAsTree=\"false\"\n" +
                        "iconField=\"icon\" allowCellValid=\"true\" treeColumn=\"index\" checkRecursive=\"true\"\n" +
                        "allowResize=\"false\" expandOnLoad=\"true\" allowCellSelect=\"true\"\n" +
                        "allowDrag=\"true\"  showPager='false' editNextOnEnterKey=\"true\" editNextRowCell=\"true\" allowDrop=\"true\" allowLeafDropIn=\"true\">\n" +
                        "</div>";
                } else {
                    return "<div id=\"" + id + "-grid\" class=\"mini-datagrid\"\n" +
                        "allowCellEdit=\"true\" showPager='false' style=\"width:100%;height:100%;margin: auto;\" editNextOnEnterKey=\"true\" editNextRowCell=\"true\"" +
                        "allowCellSelect=\"true\" allowResize=\"false\" expandOnLoad=\"true\" >" +
                        "</div>";
                }
            }

            function createTableColumn(table) {
                var columns = table.columns;
                var gridColumns = [];
                if (table.type === 'tree') {
                    gridColumns.push({
                        name: "index", type: "indexcolumn", header: "#", width: 20
                    })
                }
                $(columns).each(function () {
                    var column = this;
                    var gridColumn = mini.clone(column);
                    if (!gridColumn.headerAlign) {
                        gridColumn.headerAlign = "center";
                    }
                    if (!gridColumn.editor) {
                        gridColumn.editor = {type: "textbox"};
                    } else {
                        if (typeof gridColumn.editor === 'string') {
                            gridColumn.editor = JSON.parse(gridColumn.editor);
                        }
                    }
                    var rendererScript = gridColumn.renderer;
                    if (!gridColumn.field) {
                        gridColumn.field = gridColumn.name;
                    }
                    gridColumn.renderer = function (e) {
                        var row = e.record;
                        if (rendererScript) {
                            try {
                                var script = "(function(){" +
                                    "return function(row,e,value){" + rendererScript + ";};" +
                                    "})()";
                                return eval(script)(row, e, e.value ? e.value : "");
                            } catch (ex) {
                                console.error(script, ex);
                                return e.value;
                            }
                        }
                        return e.value;
                    };
                    gridColumns.push(gridColumn);
                });
                gridColumns.push({
                    name: "action", headerAlign: "center", type: "indexcolumn", header: "操作", renderer: function (e) {
                        var row = e.record;
                        return tools.createActionButton("删除", "icon-remove", function () {
                            if (e.sender.removeNode) {
                                e.sender.removeNode(row);
                            } else if (e.sender.removeRow) {
                                e.sender.removeRow(row);
                            }
                        })
                    }
                });
                return gridColumns;
            }

            function createSettingForm() {
                var vars = obj.vars;
                var table = $("<table id='" + obj.id + "-form' class='var-table'>");

                function createEditorHtml(o) {
                    var html = $("<input>");
                    if (!o.editor) {
                        html.addClass("mini-textbox");
                    } else {
                        var editor = o.editor;
                        if (typeof editor === 'string') {
                            editor = JSON.parse(editor);
                        }
                        if (o.editor) {
                            html.attr(editor);
                        }
                    }
                    html.css({"width": "100%"});
                    if (o.defaultValue) {
                        html.val(o.defaultValue);
                    }
                    html.attr("name", o.var);
                    return html[0].outerHTML;
                }

                var html = ["<tr>"];
                var index = 0;
                $(vars).each(function () {
                    if (index !== 0 && index % 2 === 0) {
                        html.push("</tr>");
                    }
                    html.push("<td class='title'>");
                    html.push(this.name);
                    html.push("</td>");
                    html.push("<td class='editor'>");
                    html.push(createEditorHtml(this));
                    html.push("</td>");
                    index++;
                });
                html.push("<tr/>");
                return table.append(html.join(""));
            }
        }

        function cancelDrop(e) {
            var target = e.dropNode;
            if (target.type === 'file' && e.dragAction === 'add') {
                e.cancel = true;
            }
        }

        mini.parse();
        var resultTree = mini.get("result");
        resultTree.on("beforedrop", cancelDrop);
        resultTree.on('drawnode', renderIcon);

        var reviewTree = mini.get("review-tree");
        reviewTree.on("beforedrop", cancelDrop);
        reviewTree.on("drawnode", renderIcon);

        var onReviewDone;
        var scriptEditor;
        var nowEditNode;
        reviewTree.on("nodeselect", function (e) {
            var node = e.node;
            if (node.type === 'file') {
                if (nowEditNode && e.node._id !== nowEditNode._id) {
                    saveCode();
                }
                nowEditNode = e.node;
                setCode(node);
            }
        });
        resultTree.on("nodedblclick", function (e) {
            var node = e.node;
            $(".review-code").click();
        });

        function setCode(node) {
            var file = node.file;
            var ex;
            if (file.indexOf(".") !== -1) {
                ex = file.split(".").pop();
            } else {
                ex = "java";
            }
            if (ex === "js") {
                ex = "javascript";
            }
            $(".preview-editor").hide();
            if (ex === "hf") {
                $(".form-designer-container").show();
                var iframe = $("#form-designer")[0];
                var win = iframe.contentWindow;
                var conf = getSetting(true);
                var names = [];
                for (var t in conf.table) {
                    names = conf.table[t];
                }
                // win.optionalNames = names;
                function initNewPage() {
                    win.getDesigner().clear();
                    $(names).each(function () {
                        var component = win.getDesigner().addComponent("textbox");
                        component.setProperty("name", this.name);
                        component.setProperty("comment", this.comment);
                    });
                }
                if (node.template) {
                    try {
                        var config = JSON.parse(node.template);
                        if (!config || !config.html||!config.components) {
                            initNewPage();
                        } else {
                            win.getDesigner().loadConfig(config);
                        }
                    } catch (e) {
                        initNewPage();
                    }
                }else{
                    initNewPage();
                }
                saveCode = function () {
                    if (nowEditNode) {
                        nowEditNode.template = JSON.stringify(win.getDesigner().getConfig());
                    }
                }
            } else {
                $(".script-editor-container").show();

                if (!scriptEditor) {
                    var loading = message.loading("加载中...");
                    require(['script-editor'], function (editorBuilder) {
                        editorBuilder.createEditor("script-editor", function (editor) {
                            scriptEditor = editor;
                            loading.hide();
                            setCode(node);
                        });
                    });
                    return;
                }
                scriptEditor.init(ex, node.template);
                saveCode = function () {
                    if (scriptEditor && nowEditNode) {
                        var script = scriptEditor.getScript();
                        nowEditNode.template = script;
                    }
                }
            }

        }

        var saveCode;
        // function saveCode() {
        //     if (scriptEditor && nowEditNode) {
        //         var script = scriptEditor.getScript();
        //         nowEditNode.template = script;
        //     }
        // }

        $(".remove-file").on("click", function () {
            var node = resultTree.getSelectedNode();
            if (node) {
                message.confirm("确定删除此" + (node.type === 'dir' ? "目录" : "文件"), function () {
                    resultTree.removeNode(node);
                });
            }

        });
        $(".review-cancel").on("click", function () {
            mini.get("review-window").hide();
        });
        $(".review-done").on("click", function () {
            saveCode();
            if (onReviewDone) {
                onReviewDone();
            }
            mini.get("review-window").hide();

        });
        $(".review").on("click", function () {
            if (scriptEditor) {
                scriptEditor.init("java", "")
            }
            reviewTree.loadData(mini.clone(resultTree.getData()));
            mini.get("review-window").show()
            onReviewDone = function () {
                resultTree.loadData(mini.clone(reviewTree.getData()));
            }
        });
        $(".review-code").on("click", function () {
            if (scriptEditor) {
                scriptEditor.init("java", "")
            }
            var node = resultTree.getSelectedNode();
            var clone = mini.clone(node);

            reviewTree.loadData([clone]);
            if (clone.type === 'file') {
                reviewTree.selectNode(clone);
            }
            mini.get("review-window").show();
            onReviewDone = function () {
                var tmp = node;
                $(mini.clone(reviewTree.getData())).each(function () {
                    resultTree.addNode(this, "after", tmp);
                    tmp = this;
                });
                resultTree.removeNode(node);
            }
        });
        $(".rename-review-file").on("click", function () {
            reviewTree.beginEdit(reviewTree.getSelected());
        });
        $(".remove-review-file").on("click", function () {
            var node = reviewTree.getSelectedNode();
            if (node) {
                message.confirm("确定删除此" + (node.type === 'dir' ? "目录" : "文件"), function () {
                    reviewTree.removeNode(node);
                });
            }
        });
        $(".rename-file").on("click", function () {
            resultTree.beginEdit(resultTree.getSelected());
        });
        $(".save-setting").on("click", function () {
            saveSetting(false);
        });
        $(".save-all-setting").on("click", function () {
            saveSetting(true);
        });
        $(".save-new-setting").on("click", function () {
            message.prompt("配置名称", "请输入配置名称", function (name) {
                var loading = message.loading("保存中...")
                request.patch("user-setting/me/code-gen-set" + nowTemplateId, {
                    name: name,
                    setting: JSON.stringify(getSetting()),
                    settingId: mini.formatDate(new Date(), "yyyyMMddHHmmss")
                }, function (res) {
                    loading.hide();
                    if (res.status === 200) {
                        message.showTips("保存成功");
                    }
                })
            })
        });

        var datasource;
        $(".select-from-database").on("click", function () {
            if (!datasource) {
                request.get("datasource", function (response) {
                    datasource = [{"id": "", "text": "默认数据源"}];
                    if (response.status === 200) {
                        $(response.result).each(function () {
                            this.text = this.id + "(" + this.name + ")";
                            datasource.push(this);
                        });
                    }
                    mini.getbyName("datasource").setData(datasource);
                    mini.getbyName("datasource").select(0);
                    mini.getbyName("datasource").doValueChanged();
                })
            }
            mini.get("database-window").show();
        });
        mini.get("database-datagrid").on("drawcell", function (e) {
            var field = e.field;
            if (field === 'name') {
                if (e.node.dataType !== "TABLE") {
                    e.iconCls = "fa fa-columns";
                } else {
                    e.iconCls = "fa fa-table";
                }
            }
        });

        mini.get("database-datagrid").getColumn("dataType").renderer = function (e) {
            var node = e.node;
            if (node.dataType !== "TABLE") {
                return node.dataType + "(" + node.precision + (node.scale > 0 ? "," + node.scale : "") + ")";
            }

            return e.value;
        };
        mini.get("database-datagrid").getColumn("action").renderer = function (e) {
            var node = e.node;
            if (node.dataType !== "TABLE") {
                return "";
            }

            return tools.createActionButton("选择", "fa fa-check green", function () {
                var data = mini.clone(node);
                var tab = mini.get("code-tabs").getActiveTab();
                var id = tab.id;
                var newColumns = [];
                $(data.columns).each(function () {
                    if (this.name.toLowerCase() === 'u_id') {
                        this.name = "id";
                    }
                    newColumns.push({comment: this.comment, column: this.name.toLowerCase(), name: templateUtils.string.ul2ca(this.name.toLowerCase()), dataType: this.dataType})
                });
                mini.get(id + "-grid").setData(newColumns);
                mini.get("database-window").hide();
            });
        };


        mini.getbyName("datasource").on("valuechanged", function (e) {
            var id = e.value;
            var loading = message.loading("加载中...");

            request.get("database/manager/metas/" + id, function (response) {
                loading.hide();
                if (response.status === 200) {
                    var table = response.result.TABLE;
                    $(table).each(function () {
                        this.dataType = "TABLE";
                    });
                    mini.get("database-datagrid").loadData(table);
                } else {
                    message.alert("加载表结构失败", e.message);
                }
            });
        });

        function saveSetting(column) {
            request.patch("user-setting/me/code-gen-set" + nowTemplateId, {
                name: name,
                setting: JSON.stringify(getSetting(column)),
                settingId: "latest"
            }, function (res) {
                if (res.status === 200) {
                    message.showTips("保存配置成功");
                } else {
                    message.showTips("保存配置失败:" + res.message);
                }
            });
        }

        $(".download-setting").on('click', function () {
            tools.downloadText(JSON.stringify(getSetting(true)), templateMap[nowTemplateId].name + ".conf.json")
        });
        $(".download-template").on('click', function () {
            tools.downloadText(JSON.stringify(templateMap[nowTemplateId]), templateMap[nowTemplateId].name + ".template.json")
        });

        function getSetting(column) {
            var tabs = mini.get("code-tabs").getTabs();
            var formData = tools.getFormData("#" + nowTemplateId + "-form", false);
            var vars = formData;
            var tableData = {};
            $(tabs).each(function () {
                var gridId = this.id + "-grid";
                var gridData = mini.get(gridId).getData();
                tableData[this.id] = gridData;
            });
            return {vars: vars, table: column ? tableData : {}};
        }

        function doGenerateCode() {
            var template = templateMap[nowTemplateId];
            var tabs = mini.get("code-tabs").getTabs();
            var formData = tools.getFormData("#" + nowTemplateId + "-form", true);
            if (!formData) {
                return;
            }
            var vars = formData;
            $(tabs).each(function () {
                var gridId = this.id + "-grid";
                var gridData = mini.get(gridId).getData();
                vars[this.id] = gridData;
            });
            renderTemplate(vars, template.templates, function (result) {
                var node = {
                    file: template.name + "生成结果",
                    type: "dir",
                    children: result
                };
                resultTree.addNodes(result);
                resultTree.expandAll();
                mini.get("var-window").hide();
                //saveSetting()
            });
        }

        function renderTemplate(vars, template, call) {
            require(["art-template"], function (art) {
                for (var util in templateUtils) {
                    art.defaults.imports[util] = templateUtils[util];
                }

                function doRender(temp) {
                    if (temp.template) {
                        temp.template = art.render(temp.template, vars);
                    }
                    if (temp.file) {
                        temp.file = art.render(temp.file, vars);
                    }
                    if (temp.children) {
                        $(temp.children).each(function () {
                            doRender(this);
                        });
                    }
                }

                var target = mini.clone(template);
                $(target).each(function () {
                    doRender(this);
                });
                call(target);
            });
        }

        $(".download-code").on("click", function () {
            tools.downloadZip(buildZipDownloadContent("", resultTree.getData()), "代码生成结果" + (mini.formatDate(new Date(), 'yyyyMMddHHmmss')) + ".zip");
        });
        $(".write-code").on("click", function () {
            var code = resultTree.getData();
            request.post("dev/tools/file/write", code, function (e) {
                if (e.status === 200) {
                    message.showTips("代码已经成功写到:" + e.result);
                } else {
                    message.alert(e.message);
                }
            })
        });

        function buildZipDownloadContent(path, result) {
            var newList = [];
            var ogPath = path;

            function convert(obj) {
                path = path + "/" + obj.file;
                var tempPath = path;
                if (obj.type === 'file') {
                    var newObj = {name: path, text: obj.template};
                    newList.push(newObj);
                } else if (obj.children) {
                    $(obj.children).each(function () {
                        path = tempPath;
                        convert(this);
                    });
                }
            }

            $(result).each(function () {
                path = ogPath;
                convert(this);
            });
            return newList;
        }
    });

});

function onBeforeOpen(e) {
    var menu = e.sender;
    var tree = mini.get("result");
    var node = tree.getSelectedNode();
    if (!node) {
        e.cancel = true;
        return;
    }
}

function onFilterChanged(e) {

    var name = mini.get("nameFilter").getValue().toLowerCase();
    var comment = mini.get("commentFilter").getValue().toLowerCase();

    //多条件组合过滤
    mini.get("database-datagrid").filter(function (row) {

        //name
        var r1 = true;
        if (name) {
            r1 = String(row.name).toLowerCase().indexOf(name) !== -1;
        }
        var r2 = true;
        if (comment) {
            r2 = String(row.comment).toLowerCase().indexOf(comment) !== -1;
        }


        return r1 && r2;
    });
}