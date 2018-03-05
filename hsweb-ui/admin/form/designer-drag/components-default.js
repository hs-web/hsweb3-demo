(function () {
    var Designer = window.Designer;

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
                value: "6",
                createEditor: function (component, text, value) {
                    var html = $("<div style='margin-left: 4px;position: relative;top: 12px;'>");
                    html.slider({
                        orientation: "horizontal",
                        range: "min",
                        min: 1,
                        max: 12,
                        value: value,
                        slide: function () {
                            component.setProperty("size", arguments[1].value);
                        }
                    });
                    return html;
                }
            },
            {
                id: "",
                editor: "radio",
                text: "是否必填",
                value: "false",
                createEditor: function (component, text, value) {
                    var id = md5("" + Math.random());
                    var checkbox1 = $("<input type=\"radio\" name='" + id + "' value='true' lay-filter='" + id + "' title='是'>");
                    var checkbox2 = $("<input type=\"radio\" name='" + id + "' value='false' lay-filter='" + id + "' title='否'>");
                    if (value === true) {
                        checkbox1.prop("checked", "checked");
                    } else {
                        checkbox2.prop("checked", "checked");
                    }
                    return $("<div>").append(checkbox1).append(checkbox2).children();
                },
                data: [
                    {text: "是", value: true},
                    {text: "否", value: false}
                ]
            }
        ];
    }

    function createClass(O, name) {
        (function () {
            // 创建一个没有实例方法的类
            var Super = function () {
            };
            Super.prototype = Component.prototype;
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
                    var m = $("<div class='mini-col-12'>");
                    var c = $("<fieldset style='border: 1px solid #ddd' class=\"brick\">");
                    var label = $("<legend>").text("分割");
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

            Designer.registerComponent("fieldset", FieldSet);
        }

        /**文本输入框**/
        {
            function TextBox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "单行文本";
            }

            createClass(TextBox);

            TextBox.prototype.render = function () {
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div  class=\"input-block\">");
                    var input = $("<input  style='width: 100%'  class=\"mini-textbox\">");
                    label.text("单行文本");
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else {
                            if (typeof value === 'undefined') {
                                container.find("input").removeAttr(name);
                            } else {
                                container.find("input").attr(name, value);
                            }
                        }
                    });
                return container;
            };

            Designer.registerComponent("textbox", TextBox);
        }

        /**密码**/
        {
            function Password(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "密码";
            }

            createClass(Password);

            Password.prototype.render = function () {
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var input = $("<input type=\"password\" style='width: 100%'  class=\"mini-password\">");
                    label.text("密码");
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else {
                            container.find("input").attr(name, value);
                        }
                    });
                return container;
            };

            Designer.registerComponent("password", Password);
        }

        /**文本域**/
        {
            function TextArea(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("size").value = 12;
                this.getProperty("comment").value = "多行文本";
            }

            createClass(TextArea);
            TextArea.prototype.render = function () {

                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-12'>");
                    var c = $("<div class=\"form-text form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var input = $("<input style='width: 100%' class=\"mini-textarea\">");
                    label.text("多行文本");
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else {
                            container.find("input").attr(name, value);
                        }
                    });
                return container;
            };
            Designer.registerComponent("textarea", TextArea);
        }

        /**多选**/
        {
            function CheckBox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "多选";
                this.removeProperty("placeholder");
                this.properties.push({
                    id: "skin",
                    text: "类型",
                    value: ""
                });
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: "选项1,选项2"
                });
            }

            createClass(CheckBox);

            CheckBox.prototype.render = function () {
                var me = this;
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var checkbox1 = $("<input type=\"checkbox\" name='" + me.id + "[1]' title='选项1'>");
                    var checkbox2 = $("<input type=\"checkbox\" name='" + me.id + "checkbox[2]' title='选项2'>");
                    label.text("多选");
                    c.append(label).append(inputContainer.append(checkbox1).append(checkbox2));
                    return m.append(c);
                });

                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        function initData() {
                            var inputParent = container.find(".input-block");
                            inputParent.children().remove();
                            var data = me.getProperty("data").value;
                            if (!data) {
                                return;
                            }
                            var name = me.getProperty("name").value;
                            if (!name) {
                                name = me.id;
                            }
                            var skin = me.getProperty("skin").value;

                            data = data.split(",");
                            $(data).each(function () {
                                var option = $("<input type=\"checkbox\" lay-skin='" + skin + "' title='选项1'>");
                                var value = this;
                                var text = this;
                                if (value.indexOf(":") !== -1) {
                                    var vt = value.split(":");
                                    text = vt[0];
                                    value = vt[1];
                                }
                                option.attr({
                                    name: name + "[" + value + "]",
                                    title: text
                                });
                                inputParent.append(option);
                            });
                        }

                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else if (name === 'name' || name === 'data' || name === 'skin') {
                            initData();
                        } else {
                            if (typeof value === 'undefined') {
                                container.find("input").removeAttr(name);
                            } else {
                                container.find("input").attr(name, value);
                            }
                        }
                    });
                return container;
            };

            Designer.registerComponent("checkbox", CheckBox);
        }

        /**单选**/
        {
            function RadioBox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.getProperty("comment").value = "单选";
                this.removeProperty("placeholder");
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: "选项1,选项2"
                });
            }

            createClass(RadioBox);

            RadioBox.prototype.render = function () {
                var me = this;
                var container = this.getContainer(function () {
                    var m = $("<div class='layui-col-xs4 layui-col-md4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var checkbox1 = $("<input type=\"radio\" name='" + me.id + "' title='选项1'>");
                    var checkbox2 = $("<input type=\"radio\" name='" + me.id + "' title='选项2'>");
                    label.text("单选");
                    c.append(label).append(inputContainer.append(checkbox1).append(checkbox2));
                    return m.append(c);
                });

                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        function initData() {
                            var inputParent = container.find(".input-block");
                            inputParent.children().remove();
                            var data = me.getProperty("data").value;
                            if (!data) {
                                return;
                            }
                            var name = me.getProperty("name").value;
                            if (!name) {
                                name = me.id;
                            }
                            data = data.split(",");
                            $(data).each(function () {
                                var option = $("<input type=\"radio\"  title='选项1'>");
                                var value = this;
                                var text = this;
                                if (value.indexOf(":") !== -1) {
                                    var vt = value.split(":");
                                    text = vt[0];
                                    value = vt[1];
                                }
                                option.attr({
                                    name: name,
                                    title: text
                                }).val(value);
                                inputParent.append(option);
                            });
                        }


                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else if (name === 'name' || name === 'data') {
                            initData();
                        } else {
                            if (typeof value === 'undefined') {
                                container.find("input").removeAttr(name);
                            } else {
                                container.find("input").attr(name, value);
                            }
                        }
                    });
                return container;
            };
            Designer.registerComponent("radio", RadioBox);
        }

        /**下拉列表**/
        {
            function Combobox(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.properties.push({
                    id: "data",
                    text: "选项",
                    value: "选项1,选项2"
                });
            }

            createClass(Combobox);

            Combobox.prototype.render = function () {
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div  class=\"input-block\">");
                    var input = $("<input style='width: 100%' class=\"mini-combobox\">");
                    label.text("单行文本");
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });
                var me = this;
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        function initData() {
                            var inputParent = container.find("select");
                            inputParent.children().remove();
                            var data = me.getProperty("data").value;
                            if (!data) {
                                return;
                            }
                            data = data.split(",");
                            var name = me.getProperty("name").value;
                            if (!name) {
                                name = me.id;
                            }
                            inputParent.attr("name", name);
                            $(data).each(function () {
                                var option = $("<option title='选项1'>");
                                var value = this;
                                var text = this;
                                if (value.indexOf(":") !== -1) {
                                    var vt = value.split(":");
                                    text = vt[0];
                                    value = vt[1];
                                }
                                option.attr({
                                    value: value
                                });
                                option.text(text);
                                inputParent.append(option);
                            });
                        }

                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else if (name === 'data') {
                            initData();
                        } else {
                            if (typeof value === 'undefined') {
                                container.find("select").removeAttr(name);
                            } else {
                                container.find("select").attr(name, value);
                            }
                        }
                    });
                return container;
            };

            Designer.registerComponent("combobox", Combobox);
        }

        /**日期选择**/
        {
            function Datepicker(id) {
                Component.call(this);
                this.id = id;
                this.properties = createDefaultEditor();
                this.properties.push({
                    id: "format",
                    editor: "textbox",
                    text: "日期格式",
                    value: "yyyy-MM-dd"
                });
                this.getProperty("comment").value = "日期输入";
            }

            createClass(Datepicker);

            Datepicker.prototype.render = function () {
                var me = this;
                var container = this.getContainer(function () {
                    var m = $("<div class='mini-col-4'>");
                    var c = $("<div class=\"form-item brick\">");
                    var label = $("<label  class=\"form-label\">");
                    var inputContainer = $("<div class=\"input-block\">");
                    var input = $("<input style='width: 100%' class=\"mini-datepicker\">");
                    label.text("日期输入");
                    c.append(label).append(inputContainer.append(input));
                    m.append(c);
                    return m;
                });
                this.un("propertiesChanged")
                    .on('propertiesChanged', function (name, value) {
                        function reloadInput() {
                            var input = container.find(".date-picker");
                            var newInput = $("<input   class=\"layui-input date-picker\">");
                            input.replaceWith(newInput);
                            var format = me.getProperty("format");
                            newInput.attr("format", format);
                            if (format.value) {
                                //layui.laydate.render({elem: newInput[0], format: format.value});
                            }
                        }

                        if (name === 'format') {
                            reloadInput();
                        }
                        if (name === 'comment') {
                            container.find("label").text(value);
                        } else {
                            container.find("input").attr(name, value);
                        }
                    });
                return container;
            };

            Designer.registerComponent("datepicker", Datepicker);
        }
    }

})();