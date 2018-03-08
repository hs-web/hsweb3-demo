(function () {

    function createDefaultEditor() {
        return [
            {
                id: "name",
                editor: "textbox",
                text: "字段",
                value: ""
            }, {
                id: "comment",
                editor: "textbox",
                text: "描述",
                value: "新建控件"
            }, {
                id: "emptyText",
                editor: "textbox",
                text: "提示",
                value: ""
            }, {
                id: "size",
                text: "控件大小",
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
                            component.setProperty("size", arguments[1].value);
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

                    checkbox.attr("data", JSON.stringify([{id: "required", text: "是"}, {id: 'undefined', checked: true, text: "否"}]));
                    return checkbox;
                }
            }
        ];
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

    function createScriptEditor(id, text, lang) {
        return {
            id: id,
            text: text,
            script: true,
            value: "",
            createEditor: function (component, text, value) {
                var button = $("<a class='mini-button' plain='true' onclick='window.edit_script_" + id + "' iconCls='icon-edit'>");
                window['edit_script_' + id] = function () {
                    editScript(lang, component.getProperty(id).value || "", null, function (editor) {
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
                checkbox.attr("data", JSON.stringify([{id: "true", text: "是"}, {id: 'false', checked: true, text: "否"}]));
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

    /**基础组件**/
    {
        /**fieldset**/
        {
            function FieldSet(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.removeProperty("placeholder");
                this.removeProperty("name");
                this.removeProperty("");
                this.getProperty("comment").value = "分割";
                this.getProperty("size").value = "12";
            }

            createClass(FieldSet);

            FieldSet.prototype.render = function () {
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-12 form-component'>");
                    var c = $("<fieldset style='border:0px; border-top: 1px solid #ddd' class=\"brick\">");
                    var label = $("<legend style='font-size: 20px'>").text("分割");
                    c.append(label);
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (key, value) {
                        if (key === 'comment') {
                            container.find("legend").text(value);
                        } else {
                            container.find("legend").attr(key, value);
                        }
                    });
                return container;
            };

            componentRepo.registerComponent("fieldset", FieldSet);
        }

        /**文本输入框**/
        function TextBox(id) {
            Component.call(this);
            this.id = id;
            this.properties = createDefaultEditor();
            this.getProperty("comment").value = "单行文本";
        }

        {
            createClass(TextBox);

            TextBox.prototype.render = function () {
                var me = this;

                function createInput() {
                    var input = $("<input style='width: 100%'>");
                    input.addClass(me.cls || "mini-textbox");
                    $(me.properties).each(function () {
                        var value = this.value;
                        var property = this;
                        if (this.id) {
                            if (this.id === 'height') {
                                input.css("height", value);
                            }
                            //脚本
                            if (this.script) {
                                var scriptId = "script_" + (Math.round(Math.random() * 100000000));
                                window[scriptId] = function (obj) {
                                    try {
                                        var func = eval("(function(){return function(component){" +
                                            "\n" +
                                            property.value +
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
                                if (optionConfig.type === 'url') {
                                    input.attr("url", window.API_BASE_PATH + optionConfig.url);
                                    input.attr("textField", optionConfig.textField || 'text');
                                    input.attr("idField", optionConfig.idField || "id");
                                    input.attr("dataField", optionConfig.dataField || "text");
                                    input.attr("ajaxType", optionConfig.ajaxType || "GET");
                                    input.attr("parentField", optionConfig.parentField || "parentId");
                                    input.attr("resultAsTree", optionConfig.resultAsTree || "false");
                                } else if (optionConfig.type === 'data') {
                                    if (!window.optionalData) {
                                        window.optionalData = {};
                                    }
                                    var id = "optional_" + Math.round(Math.random() * 10000);
                                    window.optionalData[id] = optionConfig.data;
                                    value = "window.optionalData." + id;
                                    input.attr("data", value);
                                }
                            } else {
                                input.attr(this.id, value);
                            }
                        }
                        if (!this.value || this.value === 'undefined') {
                            input.removeAttr(this.id);
                        }
                    });
                    console.log(input[0].outerHTML);
                    return input;
                }

                var container = this.getContainer(function () {
                    var m = $("<div>");
                    m.addClass("mini-col-" + me.getProperty("size").value)
                        .addClass("form-component");

                    var c = $("<div class=\"form-item brick\">");
                    if (me.formText) {
                        c.addClass("form-text");
                    }
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var input = createInput();
                    label.text(me.getProperty("comment").value);
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });

                function newInput() {
                    return container.find(".input-block")
                        .html("")
                        .append(createInput());
                }

                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else {
                            newInput();
                        }
                    });
                return container;
            };

            componentRepo.registerComponent("textbox", TextBox);
        }

        /**密码**/
        {
            function Password(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "密码";
                this.cls = "mini-password";
            }

            createClass(Password, TextBox);

            componentRepo.registerComponent("password", Password);
        }

        /**弹出选择**/
        {
            function ButtonEdit(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("size").value = 4;
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
            componentRepo.registerComponent("buttonedit", ButtonEdit);
        }

        /**文本域**/
        {
            function TextArea(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("size").value = 12;
                this.getProperty("comment").value = "多行文本";
                this.cls = "mini-textarea";
                this.formText = true;
                this.properties.push(
                    {
                        id: "height",
                        text: "高度",
                        value: "50",
                        createEditor: function (component, text, value, call) {
                            var html = $("<div style='margin-left: 4px;position: relative;top: 9px;width: 92%'>");
                            html.slider({
                                orientation: "horizontal",
                                range: "min",
                                min: 1,
                                max: 20,
                                value: parseInt(value) / 25,
                                slide: function () {
                                    if (call) call();
                                    component.setProperty("height", parseInt(arguments[1].value) * 25);
                                    mini.parse();
                                }
                            });
                            return html;
                        }
                    }
                );
            }

            createClass(TextArea, TextBox);
            componentRepo.registerComponent("textarea", TextArea);
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

            componentRepo.registerComponent("checkbox", CheckBox);
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

            componentRepo.registerComponent("radio", RadioBox);
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


            componentRepo.registerComponent("combobox", Combobox);
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


            componentRepo.registerComponent("treeselect", TreeSelect);
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

            componentRepo.registerComponent("datepicker", Datepicker);
        }
    }

})();