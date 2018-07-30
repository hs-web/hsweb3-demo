importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools"], function (tools) {
        window.tools = tools;
        var grid = window.grid = mini.get("form-grid");
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + "dynamic/form?paging=false");

        function search() {
            var keyword = mini.getbyName("keyword").getValue();
            var param = {};
            if (keyword && keyword.length > 0) {
                require(["request"], function (request) {
                    param = request.createQuery().where()
                        .like("name", "%" + keyword + "%")
                        .or().like("databaseTableName", "%" + keyword + "%")
                        .or().like("describe", "%" + keyword + "%")
                        .getParams();
                    grid.load(param);
                });
            } else {
                grid.load(param);
            }
        }

        tools.bindOnEnter("#search-box", search);
        $(".search-button").on("click", search);
        search();

        $(".add-menu-button").on("click", function () {
            tools.openWindow("admin/form/save.html", "新建表单", "80%", "80%", function () {
                grid.reload();
            });
        });
    });

})
window.renderDeploy = function (e) {
    var html = "";
    var row = e.record;
    if (e.value === true) {
        html = tools.createActionButton("已发布,取消发布", "icon-remove", function () {
            var api = "dynamic/form/" + row.id + "/un-deploy";
            require(["request", "message"], function (request, message) {
                message.confirm("确认取消发布表单:" + row.name, function () {
                    var loading = message.loading("取消中...");
                    request.put(api, row, function (res) {
                        loading.close();
                        if (res.status === 200) {
                            grid.reload();
                        } else {
                            message.showTips("取消失败:" + res.message, "danger");
                        }
                    })
                });
            });
        });
    } else {
        html = tools.createActionButton("未发布,现在发布", "icon-ok", function () {
            var api = "dynamic/form/" + row.id + "/deploy";
            require(["request", "message"], function (request, message) {
                message.confirm("确认发布表单:" + row.name, function () {
                    var loading = message.loading("发布中...");
                    request.put(api, row, function (res) {
                        loading.close();
                        if (res.status === 200) {
                            grid.reload();
                        } else {
                            message.showTips("发布失败:" + res.message, "danger");
                        }
                    })
                });
            });
        })
    }

    return html
}

window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("编辑", "icon-edit", function () {
        tools.openWindow("admin/form/save.html?id=" + row.id, "编辑表单" + row.name, "80%", "80%", function () {
            grid.reload();
        });
    }));

    // html.push(tools.createActionButton("设置字段", "icon-table-column", function () {
    //     tools.openWindow("admin/form/column-setting.html", "设置字段:" + row.name, 800, 500, function () {
    //     });
    // }));

    if (!row.deployed) {
        html.push(tools.createActionButton("删除", "icon-remove", function () {
            require(["message", "request"], function (message, request) {
                message.confirm("确定删除此表单,删除后将无法恢复", function () {
                    var box = message.loading("删除中...");
                    request["delete"]("dynamic/form/" + row.id, function (response) {
                        box.hide();
                        if (response.status === 200) {
                            grid.reload();
                        } else {
                            message.showTips("删除失败:" + response.message, "danger");
                        }
                    });
                });
            });
        }));
    }

    return html.join("");
}
