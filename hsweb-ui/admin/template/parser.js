define(['request'], function (request) {

    var parserSupport = {
        hl: function (container, templateObject, call) {
            var config = templateObject.config;
            require(["pages/module/parser"], function (Parser) {
                var parser = new Parser();
                parser.parse(container, JSON.parse(config));
                if (call) {
                    call.call(parser);
                }
            });
        },
        hf: function (container, templateObject, call) {
            var config = templateObject.config;
            require(["pages/form/designer-drag/parser"], function (Parser) {
                require(["pages/form/designer-drag/components-default"], function () {
                    var parser = new Parser(JSON.parse(config));
                    parser.render(container);
                    if (call) {
                        call.call(parser);
                    }
                });
            });
        }
    };

    function parseById(container, id, call) {
        //从后台获取
        request.get("template/" + id, function (resp) {
            if (resp.status === 200) {
                parse(container, resp.result, call);
            } else {
                require(["message"], function (message) {
                    message.alert("加载模板失败");
                })
            }
        })
    }

    function parse(container, templateObject, call) {
        if (typeof templateObject === 'string') {
            parseById(container, templateObject, call);
        }
        var support = parserSupport[templateObject.type];
        if (support) {
            support(container, templateObject, call);
        }
    }

    return parse
});