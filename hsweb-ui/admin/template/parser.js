define(['request'], function (request) {

    var parserSupport = {
        hl: function (container, templateObject, call) {
            var config = templateObject.config;
            require(["pages/module/parser"], function (Parser) {
                var parser = new Parser();
                if (typeof call === 'object') {
                    if (call.beforeLoad) {
                        call.beforeLoad(parser);
                    }
                }
                parser.parse(container, JSON.parse(config));

                if (typeof call === 'object') {
                    if (call.load) {
                        call.load.call(parser);
                    }
                } else {
                    if (call) {
                        call.call(parser);
                    }
                }
            });
        },
        hf: function (container, templateObject, call) {
            var config = templateObject.config;
            require(["pages/form/designer-drag/parser"], function (Parser) {
                require(["pages/form/designer-drag/components-default"], function () {
                    var parser = new Parser(JSON.parse(config));
                    if (typeof call === 'object') {
                        if (call.beforeLoad) {
                            call.beforeLoad.call(parser);
                        }
                    }
                    parser.render(container);
                    if (typeof call === 'object') {
                        if (call.load) {
                            call.load.call(parser);
                        }
                    } else {
                        if (call) {
                            call.call(parser);
                        }
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