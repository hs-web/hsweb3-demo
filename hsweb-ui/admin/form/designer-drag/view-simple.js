importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        require(["pages/form/designer-drag/parser"], function (Parser) {
            require(["pages/form/designer-drag/components-default", "css!pages/form/designer-drag/defaults"], function () {
                var config = {};
                config.html = $("#form").html();
                config.components = JSON.parse($("#form-components").html());
                config.javascript = $("#form-on-init").html();
                //使用组件id作为表单控件的name
                config.useIdForName = $("#form").attr("useIdForName") === 'true';
                var parser = window.parser = new Parser(config);

                parser.render($("#form"));

                $("#form").fadeIn(200);
                mini.parse();
                $(".get-form-data").on("click", function () {
                    message.alert(JSON.stringify(parser.getData(false)));
                });
                if (formOnLoad) {
                    formOnLoad(parser);
                }
            });
        });
    });
});