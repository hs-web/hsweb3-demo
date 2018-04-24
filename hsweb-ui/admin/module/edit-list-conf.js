importResource("/admin/css/common.css");


var termType = [
    {
        id: "eq",
        text: "等于"
    },
    {
        id: "like",
        text: "模糊查询"
    },
    {
        id: "gt",
        text: "大于"
    },
    {
        id: "gte",
        text: "大于等于"
    },
    {
        id: "lt",
        text: "小于"
    },
    {
        id: "lte",
        text: "小于等于"
    }
];
importMiniui(function () {
    mini.parse();
    require(["message", "miniui-tools", "request", "message"], function (message, tools, request, message) {
        var id = request.getParameter("id");

        window.selectIcon = function (e) {
            require(["../selector/icon"], function (iconSelector) {
                iconSelector(function (icon) {
                    e.sender.setValue(icon);
                    e.sender.setText(icon);
                })
            });
        };
        {
            var scriptEditorW;
            window.editScript = function (e) {
                var script = e.sender.text;
                if (!script) {
                    script = ""
                }
                if (!scriptEditorW) {
                    require(['script-editor'], function (editorBuilder) {
                        editorBuilder.createEditor("script-editor-w", function (editor) {
                            scriptEditorW = editor;
                            scriptEditorW.init("javascript", script);
                        });
                    });
                } else {
                    scriptEditorW.setScript(script);
                }
                mini.get("script-editor-window").show();
                $(".save-script-editor")
                    .unbind("click")
                    .on("click", function () {
                        e.sender.setValue(scriptEditorW.getScript());
                        e.sender.setText(scriptEditorW.getScript());
                        mini.get("script-editor-window").hide();
                        scriptEditorW.setScript("");
                    })
            }
        }

        var pageScriptEditor;
        var pageScript = "this.on('beforeQuery',function(){\n" +
            "\t//this.query.like('name','%测试%').or().is('status',1)" +
            "\n});"
        /*工具栏*/
        var toolbar = [
            // {
            //     type: "button",
            //     iconCls: "icon-add",
            //     text: "新建用户",
            //     onclick: "alert(1)"
            // }, {
            //     type: "menuButton",
            //     iconCls: "icon-edit",
            //     text: "文件",
            //     children: [
            //         {
            //             iconCls: "icon-add",
            //             text: "新增"
            //         },
            //         {
            //             iconCls: "icon-add",
            //             text: "修改"
            //         }
            //     ]
            // }
        ];
        /*查询条件*/
        var condition = [];
        var loading = message.loading("加载中...");
        require(["plugin/jquery-ui/jquery-ui", "plugin/ueditor/ueditor.parse", "css!plugin/font-awesome/4.7.0/css/font-awesome.css"], function () {
            $("#condition-container").sortable({
                update: function (e) {
                    updateConditionSort();
                }
            });
            $(".toolbar-container").sortable({
                update: function (e) {
                    updateToolBarSort();
                }
            });
            uParse("#basicSettingTable", {
                rootPath: window.BASE_PATH + 'plugins/ueditor',
                chartContainerHeight: 5000
            });

            uParse("#toolbarEditorForm", {
                rootPath: window.BASE_PATH + 'plugins/ueditor',
                chartContainerHeight: 5000
            });
            uParse("#conditionEditorForm", {
                rootPath: window.BASE_PATH + 'plugins/ueditor',
                chartContainerHeight: 5000
            });
            loading.hide();
            require(['script-editor'], function (editorBuilder) {
                editorBuilder.createEditor("page-script-editor", function (editor) {
                    pageScriptEditor = editor;
                    pageScriptEditor.init("javascript", pageScript, function () {
                        this.setValue(pageScript, -1);
                        ;
                    });

                });
            });
            if (window.ready) {
                window.ready.call({
                    setConfig: setConfig,
                    getConfig: getConfig,
                    setMod: function () {

                    }
                });
            } else {
                initToolbar();
                initCondition();
            }
        });

        var listGrid = mini.get("list-datagrid");
        tools.initGrid(listGrid);
        tools.initGrid(mini.get("toolbar-children-grid"));


        /*查询条件相关*/
        {
            var conditionType = {};
            window.conditionTypeList = [
                {
                    name: "文本输入",
                    id: "textbox",
                    create: function (config) {
                        var container = $("<div style='text-align: right;margin-top: 10px' class=\"mini-col-" + config.size + "\">");
                        var label = $("<label class='form-label'>").text(config.text)
                            .css({
                                "width": "200px",
                                "text-align": "right"
                            });
                        var input = $("<input style='width: 70%' class='mini-textbox'>").attr(config.editor);
                        container.append(label).append(input);
                        return container;
                    }
                },
                {
                    name: "日期",
                    id: "date",
                    create: function (config) {
                        var container = $("<div style='text-align: right;margin-top: 10px' class=\"mini-col-" + config.size + "\">");
                        var label = $("<label class='form-label'>").text(config.text)
                            .css({
                                "width": "200px",
                                "text-align": "right"
                            });
                        var input = $("<input style='width: 70%' class='mini-datepicker'>").attr(config.editor);
                        container.append(label).append(input);
                        return container;
                    }
                }
            ];

            $(window.conditionTypeList).each(function () {
                conditionType[this.id] = this;
            });
            mini.get("conditionTypeList").setData(conditionTypeList);

            mini.get("conditionTypeList").on("valuechanged", function (e) {
                $(".optional-condition").hide();
                $(".condition-" + e.value).show();
            });

            //更新排序
            function updateConditionSort() {
                var idList = [];
                $("#condition-container")
                    .children()
                    .each(function () {
                        idList.push($(this).attr("condition-id"));
                    });

                condition.sort(function (a, b) {
                    return idList.indexOf(a.id) > idList.indexOf(b.id) ? 1 : -1;
                });
            }

            $(".add-condition").on("click", function () {
                var conf = {
                    text: "查询条件:",
                    id: "cond_" + Math.round(Math.random() * 100000),
                    editor: {
                        name: "文本",
                        type: "textbox"
                    },
                    size: 3
                };
                condition.push(conf);
                initCondition();
                editCondition(conf);
            });

            function editCondition(conf) {
                var form = new mini.Form("#conditionEditorForm");
                form.setData(conf);
                mini.get("conditionTypeList").doValueChanged();
                var win = mini.get("condition-editor");
                if (!win.visible)
                    win.show();
                $(".save-condition").unbind("click")
                    .on("click", function () {
                        var data = form.getData();
                        for (var e in data) {
                            conf[e] = data[e];
                        }
                        initCondition();
                        win.hide();
                    });
                $(".remove-condition").unbind("click").on("click", function () {
                    condition.splice(condition.indexOf(conf), 1);
                    initCondition();
                    win.hide();
                });
            }

            function initCondition() {
                $("#condition-container").html("");
                $(condition).each(function () {
                    var me = this;
                    var type = conditionType[this.editor.type];
                    if (type) {
                        var html = type.create(this);
                        html.css("cursor", "pointer");
                        html.attr("condition-id", me.id);
                        html.on("click", function () {
                            editCondition(me)
                        });
                        $("#condition-container").append(html);
                    }
                });
                mini.parse();
            }
        }

        /*工具栏相关*/
        {

            //所有支持的工具栏控件类型
            var toolbarType = {};

            //按钮设置中的脚本编辑器
            var scriptEditor;

            window.toolbarTypeList = [
                {
                    id: "button",
                    name: "按钮",
                    create: function (config) {
                        var html = $("<a class='mini-button' plain='true'>");
                        html.attr(config).html(config.text);
                        var eventId = "e_" + (Math.round(Math.random() * 100000));
                        window[eventId] = function () {
                            // console.log(config);
                            editToolBar(config)
                        };
                        html.attr("onclick", eventId);
                        return html;
                    }
                },
                {
                    id: "menuButton",
                    name: "菜单",
                    create: function (config) {
                        function createMenu(parent, menus) {
                            $(menus).each(function () {
                                var li = $("<li>");
                                li.attr({iconCls: this.iconCls});
                                if (this.children && this.children.length > 0) {
                                    li.append($("<span>")
                                        .attr({iconCls: this.iconCls})
                                        .text(this.text));
                                    var ul = $("<ul>");
                                    createMenu(ul, this.children);
                                    li.append(ul);
                                } else {
                                    li.text(this.text);
                                }
                                parent.append(li);
                            });
                        }

                        var id = "menu_" + (Math.round(Math.random() * 1000000));
                        var button = $("<a class=\"mini-menubutton\" plain=\"true\">");
                        var eventId = "e_" + (Math.round(Math.random() * 100000));
                        window[eventId] = function () {
                            editToolBar(config)
                        };
                        button.attr({
                            iconCls: config.iconCls,
                            onclick: eventId,
                            menu: "#" + id,
                            id: config.id
                        });
                        button.html(config.text);
                        var menu = $("<ul class=\"mini-menu toolbar-menu\" style=\"display:none;\">")
                            .attr("id", id);
                        createMenu(menu, config.children);
                        $(document.body).append(menu);
                        return button;
                    }
                }
            ];
            $(toolbarTypeList).each(function () {
                toolbarType[this.id] = this;
            });
            //按钮设置中类型的下拉列表
            mini.get("toolbarTypeList").setData(toolbarTypeList);
            mini.get("toolbarTypeList").on("valuechanged", function (e) {
                var selected = e.selected;
                $("#script-editor").hide();
                $("#toolbar-children-grid").hide();
                if (e.value === 'button') {
                    $("#script-editor").show();
                } else {
                    $("#toolbar-children-grid").show();
                }
                mini.layout();
            });


            //点击添加工具栏
            $(".add-toolbar")
                .on("click", function () {
                    var button = {
                        id: "button_" + Math.round(Math.random() * 1000000),
                        type: "button",
                        text: "新建按钮"
                    };
                    toolbar.push(button);
                    initToolbar();
                    editToolBar(button);
                });

            //子菜单表格
            var toolbarChildrenGrid = mini.get("toolbar-children-grid");
            //操作列
            toolbarChildrenGrid
                .getColumn("action")
                .renderer = function (e) {
                return tools.createActionButton("删除", "icon-remove", function () {
                    e.sender.removeNode(e.record);
                });
            };
            //点击事件列
            toolbarChildrenGrid
                .getColumn("onclick")
                .renderer =
                function (e) {
                    function setScript(script) {
                        console.log(script);
                        e.record.onclick = e.value = script;
                    }

                    return tools.createActionButton("编辑", "icon-edit", function () {
                        editScript({
                            sender: {
                                text: e.value,
                                setText: setScript,
                                setValue: setScript
                            }
                        });
                    });
                }

            //设置脚本到按钮的点击事件中
            function setScript(script) {
                if (!script) {
                    script = "//点击按钮时执行js";
                }
                if (!scriptEditor) {
                    require(['script-editor'], function (editorBuilder) {
                        editorBuilder.createEditor("script-editor", function (editor) {
                            scriptEditor = editor;
                            scriptEditor.init("javascript", script)
                        });
                    });
                } else {
                    scriptEditor.setScript(script);
                }
            }

            function editToolBar(config) {
                var win = mini.get("toolbar-editor");
                if (!win.visible)
                    win.show();
                var form = new mini.Form("#toolbarEditorForm");
                $(".remove-toolbar").unbind("click")
                    .on("click", function () {
                        mini.get("toolbar-editor").hide();
                        toolbar.splice(toolbar.indexOf(config), 1);
                        initToolbar();
                    });
                form.setData(config);
                setScript(config.onclick);
                if (config.children) {
                    mini.get("toolbar-children-grid").setData(config.children);
                }
                mini.get("toolbarTypeList").doValueChanged();
                $(".save-toolbar")
                    .unbind("click")
                    .on("click", function () {
                        var data = form.getData();
                        for (var e in data) {
                            config[e] = data[e];
                        }
                        config.onclick = scriptEditor.getScript();
                        var children = mini.get("toolbar-children-grid").getData();
                        if (children.length > 0) {
                            config.children = children;
                        }
                        initToolbar();
                        win.hide();
                    });
            }

            //更新工具栏的排序
            function updateToolBarSort() {
                var idList = [];
                $(".toolbar-container")
                    .children()
                    .each(function () {
                        idList.push($(this).attr("id"));
                    });
                toolbar.sort(function (a, b) {
                    return idList.indexOf(a.id) > idList.indexOf(b.id) ? 1 : -1;
                });
            }

            //初始化工具栏
            function initToolbar() {
                $(".toolbar-menu").remove();
                $(".toolbar-container").children().remove();
                $(toolbar).each(function () {
                    var type = toolbarType[this.type];
                    if (type) {
                        var html = type.create(this);
                        $(".toolbar-container").append(html);
                    }
                });
                mini.parse();
            }
        }


        //表格列配置
        {


            var listConfigGrid = mini.get("list-datagrid");
            var listOperationGrid = mini.get("list-operate-datagrid");

            listConfigGrid.getColumn("renderer").renderer = createScriptEditorAction;
            listConfigGrid.getColumn("condition").renderer = createScriptEditorAction;
            listOperationGrid.getColumn("condition").renderer = createScriptEditorAction;
            listOperationGrid.getColumn("onclick").renderer = createScriptEditorAction;

            listOperationGrid
                .getColumn("action")
                .renderer = function (e) {
                return tools.createActionButton("删除", "icon-remove", function () {
                    e.sender.removeNode(e.record);
                });
            };
            listConfigGrid
                .getColumn("action")
                .renderer = function (e) {
                return tools.createActionButton("删除", "icon-remove", function () {
                    e.sender.removeNode(e.record);
                });
            };
        }

        window.setConfig = function (conf) {
            if (conf) {
                toolbar = conf.toolbar;
                pageScript = conf.script;
                if (pageScriptEditor)
                    pageScriptEditor.setScript(pageScript);
                condition = conf.condition;
                mini.get("list-datagrid").setData(conf.table.columns);
                mini.get("list-operate-datagrid").setData(conf.table.actions);
                mini.getbyName('url').setValue(conf.table.url);
                mini.getbyName('url').setText(conf.table.url);
                initToolbar();
                initCondition();
            }
        };

        window.getConfig = function () {
            return {
                toolbar: toolbar,
                script: pageScriptEditor.getScript(),
                condition: condition,
                table: {
                    columns: mini.get("list-datagrid").getData(),
                    actions: mini.get("list-operate-datagrid").getData(),
                    url: mini.getbyName('url').getValue()
                }
            }
        }

        $(".ok").on('click', function () {
            var config = getConfig();
            console.log(JSON.stringify(config));
            tools.closeWindow(config);
        });
        //预览
        $(".preview").on("click", function () {
            require(["parser"], function (parser) {
                new parser().parse($("#preview"), getConfig());
                mini.get("preview-window").show();
            })
        });

        function createScriptEditorAction(e) {
            function setScript(script) {
                e.record[e.field] = e.value = script;
            }

            return tools.createActionButton("编辑", "icon-edit", function () {
                editScript({
                    sender: {
                        text: e.value,
                        setText: setScript,
                        setValue: setScript
                    }
                });
            });
        }
    });
})
;