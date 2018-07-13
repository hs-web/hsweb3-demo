importResource("/admin/css/common.css");

var validatorData = [
    {
        text: "不能为null", type: "NotNull"
    },
    {
        text: "不能为空", type: "NotBlank"
    },
    {
        text: "字符长度范围", type: "Length",
        createEditor: function (html) {
            var maxValue = $("<span>");
            maxValue.append("<span>最小长度:</span>");
            maxValue.append("<input name='min' maxValue='5000' style='width: 80px' minValue='0' class='mini-spinner'/>");

            var minValue = $("<span>");
            minValue.append("<span>最大长度:</span>");
            minValue.append("<input name='max' maxValue='5000' style='width: 80px' minValue='0' class='mini-spinner'/>");

            html.append(maxValue).append(minValue);
        }
    },
    {
        text: "数字范围", type: "Range",
        createEditor: function (html) {
            var maxValue = $("<span>");
            maxValue.append("<span>最小值:</span>");
            maxValue.append("<input name='min' maxValue='5000' style='width: 80px' minValue='0' class='mini-spinner'/>");

            var minValue = $("<span>");
            minValue.append("<span>最大值:</span>");
            minValue.append("<input name='max' maxValue='5000' style='width: 80px' minValue='0' class='mini-spinner'/>");

            html.append(maxValue).append(minValue);
        }
    },
    {
        text: "邮箱", type: "Email"
    }
];

var groups = [
    {
        text: "新增", id: "create"
    }
    , {
        text: "修改", id: "update"
    }
];
var triggerData = [
    {
        id: "select.before" //查询之前
    },
    {
        id: "select.wrapper.each" //将查询结果包装为对象时触发
    },
    {
        id: "select.wrapper.done"
    },
    {
        id: "select.done"
    },
    {
        id: "insert.before"
    },
    {
        id: "insert.done"
    },
    {
        id: "update.before"
    },
    {
        id: "update.done"
    },
    {
        id: "delete.before"
    },
    {
        id: "delete.done"
    }
]
var scriptLanguages = [
    {id: "javascript"}
    , {id: "groovy"}
]
var dictType = [
    {id:"disable",text:"无"},
    {
        id: "dict", text: "数据字典",
        createEditor: function (html) {
            var appendType = $("<br><span>");
            appendType.append("<span>字典: </span>");
            appendType.append("<input onbuttonclick='selectDict' name='config.dictId' textName='config.dictId' style='width: 80%' allowInput='true' class='mini-buttonedit'/>");

            window.selectDict = function (e) {
                require(['miniui-tools'],function (tools) {
                    tools.openWindow("admin/dictionary/list.html?server=&selector=1","选择数据字典","900","650",function (dic) {
                        if(dic!=='close'||dic!=='cancel'){
                            e.sender.setValue(dic);
                            e.sender.setText(dic);
                        }
                    })
                })
            }
            html.append(appendType)
        }
    }
    // ,{id: "district", text: "行政区划"}
    // ,{id: "org", text: "机构"}
];

var jdbcType = [
    "VARCHAR", "NVARCHAR", "NUMERIC", "DATE", "CLOB", "BLOB"
];
var jdbcJavaMapping = {
    "VARCHAR": "String",
    "BIGINT": "Long",
    "NVARCHAR": "String",
    "NUMERIC": "Long",
    "DATE": "Date",
    "CLOB": "String",
    "BLOB": "Byte[]"
};

var javaType = [
    "String", "Byte", "Integer", "Long", "Double", "BigDecimal", "Boolean", "Date", "List", "Map"
];
var lengthMapping = {
    "NUMERIC-Long": "32,0",
    "NUMERIC-Byte": "4,0",
    "NUMERIC-Integer": "18,0",
    "NUMERIC-Double": "20,2",
    "NUMERIC-BigDecimal": "38",
    "NUMERIC-Boolean": "1,0"
};


importMiniui(function () {
    window.jdbcTypeData = [];
    $(jdbcType).each(function (i, t) {
        jdbcTypeData.push({text: t, id: t})
    });
    window.javaTypeData = [];
    $(javaType).each(function (i, t) {
        javaTypeData.push({text: t, id: t})
    });

    mini.parse();
    mini.getbyName("id").on("validation", function (e) {
        if (e.isValid) {
            var re = new RegExp("^[a-zA-Z0-9_\-]+$");
            e.isValid = re.test(e.value);
            if (!e.isValid) {
                e.errorText = "必须由数字,字母,下划线,-组成";
            }
        }
    });

    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        window.tools = tools;
        var api = "dynamic/form/bind";
        var func = request.patch;
        var id = request.getParameter("id");
        if (id) {
            loadData(id);
            //api += "/" + id;
            // func = request.put;
        }
        request.get("datasource", function (e) {
            if (e.status === 200) {
                $(e.result).each(function () {
                    this.text = this.name + (this.id ? "(" + this.id + ")" : "");
                });

                mini.getbyName('dataSourceId').setData(e.result);
            }
        });
        $(".save-button").on("click", (function () {
            var form = tools.getFormData("#basic-info", true);
            if (id)
                form.id = id;
            if (!form) return;
            form.triggers = JSON.stringify(mini.get("triggers-grid").getData());
            form.correlations = JSON.stringify(mini.get("correlations-grid").getData());

            var loading = message.loading("提交中");
            func(api, {form: form, columns: getColumns()}, function (response) {
                loading.close();
                if (response.status === 200) {
                    message.showTips("保存成功");
                    if (!id) id = response.result;
                    loadColumn(id);
                } else {
                    message.showTips("保存失败:" + response.message, "danger");
                    if (response.result)
                        tools.showFormErrors("#basic-info", response.result);
                }
            })
        }));
    });
    initColumnGrid();
    initTriggerGrid()
});

function getColumns() {
    return mini.clone(mini.get("column-grid").getData());
}

function loadData(id) {
    require(["miniui-tools", "request", "message"], function (tools, request, message) {
        var loading = message.loading("加载中...");
        request.get("dynamic/form/" + id, function (response) {
            loading.hide();
            if (response.status === 200) {
                new mini.Form("#basic-info").setData(response.result);
                if (response.result.triggers) {
                    mini.get("triggers-grid").setData(JSON.parse(response.result.triggers));
                }
                if (response.result.correlations) {
                    mini.get("correlations-grid").setData(JSON.parse(response.result.correlations));
                }
                mini.getbyName("id").setReadOnly(true);
            } else {
                message.showTips("加载数据失败", "danger");
            }
        });
        loadColumn(id);
    });

}

function loadColumn(id) {
    require(["request", "message"], function (request, message) {
        request.get("dynamic/form/column/" + id, function (response) {
            if (response.status === 200) {
                mini.get("column-grid").setData(response.result);
            } else {
                message.showTips("加载字段失败", "danger");
            }
        });
    });
}

function transformStr(str) {
    var re = /_(\w)/g;
    return str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
    });
}

function doEditScript(lang, script, callback) {
    script = script || "";
    require(['script-editor'], function (editorBuilder) {
        editorBuilder.createEditor("script-editor", function (editor) {
            editor.init(lang, script);
            $(".save-script-editor").unbind("click").on("click", function () {
                if (callback) {
                    callback(editor.getScript());
                }
                mini.get("scriptEditor").hide();
            })
        });
    });
    mini.get("scriptEditor").show();
}

function initTriggerGrid() {
    var grid = mini.get("triggers-grid");
    grid.getColumn("script").renderer = function (e) {
        return tools.createActionButton("编辑脚本", "icon-edit", function () {
            var row = e.record;
            doEditScript(row.language, e.value, function (script) {
                row.script = script;
                e.sender.updateRow(row);
            })
        });
    }
}

function initValidatorEditor(config, call) {
    var container = $("#validatorConfig");
    container.children().remove();
    if (config.length === 0) {
        config.push({});
    }

    $(".save-validator").unbind("click").on("click", function () {
        container.children().each(function (i, e) {
            var id = $(e).attr("id");
            var form = new mini.Form("#" + id);
            var data = form.getData();
            config[i] = data;
            mini.get("validatorEditor").hide();
            if (call) {
                call(config);
            }
        })
    });
    $(".add-validator").unbind("click").on("click", function () {
        var len = container.children().length;
        addForm("validator-" + (len), len, {});
        mini.parse();
    });

    function addForm(formId, index, data) {
        var defaultEditor = ["<div id='", formId, "' class=\"mini-col-12\">",
            "<h3>规则", index + 1, "&nbsp;<i onclick=\"$('#" + formId + "').remove()\" class=\"fa fa-minus red\" style=\"cursor: pointer\"></i></h3>",
            "规则:<input name='type' style=\"width: 30%\" data=\"validatorData\" valueField=\"type\" class=\"mini-combobox\">",
            "分组:<input name='groups' style=\"width: 100px\" data=\"groups\" multiSelect=\"true\" class=\"mini-combobox\"><br><br>",
            "提示:<input name='message' style=\"width: 60%\" class=\"mini-textbox\">",
            "<div class='more-properties' style='margin-top: 15px'></div>",
            "</div>"];
        container.append(defaultEditor.join(""));

        mini.parse();
        var form = new mini.Form("#" + formId);
        form.getField("type").setValue(data.type);
        form.getField("type").on("valueChanged", function (e) {
            var selected = e.selected;
            var html = $("#" + formId + " .more-properties");
            html.html("");
            if (selected && selected.createEditor) {
                selected.createEditor(html);
            }
            mini.parse();
        });
        form.getField("type").doValueChanged();
        window.setTimeout(function () {
            form.setData(data);
        }, 100)
    }

    $(config).each(function (index, conf) {
        var formId = "validator-" + index;
        addForm(formId, index, conf);
    })
}

function initDictEditor(config, call) {
    var form = new mini.Form("#dictConfigFrom");
    $(".save-dict")
        .unbind("click")
        .on("click", function () {
            call(new mini.Form("#dictConfigFrom").getData());
            mini.get("dictEditor").hide();
        });
    form.setData(config);
    mini.get("dictType").doValueChanged();
    window.setTimeout(function () {
        form.setData(config);
    }, 100)
}

/**
 * 初始化字段表格
 */
function initColumnGrid() {
    var columnGrid = mini.get("column-grid");

    mini.get("dictType")
        .on("valueChanged", function (e) {
            $("#dictConfigDiv").html("");
            var selected = e.selected;
            if (selected && selected.createEditor) {
                selected.createEditor($("#dictConfigDiv"));
                mini.parse();
            }
        });

    columnGrid.getColumn("dictConfig").renderer = function (e) {
        return tools.createActionButton("编辑", "icon-edit", function () {
            var dictConfig = e.record.dictConfig;
            if (!dictConfig) {
                dictConfig = JSON.stringify({
                    toField: e.record.alias + "Obj", config:
                        {multi: "false", fast: "true", writeObject: 'true'}
                });
            }
            dictConfig = JSON.parse(dictConfig);
            initDictEditor(dictConfig, function (result) {
                // e.record.dictConfig = JSON.stringify(result);
                e.sender.updateRow(e.record, {dictConfig: JSON.stringify(result)})
            });
            mini.get("dictEditor").show();
        });
    };

    mini.get("column-grid").getColumn("validator").renderer = function (e) {
        return tools.createActionButton("编辑", "icon-edit", function () {
            var validator = e.record.validator;

            if (!validator) {
                validator = [];
            }
            $(validator).each(function (i, e) {
                validator[i] = typeof e === 'string' ? JSON.parse(e) : e;
            });
            initValidatorEditor(validator, function (result) {
                $(result).each(function (i, e) {
                    result[i] = JSON.stringify(e);
                });
                e.sender.updateRow(e.record, {validator:validator,t:new Date()})
            });
            mini.get("validatorEditor").show();
        });
    };
    //单元格编辑完成事件
    mini.get("column-grid").on("cellcommitedit", function (e) {
        var column = e.column;
        var row = e.record;

        if (column.field === "name") {
            if (e.value) {
                if (!row.describe) {
                    row.describe = e.value;
                }
                if (e.value.indexOf("日期") != -1 || e.value.indexOf("有效期") != -1) {
                    row.jdbcType = "DATE";
                    row.javaType = "Date";
                }
                else if (e.value.indexOf("是否") != -1) {
                    row.jdbcType = "NUMERIC";
                    row.javaType = "Boolean";
                    row.lengthString = "1,0";
                }
                else if (e.value.indexOf("金额") != -1) {
                    row.jdbcType = "NUMERIC";
                    row.javaType = "BigDecimal";
                    row.lengthString = "38,4";
                } else {
                    row.jdbcType = "VARCHAR";
                    row.javaType = "String";
                    row.lengthString = "256";
                }
                e.sender.updateRow(row);
            }
        } else if (column.field === "columnName") {
            row.alias = transformStr(e.value);
            e.sender.updateRow(row);
        }
        else if (column.field === "jdbcType") {
            if (!row.javaType && e.value) {
                row.javaType = jdbcJavaMapping[e.value];
                if (!e.lengthString) {
                    row.lengthString = lengthMapping[e.value + "-" + row.javaType];
                }
                if (row.javaType)
                    e.sender.updateRow(row);
            }
        } else if (column.field === "javaType") {
            if (e.value && row.jdbcType) {
                row.lengthString = lengthMapping[row.jdbcType + "-" + e.value];
                if (!row.lengthString) {
                    row.length = null;
                    row.precision = null;
                    row.scale = null
                }
                e.sender.updateRow(row);
            }
        } else if (column.field === "lengthString") {
            if (!e.value) {
                row.length = null;
                row.precision = null;
                row.scale = null
            }
        }
    })
}

window.renderAction = function (e) {
    return tools.createActionButton("删除", "icon-remove", function () {
        e.sender.removeRow(e.record);
    });
};
window.renderJdbcType = function (e) {
    return e.value;
};
window.renderJavaType = function (e) {
    return e.value;
}
window.renderLength = function (e) {
    var row = e.record;
    if (row.lengthString) {
        if (row.lengthString.indexOf(",") !== -1) {
            var l = row.lengthString.split(",");
            row.precision = l[0];
            row.scale = l[1];
            row.length = l[0];
        } else {
            row.precision = row.lengthString;
            row.length = row.lengthString;
        }
    } else if (row.length || row.precision || row.scale) {
        if (typeof row.precision !== 'undefined' && typeof row.scale !== 'undefined') {
            row.lengthString = row.precision + (typeof row.scale === 'undefined' ? "" : "," + row.scale)
        } else {
            row.lengthString = row.length + "";
        }
    }
    return row.lengthString;
}
window.renderColumnAction = function (e) {
    var row = e.record;
    var html = [];
    if (row._state == "added" || row._state == "modified") {
        html.push(tools.createActionButton("保存", "icon-save", function () {
            var api = "dynamic/form/column";
            require(["request", "message"], function (request, message) {
                var loading = message.loading("保存中...");
                var formId = request.getParameter("id");
                if (formId) {
                    row.formId = formId;
                }
                request.patch(api, row, function (res) {
                    loading.close();
                    if (res.status == 200) {
                        row.id = res.result;
                        e.sender.updateRow(row);
                        e.sender.acceptRecord(row);
                        message.showTips("保存成功!");
                    } else {
                        message.showTips("保存失败:" + res.message, "danger");
                    }
                })
            });
        }));
    }
    html.push(tools.createActionButton("删除", "icon-remove", function () {
        if (!row.id) {
            e.sender.removeRow(e.record);
        } else {
            //调用后台删除
            require(["request", "message"], function (request, message) {
                request["delete"]("dynamic/form/column?ids=" + row.id, {}, function (response) {
                    if (response.status == 200) {
                        e.sender.removeRow(e.record);
                    } else {
                        message.showTips("删除失败:" + response.message);
                    }
                });
            });
        }
    }));
    return html.join("");
}