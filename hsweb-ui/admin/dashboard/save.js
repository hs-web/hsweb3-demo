importResource("/admin/css/common.css");
require(["css!pages/form/designer-drag/defaults"]);
var scriptLanguage = [
    {id: "sql"},
    {id: "javascript"},
    {id: "groovy"}
]
importMiniui(function () {
    mini.parse();
    var mainForm;


    var scriptEditor, jsEditor, htmlEditor;

    var nowEditor = {
        getTemplate: function () {
            var template = {
                html: htmlEditor.getScript(),
                js: jsEditor.getScript(),
                width: mini.getbyName("width").getValue(),
                height: mini.getbyName("height").getValue()
            };
            return JSON.stringify(template);
        },
        setTemplate: function (template) {
            htmlEditor.setScript(template.html);
            jsEditor.setScript(template.js);
            mini.getbyName("height").setValue(template.height);
            mini.getbyName("width").setValue(template.width);
        }
    }


    require(["request", "miniui-tools", 'pages/form/designer-drag/parser', 'script-editor'], function (request, tools, FormParser, editorBuilder) {

        editorBuilder.createEditor("script", function (editor) {
            scriptEditor = editor;
            editor.init("javascript", "//后台执行,返回数据");
        });
        editorBuilder.createEditor("js-script", function (editor) {
            jsEditor = editor;
            editor.init("javascript", "var html=this.html;");
        });
        editorBuilder.createEditor("html-script", function (editor) {
            htmlEditor = editor;
            editor.init("html", "<div></div>");
        });

        var dataId = request.getParameter("id");
        require(["text!config-form.hf", "pages/form/designer-drag/components-default"], function (config) {
            mainForm = new FormParser(JSON.parse(config));
            mainForm.render($("#basic-info"));

            if (dataId) {
                loadData(dataId);
            } else {
                mini.getbyName("type").setValue('static');
                mini.getbyName("scriptLanguage").setValue("javascript");
            }
        });


        $(".save-button").on("click", (function () {
            require(["message"], function (message) {
                var data = getData(true);
                if (!data) {
                    return;
                }
                if (dataId) {
                    data.id = dataId;
                } else {
                    data.status = 1;
                }
                var loading = message.loading("提交中");

                request.patch('dashboard', data, function (response) {
                    loading.hide();
                    if (response.status === 200) {
                        dataId = response.result;
                        message.showTips("提交成功")
                    } else {
                        mini.alert(response.message);
                    }
                })
            });
        }));


        function doReview() {
            require(['dashboard'], function (DashBoard) {
                new DashBoard({
                    target: $('.preview').html(''),
                    config: getData(false)
                }).init();
            })
        }

        mini.get("tabs").on("activechanged", function (tab) {
            if (tab.name === 'preview') {
                doReview();
            }
        });

        function getData(validate) {
            var fromData = mainForm.getData(validate);
            if (dataId) {
                fromData.id = dataId;
            }
            fromData.script = scriptEditor.getScript();
            fromData.scriptLanguage = mini.getbyName("scriptLanguage").getValue();
            fromData.template = nowEditor.getTemplate();

            return fromData;
        }

        function loadData(id) {
            require(["request", "message"], function (request, message) {
                var loading = message.loading("加载中...");
                request.get("dashboard/" + id, function (response) {
                    loading.hide();
                    if (response.status === 200) {
                        mainForm.setData(response.result);
                        nowEditor.setTemplate(JSON.parse(response.result.template));
                        mini.getbyName("scriptLanguage").setValue(response.result.scriptLanguage);
                        scriptEditor.init(response.result.scriptLanguage || "javascript", response.result.script);

                    } else {
                        message.showTips("加载数据失败", "danger");
                    }
                });
            });
        }
    });
});


