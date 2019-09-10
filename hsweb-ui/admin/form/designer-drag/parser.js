(function () {
    var FormParser = function (config) {
        this.components = config.components;
        this.html = config.html;
        this.javascript = config.javascript;
        this.css = config.css;
        this.events = {};
        this.parameters = {};
        componentRepo.useIdForName = config.useIdForName;
    };
    FormParser.prototype.getParameter = function (key) {
        return this.parameters[key];
    };
    FormParser.prototype.setParameters = function (params) {
        for (var key in params) {
            this.parameters[key] = params[key];
        }
    };
    FormParser.prototype.on = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    };
    FormParser.prototype.un = function (event) {
        this.events[event] = [];
    };
    FormParser.prototype.doEvent = function (event, args) {
        $(this.events[event]).each(function () {
            this.call(args);
        })
    };

    FormParser.prototype.getbyName = function (name) {
        return this.getComponent(function (comp) {
            return comp.getProperty('name').value === name
        })
    };
    FormParser.prototype.get = function (id) {
        return this.getComponent(function (comp) {
            return comp.id === id || comp._uid === id;
        })
    };

    FormParser.prototype.getComponent = function (call) {
        for (var i = 0; i < this.components.length; i++) {
            if (call(this.components[i].target)) {
                return this.components[i].target;
            }
        }
        return null;
    };

    FormParser.prototype.setErrors = function (errorMessage) {
        var me = this;
        if (typeof errorMessage === 'string') {
            errorMessage = mini.decode(errorMessage);
        }
        if (errorMessage) {
            $(errorMessage).each(function () {
                var field = mini.getbyName(this.field);
                if (field) {
                    field.setIsValid(false);
                    field.setErrorText(this.message);
                } else {
                    var component = me.getbyName(this.field);
                    if (component && component.setError) {
                        component.setError(this);
                    }
                }
            });
        }
    }
    FormParser.prototype.setReadOnly = function (readonly) {
        if (this.formId) {
            var form = new mini.Form("#" + this.formId);
            var fields = form.getFields();
            for (var i = 0, l = fields.length; i < l; i++) {
                var c = fields[i];
                if (c.setReadOnly) c.setReadOnly(readonly);     //只读
                if (c.setIsValid) c.setIsValid(true);      //去除错误提示
                if (c.addCls) c.addCls("read-only");          //增加asLabel外观
            }
            $(this.components).each(function () {
                var target = this.target;
                if (target && target.setReadOnly) {
                    target.setReadOnly(readonly);
                }
            });
        }
    };

    FormParser.prototype.setData = function (data) {
        if (this.formId) {
            var form = new mini.Form("#" + this.formId);
            this.data = data;
            form.setData(data);
            $(this.components).each(function () {
                var target = this.target;
                var name = this.target.getProperty('name').value;

                if (name) {
                    var nestName = name.split(".");
                    var val = data;
                    for (var i = 0; i < nestName.length; i++) {
                        val = val[nestName[i]];
                    }
                    if (target && val && target.setValue) {
                        target.setValue(val, data);
                    }
                }
                if (target.setData) {
                    target.setData(data);
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
                    var nameProperty = target.getProperty("name");
                    var value = nameProperty.getValue ? nameProperty.getValue(target) : nameProperty.value;
                    data[value] = target.getValue(data, validate);
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

        $(el).html("").append(html);

        html.find(".mini-button.ui-sortable-handle").remove();

        $(me.components)
            .each(function () {
                var id = this.id;
                var Component = componentRepo.supportComponents[this.type];
                if (Component) {
                 //   window.setTimeout(function () {
                        var componentHtml = html.find("[hs-id='" + id + "'],.hs-id-" + id);
                        var component = new Component(id);
                        this.target = component;
                        component.container = componentHtml;
                        component.parser = me;
                        component.render();
                        var reload = component.reload ? function () {
                            return component.reload(false);
                        } : undefined;
                        $(this.properties).each(function () {
                                var property = this;
                                var value = property.value;
                                if (reload) {
                                    component.getProperty(property.id).value = value;
                                } else {
                                    component.setProperty(property.id, value, true);
                                }
                            }
                        );
                        if (reload) {
                            reload();
                        }
                 //   }, 1)
                } else {
                    console.warn("不支持的控件类型", JSON.stringify(this))
                }

            });

        me.formId = formId;
        if (me.css) {
            var css = $("<style type='text/css'>").html(me.css);
            html.append(css);
        }

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