importResource("/admin/css/common.css");

importMiniui(function () {
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
        var api = "role";
        var func = request.post;
        var id = request.getParameter("id");
        if (id) {
            loadData(id);
            api += "/" + id;
            func = request.put;
        }
        $(".save-button").on("click", (function () {
            var data = getDataAndValidate();
            if (!data)return;
            var loading = message.loading("提交中");
            func(api, data, function (response) {
                loading.close();
                if (response.status == 200 || response.status == 201) {
                    message.showTips("保存成功");
                    if (!id) id = response.result;
                } else {
                    message.showTips("保存失败:" + response.message, "danger");
                    if (response.result)
                        tools.showFormErrors("#basic-info", response.result);
                }
            })
        }));
    });
});
function loadData(id) {
    require(["miniui-tools", "request", "message"], function (tools, request, message) {
        var loading = message.loading("加载中...");
        request.get("role/" + id, function (response) {
            loading.hide();
            if (response.status == 200) {
                new mini.Form("#basic-info").setData(response.result);
                mini.getbyName("id").setReadOnly(true);
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
    return form.getData();
}