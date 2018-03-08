importResource("/admin/css/common.css");


var componentsImport = [
    "components-default"
];

importMiniui(function () {
    mini.parse();
    require(["designer", "md5", "plugin/jquery-ui/jquery-ui", "components", "css!defaults", "css!plugin/jquery-ui/jquery-ui.min", 'css!designer'], function (Designer, md5) {
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

    function preview() {
        require(["parser"], function (Parser) {
            new Parser(designer.getConfig()).render($("#preview").html(""));
            if (!mini.get("previewWindow").visible)
                mini.get("previewWindow").show();
        })
    }

    $(".preview-button").on("click", preview)
});
