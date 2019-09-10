importResource("/admin/css/common.css");

function initClp(desinger) {
    $(".paste-button").on("click", function () {
        require(["message"], function (message) {

            editScript("text", "", function (editor) {

            }, function (editor) {
                var cfg;
                var text = editor.getScript();
                try {
                    cfg = JSON.parse(text);
                } catch (e) {
                    var html = $("<div>").html(text);
                    if (html.find("#form-components").html()) {
                        var config = {};
                        config.html = html.find("#form").html();
                        config.components = JSON.parse(html.find("#form-components").html());
                        config.javascript = $.trim(html.find("#form-on-init").html());
                        config.css = $.trim(html.find("#form-css").html());
                        cfg = config;
                    } else {
                        message.showTips("格式错误,仅支持json或者html格式!")
                    }
                }
                if (componentRepo.useIdForName) {
                    desinger.loadConfig(cfg, true);
                } else {
                    mini.showMessageBox({
                        title: "请输入粘贴内容",
                        iconCls: "mini-messagebox-question",
                        buttons: ["新建", "复制", "取消"],
                        message: "选择粘贴方式<br>新建: 粘贴为新的表单.<br>复制: 保持粘贴的配置不变",
                        callback: function (action) {
                            if (action === '复制') {
                                desinger.loadConfig(cfg);
                            }
                            if (action === '新建') {
                                desinger.loadConfig(cfg, true);
                            }
                        }
                    });
                }
            });
        })
    });
    require(["clipboard.min.js"], function (Clipboard) {
        var clipboard = new Clipboard('.copy-button', {
            text: function (trigger) {
                var json = JSON.stringify(desinger.getConfig());

                return json;
            }
        });

        clipboard.on('success', function (e) {
            require(["message"], function (message) {
                message.showTips("已将配置内容复制到粘贴板");
            });
            //console.log(e);
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('ERROR:', e);
            editScript("text", e.text, function (editor) {

            }, function (editor) {

            },"自动复制失败,请手动复制.");
        });
    });
    $(".preview-button").on("click", function () {
        var win = window.open("view.html");
        win.getConfig = function () {
            return desinger.getConfig();
        };
    });

    $(".write-source-button").on("click", function () {
        var config = desinger.getConfig();

        var html = [
            , "<!DOCTYPE html>"
            , "<html lang=\"zh-cn\">"
            , "<head>"
            , "    <meta charset=\"UTF-8\">"
            , "    <meta http-equiv=Content-Type content=\"text/html;charset=utf-8\">"
            , "    <title></title>"
            , "    <script data-main=\"/admin/form/designer-drag/view-simple.js\" src=\"/admin/boot.js\" type=\"text/javascript\"></script>"
            , "</head>"
            , "<body>"
            , "<div id='form' useIdForName='" + (config.useIdForName) + "' style=\"display: none\">"
            , config.html
            , "</div>"
            , "<script id='form-components' type='application/json'>"
            , JSON.stringify(config.components)
            , "</script>"
            , "<style id='form-css' type='text/css'>"
            , config.css
            , "</style>"
            , "<script id='form-on-init' type='text/plain'>"
            , config.javascript
            , "</script>"
            , "<div style=\"width: 100px;margin: auto\">\n" +
            "    <a class=\"mini-button save-button\" iconCls=\"icon-save\" plain=\"true\">保存</a>\n" +
            "</div>"
            , "</body>"
            , "</html>"
            , "<script type=\"text/javascript\">\n" +
            "    window.formOnLoad = function (parser) {\n" +
            "        $(\".save-button\").on(\"click\", function () {\n" +
            "            var data = parser.getData();\n" +
            "            mini.alert(JSON.stringify(data));\n" +
            "        });\n" +
            "    }\n" +
            "</script>"
        ];

        editScript("html", html.join("\n"), function (editor) {

        }, function (editor) {

        });
        // var win = window.open("about:blank");
        // var textarea = $("<textarea>")
        //     .val(html.join("\n"));
        // textarea.css({width: window.innerWidth, height: window.innerHeight});
        // $(win.document.body).append(textarea);
    });

    $(".save-button").on("click", function () {
        if (window.save) {
            window.save(desinger.getConfig());
        }
    })
}

var componentsImport = [
    "components-default"
];

importMiniui(function () {
    mini.parse();
    require(["designer", "md5", "request",
        "plugin/jquery-ui/jquery-ui", "plugin/jquery-ui/colpick", "css!plugin/jquery-ui/colpick",
        "components", "css!defaults", "css!plugin/font-awesome/4.7.0/css/font-awesome.css",
        "css!fonts/iconfont",
        "css!plugin/jquery-ui/jquery-ui.min",
        'css!designer'
        // ,"css!designer-custom"
    ], function (Designer, md5, request) {
        componentRepo.useIdForName = request.getParameter("useIdForName") === 'true';

        var param = request.getParameter("components");
        var hideToolbar = request.getParameter("hideToolbar");
        if (param) {
            componentsImport = param.split(",");
        }
        if (hideToolbar) {
            $(hideToolbar.split(",")).each(function () {
                $("." + this).hide();
            })
        }
        window.md5 = md5;

        require(componentsImport, function () {
            var designer = window.designer = new Designer();
            window.getDesigner = function () {
                return designer;
            }
            initClp(designer);
            designer.init();
            designer.on("configChanged", function () {
                if (mini.get("previewWindow").visible) {
                    preview();
                }
            });
            if (window.ready) {
                window.ready.call(designer);
            }
            $(document.body).fadeIn(200);
            mini.parse();
            var tip = new mini.ToolTip();
            tip.set({
                target: document,
                selector: '[data-tooltip]'
            });
        });
    });
    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        window.request = request;
        window.tools = tools;
        window.message = message;
    });
    window.editScript = function (lang, script, call, onSubmit,title) {
        mini.get("script-editor-window").setTitle(title||"脚本编辑");
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

    window.addOperationData = function () {
        var data = {text: "新建选项"};
        if (componentRepo.useIdForName) {
            data.id = md5(new Date().getTime() + "" + Math.random());
        }
        optionalGrid.addNode(data);
        // optionalGrid.selectNode(data);
        // optionalGrid.beginEditRow(data);
    }

    window.editOptional = function (config, type, onSubmit) {
        if (componentRepo.useIdForName) {
            optionalGrid.removeColumn("id");
        }

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

    mini.get("data-table-datagrid").getColumn("action").renderer = function (e) {
        return tools.createActionButton("删除", "icon-remove", function () {
            e.sender.removeNode(e.record);
        })
    };
    mini.get("tabs-datagrid").getColumn("action").renderer = function (e) {
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
        editScript("css", designer.css || "/*.dynamic-form {font-size:20px;}/*", function (editor) {

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
