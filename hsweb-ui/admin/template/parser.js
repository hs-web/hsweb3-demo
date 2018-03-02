define(['request'], function (request) {

    var parserSupport = {
        hl: function (container, templateObject) {
            var config = templateObject.config;
            require(["pages/module/parser"], function (parser) {
                parser.parse(container, JSON.parse(config));
            });
        }
    };

    function parseById(container, id) {
        //从后台获取
        request.get("template/" + id, function (resp) {
            if (resp.status === 200) {
                parse(container, resp.result);
            } else {
                require(["message"], function (message) {
                    message.alert("加载模板失败");
                })
            }
        })
    }

    function parse(container, templateObject) {
        if (typeof templateObject === 'string') {
            parseById(container,templateObject);
        }
        var support = parserSupport[templateObject.type];
        if (support) {
            support(container, templateObject);
        }
    }

    return parse
});