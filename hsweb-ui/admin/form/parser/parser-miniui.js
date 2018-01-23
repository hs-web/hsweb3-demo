define(["jquery"], function ($) {
    var widgetIdIsElName = false;
    //默认的控件属性
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
        ], date: [
            {id: "class", value: "mini-datepicker"}
        ], number: [
            {id: "class", value: "mini-spinner"}
        ], "upload-file": [
            {
                id: "class", value: "upload-file"
            }, {
                id: "type", value: "file"
            }
        ]
    };

    var customWidgetParserConfig = {
        // "upload-file": function ($html, properties, id, js) {
        //     $html.css("display", "none");
        //     defaultParser($html, properties, id, js);
        //     var fileUploadGrid = $("<div>");
        //     fileUploadGrid.addClass("file-uploader-container")
        //
        //     var file = $("<input class='upload-file' type='file'>").attr("upload-to", id);
        //     $html.attr("type","file");
        //     $(properties).each(function () {
        //         if(this.id='multiple'&&this.value===true){
        //             file.attr("multiple","multiple");
        //         }
        //     });
        //     fileUploadGrid.append(file);
        //     $html.parent().append(fileUploadGrid);
        // }
    };

    function defaultParser($html, properties, id, js) {
        $(properties).each(function () {
            if (this.value === '是') {
                this.value = true;
            }
            else if (this.value === '否') {
                this.value = false;
            }
            if (this.id === "data" && this.value) {
                if (this.value.indexOf("[") !== 0) {
                    var obj = [];
                    var arr = this.value.split(/[\n,，]/g);
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
        if (widgetIdIsElName) {
            $html.attr("name", id);
        }
    }

    function parse(htmlText, config) {
        var html = $(htmlText);
        var js = [];
        for (var id in config) {
            var el = html.find("[widget-id=" + id + "]");
            var confObj = config[id];
            var parser;
            if (!(parser = customWidgetParserConfig[confObj.type])) {
                parser = defaultParser;
            }
            if (defaultProperties[confObj.type]) {
                parser(el, defaultProperties[confObj.type], id, js);
            }
            parser(el, confObj.properties, id, js);
        }
        var tmp = $("<div></div>")
            .css("display", "none")
            .append(html);
        if (js.length)
            tmp.append($("<script type='text/javascript'>").html(js.join("\n")));
        // tmp.find("p").each(function () {
        //     var $this=$(this);
        //
        //     var span = $("<span>").attr("style",$this.attr("style")).html($this.html());
        //
        //     $this.replaceWith(span).append("<br>");
        // });

        html = tmp.html();
        tmp.remove();
        return html;
    }

    return {parse: parse};
});
