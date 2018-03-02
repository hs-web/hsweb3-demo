/**
 * 解析模块配置为html
 * {
 *  toolbar:[
 *        {
 *          type:"button",
 *          text:"新增",
 *          onclick:"alert(1)",
 *          iconCls:"icon-add"
 *        }
 *  ],
 *  condition:[
 *      {
 *
 *      }
 *  ]
 * }
 *
 */
define(["miniui-tools", "authorize", "request", "message"], function (tools, autz, request, message) {
    var toolbarType = {};
    var conditionType = {};
    var toolbarTypeList = [
        {
            id: "button",
            name: "按钮",
            create: function (config) {
                var html = $("<a class='mini-button' plain='true'>");
                html.attr(config).html(config.text);
                html.attr("onclick", createOnclick(config.onclick));
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
                        li.attr("onclick", createOnclick(this.onclick));
                        parent.append(li);
                    });
                }

                var id = "menu_" + (Math.round(Math.random() * 1000000));
                var button = $("<a class=\"mini-menubutton\" plain=\"true\">");
                var eventId = "e_" + (Math.round(Math.random() * 100000));
                window[eventId] = function () {
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
    var conditionTypeList = [
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
                var input = $("<input style='width: 70%' class='mini-textbox'>")
                    .attr(config.editor)
                    .attr("name", config.id);
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
                var input = $("<input style='width: 70%' class='mini-datepicker'>")
                    .attr(config.editor)
                    .attr("name", config.id);
                ;
                container.append(label).append(input);
                return container;
            }
        }
    ];

    $(toolbarTypeList).each(function () {
        toolbarType[this.id] = this;
    });
    $(conditionTypeList).each(function () {
        conditionType[this.id] = this;
    });

    function createOnclick(script) {
        var eventId = "e_" + (Math.round(Math.random() * 100000));
        var call = typeof script === 'function' ? script : function () {
            if (script) {
                try {
                    var fun = eval("(function(){return function(){\n" +
                        script +
                        "\n}})()");
                    fun.call({
                        tools: tools,
                        message: message,
                        request: request
                    });
                } catch (e) {
                    console.log(e);
                }
            }
        };
        window[eventId] = call;
        return eventId;
    }

    function parseToolbar(container, toolbar) {
        $(toolbar).each(function () {
            var type = toolbarType[this.type];
            if (type) {
                var html = type.create(this);
                container.append(html);
            }
        });
    }

    function parseCondition(container, condition) {
        $(condition).each(function () {
            var me = this;
            var type = conditionType[this.editor.type];
            if (type) {
                var html = type.create(this);
                container.append(html);
            }
        });
    }

    function parseDataGrid(container, config, onReady) {
        var columns = mini.clone(config.columns);
        var actions = mini.clone(config.actions);
        var permission = config.permission;
        var newColumns = [];
        $(columns).each(function () {
            if (permission) {
                var hasAccess = autz.hasFieldAccess(permission, this.field, "query");
                if (!hasAccess) {
                    return;
                }
            }
            var renderer = this.renderer;
            if (this.condition) {
                try {
                    var fun = window.eval("(function(){return function(autz){\n" +
                        this.condition +
                        "\n}})()");
                    if (fun(autz) === false) {
                        return;
                    }
                } catch (e) {
                    console.log(renderer, e);
                }
            }
            if (renderer) {
                this.renderer = function (e) {
                    try {
                        var fun = window.eval("(function(){return function(){\n" +
                            renderer +
                            "\n}})()");
                        var p = {
                            "value": e.value,
                            "row": e.record,
                            "e": e,
                            "autz": autz,
                            "tools": tools,
                            "request": request,
                            "message": message
                        };
                        return fun.call(p);
                    } catch (e) {
                        console.log(renderer, e);
                    }
                    return e.value;
                };
            }
            if (!this.align) {
                this.align = "center";
            }
            if (!this.headerAlign) {
                this.headerAlign = "center";
            }
            newColumns.push(this);
        });

        if (actions && actions.length > 0) {
            newColumns.push({
                name: "action",
                "align": "center",
                "headerAlign": "center",
                "header": "操作"
            });
        }
        var gridId = "grid-" + (Math.round(Math.random() * 100000));

        var dataGridHtml = $("<div class='mini-datagrid'>");

        dataGridHtml.attr({
            id: gridId
        });
        dataGridHtml.css({
            "width": "100%",
            "height": "100%"
        });
        container.append(dataGridHtml);
        onReady(function () {
            var grid = mini.get(gridId);
            if (!grid) {
                console.log("初始化表格失败!");
                return;
            }
            tools.initGrid(grid);
            grid.setUrl(window.API_BASE_PATH + config.url);
            grid.set({
                columns: newColumns
            });
            var actionColumn = grid.getColumn("action");
            if (actionColumn) {
                actionColumn.renderer = function (e) {
                    var actionHtml = [];
                    $(actions).each(function () {
                        var action = this;
                        var condition = action.condition;
                        var show = true;
                        if (condition) {
                            try {
                                var fun = eval("(function(){return function(value,row,e,autz){\n" +
                                    condition +
                                    "\n}})()");
                                show = fun(e.value, e.record, e, autz);
                            } catch (e) {
                                console.log(renderer, e);
                            }
                        }
                        if (show) {
                            actionHtml.push(tools.createActionButton(action.text, action.icon, function () {
                                if (!action.onclick) {
                                    return;
                                }
                                try {
                                    var fun = eval("(function(){return function(){\n" +
                                        action.onclick +
                                        "\n}})()");
                                    show = fun.call({
                                        row: e.record, e: e, autz: autz, message: message, request: request, tools: tools
                                    });
                                } catch (e) {
                                    console.log(action.onclick, e);
                                }
                            }))
                        }
                    });
                    return actionHtml.join("")
                }
            }
            return grid;
        });

    }

    function buildQueryParam(conditionConfig, param, index, prefix) {
        var terms = {};
        prefix = prefix || "";
        index = index || 0;
        $(conditionConfig).each(function () {
            var id = this.id;
            var val = param[id];
            var field = this.field;
            var termType = this.termType;

            if (typeof val === 'undefined' || val === '') {
                return;
            }
            if (termType === 'like' && val.indexOf("%") === -1) {
                val = '%' + val + '%';
            }

            terms[prefix + 'terms[' + index + '].column'] = field;
            terms[prefix + 'terms[' + index + '].value'] = val;
            terms[prefix + 'terms[' + index + '].termType'] = termType;
            index++;
        });
        return terms;
    }

    function parse(container, config, call) {
        var events = {};
        var helper = {};

        function on(event, func) {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(func);
        }

        if (config.script) {
            try {
                eval("(function(){return function(){\n" +
                    config.script +
                    "\n}})()")
                    .call({on: on, helper: helper});
            } catch (e) {
                console.log(config.script, e);
            }
        }
        if (call) {
            call.call({on: on});
        }

        function doEvent(event, args) {
            $(events[event]).each(function () {
                this.call(args);
            });
        }

        var toolbarHtml = $("<div class='mini-toolbar' style='border-bottom: 0px'>");
        var toolbar = $("<div>");
        var formId = "form_" + Math.round(Math.random() * 100000);
        var condition = $("<div style='max-width: 1280px;margin: auto' class='mini-clearfix'>")
            .attr("id", formId);

        toolbarHtml.append(toolbar).append(condition);

        var searchButton = $("<a class='mini-button' iconCls='icon-search' plain='true'>").text("搜索");
        var resetButton = $("<a class='mini-button' iconCls='icon-undo' plain='true'>").text("重置条件");

        var grid = $("<div class='mini-fit'>");
        container.html("")
            .append(toolbarHtml)
            .append(grid);
        parseToolbar(toolbar, config.toolbar);
        parseCondition(condition, config.condition);
        var conditionLen = condition.children().length;

        if (conditionLen > 0) {
            condition.append($("<div class='mini-col-" + (conditionLen > 3 ? 12 : 3) + "' style='margin-top: 10px;text-align: center'>").append(searchButton).append(resetButton));
        }
        var callQuery;

        // condition.find("input").attr("onenter",callQuery);

        parseDataGrid(grid, config.table, function (func) {
            searchButton.attr("onclick", createOnclick(function () {
                callQuery();
            }));
            mini.parse();
            var gridObj = func();
            helper.grid = gridObj;

            helper.doQuery = callQuery = function () {
                var form = new mini.Form("#" + formId);
                var data = form.getData(true);
                var query = request.createQuery();
                var includes = ["id"];
                $(gridObj.getColumns()).each(function () {
                    if (this.field) {
                        includes.push(this.field);
                    }
                    if (this.displayField) {
                        includes.push(this.displayField);
                    }
                });
                doEvent("beforeQuery", {
                    query: query.nest(),
                    includes: includes
                });
                var prefix = "";
                if (query.terms.length > 0) {
                    prefix = "terms[" + (query.terms.length) + "].";
                }
                var formParams = buildQueryParam(config.condition, data, 0, prefix);

                var customParams = query.getParams();
                for (var e in customParams) {
                    formParams[e] = customParams[e];
                }
                formParams.includes = includes.join(",");
                gridObj.load(formParams);
            };
            callQuery();
            doEvent("load", {grid: grid, doQuery: callQuery})
        });
    }

    return {
        parseToolbar: parseToolbar,
        parseCondition: parseCondition,
        parseDataGrid: parseDataGrid,
        parse: parse
    }
});