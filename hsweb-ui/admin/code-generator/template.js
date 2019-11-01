importResource("admin/css/common.css");
importResource("plugins/font-awesome/4.7.0/css/font-awesome.css");
var repeat = [
    {id: "replace", text: "替换"},
    {id: "append", text: "追加"},
    {id: "ignore", text: "忽略"}
];
importMiniui(function () {
    importResource('plugins/miniui/themes/bootstrap/skin.css');
    mini.parse();
    require(["miniui-tools", "script-editor", "message"], function (tools, editorBuilder, message) {
        var saveBefore = [];
        /*模板相关*/
        {
            var scriptEditor;
            var loading = message.loading("加载脚本编辑器...");
            editorBuilder.createEditor("script-editor", function (editor) {
                scriptEditor = editor;
                editor.init("java", "");
                loading.hide();
            });
            var nowEditNode;

            var templateTree = mini.get("template-tree");
            $(".rename").on("click", function () {
                templateTree.beginEdit(nowEditNode);
            });
            $(".add-folder").on("click", function () {
                var node = {name: "新建目录", file: "新建目录", type: "dir"};
                if (nowEditNode && nowEditNode.type === 'dir') {
                    templateTree.addNode(node, "add", nowEditNode);
                } else {
                    templateTree.addNode(node, "after", nowEditNode);
                }
                templateTree.beginEdit(node);
            });
            $(".add-template").on("click", function () {
                var node = {name: "新建模板", file: "新建模板", type: "file", template: ""};
                if (nowEditNode && nowEditNode.type === 'dir') {
                    templateTree.addNode(node, "add", nowEditNode);
                } else {
                    templateTree.addNode(node, "after", nowEditNode);
                }
                templateTree.beginEdit(node);
            });
            $(".remove-button").on("click", function () {
                templateTree.removeNode(nowEditNode);
            });
            templateTree.on("beforedrop", function (e) {
                var target = e.dropNode;
                if (target.type === 'file' && e.dragAction === 'add') {
                    e.cancel = true;
                }
            });
            templateTree.on("endedit", function (e) {
                templateTree.selectNode(e.node);
            });
            templateTree.on("nodeselect", function (e) {
                if (nowEditNode && e.node._id !== nowEditNode._id) {
                    saveTemplate();
                }
                var node = nowEditNode = e.node;
                setTemplate(node);
            });
            saveBefore.push(saveTemplate);

            function saveTemplate() {
                if (!nowEditNode) {
                    return;
                }
                nowEditNode.name = mini.getbyName("name").getValue();
                nowEditNode.file = mini.getbyName("file").getValue();
                nowEditNode.repeat = mini.getbyName("repeat").getValue();
                if (nowEditNode.type === 'file') {
                    var template = scriptEditor.getScript();
                    nowEditNode.template = template;
                }
                templateTree.updateNode(nowEditNode);
            }

            function setTemplate(node) {
                mini.getbyName("name").setValue(node.name);
                mini.getbyName("file").setValue(node.file);
                mini.getbyName("repeat").setValue(node.repeat ? node.repeat : "ignore");

                if (node.type === 'file') {
                    $("#script-editor").show();
                    var template = node.template;
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
                    scriptEditor.init(ex, template);
                } else {
                    $("#script-editor").hide();
                }
            }

            templateTree.on('drawnode', function (e) {
                var node = e.node;
                if (node.type === 'dir') {
                    e.iconCls = "fa fa-folder" + (node.expanded ? "-open" : "");
                } else {
                    e.iconCls = "fa fa-file-code-o";
                }
            });

        }

        /*表格模板相关*/
        {
            var nowSelectRow;
            var tableTree = mini.get("table-tree");
            var tableColumn = mini.get("table-datagrid");
            tools.initGrid(tableTree);
            tools.initGrid(tableColumn);
            saveBefore.push(saveTable);

            function saveTable() {
                var columns = tableColumn.getData();
                if (nowSelectRow) {
                    nowSelectRow.columns = columns;
                }
            }

            tableTree.on("select", function (e) {
                saveTable();
                var row = nowSelectRow = e.record;
                if (row.columns) {
                    tableColumn.setData(row.columns);
                } else {
                    tableColumn.setData([]);
                }
            });
            $(".add-table").on("click", function () {
                tableTree.addRow({"name": "新建表格", "var": "new_table", type: "grid"});
                tableTree.accept();
            });
            $(".remove-table").on("click", function () {
                tableTree.removeRow(nowSelectRow, true);
            });
            $(".add-table-column").on("click", function () {
                tableColumn.addNode({"name": "new_column", "title": "新建列"}, 'after', tableColumn.getSelectedNode());
                tableColumn.accept();
            });
            $(".remove-table-column").on("click", function () {
                var node = tableColumn.getSelectedNode();
                var all = tableColumn.getList();
                if (node) {
                    var index = tableColumn.indexOf(node);
                    tableColumn.removeNode(node);
                    var nextNode = all[index + 1];
                    tableColumn.selectNode(nextNode);
                }
            });
        }

        /*变量相关*/
        {
            var varGrid = mini.get("vars-datagrid");
            $(".add-var").on("click", function () {
                varGrid.addNode({"var": "new_var", "name": "新建变量"}, 'after', varGrid.getSelectedNode());
                varGrid.accept();
            });
            $(".remove-var").on("click", function () {
                var node = varGrid.getSelectedNode();
                var all = varGrid.getList();
                if (node) {
                    var index = varGrid.indexOf(node);
                    varGrid.removeNode(node);
                    var nextNode = all[index + 1];
                    varGrid.selectNode(nextNode);
                }
            });
        }

        var mainScriptEditor;

        var call = {
            setTemplate: function (result, showBasicSetting) {
                if (typeof result === 'string') {
                    result = JSON.parse(result);
                }
                mini.getbyName("template-name").setValue(result.name);
                mini.getbyName("template-comment").setValue(result.comment);
                mini.getbyName("template-id").setValue(result.id);
                if (result.script)
                    mainScriptEditor.init("javascript", result.script);
                var templateTree = mini.get("template-tree");
                var tableTree = mini.get("table-tree");
                var varGrid = mini.get("vars-datagrid");
                templateTree.loadData(result.templates);
                tableTree.setData(result.tables);
                varGrid.setData(result.vars);
                if (showBasicSetting === true) {
                    mini.get("basic-window").show();
                }
            }
            ,
            getTemplate: getTemplateConfig
        };
        for (var c in call) {
            window[c] = call[c];
        }
        $(".ok").on("click", function () {
            tools.closeWindow(getTemplateConfig());
        });
        $(".cancel").on("click", function () {
            tools.closeWindow("close");
        });
        /*基础设置*/

        editorBuilder.createEditor("main-script-editor", function (editor) {
            mainScriptEditor = editor;
            editor.init("javascript", "//此代码将在初始化配置时执行。用于自定义函数，在模板中调用！");
            if (window.onload) {
                window.onload(call);
            } else {
                mini.get("basic-window").show();
            }
        });

        function getTemplateConfig() {
            $(saveBefore).each(function () {
                this.call();
            });
            var result = {};
            result.name = mini.getbyName("template-name").getValue();
            result.comment = mini.getbyName("template-comment").getValue();
            result.id = mini.getbyName("template-id").getValue();
            result.script = mainScriptEditor.getScript();
            var templateTree = mini.get("template-tree");
            var tableTree = mini.get("table-tree");
            var varGrid = mini.get("vars-datagrid");
            result.tables = tableTree.getData();
            result.vars = varGrid.getData();
            result.templates = templateTree.getData();
            return result;
        }

    });
});

function onBeforeOpen(e) {
    var menu = e.sender;
    var tree = mini.get("template-tree");
    var node = tree.getSelectedNode();
    if (!node) {
        e.cancel = true;
        return;
    }

    // ////////////////////////////////
    // var editItem = mini.getbyName("edit", menu);
    // var removeItem = mini.getbyName("remove", menu);
    // editItem.show();
    // removeItem.enable();
    //
    // if (node.id == "forms") {
    //     editItem.hide();
    // }
    // if (node.id == "lists") {
    //     removeItem.disable();
    // }
}