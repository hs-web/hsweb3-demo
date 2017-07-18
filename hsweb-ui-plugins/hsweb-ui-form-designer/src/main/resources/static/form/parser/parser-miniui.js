define(["jquery"],function ($) {

    var defaultProperties={
        text:[
            {id:"class",value:"mini-textbox"}
        ],select:[
            {id:"class",value:"mini-combobox"}
        ],textarea:[
            {id:"class",value:"mini-textarea"}
        ]
    }
    var widgetParserConfig = {

    };

    function defaultParser($html,properties,id,js) {
        $(properties).each(function () {
            if(this.value==='是'){
                this.value=true;
            }
            if(this.value==='否'){
                this.value=false;
            }
            if(this.id==="data"&&this.value){
                if(this.value.indexOf("[")!==0){
                    var obj = [];
                    var arr = this.value.split(/[\n,]/g);
                    $(arr).each(function () {

                        obj.push({text:this+"",id:this+""});
                    });
                    this.value=mini.encode(obj);
                }
                js.push("var data_"+id+"="+this.value);
                this.value="data_"+id;
            }
            $html.attr(this.id,this.value);
        });
    }

    function parse(html, config) {
        var html = $(html);
        var js=[];
        for(var id in config){
            var el = html.find("[widget-id="+id+"]");
            var confObj = config[id];
            var parser;
            if(!(parser=widgetParserConfig[confObj.type])){
                parser=defaultParser;
            }
            if(defaultProperties[confObj.type]){
                parser(el,defaultProperties[confObj.type],id,js);
            }
            parser(el,confObj.properties,id,js);
        }
        html.append($("<script type='text/javascript'>").html(js.join("\n")));
        return html.prop("outerHTML");
    }

    return{parse:parse};
});
