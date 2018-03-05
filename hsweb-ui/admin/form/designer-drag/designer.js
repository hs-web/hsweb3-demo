var Component = function () {
    this.config = {};
    this.events = {};
    this.properties = [];
};
Component.prototype.on = function (event, listener) {
    if (!this.events[event]) {
        this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
};
Component.prototype.un = function (event) {
    this.events[event] = [];
    return this;
};
Component.prototype.getProperties = function () {
    return this.properties;
};
Component.prototype.getProperty = function (name) {
    var props = this.properties;
    //   console.log(props);
    for (var i = 0; i < props.length; i++) {
        // console.log(props[i].id,name);
        if (props[i].id === name) {
            return props[i];
        }
    }
    return null;
};
Component.prototype.removeProperty = function (name) {
    var indexOf = this.properties.indexOf(this.getProperty(name));
    if (indexOf !== -1) {
        this.properties.splice(indexOf, 1);
    }
};
Component.prototype.setProperty = function (property, value) {
    //console.log(property, value, this.getProperties());
    var prop = this.getProperty(property);
    // if (prop.value === value) {
    //     return;
    // }
    prop.value = value;
    if (property === 'size' || property === 'mdSize') {
        this.resize();
    }
    if (this.events["propertiesChanged"]) {
        $(this.events["propertiesChanged"]).each(function () {
            var event = this;
            event(property, value);
        });
    }
    return this;
};
Component.prototype.setProperties = function (properties) {
    var me = this;
    for (var i in properties) {
        me.setProperty(i, properties[i]);
    }
    return this;
};
Component.prototype.render = function () {

};
Component.prototype.bind = function (el) {
    $(el).children().remove();

    $(el).replaceWith(this.render());
};
Component.prototype.getContainer = function (newFunc) {
    var container;
    if (!this.container) {
        if (this.id) {
            container = $("[hs-id='" + this.id + "']");
            if (container.length === 0) {
                this.container = container = newFunc();
                this.container.attr("hs-id", this.id);
            }
        }
    } else {
        return this.container;
    }
    return container;
};
Component.prototype.resize = function () {
    var size = this.getProperty("size");
    if (size) {
        size = size.value;
    }
    if (this.container) {
        this.container.removeClass();
        this.container.addClass("mini-col-" + (size ? size : 4));
    }
};
Component.prototype.init = function () {
};
Component.prototype.remove = function () {
    this.getContainer(function () {
        return $();
    }).remove();
};

(function () {
    var supportComponents = {};
    window.Designer = function (config) {
        this.config = config;
        this.components = {};
        this.events = {};
    };
    window.Designer.supportComponents = supportComponents;

    Designer.registerComponent = function (type, component) {
        supportComponents[type] = component;
    };

    Designer.prototype.createComponent = function (type, id) {
        if (supportComponents[type]) {
            var component = this.components[id] = new supportComponents[type](id);
            component.type = type;
            return component;
        }
        return undefined;
    };
    Designer.prototype.on = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    };
    Designer.prototype.un = function (event) {
        this.events[event] = [];
    };
    Designer.prototype.doEvent = function (event, param) {
        $(this.events[event]).each(function () {
            this.call(param);
        });
    };
    Designer.prototype.getConfig = function () {
        var config = {};
        config.html = this.getHtml();
        var components = [];
        var html = $(config.html);
        for (var id in this.components) {
            var container = html.find("[hs-id=" + id + "]");
            if (container.length === 0) {
                continue;
            }
            var component = jQuery.extend({}, this.components[id]);
            delete component.container;
            delete component.events;
            components.push(component);
        }
        config.components = components;
        return config;
    };
    Designer.prototype.getHtml = function () {
        var html = $(".main-panel");
        html.find(".component-info").parent().css("border", "");
        html.find(".form-label,legend").css("border", "");
        return html[0].outerHTML;
    };
    Designer.prototype.init = function () {
        mini.parse();

        var me = this;

        function initEvent(component) {
            var html = component.render();
            // $('.main-panel').append(html);
            // $('.gridly').gridly();
            function focus() {
                initPropertiesEditor(component);
                $(".brick").find(".form-label,legend,.component-info").css("border", "");
                $(".component-info").parent().parent().css("border", "");
                html.find(".form-label,legend").css({
                    "border":"1px solid red"
                });
                html.find(".component-info").parent().parent().css({
                    "border": "1px solid red"
                });
                reloadMiniui();
                me.nowEditComponent = component;
            }

            html.find('.form-label,legend,.component-info').on('click', focus);
            html.find('input,textarea,select').on("click", focus);
            return component;
        }

        me.loadConfig = function (config) {
            var html = $(config.html);
            var components = config.components;
            $(components).each(function () {
                var id = this.id;
                var container = html.find("[hs-id=" + id + "]");
                if (container.length === 0) {
                    return;
                }
                var component = this;
                var type = component.type;
                var realComponent = me.createComponent(type, id);
                realComponent.container = container;
                $(component.properties)
                    .each(function () {
                        realComponent.setProperty(this.id, this.value);
                    });
                realComponent.config = component.config;
                initEvent(realComponent);
            });
            $(".main-panel").replaceWith(html);
            initDroppable();
            reloadMiniui();
        };

        function reloadMiniui() {
            mini.parse();
        }

        /**初始化组件列表**/
        {
            var group = {};
            for (var name in supportComponents) {
                var component = supportComponents[name];
                if (!group[component.type]) {
                    group[component.type] = [];
                }
                component.componentName = name;
                group[component.type].push(component);
            }
            var container = $(".support-components");
            var index = 0;

            function init(component) {
                var componentHtml = new component(md5(Math.random())).render();
                componentHtml.find(".form-item").addClass("form-text");
                componentHtml.find("textarea,iframe").replaceWith($("<input class='mini-textbox'>"));
                componentHtml
                    .find("input,textarea,select")
                    .attr("readonly", "readonly")
                    .attr("disabled", "disabled");

                componentHtml.find(".components").remove();
                componentHtml.attr("class", "");
                componentHtml.addClass("component");
                componentHtml.attr("hs-type", component.componentName);
                html.push(componentHtml[0].outerHTML)
            }

            for (var type in group) {
                index++;
                var list = group[type];
                var html = [];
                html.push('<div style="overflow: auto" class="colla-item">');
                html.push('<h2 class="colla-title">' + type + '</h2>');
                html.push('<div class="colla-content ' + (index === 1 ? 'show' : '') + '">');
                $(list).each(function () {
                    init(this);
                });
                html.push('</div>');
                html.push('</div>');
                container.append(html.join(""));
            }
            reloadMiniui();

        }
        /**初始化主编辑器**/
        {
            $(".component").draggable({
                connectToSortable: ".components",
                helper: "clone",
                cursor: "move",
                revert: false
            }).disableSelection();
            var cache = {};

            function initDroppable() {
                $(".components")
                    .sortable({
                        // revert:"valid",
                        update: function () {
                            me.doEvent("configChanged", me);
                        }, start: function (event, ui) {
                            var item = ui.item;
                            var type = item.attr("hs-type");
                            if (type) {
                                item.css("width", "100%");
                                var component = newComponent(type);
                                var html = component.getContainer();
                                item.children().remove();
                                item.append(html);
                                // html.find('.form-label,legend').click();
                                // initPropertiesEditor(component);
                                me.doEvent("configChanged", me);
                                me.nowEditComponent = component;
                            }
                            // initDroppable();
                        }, stop: function (event, ui) {
                            var item = ui.item;
                            var type = item.attr("hs-type");
                            if (type) {
                                var children = item.children();

                                item.replaceWith(children);
                                initDroppable();
                                children.find('.form-label,legend,input,.component-info').click();
                            }
                        },
                        connectWith: ".component"
                    });
            }

            initDroppable();

            function openProperties(x, y) {
            }


            function newComponent(type) {
                var id = md5(new Date().getTime() + "" + Math.random());
                var component = me.createComponent(type, id);
                var html = component.render();
                // $('.main-panel').append(html);
                // $('.gridly').gridly();
                initEvent(component)
                return component;
            }

            function removeComponent(id) {
                var component = me.components[id];
                if (component) {
                    component.remove();
                    delete me.components[id];
                    designer.doEvent("configChanged", me);
                }
            }

            function saveProperties() {

            }

            function initPropertiesEditor(component) {
                var designer = me;
                saveProperties();
                var properties = component.getProperties();
                var html = $("#component-properties");
                html.children().remove();
                $(properties).each(function () {
                    var me = this;
                    var c = $("<div class=\"form-item\">");
                    var label = $("<label class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    label.text(this.text);
                    if (me.createEditor) {
                        var e = me.createEditor(component, this.text, this.value);
                        inputContainer.append(e);
                    } else {
                        var input = $("<input type=\"text\" name=\"identity\" class=\"mini-textbox\">");
                        if (this.value) {
                            input.val(this.value);
                        }
                        input.on("keyup", function () {
                            component.setProperty(me.id, input.val());
                            reloadMiniui();
                            initDroppable();
                            designer.doEvent("configChanged", me);
                        });
                        inputContainer.append(input);
                    }
                    c.append(label).append(inputContainer);
                    html.append(c);
                });
                var button = $("<button>");
                button.addClass("btn").addClass("btn-danger").addClass("delete-component");
                button.on('click', function () {
                    html.children().remove();
                    component.getContainer().remove();
                    removeComponent(component.id);
                });
                button.text("删除");
                html.append(button);
                reloadMiniui()
            }

            function fixLayout() {
                initDroppable();
                $(".ui-sortable-placeholder").remove();
            }

            $(".fix-layout").on("click", fixLayout);
            $(".export-html").on('click', function () {
                fixLayout();
                var template = [
                    "<!DOCTYPE html>", "<html lang=\"zh-cn\">", " <head>"
                    , "<meta charset=\"UTF-8\">", " <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">"
                    , "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">"
                    , "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"
                    , "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">"
                    , "<meta name=\"format-detection\" content=\"telephone=no\">"
                    , "<title>hsweb 动态表单设计器</title>"
                    , "<link rel=\"stylesheet\" href=\"http://www.hsweb.me/u/plugins/layui/css/layui.css\">"
                    , "</head>"
                    , "<body>"
                ];
                $(".brick").find(".form-label,legend").css("border", "");
                var html = $(".main-panel");
                html.find("hs-id").removeAttr("hs-id");

                template.push(me.getHtml());
                template.push("</body>");
                template.push(" </html>");
                template.push("<script src=\"http://www.hsweb.me/u/plugins/layui/layui.all.js\" charset=\"utf-8\"></script>");
                download("动态表单.html", template.join("\n"));
            });
            $(".export-config").on("click", function () {
                download("动态表单.json", JSON.stringify(me.getConfig()));
            });

            function download(name, data) {
                // 创建隐藏的可下载链接
                var eleLink = document.createElement('a');
                eleLink.download = name;
                eleLink.style.display = 'none';
                // 字符内容转变成blob地址
                var blob = new Blob([data]);
                eleLink.href = URL.createObjectURL(blob);
                // 触发点击
                document.body.appendChild(eleLink);
                eleLink.click();
                // 然后移除
                document.body.removeChild(eleLink);
                // console.log(html[0].outerHTML);
            }

            $(document).keyup(function (e) {
                if (e.keyCode === 46) {
                    if (me.nowEditComponent) {
                        $("#component-properties .delete-component").click();
                    }
                }
            });
        }
    };

    if (window.define) {
        window.define([], function () {
            return Designer;
        })
    } else {
        var designer = new Designer();
        window.setTimeout(function () {
            designer.init();
        }, 100);
        window.getDesigner = function () {
            return designer;
        }
    }
})();