importResource("/admin/css/common.css");


var defaultPassword = Math.random() + "";

importMiniui(function () {
    mini.parse();
    require(["request", "miniui-tools"], function (request, tools) {
        var api = "datasource/config";
        var func = request.patch;
        var id = request.getParameter("id");
        mini.get("datagrid").getColumn("action").renderer = function (e) {
            return tools.createActionButton("删除", "icon-remove", function () {
                e.sender.removeRow(e.record);
            })
        };

        if (id) {
            loadData(id);
        } else {
            mini.get("datagrid").setData([
                {
                    key: "driverClassName"
                },
                {
                    key: "url"
                },
                {
                    key: "username"
                },
                {
                    key: "password"
                },
                {
                    key: "type", value: "com.alibaba.druid.pool.DruidDataSource"
                },
                {
                    key: "initTimeout", value: "10"
                }
            ]);
        }
        $(".save-button").on("click", (function () {
            require(["message"], function (message) {
                var data = getDataAndValidate();
                if (!data) return;
                var loading = message.loading("提交中");
                func(api, data, function (response) {
                    loading.close();
                    if (response.status === 200) {
                        message.showTips("保存成功");
                        if (!id) id = response.result;
                    } else {
                        message.showTips("保存失败:" + response.message, "danger");
                        if (response.result)
                            tools.showFormErrors("#basic-info", response.result);
                    }
                })
            });
        }));
    });
});

function loadData(id) {
    require(["request", "message"], function (request, message) {
        var loading = message.loading("加载中...");
        request.get("datasource/config/" + id, function (response) {
            loading.hide();
            if (response.status === 200) {
                response.result.password = defaultPassword;
                new mini.Form("#basic-info").setData(response.result);
                var properties = [];
                for (var key in response.result.properties) {
                    properties.push({key: key, value: response.result.properties[key]})
                }
                properties.sort(function (i1, i2) {
                    if (i1.key > i2.key) {
                        return -1;
                    } else if (i1.key < i2.key) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                mini.get("datagrid").setData(properties);
            } else {
                message.showTips("加载数据失败", "danger");
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
    var properties = {};
    $(mini.get("datagrid").getData())
        .each(function () {
            properties[this.key] = this.value;
        });
    data.properties = properties;
    return data;
}
