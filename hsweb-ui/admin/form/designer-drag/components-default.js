(function () {

    function createDefaultEditor() {
        return [
            {
                id: "name",
                editor: "textbox",
                text: "名称",
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
                        if (this.id) {
                            input.attr(this.id, this.value);
                        }
                        if (!this.value || this.value === 'undefined') {
                            input.removeAttr(this.id);
                        }
                    });
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

            // Password.prototype.render = function () {
            //     var container = this.getContainer(function () {
            //         var m = $("<div class='mini-col-4'>");
            //         var c = $("<div class=\"form-item brick\">");
            //         var label = $("<label  class=\"form-label\">");
            //         var inputContainer = $("<div class=\"input-block\">");
            //         var input = $("<input type=\"password\" style='width: 100%'  class=\"mini-password\">");
            //         label.text("密码");
            //         c.append(label).append(inputContainer.append(input));
            //         m.append(c);
            //         return m;
            //     });
            //     this.un("propertiesChanged")
            //         .on('propertiesChanged', function (name, value) {
            //             if (name === 'comment') {
            //                 container.find("label").text(value);
            //             } else {
            //                 container.find("input").attr(name, value);
            //             }
            //         });
            //     return container;
            // };

            componentRepo.registerComponent("password", Password);
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
            }

            createClass(TextArea, TextBox);
            // TextArea.prototype.render = function () {
            //
            //     var container = this.getContainer(function () {
            //         var m = $("<div class='mini-col-12'>");
            //         var c = $("<div class=\"form-text form-item brick\">");
            //         var label = $("<label  class=\"form-label\">");
            //         var inputContainer = $("<div class=\"input-block\">");
            //         var input = $("<input style='width: 100%' class=\"mini-textarea\">");
            //         label.text("多行文本");
            //         c.append(label).append(inputContainer.append(input));
            //         m.append(c);
            //         return m;
            //     });
            //     this.un("propertiesChanged")
            //         .on('propertiesChanged', function (name, value) {
            //             if (name === 'comment') {
            //                 container.find("label").text(value);
            //             } else {
            //                 container.find("input").attr(name, value);
            //             }
            //         });
            //     return container;
            // };
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
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: JSON.stringify([{id: "1", text: '选项1'}, {id: "2", text: '选项2'}])
                });
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
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: JSON.stringify([{id: "1", text: '选项1'}, {id: "2", text: '选项2'}])
                });
            }

            createClass(RadioBox, TextBox);

            componentRepo.registerComponent("radio", RadioBox);
        }

        function createDataSourceEditor() {
            return {
                id: "datasource",
                text: "数据源",
                value: JSON.stringify({
                    type: "data",
                    value: [{id: "1", text: '选项1'}, {id: "2", text: '选项2'}]
                }),
                createEditor: function (component, text, value) {
                    var button = $("<a class='mini-button' plain='true' onclick='edit_datasource_00001' iconCls='icon-edit'>");
                    window.edit_datasource_00001 = function () {

                    };
                    return button;
                }

            }
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
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: JSON.stringify([{id: "1", text: '选项1'}, {id: "2", text: '选项2'}])
                });
            }

            createClass(Combobox, TextBox);


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

            // Datepicker.prototype.render = function () {
            //     var me = this;
            //     var container = this.getContainer(function () {
            //         var m = $("<div class='mini-col-4'>");
            //         var c = $("<div class=\"form-item brick\">");
            //         var label = $("<label  class=\"form-label\">");
            //         var inputContainer = $("<div class=\"input-block\">");
            //         var input = $("<input style='width: 100%' class=\"mini-datepicker\">");
            //         label.text("日期输入");
            //         c.append(label).append(inputContainer.append(input));
            //         m.append(c);
            //         return m;
            //     });
            //     this.un("propertiesChanged")
            //         .on('propertiesChanged', function (name, value) {
            //             function reloadInput() {
            //                 var input = container.find(".date-picker");
            //                 var newInput = $("<input   class=\"layui-input date-picker\">");
            //                 input.replaceWith(newInput);
            //                 var format = me.getProperty("format");
            //                 newInput.attr("format", format);
            //                 if (format.value) {
            //                     //layui.laydate.render({elem: newInput[0], format: format.value});
            //                 }
            //             }
            //
            //             if (name === 'format') {
            //                 reloadInput();
            //             }
            //             if (name === 'comment') {
            //                 container.find("label").text(value);
            //             } else {
            //                 container.find("input").attr(name, value);
            //             }
            //         });
            //     return container;
            // };

            componentRepo.registerComponent("datepicker", Datepicker);
        }
    }

})();