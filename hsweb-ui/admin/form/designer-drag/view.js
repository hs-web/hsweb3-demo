importResource("/admin/css/common.css");


importMiniui(function () {
    mini.parse();
    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        require(["pages/form/designer-drag/parser"], function (Parser) {
            require(["pages/form/designer-drag/components-default", "css!pages/form/designer-drag/defaults"], function () {
                if (window.getConfig) {
                    var parser = window.parser = new Parser(window.getConfig());
                    parser.render($("#preview"));
                    $(".get-form-data").on("click", function () {
                        message.alert(JSON.stringify(parser.getData(false)));
                    })
                } else {
                    message.showTips("加载错误");
                }
            });

        });
    });

});