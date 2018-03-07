importResource("/admin/css/common.css");


var componentsImport = [
    "components-default"
]

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
    var scriptEditor;

    function editeJs(lang, script) {
        require(['script-editor'], function (editorBuilder) {
            editorBuilder.createEditor("script-editor", function (editor) {
                scriptEditor = editor;
                scriptEditor.init(lang, script);
            });
        });
        mini.get("script-editor-window").show();
    }

    $(".edit-javascript").on("click", function () {
        editeJs("javascript", designer.javascript || "// this为formParser对象." +
            "\n// this.on('load',function(){ this.setData({ })  })");
        $(".save-script-editor").unbind("click").on("click",function () {
            designer.javascript=scriptEditor.getScript();
            mini.get("script-editor-window").hide();
        })
    });

    $(".edit-css").on("click", function () {
        editeJs("css", designer.css || "/*.dynamic-form * {\n\tfont-size:20px;\n}/*");
        $(".save-script-editor").unbind("click").on("click",function () {
            designer.css=scriptEditor.getScript();
            mini.get("script-editor-window").hide();
        })
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
