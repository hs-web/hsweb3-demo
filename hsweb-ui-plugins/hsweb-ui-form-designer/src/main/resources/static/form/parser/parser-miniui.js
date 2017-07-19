define(["jquery"], function ($) {

    var defaultProperties = {
        text: [
            {id: "class", value: "mini-textbox"}
        ], select: [
            {id: "class", value: "mini-combobox"}
        ], textarea: [
            {id: "class", value: "mini-textarea"}
        ], radio: [
            {id: "class", value: "mini-radiobuttonlist"}
        ], checkbox: [
            {id: "class", value: "mini-checkboxlist"}
        ]
    }
    var widgetParserConfig = {};

    function defaultParser($html, properties, id, js) {
        $(properties).each(function () {
            if (this.value === '是') {
                this.value = true;
            }
            if (this.value === '否') {
                this.value = false;
            }
            if (this.id === "data" && this.value) {
                if (this.value.indexOf("[") !== 0) {
                    var obj = [];
                    var arr = this.value.split(/[\n,]/g);
                    $(arr).each(function () {

                        obj.push({text: this + "", id: this + ""});
                    });
                    this.value = mini.encode(obj);
                }
                js.push("var data_" + id + "=" + this.value + ";");
                this.value = "data_" + id;
            }
            $html.attr(this.id, this.value);
        });
    }

    function parse(htmlText, config) {
        var html = $(htmlText);
        var js = [];
        for (var id in config) {
            var el = html.find("[widget-id=" + id + "]");
            var confObj = config[id];
            var parser;
            if (!(parser = widgetParserConfig[confObj.type])) {
                parser = defaultParser;
            }
            if (defaultProperties[confObj.type]) {
                parser(el, defaultProperties[confObj.type], id, js);
            }
            parser(el, confObj.properties, id, js);
        }
        if (js.length)
            html.append($("<script type='text/javascript'>").html(js.join("\n")));
        html.find("p").each(function () {
            $(this).replaceWith('<span>' + $(this).html() + '</span>');
        });
        return $("<div></div>").append(html).html();
    }

    return {parse: parse};
});
