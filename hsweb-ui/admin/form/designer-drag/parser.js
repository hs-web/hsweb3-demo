(function () {
    var FormParser = function (config) {
        this.components = config.components;
        this.html = config.html;
        this.javascript = config.javascript;
        this.css = config.css;
        this.events = {};

    };
    FormParser.prototype.on = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    FormParser.prototype.un = function (event) {
        this.events[event] = [];
    };
    FormParser.prototype.doEvent = function (event, args) {
        $(this.events[event]).each(function () {
            this.call(args);
        })
    };
    FormParser.prototype.setData = function (data) {
        if (this.formId) {
            var form = new mini.Form("#" + this.formId);
            this.data = data;
            form.setData(data);
            $(this.components).each(function () {
                var target = this.target;
                if (target && target.setValue) {
                    target.setValue(name, data);
                }
            });
            this.doEvent("setData", this);
        }
    };
    FormParser.prototype.getData = function (validate) {
        if (this.formId) {
            var form = new mini.Form("#" + this.formId);
            form.validate();
            if (validate && form.isValid() === false) {
                return;
            }
            var data = form.getData(false);
            $(this.components).each(function () {
                var target = this.target;
                if (target && target.getValue) {
                    data[target.getProperty("name").value] = target.getValue(data, validate);
                }
            });
            this.data = data;
            this.doEvent("getData", this);
            return this.data;
        }
    };

    FormParser.prototype.render = function (el) {
        var customEvents = {};
        var me = this;
        var formId = "form_" + (Math.round(Math.random() * 100000000));
        window["event_" + formId] = customEvents;
        if (me.javascript) {
            try {
                eval("(function(){return function(){" +
                    "\n" +
                    me.javascript +
                    "\n" +
                    "}})()").call(me);
            } catch (e) {
                console.log("加载表单脚本失败", e);
            }
        }
        var html = $("<div class='mini-fit dynamic-form'>")
            .attr("id", formId)
            .html(me.html);
        $(me.components)
            .each(function () {
                var id = this.id;
                var Component = componentRepo.supportComponents[this.type];
                if (Component) {
                    var componentHtml = html.find("[hs-id='" + id + "']");
                    var component = new Component(id);
                    this.target = component;
                    component.container = componentHtml;
                    component.render();
                    $(this.properties).each(function () {
                            var value = this.value;
                            if (!value) {
                                return;
                            }
                            if (this.script === true) {
                                var scriptId = "script_" + (Math.round(Math.random() * 100000000));
                                customEvents[scriptId] = function () {
                                    try {
                                        var func = eval("(function(){return function(){" +
                                            "\n" +
                                            value +
                                            "\n" +
                                            "}})()");
                                        func.call(me);
                                        value = "window.event_" + formId + "." + scriptId;
                                    } catch (e) {
                                        console.log("执行控件脚本失败", this, e);
                                        return;
                                    }
                                }
                            }
                            component.setProperty(this.id, value);
                        }
                    );
                } else {
                    console.warn("不支持的控件类型", this)
                }
            });

        me.formId = formId;
        if (me.css) {
            var css = $("<style type='text/css'>").html(me.css);
            html.append(css);
        }
        $(el).append(html);
        mini.parse();
        me.doEvent("load", me);
    };


    if (window.define) {
        define(["css!pages/form/designer-drag/defaults", "pages/form/designer-drag/components"], function () {
            return FormParser;
        })
    } else {
        window.FormParser = FormParser;
    }
})();