(function () {
    window.Designer = function (config) {
        this.config = config;
        this.components = {};
        this.events = {};
    };
    Designer.prototype.getbyName = function (name) {
        for (var id in this.components) {
            if (this.components[id].getProperty("name") === name) {
                return this.components[id];
            }
        }
        return undefined;
    }
    Designer.prototype.createComponent = function (type, id) {
        var supportComponents = componentRepo.supportComponents;

        if (supportComponents[type]) {
            var component = this.components[id] = new supportComponents[type](id);
            component.parser = this;
            component._uid = id;
            if (componentRepo.useIdForName) {
                this.components[id].getProperty("name").value = id;
            }
            return component;
        }
        return undefined;
    };
    Designer.prototype.get = function (id) {
        return this.getComponent(function (comp) {
            return comp.id === id || comp._uid === id;
        })
    };

    Designer.prototype.getComponent = function (call) {
        for (var i = 0; i < this.components.length; i++) {
            if (call(this.components[i].target)) {
                return this.components[i].target;
            }
        }
        return null;
    };
    Designer.prototype.setReadOnly = function (readOnly) {

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
    Designer.prototype.clear = function () {
        this.loadConfig({});
    }
    Designer.prototype.getConfig = function () {
        var config = {};

        config.javascript = this.javascript;
        config.css = this.css;
        config.useIdForName = componentRepo.useIdForName;
        var components = [];
        var html = $("<div>").html(this.getHtml());
        html.find(".mini-button .ui-sortable-handle").remove();

        for (var id in this.components) {
            var container = html.find("[hs-id=" + id + "]");
            if (componentRepo.useIdForName) {
                this.components[id].getProperty("name").value = id;
            }
            var component = jQuery.extend({}, this.components[id]);
            if (container.length === 0 || component.removed === true) {
                container.remove();
                continue;
            }
            delete component.container;
            delete component.events;
            delete component.parser;
            components.push(component);
        }
        config.html = html[0].innerHTML;
        config.components = components;
        return config;
    };
    Designer.prototype.getHtml = function () {
        var html = $(".main-panel");
        html.find(".component-info").parent().removeClass('edit-focus');
        html.find(".form-label,legend,.edit-on-focus").removeClass('edit-focus');
        return html[0].innerHTML;
    };
    Designer.prototype.init = function () {
        mini.parse();

        var me = this;
        me.getData = function (validate) {

        };
        me.setData = function (data) {

        };

        function startEdit(component) {
            var html = component.container;
            if (component.focus) {
                component.focus();
            }
        }

        var lastClickTime = new Date().getTime();

        function initEvent(component) {
            var html = component.render();
            //  console.trace(html[0].outerHTML)
            html.unbind("click")
                .on('click', doFocus);
            // $('.main-panel').append(html);
            // $('.gridly').gridly();
            function focus() {
                initPropertiesEditor(component, false);
                $(".main-panel").find(".form-label,legend,.component-info,.edit-on-focus").removeClass('edit-focus');
                $(".component-info").parent().parent().removeClass('edit-focus');

                if (html.find(".child-form").length) {
                    html.find('.child-form legend,.edit-on-focus').first()
                        .addClass("edit-focus");
                } else {
                    html.find(".form-label,legend,.edit-on-focus").addClass("edit-focus");
                }
                html.find(".component-info")
                    .parent()
                    .parent()
                    .addClass("edit-focus");
                reloadMiniui();
                me.nowEditComponent = component;
                component.doEvent("focus");
            }

            function doFocus() {
                var row = new Date().getTime();
                if (row - lastClickTime < 50) {
                    return true;
                }
                lastClickTime = row;
                focus();
            }

            component.focus = focus;

            // if (html.find(".child-form").length) {
            //     html.find('.child-form legend,.edit-on-focus')
            //         .first()
            //         .unbind('click')
            //         .on('click', focus);
            //
            // } else {
            //     html.find('.form-label,legend,.component-info,.edit-on-focus')
            //         .unbind('click')
            //         .on('click', focus);
            //
            //     html.find('input,textarea,select')
            //         .unbind('click')
            //         .on("click", focus);
            // }

            component.un("typeChanged")
                .on("typeChanged", function (newComponent) {
                    me.components[component.id] = newComponent;
                    initEvent(newComponent);
                    initPropertiesEditor(newComponent);
                });
            return component;
        }

        me.loadConfig = function (config, newId) {
            var panel = $(".main-panel");

            var html = panel.html("").append(config.html);

            $(".panel").find(".mini-button.ui-sortable-handle").remove();

            var components = config.components;
            me.javascript = config.javascript;
            me.css = config.css;

            $(components).each(function () {
                var component = this;
                var id = this.id;
                if (!this._uid) {
                    this._uid = id;
                }
                var container = html.find("[hs-id=" + id + "]");
                if (container.length === 0) {
                    console.log(1)
                    return;
                }

                if (newId) {
                    id = md5(new Date().getTime() + "" + Math.random());
                    container.attr("hs-id", id);
                    this.id = id;
                }
                var type = component.type;
                var realComponent = me.createComponent(type, id);
                realComponent.container = container;
                realComponent.render();
                realComponent.config = component.config;
                var reload = realComponent.reload ? function () {
                    return realComponent.reload(false);
                } : undefined;
                $(component.properties)
                    .each(function () {
                        if (reload) {
                            realComponent.getProperty(this.id).value = this.value;
                        } else {
                            realComponent.setProperty(this.id, this.value, true);
                        }
                    });
                if (reload) {
                    reload();
                }
                initEvent(realComponent);
            });

            window.setTimeout(function () {
                initDroppable();
                reloadMiniui();
                initComponentList();
            }, 1);

        };
        me.insertComponent = function (type) {
            var component = newComponent(type);
            if (me.nowEditComponent && me.nowEditComponent.type === 'form') {
                me.nowEditComponent.container.find(".components").append(component.render());
            } else {
                $(".main-panel").append(component.container);
            }
            setTimeout(function () {
                reloadMiniui();
                initComponentList();
            }, 10);
            return component;
        };

        function reloadMiniui() {
            mini.parse();
        }

        function createActionButton(title, icon, onclick) {
            if (!window.action_countter) window.action_countter = 0;
            var callId = "action_" + (++window.action_countter);
            window[callId] = onclick;
            return ["<span", " onclick='", callId, "()'", " title='", title, "'", " class='action-button ", icon, "'", "></span>"].join("");
        }

        function initComponentList() {
            var list = mini.get("component-list");
            list.un("itemclick").on('itemclick', function (e) {
                var item = e.item;
                var component = me.components[item.id];
                if (component) {
                    startEdit(component);
                }
            });
            list.getColumns()[1].renderer = function (e) {
                var item = e.item;
                var html = [];
                if (item.component.removed) {
                    html.push(createActionButton("恢复", "icon-undo", function () {
                        item.component.container.show();
                        item.component.removed = false;
                        list.updateItem(item, item);
                        list.select(item);
                    }));
                } else {
                    html.push(createActionButton("删除", "icon-remove", function () {
                        removeComponent(item.id);
                        list.updateItem(item, item);
                    }));
                }
                return html.join("");
            };
            var datas = [];
            for (var id in me.components) {
                var component = me.components[id];

                function createObj() {
                    var name = component.getProperty("name").value;
                    var comment = component.getProperty("comment").value;
                    name = comment;
                    return {
                        id: id,
                        type: component.type,
                        name: name,
                        component: component
                    };
                }

                var aData = createObj();
                component
                    .un("focus")
                    .on("focus", function (d) {
                        return function () {
                            list.clearSelect();
                            list.select(d);
                        }
                    }(aData));

                datas.push(aData);
            }
            list.setData(datas);
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
            var container = $(".support-components-list");
            var index = 0;

            function init(component) {
                var componentObj = new component(md5(Math.random()));

                var div = $("<div style='width: 100%; position: relative;' class='component'>")
                    .attr("hs-type", component.componentName);
                var a = $("<a class='mini-button' style='border-left: 0;border-right: 0;padding: 0 border-top: 0;text-align: left; display:block; margin: 8px; height: 48px;line-height: 48px;font-size:16px;'>")
                // .attr("iconCls",component.icon)
                    .html("<span style='margin-left: 1em'></span><b class='" + component.icon + "'></b><span style='margin-left: 1em'></span>" + componentObj.getProperty("comment").value);
                div.append(a);
                html.push(div[0].outerHTML)
            }

            var html = [];
            html.push('<div  class="mini-outlookbar" activeIndex="0"  style="width:100%;height:90%;overflow: hidden" autoCollapse="true">');

            for (var type in group) {
                index++;
                var list = group[type];
                html.push('<div class=".support-components" title="' + type + '">');
                html.push("<div class='mini-fit' style='overflow-y: auto;direction: rtl; unicode-bidi: bidi-override; scroll-padding: 0; scroll-padding-inline: 0; overflow-x: hidden'>")
                $(list).each(function () {
                    init(this);
                });
                html.push("</div>");
                html.push('</div>');
            }
            html.push('</div>');
            container.append(html.join(""));
            reloadMiniui();
            initComponentList();
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
                var droping = false;
                $(".components")
                    .sortable({
                        // revert:"valid",
                        update: function () {
                            me.doEvent("configChanged", me);
                        }, start: function (event, ui) {
                            var item = ui.item;
                            var type = item.attr("hs-type");
                            if (type && !droping) {
                                item.css("width", "100%");
                                var component = newComponent(type);
                                var html = component.getContainer();
                                item.children().remove();
                                item.append(html);
                                // html.find('.form-label,legend').click();
                                // initPropertiesEditor(component);
                                me.doEvent("configChanged", me);
                                me.nowEditComponent = component;
                                window.setTimeout(function () {
                                    mini.parse();
                                }, 1);
                                if (component.onInit) {
                                    component.onInit();
                                }
                            }
                            droping = true;
                            // initDroppable();
                        }, stop: function (event, ui) {
                            droping = false;
                            var item = ui.item;
                            var type = item.attr("hs-type");
                            if (type) {
                                var children = item.children();
                                item.replaceWith(children);
                                initDroppable();
                                children.click();
                                window.setTimeout(function () {
                                    initComponentList();
                                }, 1)
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
                component.render();
                // $('.main-panel').append(html);
                // $('.gridly').gridly();
                initEvent(component)
                return component;
            }

            function removeComponent(id) {
                var component = me.components[id];
                if (component) {
                    component.removed = true;
                    component.container.hide();

                    // delete me.components[id];
                    // me.doEvent("configChanged", me);
                    initComponentList();
                }
            }

            var cutTemp;

            function cutComponent(id) {
                var component = me.components[id];
                if (component) {
                    cutTemp = component;
                    component.container.hide();
                    component.focus();
                    // me.doEvent("configChanged", me);
                }
            }

            function paste() {
                if (cutTemp) {
                    if (me.nowEditComponent && me.nowEditComponent.container.find('.components').length > 0) {

                        me.nowEditComponent
                            .container
                            .find(".components")
                            .each(function () {
                                var _com = $(this);
                                if (_com.height <= 0) {
                                    return
                                }
                                _com.append(cutTemp.container)
                            });
                        // me.nowEditComponent.container
                        //     .find(".components").first()
                        //     .append(cutTemp.container);
                    } else {
                        if (me.nowEditComponent) {
                            me.nowEditComponent.container.after(cutTemp.container);
                        } else {
                            $(".main-panel").append(cutTemp.container);
                        }
                    }
                    cutTemp.container.show();
                    var tmp = cutTemp;
                    cutTemp = null;
                    if (tmp.focus)
                        tmp.focus();
                    // initPropertiesEditor(tmp);
                }
            }

            function saveProperties() {

            }

            function initPropertiesEditor(component, initEvent) {
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
                    var inputContainer = $("<div class=\"input-block\">");
                    label.text(this.text);
                    label.attr("data-tooltip", me.comment);

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
                var cutButton = $("<a class='mini-button cut-component' iconCls='icon-cut' plain='true'>").text("剪切");

                button.addClass("delete-component");
                button.text("删除");
                html.append(button).append(cutButton);
                if (cutTemp) {
                    var cutButton = $("<a class='mini-button paste-component' iconCls='icon-page-paste' plain='true'>").text("粘贴");
                    html.append(cutButton);
                }
                reloadMiniui();
                $(".paste-component")
                    .unbind("click")
                    .on('click', function () {
                        paste()
                    });
                $(".remove-component")
                    .unbind("click")
                    .on('click', function () {
                        html.children().remove();
                        // component.getContainer().remove();
                        removeComponent(component.id);
                    });

                $(".cut-component")
                    .unbind("click")
                    .on('click', function () {
                        cutComponent(component.id);
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
                if (initEvent !== false) {
                    initEvent(component);
                }

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
                $(".brick").find(".form-label,legend,.edit-on-focus").removeClass('edit-focus');
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

            // $(document).keyup(function (e) {
            //     if (e.keyCode === 46) {
            //         if (me.nowEditComponent) {
            //             $("#component-properties .delete-component").click();
            //         }
            //     }
            // });
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