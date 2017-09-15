importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools"], function (tools) {
        window.tools = tools;
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + "permission");
        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/permission/save.html", "添加权限信息", "80%", "80%", function (e) {
                grid.reload();
            })
        });
        search();
    });
});

window.renderStatus = function (e) {
    return e.value == 1 ? "正常" : "失效";
}
function edit(id) {
    tools.openWindow("admin/permission/save.html?id=" + id, "编辑权限信息", "80%", "80%", function (e) {
        grid.reload();
    })
}
function updatePermissionStatus(id, status) {

}
window.renderAction = function (e) {
    var row = e.record;
    var html = [
        tools.createActionButton("编辑", "icon-edit", function () {
            edit(row.id);
        })
    ];
    /*if (row.status == 0) {
        html.push(
            tools.createActionButton("启用", "icon-ok", function () {
                updatePermissionStatus(row.id, 1);
            })
        )
    } else {
        html.push(
            tools.createActionButton("禁用", "icon-exclamation", function () {
                updatePermissionStatus(row.id, 0);
            })
        )
    }*/
    html.push(
        tools.createActionButton("删除", "icon-remove", function () {
            if (row._state == "added") {
                e.sender.removeNode(row);
            } else {
                require(["request", "message"], function (request, message) {
                    message.confirm("确定删除该权限?", function () {
                        var loading = message.loading("删除中...");
                        request["delete"]("permission/" + row.id, {}, function (res) {
                            loading.close();
                            if (res.status == 200) {
                                e.sender.removeNode(row);
                            } else {
                                message.showTips("删除失败:" + res.message);
                            }
                        })
                    });
                })
            }
        })
    )
    return html.join("");
}

