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
        },
        prt: function (container, templateObject, call) {
            container
                .append($("<a style='width: 200px;margin-left: 20px' class='mini-button' onclick=\"___preview_printer('svg')\">").text("SVG"))
                .append($("<a style='width: 200px;margin-left: 20px' class='mini-button'  onclick=\"___preview_printer('image')\">").text("PNG"))
                .append($("<a style='width: 200px;margin-left: 20px' class='mini-button' onclick=\"___preview_printer('pdf')\">").text("PDF"));
            window.___preview_printer = function (type) {
                var api = "printer/" + type;
                var form = $("<form style='display: none'></form>");
                form.attr({
                    action: API_BASE_PATH + api,
                    target: "_blank",
                    method: "POST"
                });
                //var as = '[{"type":"rect","rp":"rp72","x":20,"y":20,"width":760,"height":1079,"fill":"rgba(0,0,0,0)","color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":20,"y1":80,"x2":780,"y2":80,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":200,"x2":780,"y2":200,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":520,"x2":780,"y2":520,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":560,"x2":780,"y2":560,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":480,"x2":780,"y2":480,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":440,"x2":780,"y2":440,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":400,"x2":780,"y2":400,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":360,"x2":780,"y2":360,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":320,"x2":780,"y2":320,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":280,"x2":780,"y2":280,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":240,"x2":780,"y2":240,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":20,"y1":160,"x2":780,"y2":160,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":20,"y1":600,"x2":780,"y2":600,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":20,"y1":640,"x2":780,"y2":640,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":20,"y1":120,"x2":780,"y2":120,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"line","rp":"rp72","x1":160,"y1":79,"x2":160,"y2":638,"color":"#ff0000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"fontSize":40,"type":"text","rp":"rp72","x":311,"y":30,"originalY":12,"text":"交易回执单","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":48,"y":91,"originalY":82.609375,"text":"交易类型：","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":48,"y":131,"originalY":122.609375,"text":"交易时间：","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":48,"y":339,"originalY":330.609375,"text":"用户信息：","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":36,"y":610,"originalY":601.609375,"text":"联网核查记录：","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":94,"originalY":85.609375,"text":"新用户开户","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":372,"originalY":363.609375,"text":"成功","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":612,"originalY":603.609375,"text":"公民身份号码与姓名一致，且存在照片","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":178,"y":570,"originalY":561.609375,"text":"交易成功","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":531,"originalY":522.609375,"text":"10001","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":490,"originalY":481.609375,"text":"21312313129874612487","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":448,"originalY":439.609375,"text":"0555","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":413,"originalY":404.609375,"text":"成功","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":253,"originalY":244.609375,"text":"18225268021","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":334,"originalY":325.609375,"text":"重庆市","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":290,"originalY":281.609375,"text":"专业技术人员","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":211,"originalY":202.609375,"text":"12312313131313131","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":172,"originalY":163.609375,"text":"高远奉","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"fontSize":18,"type":"text","rp":"rp72","x":180,"y":132,"originalY":123.609375,"text":"2018-03-19","fontFamily":"宋体","fill":"#000000","color":"#000000","strokeWidth":"1","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":"","position":"left","maxWidth":"0"},{"type":"img","rp":"rp72","x":60,"y":660,"width":202,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"img","rp":"rp72","x":60,"y":885,"width":202,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"img","rp":"rp72","x":300,"y":660,"width":201,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"img","rp":"rp72","x":298,"y":885,"width":201,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"img","rp":"rp72","x":540,"y":660,"width":201,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""},{"type":"img","rp":"rp72","x":540,"y":885,"width":201,"height":201,"fill":"rgba(184,184,184,1)","imgData":"","imgType":"static","loopDirection":"","loopSpacing":0,"loopData":"","loopNum":"","visible":""}]';
                form.append($("<input name='config'/>")
                    .val(JSON.stringify([{layers: JSON.parse(templateObject.config)}])));
                form.appendTo(document.body);
                form.submit();
                window.setTimeout(function () {
                    form.remove();
                }, 2000)
            }
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