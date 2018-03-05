importResource("/admin/css/common.css");

var validatorData = [
    {
        text: "不能为空", id: "NotNull"
    }
];

var jdbcType = [
    "VARCHAR", "NVARCHAR", "NUMERIC", "DATE", "CLOB", "BLOB"
];
var jdbcJavaMapping = {
    "VARCHAR": "String",
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
            var loading = message.loading("提交中");
            func(api, {form: form, columns: getColumns()}, function (response) {
                loading.close();
                if (response.status == 200) {
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
});

function getColumns() {
    var columns = mini.clone(mini.get("column-grid").getData());

    return columns;
}

function loadData(id) {
    require(["miniui-tools", "request", "message"], function (tools, request, message) {
        var loading = message.loading("加载中...");
        request.get("dynamic/form/" + id, function (response) {
            loading.hide();
            if (response.status == 200) {
                new mini.Form("#basic-info").setData(response.result);
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
            if (response.status == 200) {
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

/**
 * 初始化字段表格
 */
function initColumnGrid() {
    //单元格编辑完成事件
    mini.get("column-grid").on("cellcommitedit", function (e) {
        var column = e.column;
        var row = e.record;

        if (column.field == "name") {
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
        } else if (column.field == "columnName") {
            row.alias = transformStr(e.value);
            e.sender.updateRow(row);
        }
        else if (column.field == "jdbcType") {
            if (!row.javaType && e.value) {
                row.javaType = jdbcJavaMapping[e.value];
                if (!e.lengthString) {
                    row.lengthString = lengthMapping[e.value + "-" + row.javaType];
                }
                if (row.javaType)
                    e.sender.updateRow(row);
            }
        } else if (column.field == "javaType") {
            if (e.value && row.jdbcType) {
                row.lengthString = lengthMapping[row.jdbcType + "-" + e.value];
                if (!row.lengthString) {
                    row.length = null;
                    row.precision = null;
                    row.scale = null
                }
                e.sender.updateRow(row);
            }
        } else if (column.field == "lengthString") {
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
        if (row.lengthString.indexOf(",") != -1) {
            var l = row.lengthString.split(",");
            row.precision = l[0];
            row.scale = l[1];
            row.length = l[0];
        } else {
            row.precision = row.lengthString;
            row.length = row.lengthString;
        }
    } else if (row.length || row.precision || row.scale) {
        if (typeof row.precision != 'undefined' && typeof row.scale != 'undefined') {
            row.lengthString = row.precision + (typeof row.scale == 'undefined' ? "" : "," + row.scale)
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