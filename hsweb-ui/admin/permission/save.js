importResource("/admin/css/common.css");
importResource("/admin/form/designer-drag/defaults.css")
var allSupportDataAccessTypes = [
    {id: "DENY_FIELDS", text: "字段权限"},
    {id: "OWN_USER", text: "仅限本人"},
    {id: "POSITION_SCOPE", text: "仅限本人及下属"},
    {id: "DEPARTMENT_SCOPE", text: "所在部门"},
    {id: "ORG_SCOPE", text: "所在机构"}
];

var types = [
    {id: "default", text: "默认"},
    {id: "sys", text: "系统"},
    {id: "biz", text: "业务功能"},
    {id: "api", text: "API接口"}

];

var defaultActionData = [
    {"action": "query", "describe": "查询列表", defaultCheck: true},
    {"action": "get", "describe": "查询明细", defaultCheck: true},
    {"action": "add", "describe": "新增", defaultCheck: true},
    {"action": "update", "describe": "修改", defaultCheck: true},
    {"action": "delete", "describe": "删除", defaultCheck: false},
    {"action": "import", "describe": "导入", defaultCheck: true},
    {"action": "export", "describe": "导出", defaultCheck: true}
];
var allSupportDataAccessTypesMap = {};


importMiniui(function () {
    mini.parse();
    $(allSupportDataAccessTypes).each(function () {
        allSupportDataAccessTypesMap[this.id] = this;
    });

    require(["miniui-tools", "request"], function (tools, request) {
        window.tools = tools;
        mini.getbyName("id").on("validation", function (e) {
            if (e.isValid) {
                var re = new RegExp("^[a-zA-Z0-9_\-]+$");
                e.isValid = re.test(e.value);
                if (!e.isValid) {
                    e.errorText = "必须由数字,字母,下划线,-组成";
                }
            }
        });
        tools.initGrid(mini.get("field-accesses-grid"));

        var actionGrid = mini.get("action-grid");
        var parentGrid = mini.get('parent-grid');
        var allPermission = [];
        var allPermissionMap = [];

        var api = "permission";
        var func = request.post;
        var id = request.getParameter("id");
        if (id) {
            loadData(id);
            func = request.patch;
        } else {
            actionGrid.setData(defaultActionData);
        }


        request.createQuery("permission/no-paging")
            .where()
            .not("id", id)
            .exec(function (resp) {
                allPermission = resp.result;
                $(allPermission).each(function () {
                    this.text = this.name + "(" + this.id + ")";
                    $(this.actions).each(function () {
                        this.text = this.describe + "(" + this.action + ")";
                    });
                    allPermissionMap[this.id] = this;
                })
            });

        actionGrid.getColumn('supportDataAccess').renderer = function (e) {
            var val = e.value;

            if (!val) {
                return "";
            }
            var list = val.split(",");

            var arr = [];
            $(list).each(function () {
                var t = allSupportDataAccessTypesMap[this];
                if (t) {
                    arr.push(t.text);
                }
            });
            return arr.join(",");
        };


        parentGrid.getColumn("preActions").renderer = function (e) {
            var val = e.value;
            if (!val) {
                return "";
            }
            val = val.split(",");
            var arr = [];
            var list = actionGrid.getData();
            $(list).each(function () {
                if (val.indexOf(this.action) !== -1) {
                    arr.push(this.describe + "(" + this.action + ")")
                }
            });
            return arr.join(",");
        };

        parentGrid.getColumn("permission").renderer = function (e) {
            var val = e.value;
            if (!val) {
                return "";
            }
            var permission = allPermissionMap[val];
            if (permission) {
                return permission.name + "(" + permission.id + ")";
            }
        };

        parentGrid.getColumn("actions").renderer = function (e) {
            var val = e.value;
            if (!val) {
                return "";
            }
            val = val.split(",");
            var arr = [];

            var permission = allPermissionMap[e.record.permission];
            if (!permission) {
                return val;
            }
            var list = permission.actions;
            $(list).each(function () {
                if (val.indexOf(this.action) !== -1) {
                    arr.push(this.describe + "(" + this.action + ")")
                }
            });
            return arr.join(",");
        };

        parentGrid.on("cellbeginedit", function (e) {

            if (e.field === 'preActions') {
                var list = mini.clone(actionGrid.getData());
                $(list).each(function () {
                    this.text = this.describe + "(" + this.action + ")";
                });
                e.editor.setData(list)
            } else if (e.field === 'permission') {
                e.editor.setData(allPermission)
            } else if (e.field === 'actions') {
                var permission = allPermissionMap[e.record.permission] || {actions: []};
                e.editor.setData(mini.clone(permission.actions))
            }
        });

        actionGrid.on("cellbeginedit", function (e) {

            if (e.column.name === 'supportDataAccess') {
                var selected = mini.getbyName('supportDataAccessTypes').getSelecteds();
                e.editor.setData(mini.clone(selected))
            }
        });

        $(".save-button").on("click", (function () {
            var data = getDataAndValidate();
            if (!data) return;
            require(["message"], function (message) {
                var loading = message.loading("提交中");
                func(api, data, function (response) {
                    loading.close();
                    if (response.status === 200) {
                        message.showTips("保存成功");
                        if (!id) id = response.result;
                    } else {
                        message.showTips("保存失败:" + response.message, "danger");
                        if (response.result)
                            message.showFormErrors("#basic-info", response.result);
                    }
                })
            });
        }));
    });
});

window.dataAccessesType = [
    {text: "只能操作自己创建的数据", id: "OWN_CREATED"},
    // {text: "脚本", id: "SCRIPT"},
    {text: "自定义控制器", id: "CUSTOM"}
    // {text: "自定义控制器", id: "CUSTOM"},
];

window.renderDataAccessedType = function (e) {
    var value = $(dataAccessesType).filter(function () {
        return this.id === e.value;
    });
    return value[0] ? value[0].text : e.value;
}
window.renderAction = function (e) {
    var row = e.record;
    return [
        tools.createActionButton("删除", "icon-remove", function () {
            e.sender.removeRow(row);
        })
    ].join("");
}
window.rendererTrueFalse = function (e) {
    return e.value ? "是" : "否";
};

function loadData(id) {
    require(["request", "message"], function (request, message) {
        var loding = message.loading("加载中...");
        request.get("permission/" + id, function (response) {
            loding.close();
            if (response.status === 200) {
                if (response.result.supportDataAccessTypes)
                    response.result.supportDataAccessTypes = response.result.supportDataAccessTypes + "";

                new mini.Form("#basic-info").setData(response.result);

                $(response.result.parents).each(function () {
                    this.actions = this.actions.join(",");
                    this.preActions = this.preActions.join(",");

                });
                mini.getbyName("id").setReadOnly(true);
                mini.get('action-grid').setData(response.result.actions);
                mini.get('parent-grid').setData(response.result.parents);

                if (response.result.optionalFields && response.result.optionalFields.length > 0) {
                    console.log(response.result.optionalFields)
                    mini.get('field-accesses-grid').setData(response.result.optionalFields);
                } else {
                    getDataView(id);
                }

                loadAccessTypesAndType();
            } else if (response.status === 404) {
                loadAccessTypesAndType();
                getDataView(id);
                mini.getbyName("id").setReadOnly(true);
                mini.getbyName("id").setValue(id);
                var name = request.getParameter("name");
                if (name) mini.getbyName("name").setValue(name);

                defaultActionData.forEach(function (data) {
                    if ("delete" !== data.action) {
                        data.properties={supportDataAccess: "DENY_FIELDS"};
                    }
                });

                mini.get('action-grid').setData(defaultActionData);
            } else {
                message.showTips("加载数据失败", "danger");
            }
        });
    });
}

function loadAccessTypesAndType() {
    var type = mini.getbyName("type");
    var supportDataAccessTypes = mini.getbyName("supportDataAccessTypes");
    if (!type.getValue()) {
        type.setValue("api");
    }
    if (!supportDataAccessTypes.getValue()) {
        supportDataAccessTypes.setValue("DENY_FIELDS");
    }
}

function getDataView(id) {
    require(["request"], function (request) {
        request.get("data-standards-service/data-standards/model/" + id, function (response) {
            if (response.status === 200) {
                var data = response.result;
                if (data.datasourceConf) {
                    var datasourceConf = JSON.parse(data.datasourceConf);
                    var viewData = [];
                    if (datasourceConf.columnGrid) {
                        datasourceConf.columnGrid.forEach(function (e) {
                            viewData.push({name: e.alias, describe: e.describe});
                        });
                    }
                    mini.get('field-accesses-grid').setData(viewData);
                }
            }
        });
    });
}

function getDataAndValidate() {
    var form = new mini.Form("#basic-info");
    form.validate();
    if (form.isValid() === false) {
        return;
    }
    var data = form.getData();
    data.actions = mini.get('action-grid').getData();
    data.optionalFields = mini.clone(mini.get('field-accesses-grid').getData());
    data.supportDataAccessTypes = data.supportDataAccessTypes.split(",");
    data.parents = mini.clone(mini.get('parent-grid').getData());

    $(data.parents).each(function () {
        this.actions=this.actions.split(",");
        this.preActions=this.preActions.split(",");

    });

    $(data.optionalFields).each(function () {
        if (this.actions)
            this.actions = this.actions.split(",");
    });
    return data;
}