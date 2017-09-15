importResource("/admin/css/common.css");

var allSupportDataAccessTypes = [
    {id: "DENY_FIELDS", text: "禁止访问字段"},
    {id: "ONLY_SELF", text: "仅限本人"},
    {id: "POSITION_SCOPE", text: "仅限本人及下属"},
    {id: "DEPARTMENT_SCOPE", text: "所在部门"},
    {id: "ORG_SCOPE", text: "所在机构"},
    {id: "CUSTOM_SCOPE_ORG_SCOPE_", text: "自定义设置-机构"},
    {id: "CUSTOM_SCOPE_DEPARTMENT_SCOPE_", text: "自定义设置-部门"},
    {id: "CUSTOM_SCOPE_POSITION_SCOPE_", text: "自定义设置-岗位"}
];
var defaultActionData = [
    {"action": "query", "describe": "查询列表", defaultCheck: true},
    {"action": "get", "describe": "查询明细", defaultCheck: true},
    {"action": "add", "describe": "新增", defaultCheck: true},
    {"action": "update", "describe": "修改", defaultCheck: true},
    {"action": "delete", "describe": "删除", defaultCheck: false}
];

importMiniui(function () {
    mini.parse();
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
        var api = "permission";
        var func = request.post;
        var id = request.getParameter("id");
        if (id) {
            loadData(id);
            api += "/" + id;
            func = request.put;
        } else {
            mini.get("action-grid").setData(defaultActionData);
        }
        $(".save-button").on("click", (function () {
            var data = getDataAndValidate();
            if (!data)return;
            require(["message"], function (message) {
                var loading = message.loading("提交中");
                func(api, data, function (response) {
                    loading.close();
                    if (response.status == 200) {
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
        return this.id == e.value;
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
}
function loadData(id) {
    require(["request", "message"], function (request, message) {
        var loding = message.loading("加载中...");
        request.get("permission/" + id, function (response) {
            loding.close();
            if (response.status == 200) {
                if (response.result.supportDataAccessTypes)
                    response.result.supportDataAccessTypes = response.result.supportDataAccessTypes + "";

                new mini.Form("#basic-info").setData(response.result);

                mini.getbyName("id").setReadOnly(true);
                mini.get('action-grid').setData(response.result.actions);
                $(response.result.optionalFields).each(function () {
                    this.actions = this.actions + "";
                });
                mini.get('field-accesses-grid').setData(response.result.optionalFields);
            } else {
                message.showTips("加载数据失败", "danger");
            }
        });
    });
}
function getDataAndValidate() {
    var form = new mini.Form("#basic-info");
    form.validate();
    if (form.isValid() == false) {

        return;
    }
    var data = form.getData();
    data.actions = mini.get('action-grid').getData();
    // data.dataAccess = mini.get('data-accesses-grid').getData();
    data.optionalFields = mini.clone(mini.get('field-accesses-grid').getData());
    data.supportDataAccessTypes = data.supportDataAccessTypes.split(",");
    $(data.optionalFields).each(function () {
        if (this.actions)
            this.actions = this.actions.split(",");
    });
    return data;
}