(function () {
    window.Designer = function (config) {
        this.config = config;
        this.components = {};
        this.events = {};
    };

    Designer.prototype.createComponent = function (type, id) {
        var supportComponents = componentRepo.supportComponents;

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
    Designer.prototype.setConfig = function (config) {

    };
    Designer.prototype.getConfig = function () {
        var config = {};
        config.html = this.getHtml();
        config.javascript = this.javascript;
        config.css = this.css;
        var components = [];
        var html = $("<div>").html(config.html);
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
        return html[0].innerHTML;
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
                    "border": "1px solid red"
                });
                html.find(".component-info").parent().parent().css({
                    "border": "1px solid red"
                });
                reloadMiniui();
                me.nowEditComponent = component;
            }

            html.find('.form-label,legend,.component-info').unbind('click').on('click', focus);
            html.find('input,textarea,select').unbind('click').on("click", focus);
            return component;
        }

        me.loadConfig = function (config) {
            var html = $("<div>").html(config.html);
            var components = config.components;
            me.javascript = config.javascript;
            me.css = config.css;

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
                realComponent.render();
                $(component.properties)
                    .each(function () {
                        realComponent.setProperty(this.id, this.value);
                    });
                realComponent.config = component.config;
                initEvent(realComponent);
            });
            $(".main-panel").html("").append(html.children());
            initDroppable();
            reloadMiniui();
        };

        function reloadMiniui() {
            mini.parse();
        }

        /**初始化组件列表**/
        {
            var group = {};
            var supportComponents = componentRepo.supportComponents;

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
                html.push('<div  class="mini-outlookbar"   activeIndex="0"  style="width:100%;height:100%;" autoCollapse="true">');
                html.push('<div title="' + type + '">');
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
                    me.doEvent("configChanged", me);
                }
            }

            function saveProperties() {

            }

            function initPropertiesEditor(component) {
                var designer = me;
                saveProperties();
                var properties = component.getProperties();
                var html = $("#component-properties").css("text-align", "center");
                html.children().remove();
                $(properties).each(function () {
                    var me = this;
                    if (me.hide) {
                        return;
                    }
                    var c = $("<div class=\"form-item mini-col-3\">");
                    var label = $("<label class=\"form-label\">");
                    var inputContainer = $("<div   class=\"input-block\">");
                    label.text(this.text);
                    if (me.createEditor) {
                        var e = me.createEditor(component, this.text, this.value, function () {
                            designer.doEvent("configChanged", me);
                        });
                        inputContainer.append(e);
                    } else {
                        var input = $("<input type=\"text\" style='width:100%' class=\"mini-textbox\">");
                        if (this.value) {
                            input.val(this.value);
                        }
                        input.attr("name", this.id);
                        inputContainer.append(input);
                    }
                    c.append(label).append(inputContainer);
                    html.append(c);
                });
                var button = $("<a class='mini-button remove-component' iconCls='icon-remove' plain='true'>");
                button.addClass("delete-component");
                button.text("删除");
                html.append(button);
                reloadMiniui();
                $(".remove-component")
                    .unbind("click")
                    .on('click', function () {
                        html.children().remove();
                        component.getContainer().remove();
                        removeComponent(component.id);
                    });
                var form = new mini.Form("#component-properties");
                $(form.getFields()).each(function () {
                    this.un("valueChanged").on("valueChanged", function () {
                        component.setProperty(this.name, this.value);
                        reloadMiniui();
                        initDroppable();
                        me.doEvent("configChanged", me);
                    });
                });
                initEvent(component);
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