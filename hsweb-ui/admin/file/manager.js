importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();

    var tree = mini.get('fileTree');
    var fileLocationEditor = mini.getbyName("fileLocation");

    tree.on("drawnode", function (e) {
        var node = e.node;
        if (node.dir) {
            //  e.iconCls="fa fa-folder-open";
        } else {

        }
    });
    tree.setAjaxType("GET");
    tree.setDataField("result");

    function sort(list) {
        list.sort(function (f, s) {
            return f.dir ? s.dir ? 0 : -1 : 1;
        });
        return list;
    }

    function init(list) {
        $(list).each(function () {
            if (this.dir) {
                this.expanded = false;
                this.children = [
                    {name: "加载中..."}
                ]
            }
        });
        return list;
    }

    var scriptEditor;

    require(['script-editor'], function (buidler) {
        buidler.createEditor('script-editor', function (editor) {
            scriptEditor = editor;
        })
    });


    function getFileType(file) {
        return file.split(".").splice(-1);
    }

    require(['request', "message"], function (request, message) {
        fileLocationEditor.on("enter", function () {
            load();
        });
        load();
        $(".reload-file").on('click',function () {
            load();
        });

        function createScriptEditorMapping(lang) {
            return function (node) {
                $(".editor").hide();
                $("#script-editor").show();
                request.get('dev/tools/file/read', {file: node.absolutePath}, function (e) {
                    scriptEditor.init(lang, e.result);
                })
            }
        }

        var formEditorFrame = $("#form-editor");
        var formEditorWindow = formEditorFrame[0].contentWindow;

        var fileEditorMapping = {
            "java": createScriptEditorMapping('java'),
            "js": createScriptEditorMapping('javascript'),
            "html": createScriptEditorMapping('html'),
            "xml": createScriptEditorMapping('xml'),
            "json": createScriptEditorMapping('json'),
            "css": createScriptEditorMapping('css'),
            "sh": createScriptEditorMapping('sh'),
            "md": createScriptEditorMapping('markdown'),

            "hf": function (node) {
                $(".editor").hide();
                $("#form-editor").show();
                request.get('dev/tools/file/read', {file: node.absolutePath}, function (e) {
                    formEditorWindow.designer.loadConfig(JSON.parse(e.result));
                    formEditorWindow.mini.parse();
                    formEditorWindow.save = function () {
                        saveFile(node.absolutePath, JSON.stringify(formEditorWindow.designer.getConfig()));
                    }
                })
            }
        };

        function saveFile(file, body) {
            request.post("dev/tools/file/write", [{file: file, type: "file", template: body}], function (response) {
                if (response.status === 200) {
                    message.showTips("保存成功")
                }else{
                    message.showTips(response.message,'danger');
                }
            });
        }

        $('#script-editor').show();
        tree.on('nodeselect', function (e) {
            if (e.node.file) {
                var fileType = getFileType(e.node.name);
                var func = fileEditorMapping[fileType];
                if (func) {
                    func(e.node);
                }
            }
        });

        function load() {
            getFileList(fileLocationEditor.getValue(), function (list) {
                tree.setData(init(sort(list)));
            });
        }

        tree.on("beforeexpand", function (e) {
            var node = e.node;
            if (node.loaded) {
                return;
            }
            e.cancel = true;
            node.children = [];
            getFileList(node.absolutePath, function (list) {
                tree.addNodes(init(sort(list)), node);
                tree.expandNode(node, false);
                node.loaded = true;
            })
        });


        function getFileList(path, callback) {
            request.get("dev/tools/file/list", {path: path}, function (e) {
                if (e.status === 200) {
                    callback(e.result);
                }
            })
        }
    });
});