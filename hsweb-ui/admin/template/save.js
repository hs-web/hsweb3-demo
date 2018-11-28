importResource("/admin/css/common.css");

var types = [
    {
        text: "表单",
        id: "hf",
        createEditor: function (data) {
            var iframe = $("<iframe frameborder='0' style='border:0px;width: 100%;height: 100%;min-height: 750px; margin: auto; position: relative'>");
            iframe.attr("src", window.BASE_PATH + "admin/form/designer-drag/index.html?hideToolbar=save-button,preview-button");
            var win;
            var designer;

            function init() {
                win = iframe[0].contentWindow;
                if (win) {
                    win.ready = function () {
                        designer = this;
                        // win.$('#toolbar').hide();
                        if (data) {
                            if (typeof data === 'string') {
                                data = JSON.parse(data);
                            }
                            this.loadConfig(data);
                        }
                    }
                }
            }

            init();
            $(iframe).on("load", init);
            return {
                html: iframe,
                getConfig: function () {
                    return designer.getConfig();
                }
            }
        }
    }, {
        text: "数据列表",
        id: "hl",
        createEditor: function (data) {
            var iframe = $("<iframe frameborder='0' style='border:0px;width: 100%;height: 100%;min-height: 750px; margin: auto; position: relative'>");
            iframe.attr("src", window.BASE_PATH + "admin/module/edit-list-conf.html");
            var win;

            function init() {
                win = iframe[0].contentWindow;
                if (win) {
                    win.ready = function () {
                        win.$('.footer').hide();
                        if (data) {
                            if (typeof data === 'string') {
                                data = JSON.parse(data);
                            }
                            this.setConfig(data);
                        }
                    }
                }
            }

            init();
            $(iframe).on("load", init);
            return {
                html: iframe,
                getConfig: function () {
                    return win.getConfig();
                }
            }
        }
    }, {
        text: "打印模板",
        id: "prt",
        createEditor: function (data) {
            var iframe = $("<iframe frameborder='0' style='border:0px;width: 100%;height: 100%;min-height: 750px; margin: auto; position: relative'>");
            iframe.attr("src", window.BASE_PATH + "admin/print-designer/index.html"
            );
            var win;

            function init() {
                win = iframe[0].contentWindow;
                if (win) {
                    win.returnShow(JSON.parse(data));
                }
            }

            init();
            $(iframe).on("load", init);
            return {
                html: iframe,
                getConfig: function () {
                    return win.getElConfig();
                }
            }
        }
    }
];

importMiniui(function () {
    mini.parse();


    require(["plugin/jquery-ui/jquery-ui", "plugin/ueditor/ueditor.parse"], function () {
        uParse("#basicForm", {
            rootPath: window.BASE_PATH + 'plugins/ueditor',
            chartContainerHeight: 5000
        });
    });


    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        var id = request.getParameter("id");
        var form = new mini.Form("#basicForm");
        var config;

        function loadConfigFromServer() {
            if (id) {
                request.get("template/" + id, function (resp) {
                    if (resp.status === 200) {
                        form.setData(config = resp.result);
                        mini.getbyName("type").doValueChanged();
                        mini.getbyName("id").setEnabled(false);
                    } else {
                        message.alert("获取数据失败:" + resp.message);
                    }
                })
            }
        }

        var nowEditor;

        mini.getbyName("type").on("valuechanged", function (e) {
            var type = e.selected;
            if (type) {
                if (type.createEditor) {
                    nowEditor = type.createEditor(config ? config.config : null);
                    $("#editor")
                        .html("")
                        .append(nowEditor.html);

                }
            }
        });

        loadConfigFromServer();

        function getFormData(validate) {
            var data = tools.getFormData("#basicForm", validate);

            if (!data) {
                return;
            }
            if (id) {
                data.id = id;
            }
            data.config = JSON.stringify(nowEditor.getConfig());
            config = data;
            return data;

        }

        $(".ok").on("click", function () {
            var data = getFormData(true);
            if (data) {
                var loading = message.loading("提交中...");
                request.patch("template", data, function (resp) {
                    loading.hide();
                    if (resp.status === 200) {
                        id = resp.result;
                        if (window.history && window.history.pushState) {
                            window.history.replaceState(null, "", '?id=' + id);
                        }
                        mini.getbyName("id")
                            .setEnabled(false);
                    } else {
                        message.alert("保存失败:" + resp.message);
                    }
                });
            }
        });
        $(".preview").on("click", function () {
            require(["parser"], function (parser) {
                parser($("#preview").html(""), getFormData(false));
                mini.get("preview-window").show();
            })
        });

    });
});