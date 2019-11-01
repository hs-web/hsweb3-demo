(function () {
    //  componentRepo.useIdForName=true;

    function createDefaultEditor() {
        var properties = [
            {
                id: "name",
                comment: "由字母数字或下划线组成",
                text: "字段",
                value: ""
            }, {
                id: "comment",
                editor: "textbox",
                comment: "控件的中文描述",
                text: "描述",
                value: "新建控件"
            }, createTrueOrFalseEditor("showComment", "显示描述", "true"), {
                id: "emptyText",
                text: "提示",
                value: ""
            }, {
                id: "type",
                editor: "textbox",
                text: "控件类型",
                createEditor: function (component, text, value, call) {
                    value = value || component.type;
                    var html = $("<input name='type' allowInput=\"true\" expandOnLoad='true'  style='width: 100%' class='mini-treeselect'>");
                    html.val(value);
                    if (!window.__components) {
                        window.__components = [];
                        var cache = {};
                        $(componentRepo.supportComponentsList)
                            .each(function () {
                                if (!cache[this.type]) {
                                    cache[this.type] = {id: this.type, text: this.type};
                                    cache[this.type].children = [];
                                }
                                var tmp = new this();
                                cache[this.type].children.push({id: tmp.type, text: tmp.getProperty("comment").value});
                            });
                        for (var type in cache) {
                            window.__components.push(cache[type])
                        }
                    }

                    window.onbeforenodeselect_00001 = function (e) {
                        if (e.isLeaf === false) e.cancel = true;
                    };
                    html.attr({
                        "data": " window.__components",
                        "onbeforenodeselect": "onbeforenodeselect_00001"
                    });
                    return html;
                }
            }, {
                id: "width",
                text: "控件宽度",
                value: "4",
                createEditor: function (component, text, value, call) {
                    var html = $("<div style='margin-left: 4px;position: relative;top: 9px;width: 92%'>");
                    html.slider({
                        orientation: "horizontal",
                        range: "min",
                        min: 1,
                        max: 12,
                        value: value,
                        slide: function () {
                            if (call) call()
                            component.setProperty("width", arguments[1].value);
                        }
                    });
                    return html;
                }
            }, {
                id: "height",
                text: "控件高度",
                value: "",
                createEditor: function (component, text, value, call) {
                    var html = $("<div style='margin-left: 4px;position: relative;top: 9px;width: 92%'>");
                    html.slider({
                        orientation: "horizontal",
                        range: "min",
                        min: 30,
                        max: 800,
                        value: value,
                        slide: function () {
                            if (call) call();
                            if (parseInt(arguments[1].value) <= 30) {
                                component.setProperty("height", undefined);
                            } else {
                                component.setProperty("height", arguments[1].value);
                            }
                        }
                    });
                    return html;
                }
            },
            {
                id: "required",
                editor: "radio",
                text: "是否必填",
                value: "undefined",
                createEditor: function (component, text, value) {
                    var checkbox = $("<input class='mini-radiobuttonlist' name='required' value='" + value + "'>");
                    checkbox.attr("data", JSON.stringify([{id: "required", text: "是"}, {
                        id: 'undefined',
                        checked: true,
                        text: "否"
                    }]));
                    return checkbox;
                }
            }
        ];
        if (componentRepo.useIdForName) {
            var name = properties[0];
            name.hide = true;
            name.getValue = function (component) {
                name.value = component.id;
                return component.id;
            }
        }
        return properties;
    }

    function createClass(O, T, name) {
        (function () {
            // 创建一个没有实例方法的类
            var Super = function () {
            };
            Super.prototype = T ? T.prototype : Component.prototype;
            //将实例作为子类的原型
            O.prototype = new Super();
            O.type = name || "基础控件";
        })();
    }

    function createDataSourceEditor() {
        return {
            id: "option",
            text: "选项配置",
            value: {
                type: "data",
                data: [{id: "1", text: '选项1'}, {id: "2", text: '选项2'}]
            },
            createEditor: function (component, text, value) {
                var button = $("<a class='mini-button' plain='true' onclick='edit_datasource_00001' iconCls='icon-edit'>");
                window.edit_datasource_00001 = function () {
                    editOptional(component.getProperty("option").value, component.type, function (config) {
                        component.setProperty("option", mini.clone(config));
                        mini.parse();
                    });
                };
                return button;
            }

        }
    }

    function createScriptEditor(id, text, lang, dft) {
        return {
            id: id,
            text: text,
            script: true,
            value: "",
            createEditor: function (component, text, value) {
                var button = $("<a class='mini-button' plain='true' onclick='window.edit_script_" + id + "' iconCls='icon-edit'>");
                window['edit_script_' + id] = function () {
                    editScript(lang, component.getProperty(id).value || dft || "", null, function (editor) {
                        component.setProperty(id, editor.getScript());
                        mini.parse();
                    });
                };
                return button;
            }

        }
    }

    function createTrueOrFalseEditor(id, text, value) {
        return {
            id: id,
            text: text,
            value: value,
            createEditor: function (component, text, value) {
                var checkbox = $("<input class='mini-radiobuttonlist' name='" + id + "' value='" + value + "'>");
                checkbox.attr("data", JSON.stringify([{id: "true", text: "是"}, {
                    id: 'false',
                    checked: true,
                    text: "否"
                }]));
                return checkbox;
            }
        }
    }

    function createOtherElEditor(options) {
        return {
            id: "elProperties",
            text: "其他配置",
            value: {},
            createEditor: function (component, text, value) {
                var button = $("<a class='mini-button' plain='true' onclick='elProperties_00001' iconCls='icon-edit'>");
                window.elProperties_00001 = function () {

                };
                return button;
            }

        }
    }

    var template = (function () {
        var pattern = /\{(\w*[:]*[=]*\w+)\}(?!})/g;
        return function (template, json) {
            return template.replace(pattern, function (match, key, value) {
                return json[key] || '';
            });
        }
    })();

    /**基础组件**/
    {

        /**占位**/
        {
            function Hidden(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.removeProperty("placeholder");
                this.removeProperty("name");
                this.removeProperty("required");
                this.removeProperty("emptyText");
                this.getProperty("comment").value = "占位";
                this.getProperty("width").value = "12";
            }

            createClass(Hidden);

            Hidden.prototype.render = function () {
                var me = this;
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-12 form-component'>");
                    var c = $("<fieldset style='border:0;' class=\"brick\">");
                    var label = $("<legend class='form-hidden' title='渲染时会被移除' style='font-size: 20px'>")
                        .text("占位");
                    c.css("height", me.getProperty("height").value || 37);
                    c.append(label);
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (key, value) {
                        if (key === 'comment') {
                            container.find("legend").text(value);
                        } else if (key === 'height') {
                            container.find("fieldset").css("height", value);
                        } else {
                            container.find("legend").attr(key, value);
                        }
                    });
                return container;
            };
            Hidden.prototype.typeName = "占位";

            Hidden.icon = "iconfont icon-zhanweifuplaceholder20";
            componentRepo.registerComponent("hidden", Hidden);
        }
        /**fieldset**/
        {
            function FieldSet(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.removeProperty("placeholder");
                this.removeProperty("name");
                this.removeProperty("required");
                this.getProperty("comment").value = "分割";
                this.getProperty("width").value = "12";
            }

            createClass(FieldSet);

            FieldSet.prototype.render = function () {
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-12 form-component'>");
                    var c = $("<fieldset style='border:0px; border-top: 1px solid #ddd;height: 100%' class=\"brick\">");
                    var label = $("<legend style='font-size: 20px'>").text("分割");
                    c.append(label);
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (key, value) {
                        if (key === 'comment') {
                            container.find("legend").text(value);
                        } else if (key === 'emptyText') {
                            container.find("legend").attr("title", value);
                        } else {
                            container.find("legend").attr(key, value);
                        }
                    });
                return container;
            };
            FieldSet.icon = "iconfont icon-fengefu";
            FieldSet.prototype.typeName = "分割";

            componentRepo.registerComponent("fieldset", FieldSet);
        }
        /**文本标签**/
        {
            function Text(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.removeProperty("placeholder");
                this.removeProperty("name");
                this.removeProperty("required");
                this.removeProperty("emptyText");
                this.removeProperty("showComment");
                // this.removeProperty("height");
                this.getProperty("comment").value = "文本标签";
                this.getProperty("width").value = "1";
                this.properties.push(
                    {
                        id: "fontSize",
                        text: "字体大小",
                        value: 12,
                        createEditor: function (component, text, value, call) {
                            if (!value) {
                                value = 1;
                            }
                            var html = $("<div style='margin-left: 4px;position: relative;top: 9px;width: 92%'>");
                            html.slider({
                                orientation: "horizontal",
                                range: "min",
                                min: 12,
                                max: 30,
                                value: parseInt(value),
                                slide: function () {
                                    if (call) call();
                                    var val = parseInt(arguments[1].value);
                                    component.setProperty("fontSize", val);
                                }
                            });
                            return html;
                        }
                    }
                );
                this.properties.push(
                    {
                        id: "align",
                        text: "横向对齐",
                        value: "left",
                        createEditor: function (component, text, value, call) {
                            var html = $("<input class='mini-combobox' value='left' style='width: 100%' name='align'>");
                            html.attr("data", JSON.stringify([
                                {id: "left", text: "左"},
                                {id: "center", text: "中"},
                                {id: "right", text: "右"}
                            ]));
                            return html;
                        }
                    }
                );
                this.properties.push(
                    {
                        id: "verticalAlign",
                        text: "纵向对齐",
                        value: "top",
                        createEditor: function (component, text, value, call) {
                            var html = $("<input class='mini-combobox' value='top' style='width: 100%' name='verticalAlign'>");
                            html.attr("data", JSON.stringify([
                                {id: "top", text: "上"},
                                {id: "center", text: "中"},
                                {id: "bottom", text: "下"}
                            ]));
                            return html;
                        }
                    }
                );
            }

            createClass(Text);

            Text.prototype.render = function () {
                var me = this;
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-1 form-component'>");
                    var c = $("<div style='border: 0px;' class='simple-form-label edit-on-focus'>");
                    c.text("文本标签");
                    m.append(c);
                    return m;
                });

                function initVerticalAlign() {
                    var fontSize = me.getProperty("fontSize").value;
                    fontSize = fontSize || 16;
                    var height = me.getProperty("bodyHeight").value;
                    var verticalAlign = me.getProperty("verticalAlign").value;
                    if (verticalAlign === 'top') {
                        container.find(".simple-form-label")
                            .css("margin-top", "");
                    }
                    if (verticalAlign === 'center') {
                        container.find(".simple-form-label")
                            .css("margin-top", height ? height / 2 - fontSize : "");
                    }
                    if (verticalAlign === 'bottom') {
                        container.find(".simple-form-label")
                            .css("margin-top", height ? height - fontSize * 1.6 : "");
                    }
                }

                this.un("propertiesChanged")
                    .on('propertiesChanged', function (key, value) {

                        if (key === 'comment') {
                            if (!value) {
                                value = "<span style='margin-right: 1em'><span class='form-hidden' style='float: left'>空白<span></span>"
                            } else {
                                value = value.replace(/\s/g, "<span style='margin-right: 1em'></span>");
                            }
                            container.find(".simple-form-label").html(value);
                        } else if (key === 'align') {
                            container.css("text-align", value);
                        } else if (key === 'verticalAlign') {
                            initVerticalAlign();
                        } else if (key === 'bodyHeight') {
                            container.css("height", value ? value + "px" : "");
                            initVerticalAlign();
                        } else if (key === 'fontSize') {
                            container.find(".simple-form-label").css("font-size", value);
                            initVerticalAlign();
                        } else {
                            container.find(".simple-form-label").attr(key, value);
                        }
                    });
                return container;
            };
            Text.prototype.typeName = "文本标签";

            Text.icon = "iconfont icon-biaoqian";
            componentRepo.registerComponent("text", Text);
        }

        var logicSupport = {
            "is": function (s, t) {
                return (s + "") === (t + "");
            }, "lt": function (s, t) {
                return parseFloat(s) < parseFloat(t);
            }, "gt": function (s, t) {
                return parseFloat(s) > parseFloat(t);
            }, "gte": function (s, t) {
                return parseFloat(s) >= parseFloat(t);
            }, "lte": function (s, t) {
                return parseFloat(s) <= parseFloat(t);
            }
        };

        var targetSupport = {
            "value": function (conf, component) {
                return conf.target;
            },
            "component": function (conf, component) {
                var target = conf.target;
                if (component.parser) {
                    var targetComp = component.parser.get(target);
                    if (targetComp.getValue) {
                        return targetComp.getValue();
                    }
                    if (targetComp.inputId) {
                        return mini.get(targetComp.inputId).getValue();
                    }
                }
                return null;
            },
            "currentTime": function (conf, comp) {
                return new Date();
            }
        };

        /**
         *  [
         *          "conditions":[
         *              {"type":"logic","logic":"=",targetType:"component | value | currentTime",target:"1"}
         *          ],
         *          operation: [
         *              {"type":"component-operation",action:"hide", "target":"user,age"},
         *              {"type":"show-message","message":"呵呵"},
         *              {"type":"script","message":"alert(1234)"}
         *          ]
         *  ]
         */
        var fireSupport = {
            "conditions": {
                "logic": function (conf, component) {
                    var logic = logicSupport[conf.logic];
                    var target = targetSupport[conf.targetType];
                    var thisValue = this.value || component.getValue();
                    var targetValue = target ? target(conf, component) : null;

                    return logic && logic(thisValue, targetValue);

                },
                "always": function (conf, component) {
                    return true;
                },
                "script": function (conf, component) {
                    var script = conf.script;
                    if (script) {
                        try {
                            var func = eval("(function(){return function(component,me){" +
                                "\n" +
                                script +
                                "\n" +
                                "}})()");
                            return func.call(this, component, component);
                        } catch (e) {
                            console.log("执行控件变更事件条件脚本失败", this, e);
                            return false;
                        }
                    }
                }
            },
            "operations": {
                "component-operation": function (conf, component) {
                    var target = conf.target;
                    var action = conf.action;
                    var targetComponent = function () {
                        return component.parser ? component.parser.get(target) : null;
                    }();
                    if (!targetComponent) {
                        log.warn("无法获取到要操作的控件:", target, " config:", conf)
                        return;
                    }
                    if (action === 'hide') {
                        targetComponent.hide();
                    } else if (action === 'writeAble') {
                        targetComponent.setReadOnly(false);
                    } else if (action === 'readonly') {
                        targetComponent.setReadOnly(true);
                    } else if (action === 'show') {
                        targetComponent.show();
                    } else if (action === 'setValue') {
                        if (targetComponent.setValue) {
                            targetComponent.setValue(conf.value);
                        }
                    }
                },
                "message": function (conf) {
                    if (window.message) {
                        message.alert(conf.message);
                    } else {
                        require(['message'], function (message) {
                            message.alert(conf.message);
                        })
                    }
                },
                "script": function (conf, component) {
                    var script = conf.script;
                    if (script) {
                        try {
                            var func = eval("(function(){return function(component,me){" +
                                "\n" +
                                script +
                                "\n" +
                                "}})()");
                            func.call(this, component, component);
                        } catch (e) {
                            console.log("执行控件变更事件操作脚本失败", this, e);
                            return;
                        }
                    }
                }
            }
        }

        /**单行文本**/
        function TextBox(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            this.getProperty("comment").value = "单行文本";
            // this.properties.push({
            //     id: "onValueChanged",
            //     editor: "textbox",
            //     text: "值变更事件",
            //     script: true,
            //     fire: function (component) {
            //         var value = component.getProperty('onValueChanged').value;
            //         var source = this;
            //         if (!value) {
            //             return "";
            //         }
            //         if (typeof value === "string") {
            //             value = JSON.parse(value);
            //         }
            //         $(value).each(function () {
            //             var conf = this;
            //             for (var i = 0; i < conf.conditions.length; i++) {
            //                 var condition = conf.conditions[i];
            //                 var support = fireSupport.conditions[condition.type];
            //                 if (!support || !support.call(source, condition, component)) {
            //                     return;
            //                 }
            //             }
            //             for (var i = 0; i < conf.operations.length; i++) {
            //                 var operation = conf.operations[i];
            //                 var support = fireSupport.operations[operation.type];
            //                 if (support) {
            //                     support.call(source, operation, component);
            //                 }
            //             }
            //         });
            //
            //     },
            //     createEditor: function (component, text, value, call) {
            //
            //         return "";
            //     }
            // })
        }

        {
            createClass(TextBox);
            TextBox.icon = "iconfont icon-danhangshurukuang";
            TextBox.prototype.typeName = "单行文本";
            TextBox.prototype.setHeight = function (height) {
                if (!height || height <= 1) {
                    height = "";
                }
                if (this.setBodyHeight) {
                    this.container.find(".component-body")
                        .first()
                        .css("height", height ? height + "px" : "");
                } else {
                    this.container.css("height", height ? height + "px" : "");
                }
            };
            TextBox.prototype.setValue = function (value) {
                this.value = value;
                var input = mini.get(this.inputId);
                if (input) {
                    input.setValue(value);
                }
            };

            TextBox.prototype.loadData = function (autoParse) {
                var me = this;
                var optionConfig = this.getProperty("option").value;
                if (!optionConfig) {
                    return;
                }
                var cache = window.optionCache || (window.optionCache = {});

                var input = mini.get(this.inputId);
                if (!input) {
                    if (autoParse !== false) {
                        mini.parse();
                        input = mini.get(this.inputId);
                    }
                    if (!input) {
                        var container = me.container;
                        var inputHtml = container.find("input");
                        inputHtml.attr(optionConfig);
                        if (optionConfig.type === 'data') {
                            cache[me.id] = optionConfig.data;
                            inputHtml.attr("data", "window.optionCache._data_" + me.id)
                        }
                    }
                } else {
                    if (optionConfig.type === 'url') {
                        input.setTextField(optionConfig.textField || 'text');
                        input.setValueField(optionConfig.idField || "id");
                        input.setDataField(optionConfig.dataField || "result.data");
                        input.setAjaxType(optionConfig.ajaxType || "GET");
                        if (input.setClearOnLoad) {
                            input.setClearOnLoad(false);
                        }
                        if (input.setParentField)
                            input.setParentField(optionConfig.parentField || "parentId");
                        if (input.setResultAsTree)
                            input.setResultAsTree(optionConfig.resultAsTree || "false");
                        if (cache[optionConfig.url]) {
                            input.setData(cache[optionConfig.url]);
                        } else {
                            function getProperty(obj, field) {
                                var fs = field.split(".");
                                var tmp = obj;
                                for (var i = 0; i < fs.length; i++) {
                                    var v = fs[i];
                                    if (!tmp) {
                                        return null;
                                    }
                                    tmp = tmp[v];
                                }
                                return tmp;
                            }

                            require(['request'], function (request) {
                                request.get(optionConfig.url, function (response) {
                                    if (response.status === 200) {
                                        var data = getProperty(response, optionConfig.dataField || "result.data");
                                        if (input.loadList && optionConfig.resultAsTree + "" === 'false') {
                                            input.loadList(data);
                                        } else {
                                            input.setData(data);
                                        }
                                        if (me.value) {
                                            input.setValue(me.value);
                                        }
                                    }
                                })
                            })
                        }
                        // input.setUrl(window.API_BASE_PATH + optionConfig.url);
                    } else if (optionConfig.type === 'data') {
                        input.setData(optionConfig.data);
                    }
                }
            };

            TextBox.prototype.createInput = function () {
                var me = this;
                var container = this.container;
                var inputId = "I" + (Math.round(Math.random() * 1000000000));
                me.inputId = inputId;
                var input = $("<input style='width: 100%;height: 100%'>");
                input.attr("id", inputId);
                input.addClass(me.cls || "mini-textbox");
                $(me.properties).each(function () {
                    var value = this.getValue ? this.getValue(me) : this.value;
                    var property = this;
                    if (this.id) {
                        if (this.id === 'type') {
                            return;
                        }
                        if (this.id === 'height') {
                            input.css("height", value);
                        }
                        //脚本
                        if (this.script) {
                            var scriptId = "script_" + (Math.round(Math.random() * 100000000));
                            window[scriptId] = function (obj) {
                                try {
                                    var func = property.fire ? property.fire :
                                        eval("(function(){return function(component){" +
                                            "\n" +
                                            (property.getScript ? property.getScript : property.value) +
                                            "\n" +
                                            "}})()");
                                    func.call(obj, me);
                                } catch (e) {
                                    console.log("执行控件脚本失败", this, e);
                                    return;
                                }
                            };
                            value = scriptId;
                        }
                        //数据选项
                        if (this.id === 'option') {
                            var optionConfig = value;

                        } else if (this.id === 'showComment') {
                            if (this.value + "" === 'true') {
                                container.find(".form-item")
                                    .removeClass("hide-comment");
                            } else {
                                container.find(".form-item")
                                    .addClass("hide-comment");
                            }
                        } else {
                            input.attr(this.id, value);
                        }
                    }
                    if (!this.value || this.value === 'undefined') {
                        input.removeAttr(this.id);
                    }
                });
                return input;
            }

            TextBox.prototype.reload = function (autoParse) {
                var container = this.container;
                var me = this;

                function newInput() {
                    return container.find(".component-body")
                        .html("")
                        .append(me.createInput());
                }

                newInput();
                if (autoParse !== false) {
                    mini.parse();
                }

                if (me.loadData) {
                    window.setTimeout(function () {
                        me.loadData(autoParse);
                    }, 50);
                }
            }

            TextBox.prototype.render = function () {
                var me = this;
                var isNew = false;
                var container = this.getContainer(function () {
                    var m = $("<div>");
                    m.addClass("mini-col-" + me.getProperty("width").value)
                        .addClass("form-component");
                    var c = $("<div class=\"form-item brick\">");
                    if (me.formText) {
                        c.addClass("form-text");
                    }
                    var label = $("<label class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block component-body\">");
                    label.text(me.getProperty("comment").value);
                    c.append(label).append(inputContainer);
                    m.append(c);
                    isNew = true;
                    return m;
                });
                if (isNew) {
                    me.reload();
                }
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        container.find('.form-label').first().css("display", "");
                        if (name === 'comment') {
                            value = value.replace(/( )/g, "<span style='space'></span>");
                            value = value.replace(/(\*)/g, "<span class='star'>*</span>");
                            container.find(".form-label").html(value);
                        } else if (name === 'showComment') {
                            container.find(".input-block").addClass("component-body");
                            if (value + "" === 'true') {
                                container.find(".form-label").show();
                                container.find(".component-body").addClass("input-block");
                            } else {
                                container.find(".form-label").hide();
                                container.find(".component-body").removeClass("input-block");
                            }
                        } else if (name === 'bodyHeight') {
                            container.find(".input-block").css("height", value);
                        } else {
                            me.reload();
                        }
                    });
                return container;
            };

            componentRepo.registerComponent("textbox", TextBox);
        }

        /**多行文本**/
        {
            function TextArea(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("width").value = 12;
                this.getProperty("comment").value = "多行文本";
                // this.removeProperty("height");

                this.cls = "mini-textarea";
                this.formText = true;
            }

            createClass(TextArea, TextBox);

            TextArea.prototype.setHeight = function (height) {
                if (!height || height <= 1) {
                    height = "";
                }
                this.setProperty("areaHeight", height);
                mini.parse();
            };

            TextArea.icon = "iconfont icon-duohangshurukuang";
            TextArea.prototype.typeName = "多行文本";
            componentRepo.registerComponent("textarea", TextArea);
        }

        /**密码文本**/
        {
            function Password(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "密码文本";
                this.cls = "mini-password";
            }

            createClass(Password, TextBox);

            Password.prototype.typeName = "密码文本";

            Password.icon = "iconfont icon-mima";
            componentRepo.registerComponent("password", Password);
        }

        /**单选**/
        {
            function RadioBox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "单选";
                this.removeProperty("placeholder");
                this.cls = "mini-radiobuttonlist";
                this.properties.push(createDataSourceEditor());
            }

            createClass(RadioBox, TextBox);
            RadioBox.prototype.typeName = "单选";

            RadioBox.icon = "iconfont icon-biaodankongjiandanxuan";
            componentRepo.registerComponent("radio", RadioBox);
        }

        /**多选**/
        {
            function CheckBox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "多选";
                this.removeProperty("placeholder");
                this.cls = "mini-checkboxlist";
                this.properties.push(createDataSourceEditor());
            }

            createClass(CheckBox, TextBox);
            CheckBox.prototype.typeName = "多选";

            CheckBox.icon = "iconfont icon-biaodankongjianfuxuan";
            componentRepo.registerComponent("checkbox", CheckBox);
        }

        /**下拉列表**/
        {
            function Combobox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.cls = "mini-combobox";
                this.getProperty("comment").value = "下拉列表";
                this.properties.push(createDataSourceEditor());
                this.properties.push(createTrueOrFalseEditor("allowInput", "可手动输入", "true"));
                this.properties.push(createTrueOrFalseEditor("multiSelect", "多选", "false"));
                // this.properties.push({
                //     id: "data",
                //     text: "选项",
                //     value: JSON.stringify([{id: "1", text: '选项1'}, {id: "2", text: '选项2'}])
                // });
            }

            createClass(Combobox, TextBox);

            Combobox.icon = "iconfont icon-xialakongjian";
            Combobox.prototype.typeName = "下拉列表";


            componentRepo.registerComponent("combobox", Combobox);
        }

        /**日期选择**/
        {
            function Datepicker(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.cls = "mini-datepicker";
                this.properties.push({
                    id: "format",
                    editor: "textbox",
                    text: "日期格式",
                    value: "yyyy-MM-dd"
                });
                this.getProperty("comment").value = "日期选择";
            }

            createClass(Datepicker, TextBox);

            Datepicker.prototype.typeName = "日期选择";

            Datepicker.icon = "iconfont icon-riqixuanze";

            componentRepo.registerComponent("datepicker", Datepicker);
        }

        /**数值调节**/
        {
            function Spinner(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.cls = "mini-spinner";
                this.properties.push({
                    id: "format",
                    text: "数字格式",
                    value: "n2",
                    comment: "可手动输入格式:<br/>n0:整数<br/>n1:1位小数<br/>c1:货币格式1位小数<br/>p1:百分比1位小数<br/>自定义:¥#,0.00",
                    createEditor: function (component, text, value) {
                        var checkbox = $("<input style='width: 100%' class='mini-combobox' allowInput='true' name='format' value='" + value + "'>");
                        checkbox.attr("data", JSON.stringify([
                            {id: "n0", text: "整数"}
                            , {id: "n1", text: "1位小数"}
                            , {id: "n2", text: "2位小数"}
                            , {id: "n3", text: "3位小数"}
                            , {id: "n4", text: "4位小数"}
                        ]));
                        return checkbox;
                    }
                });

                this.properties.push({
                    id: "minValue",
                    text: "最小值",
                    value: "0"
                });
                this.properties.push({
                    id: "maxValue",
                    text: "最大值",
                    value: "99999999"
                });
                this.properties.push({
                    id: "increment",
                    text: "增量",
                    value: "1"
                });
                this.getProperty("comment").value = "数字调节";
            }

            createClass(Spinner, TextBox);
            Spinner.prototype.typeName = "数字调节";

            Spinner.icon = "iconfont icon-shuzishurukuang";
            componentRepo.registerComponent("spinner", Spinner);
        }

        /**文件上传**/
        {
            function FileUpload(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "文件上传";
            }

            createClass(FileUpload);


            FileUpload.prototype.setValue = function (file) {
                this.value = file;
                this.getValue = function () {
                    return file;
                }
            }
            FileUpload.prototype.setReadOnly = function (readOnly) {
                this.readOnly = readOnly;
                var container = this.container;
                this.initFileUploader();

            };
            FileUpload.prototype.initFileUploader = function () {
                var container = this.container;
                var uploaderContainer = container.find('.file-upload');
                var id = uploaderContainer.attr("id");
                var readOnly = this.readOnly;
                var me = this;

                function initUploader(uploader) {
                    uploaderContainer
                        .html(readOnly ? "预览文件" : "选择文件");
                    if (!readOnly) {
                        uploaderContainer.removeClass('webuploader-container');
                        uploader.initUploader("#" + id, function (file) {
                            uploaderContainer
                                .find(".webuploader-pick")
                                .html("上传成功");
                            me.getValue = function () {
                                return file;
                            }
                        }, true);
                    } else {
                        uploaderContainer.addClass("webuploader-pick");

                        uploaderContainer.unbind("click")
                            .on("click", function () {
                                if (me.onViewFile) {
                                    me.onViewFile(me.getValue());
                                } else {
                                    if (me.getValue()) {
                                        window.open(me.getValue())
                                    }
                                }
                            })
                    }
                }

                if (window.require) {
                    require(["pages/form/designer-drag/file-upload"], function (uploader) {
                        initUploader(uploader);
                    })
                } else {
                    initUploader(FileUploader);
                }
            };
            FileUpload.prototype.typeName = "文件上传";
            FileUpload.prototype.render = function () {
                var me = this;

                function createInput() {
                    var input = $("<input class='file-name' style='width: 70%;height: 100%'>");
                    return input;
                }

                var container = this.getContainer(function () {
                    var m = $("<div>");
                    m.addClass("mini-col-" + me.getProperty("width").value)
                        .addClass("form-component");

                    var c = $("<div class=\"form-item brick\">");
                    if (me.formText) {
                        c.addClass("form-text");
                    }
                    var label = $("<label class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    // var input = createInput();
                    var id = Math.round(Math.random() * 100000000);
                    var button = $("<div class='file-upload' style='height: 30px; float: left'>")
                        .attr("id", "file-" + id)
                        .text("选择文件");
                    //  var process = $("<div class='process' style='width: 80%'>");

                    label.text(me.getProperty("comment").value);
                    c.append(label).append(inputContainer.append(button));
                    m.append(c);
                    return m;
                });


                me.initFileUploader();

                function newInput() {
                    return container.find(".input-block")
                        .html("")
                        .append(createInput());
                }

                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        if (name === 'comment') {
                            container.find(".form-label").text(value);
                        } else if (name === 'showComment') {
                            container.find(".input-block").addClass("component-body");
                            if (value + "" === 'true') {
                                container.find(".form-label").show();
                                container.find(".component-body").addClass("input-block");
                            } else {
                                container.find(".form-label").hide();
                                container.find(".component-body").removeClass("input-block");
                            }
                        } else {
                            // newInput();
                        }
                    });
                return container;
            };

            FileUpload.icon = "iconfont icon-icon-";
            componentRepo.registerComponent("fileupload", FileUpload);
        }


        /**树列表**/
        {
            function TreeSelect(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.cls = "mini-treeselect";
                this.getProperty("comment").value = "树列表";
                this.properties.push(createDataSourceEditor());
                this.properties.push(createTrueOrFalseEditor("allowInput", "可手动输入", "true"));
                this.properties.push(createTrueOrFalseEditor("multiSelect", "多选", "false"));
            }

            createClass(TreeSelect, TextBox);
            TreeSelect.prototype.typeName = "树列表";

            TreeSelect.icon = "iconfont icon-shuxingkongjian";

            componentRepo.registerComponent("treeselect", TreeSelect);
        }

        /**弹出选择**/
        {
            function ButtonEdit(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("width").value = 4;
                this.getProperty("comment").value = "弹出选择";
                this.cls = "mini-buttonedit";
                this.properties.push(createTrueOrFalseEditor("allowInput", "可手动输入", "true"));
                this.properties.push({
                    id: "textField",
                    text: "文本字段"
                });
                this.properties.push(createScriptEditor("onbuttonclick", "点击事件", "javascript"));
            }

            createClass(ButtonEdit, TextBox);
            ButtonEdit.prototype.typeName = "弹出选择";

            ButtonEdit.icon = "iconfont icon-danchuceng";
            componentRepo.registerComponent("buttonedit", ButtonEdit);
        }

    }

    /**嵌入网页**/
    {
        function IFrame(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            this.removeProperty("placeholder");
            // this.removeProperty("name");
            this.removeProperty("required");
            this.removeProperty("emptyText");
            this.removeProperty("showComment");
            //this.removeProperty("height");


            this.getProperty("comment").value = "嵌入网页";
            this.getProperty("width").value = "12";

            this.properties.push(createTrueOrFalseEditor("hidden", "隐藏标题", "true"));


            this.properties.push({
                id: "url",
                text: "URL",
                value: "",
                editor: "textbox"
            });

            this.properties.push(createScriptEditor("script", "脚本", "javascript", "" +
                "var me = this;\n" +
                "//me.url = 'user.html?id={id}';\n" +
                "me.onload=function(e){" +
                "\n" +
                "var win = e.frameWindow;" +
                "\n}" +
                ""))

        }

        createClass(IFrame, Component, "高级控件");

        // IFrame.prototype.getValue = function (data, validate) {
        //
        //     return data;
        // };

        IFrame.prototype.setData = function (data) {
            this._data = data;
        }

        IFrame.prototype.setValue = function (value, data) {
            this._value = value;
            this._data = data;
            this.render();
        };


        IFrame.prototype.setHeight = function (height) {
            if (!height || height <= 1) {
                height = "";
            }

            this.container.find(".iframe-container:first").css("height", height);
        };


        IFrame.prototype.reload = function () {
            var me = this;
            var iframeContainer = this.container.find(".iframe-container:first");
            var config = mini.clone({
                url: this.getProperty("url").value,
                script: this.getProperty("script").value
            });
            if (!config.url && !config.script) {
                return;
            }
            if (config.url && !config.url.startWith('http')) {
                config.url = window.BASE_PATH + config.url;
            }
            if (config.url && config.url.indexOf("{") !== -1) {
                config.url = template(config.url, this._data || {});
            }
            var callback = {
                url: config.url,
                data: me._data,
                component: me
            };

            if (config.script) {
                try {
                    var fun = window.eval("(function(){" +
                        "return function(){" +
                        "\n" +
                        config.script +
                        "\n" +
                        "}" +
                        "})()");
                    fun.call(callback);
                } catch (e) {
                    console.error(e);
                }
            }

            if (callback.url && callback.url.indexOf("{") !== -1) {
                callback.url = template(callback.url, this._data || {});
            }

            iframeContainer
                .unbind('load')
                .on("load", function () {
                    if (callback.onload) {
                        callback.onload({
                            frame: iframeContainer[0],
                            frameWindow: iframeContainer[0].contentWindow,
                            data: me._data,
                            value: me._value
                        })
                    }
                });

            iframeContainer.attr("src", callback.url);

        };
        IFrame.prototype.typeName = "嵌入网页";
        IFrame.prototype.render = function () {
            var me = this;
            var container = this.getContainer(function () {
                var m = $("<div class='mini-col-12 form-component'>");
                var c = $("<fieldset style='border: 0;padding: 0;margin-top: 5px' class=\"brick child-form\">");
                var label = $("<legend title='渲染时会被移除' class='form-hidden' style='font-size: 20px;border: 0;padding: 0'>");
                var text = $("<span>").text("嵌入网页");
                c.append(label.append(text));
                c.append("<iframe class='iframe-container' frameborder='0' style='border: 0; position: relative;width: 100%;height: 100%'>");
                c.css("height", me.getProperty("bodyHeight").value + "px");

                m.append(c);
                return m;
            });
            container.attr("id", me.id);

            me.reload();

            this.un("propertiesChanged")
                .on('propertiesChanged', function (key, value) {
                    if (key === 'comment') {
                        container.find("legend").text(value);
                    } else if (key === 'url' || key === 'script') {
                        me.reload();
                    } else if (key === 'hidden') {
                        if (value === 'false') {
                            container.find("legend:first").removeClass("form-hidden");
                        } else {
                            container.find("legend:first").addClass("form-hidden");
                        }
                    } else {
                        container.find("legend:first").attr(key, value);
                    }
                });
            return container;
        };
        IFrame.icon = "iconfont icon-shifouyunxuweiwanchengpandianrenwukaidan";

        componentRepo.registerComponent("iframe", IFrame);
    }

    /**子表单**/
    {
        function Form(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            this.removeProperty("placeholder");
            // this.removeProperty("name");
            this.removeProperty("required");
            this.removeProperty("emptyText");
            this.removeProperty("showComment");
            //this.removeProperty("height");


            this.getProperty("comment").value = "子表单";
            this.getProperty("width").value = "12";

            this.properties.push(createTrueOrFalseEditor("hidden", "隐藏标题", "false"));
        }

        createClass(Form, Component, "高级控件");

        Form.prototype.getValue = function (data, validate) {
            var me = this;
            var form = new mini.Form("#" + this.id);
            form.validate();
            if (validate && form.isValid() === false) {
                return;
            }
            var data = form.getData(false);
            me.container.children().select("[hs-id]")
                .each(function () {
                    var target = me.parser.get($(this).attr("hs-id"));
                    if (target === me) {
                        return;
                    }
                    if (target && target.getValue) {
                        var nameProperty = target.getProperty("name");
                        var value = nameProperty.getValue ? nameProperty.getValue(target) : nameProperty.value;
                        data[value] = target.getValue(data, validate);
                    }
                });
            return data;
        };

        Form.prototype.setValue = function (value, data) {
            var me = this;
            var form = new mini.Form("#" + this.id);
            form.setData(value);
            me.container.children().select("[hs-id]")
                .each(function () {
                    var target = me.parser.get($(this).attr("hs-id"));
                    if (target === me) {
                        return;
                    }
                    if (target && target.setValue) {
                        var name = target.getProperty('name').value;
                        if (name) {
                            var nestName = name.split(".");
                            var val = value;
                            for (var i = 0; i < nestName.length; i++) {
                                val = val[nestName[i]];
                            }
                            target.setValue(val, data);
                        }
                    }
                });
        };


        Form.prototype.setHeight = function (height) {
            if (!height || height <= 1) {
                height = "";
            }
            this.setProperty("bodyHeight", height);
        };
        Form.prototype.typeName = "子表单";
        Form.prototype.render = function () {
            var me = this;
            var container = this.getContainer(function () {
                var m = $("<div class='mini-col-12 form-component child-form-component'>");
                var c = $("<fieldset class=\"brick child-form\">");
                var label = $("<legend title='渲染时会被移除' style='font-size: 20px'>");
                var text = $("<span>").text("子表单");
                c.append(label.append(text));
                c.append("<div style='position: relative;width: 100%;height: 100%' class='components'>");
                c.css("height", me.getProperty("bodyHeight").value + "px")
                m.append(c);
                return m;
            });
            container.attr("id", me.id);

            this.un("propertiesChanged")
                .on('propertiesChanged', function (key, value) {
                    if (key === 'comment') {
                        container.find("legend").text(value);
                    } else if (key === 'bodyHeight') {
                        container.find("fieldset:first").css("height", value);
                    } else if (key === 'hidden') {
                        if (value === 'false') {
                            container.find("legend:first").removeClass("form-hidden");
                        } else {
                            container.find("legend:first").addClass("form-hidden");
                        }
                    } else {
                        container.find("legend:first").attr(key, value);
                    }
                });
            return container;
        };
        Form.icon = "iconfont icon-shifouyunxuweiwanchengpandianrenwukaidan";

        componentRepo.registerComponent("form", Form);
    }

    /**自适应表格**/
    {
        function Table(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            this.removeProperty("placeholder");
            // this.getProperty("name").hide;
            this.removeProperty("required");
            this.removeProperty("placeholder");
            this.getProperty("comment").value = "表格表单";
            this.getProperty("width").value = "12";
            this.getProperty("height").value = 200;
            this.properties.push({
                id: "title-align",
                editor: "combobox",
                text: "标题位置",
                value: "center",
                createEditor: function (component, text, value) {
                    var checkbox = $("<input class='mini-combobox' name='title-align' value='" + value + "'>");
                    checkbox.attr("data", JSON.stringify([
                        {id: "left", text: "左"},
                        {id: "center", text: "中"},
                        {id: "right", text: "右"}]));
                    return checkbox;
                }
            })
        }

        createClass(Table, Component, "高级控件");

        Table.prototype.setHeight = function (height) {
            if (!height || height <= 1) {
                height = "";
            }
            this.setProperty("bodyHeight", height);
        };
        Table.prototype.getValue = function (data, validate) {
            var me = this;
            var form = new mini.Form("#" + this.id);
            form.validate();
            if (validate && form.isValid() === false) {
                return;
            }
            var data = form.getData(false);
            me.container.children().select("[hs-id]")
                .each(function () {
                    var target = me.parser.get($(this).attr("hs-id"));
                    if (target === me) {
                        return;
                    }
                    if (target && target.getValue) {
                        var nameProperty = target.getProperty("name");
                        var value = nameProperty.getValue ? nameProperty.getValue(target) : nameProperty.value;
                        data[value] = target.getValue(data, validate);
                    }
                });
            return data;
        };

        Table.prototype.setValue = function (value, data) {
            var me = this;
            var form = new mini.Form("#" + this.id);
            form.setData(value);
            me.container.children().select("[hs-id]")
                .each(function () {
                    var target = me.parser.get($(this).attr("hs-id"));
                    if (target === me) {
                        return;
                    }
                    if (target && target.setValue) {
                        var name = target.getProperty('name').value;
                        if (name) {
                            var nestName = name.split(".");
                            var val = value;
                            for (var i = 0; i < nestName.length; i++) {
                                val = val[nestName[i]];
                            }
                            target.setValue(val, data);
                        }
                    }
                });
        };

        Table.prototype.render = function () {
            var me = this;
            var container = this.getContainer(function () {
                var m = $("<div class='mini-col-12 form-component child-form-component'>");
                var c = $("<fieldset style='border: 0;' class=\"brick child-form\">");
                var label = $("<legend title='表格表单' style='font-size: 20px;padding: 0;width: 100%'>");
                var text = $("<div class='child-form-title' style=\"width:100%;text-align:center;\">表格表单</div>").text("表格表单");

                text.css("text-align", me.getProperty("title-align").value);
                c.append(label.append(text));
                c.append($("<div class='components table'>")
                    .css("height", me.getProperty("height").value + "px"));
                m.append(c);
                return m;
            });
            container.attr("id", me.id);

            this.un("propertiesChanged")
                .on('propertiesChanged', function (key, value) {
                    container.addClass("child-form-component");
                    container.find("legend:first").css({
                        "font-size": "20px",
                        "padding": "0",
                        "width": "100%"
                    });
                    if (key === 'comment') {
                        var text = $("<div class='child-form-title' style=\"width:100%;text-align:center;\"></div>").text(value);
                        text.css("text-align", me.getProperty("title-align").value);

                        container.find("legend:first")
                            .html(text);
                    } else if (key === 'title-align') {
                        container.find(".child-form-title:first").css("text-align", value);
                    } else if (key === 'showComment') {
                        if (value + "" === 'false') {
                            container.find("legend:first").addClass('form-hidden');
                        } else {
                            container.find("legend:first").removeClass('form-hidden');
                        }
                    } else if (key === 'bodyHeight') {
                        container.find(".table:first").css("height", value);
                    } else {
                        container.find("legend:first").attr(key, value);
                    }
                });
            return container;
        };
        Table.prototype.typeName = "表格表单";

        Table.icon = "iconfont icon-biaoge";
        componentRepo.registerComponent("table", Table);

    }

    /**选项卡**/
    {
        function Tabs(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            // this.removeProperty("name");
            this.removeProperty("required");
            this.removeProperty("placeholder");
            this.getProperty("comment").value = "选项卡";
            this.getProperty("showComment").value = false;
            this.getProperty("width").value = "12";

            this.getProperty("height").value = 200;

            this.properties.push({
                id: "tabs",
                text: "选项卡配置",
                value: [{"id": "00001", "title": "选项1"}],
                createEditor: function (component, text, value) {
                    var editButton = $("<a class='mini-button' onclick='window.__edit_tabs_conf' plain='true' iconCls='icon-edit'>");
                    editButton.text("编辑");
                    window.__edit_tabs_conf = function () {
                        mini.get('tabs-window').show();
                        var grid = mini.get("tabs-datagrid");
                        grid.setData(value);
                        $(".edit-tabs-ok")
                            .unbind("click")
                            .on("click", function () {
                                component.setProperty('tabs', grid.getData());
                                mini.get('tabs-window').hide()
                            })
                    };
                    return editButton;
                }
            })
        }

        createClass(Tabs, Component, "高级控件");
        Tabs.prototype.setHeight = function (height) {
            if (!height) {
                height = 'auto';
            }
            this.container.find(".mini-tabs:first").css("height", height);

            this.container
                .find(".tab-container-form")
                .children()
                .css("height", height !== 'auto' ? parseInt(height) - 80 : 'auto');

        };

        Tabs.prototype.setData = function (e) {
            this._data = e;
            // this.reload();
        };

        Tabs.prototype.createTabs = function () {
            var me = this;
            var tabBody = $("<div style='width: 100%;height: auto;padding: 0' class='mini-tabs'>");
            var height = me.getProperty("height").value || 'auto';
            tabBody.css("height", height);
            tabBody.attr("id", "tab-obj-" + me.id);

            var tabs = me.getProperty('tabs').value;
            if (typeof tabs === 'string') {
                tabs = JSON.parse(tabs);
            }

            $(tabs).each(function () {
                var tab = $("<div>");
                tab.attr("title", this.title);
                var url = this.url;
                if (this.url) {
                    if (url && url.indexOf("{") !== -1) {
                        url = template(url, me._data || {});
                    }
                    tab.attr("url", url)
                }
                tab.append($("<div class='child-form tab-container-form' style='border: 0;'>")
                    .attr("id", "tab-" + this.id)
                    .append($("<div class='components' style='min-height: 50px'>")));
                tabBody.append(tab);
            });
            return tabBody;
        };

        Tabs.prototype.reload = function () {
            var me = this;
            var tabsContainer = me.createTabs();
            //console.log(tabsContainer[0].outerHTML);
            me.container
                .find('.tab-container-form')
                .each(function () {
                    var thisTab = $(this);
                    var id = thisTab.attr("id");
                    if (id) {
                        tabsContainer.find("#" + id).replaceWith(thisTab);
                    }
                });

            me.container
                .find(".tab-container:first")
                .html(tabsContainer);
            mini.parse();
        };

        Tabs.prototype.render = function () {
            var me = this;

            var container = this.getContainer(function () {
                var m = $("<div tabs-component class='mini-col-12 form-component child-form-component'>");

                m.append($("<div class='tab-container'>"));
                window.setTimeout(function () {
                    me.reload();
                }, 20);
                return m;
            });


            this.un("propertiesChanged")
                .on('propertiesChanged', function (key, value) {
                    if (key === 'comment') {
                        container.find("legend:first").text(value);
                    } else if (key === 'tabs') {
                        me.reload();
                    } else if (key === 'bodyHeight') {
                        container.find(".tab-container-form:first").css("height", value);
                    } else {
                        container.find("legend:first").attr(key, value);
                    }
                });
            return container;
        };
        Tabs.prototype.typeName = "选项卡";

        Tabs.icon = "iconfont icon-shuxingkongjian";
        componentRepo.registerComponent("tabs", Tabs);
    }

    /**数据表格**/
    {
        function DataTable(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            // this.removeProperty("name");
            this.removeProperty("required");
            this.removeProperty("placeholder");
            this.getProperty("comment").value = "数据表格";
            this.getProperty("width").value = "12";

            this.getProperty("height").value = "200";

            this.properties.push({
                id: "columns",
                text: "列配置",
                value: [{"field": "name", "header": "名称"}],
                createEditor: function (component, text, value) {
                    var editButton = $("<a class='mini-button' onclick='window.__edit_data_table_conf' plain='true' iconCls='icon-edit'>");
                    editButton.text("编辑");

                    window.__edit_data_table_conf = function () {
                        mini.get('data-table-window').show();
                        var grid = mini.get("data-table-datagrid");
                        grid.setData(value);
                        $(".edit-columns-ok")
                            .unbind("click")
                            .on("click", function () {
                                component.setProperty('columns', grid.getData());
                                mini.get('data-table-window').hide()
                            })
                    };
                    return editButton;
                }
            })
        }

        createClass(DataTable, Component, "高级控件");

        DataTable.prototype.setValue = function (val, data) {
            mini.get('grid-' + this.id)
                .setData(val);
        };

        DataTable.prototype.getValue = function (data) {
            var data = mini.clone(mini.get('grid-' + this.id).getData());
            $(data).each(function () {
                delete this._id;
                delete this._uid;
            });
            return data;
        };

        DataTable.prototype.setHeight = function (height) {
            if (height === 0 || height === '' || typeof height === 'undefined') {
                height = "auto";
            }
            this.container
                .find("#grid-" + this.id)
                .css("height", height);
        };

        DataTable.prototype.render = function () {
            var me = this;

            function createTable() {
                var dataGrid = $("<div showPager='false' style='width: 100%;height:auto' class='mini-datagrid'>");
                var columns = me.getProperty("columns").value || [];

                dataGrid.attr("id", "grid-" + me.id);
                dataGrid.css("height", me.getProperty("height").value || 'auto');

                var columnsHtml = $("<div property='columns'>");
                dataGrid.append(columnsHtml);
                $(columns).each(function () {
                    var conf = mini.clone(this);
                    conf.headerAlign = conf.headerAlign || 'center';
                    conf.align = conf.align || 'center';

                    var column = $("<div>").attr(conf);
                    columnsHtml.append(column)
                });

                return dataGrid;
            }

            var container = this.getContainer(function () {
                var height = me.getProperty("height").value;
                var m = $("<div class='mini-col-12 form-component'>");

                m.append($("<div class='grid-container'>").css({
                    "min-height": "50px"
                }));

                return m;
            });

            function reinitTable() {
                container.find(".grid-container:first").html(createTable());
                mini.parse()
            }

             reinitTable();
            this.un("propertiesChanged")
                .on('propertiesChanged', function (key, value) {
                    if (key === 'comment') {
                        container.find("legend:first").text(value);
                    } else if (key === 'columns') {

                        reinitTable();
                    } else if (key === 'showComment') {
                        if (value + "" === 'false') {
                            container.find("legend:first").addClass('form-hidden');
                        } else {
                            container.find("legend:first").removeClass('form-hidden');
                        }
                    } else {
                        container.find("legend:first").attr(key, value);
                    }
                });
            return container;
        };
        DataTable.prototype.typeName = "数据表格";

        DataTable.icon = "iconfont icon-biaoge";
        componentRepo.registerComponent("datatable", DataTable);

    }


})();