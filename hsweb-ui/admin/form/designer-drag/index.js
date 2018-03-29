importResource("/admin/css/common.css");


var componentsImport = [
    "components-default"
];

importMiniui(function () {
    mini.parse();
    require(["designer", "md5", "request",
        "plugin/jquery-ui/jquery-ui","plugin/jquery-ui/colpick","css!plugin/jquery-ui/colpick",
        "components", "css!defaults", "css!plugin/font-awesome/4.7.0/css/font-awesome.css",
        "css!plugin/jquery-ui/jquery-ui.min",
        'css!designer'], function (Designer, md5, request) {
        var param = request.getParameter("components");
        if (param) {
            componentsImport = param.split(",");
        }
        window.md5 = md5;
        require(componentsImport, function () {
            var designer = window.designer = new Designer();
            designer.init();
            designer.on("configChanged", function () {
                if (mini.get("previewWindow").visible) {
                    preview();
                }
            });
            if (window.ready) {
                window.ready.call(designer);
            }
        });
    });
    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        window.request = request;
        window.tools = tools;
        window.message = message;
    })
    window.editScript = function (lang, script, call, onSubmit) {
        require(['script-editor'], function (editorBuilder) {
            editorBuilder.createEditor("script-editor", function (editor) {
                editor.init(lang, script);
                if (call) {
                    call(editor);
                }
                $(".save-script-editor").unbind("click").on("click", function () {
                    if (onSubmit) {
                        onSubmit(editor);
                    }
                    mini.get("script-editor-window").hide();
                })
            });
        });
        mini.get("script-editor-window").show();
    }

    var optionType = mini.get("optionType");
    var optionalGrid = mini.get("operation-grid");

    window.editOptional = function (config, type, onSubmit) {
        optionType.un("valuechanged").on("valuechanged", function () {
            $(".optional-setting").hide();
            $(".optional-" + this.value).show();
            $(".optional-" + this.value + "-" + type).show();
            mini.layout();
        });
        config = config || {};
        var form = new mini.Form("#option-form");
        form.setData(config);
        optionType.doValueChanged();
        if (config.data) {
            optionalGrid.setData(config.data);
        }
        $(".save-optional").unbind("click").on("click", function () {
            var config = form.getData();
            config.data = optionalGrid.getData();
            if (onSubmit) {
                onSubmit(config);
            }
            mini.get("optional-window").hide();
        });
        mini.get("optional-window").show();
    }
    mini.get("operation-grid").getColumn("action").renderer = function (e) {
        return tools.createActionButton("删除", "icon-remove", function () {
            e.sender.removeNode(e.record);
        })
    };
    $(".edit-javascript").on("click", function () {
        editScript("javascript", designer.javascript || "// this为formParser对象." +
            "\n// this.on('load',function(){ this.setData({ })  })", function (editor) {

        }, function (editor) {
            designer.javascript = editor.getScript();
        });
    });

    $(".edit-css").on("click", function () {
        editScript("css", designer.css || "/*.dynamic-form * {\n\tfont-size:20px;\n}/*", function (editor) {

        }, function (editor) {
            designer.css = editor.getScript();
        });
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
            insertComponents(data);
            mini.get("database-window").hide();
        });
    };

    function insertComponents(table) {
        var columns = table.columns;
        var component;

        $(columns).each(function () {
            var column = this;
            column.name = column.name.toLowerCase();
            if (column.name === 'id' || column.name === 'u_id') {
                return;
            }
            switch (column.dataType) {
                case "DATETIME":
                    component = designer.insertComponent("datepicker");
                    break;
                case "CLOB":
                    component = designer.insertComponent("textarea");
                    break;

                default:
                    component = designer.insertComponent("textbox");
                    break;
            }
            component.setProperty("comment", column.comment || column.name);

            component.setProperty("name", column.name.replace(/_(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            }));
        });
    }


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


});
