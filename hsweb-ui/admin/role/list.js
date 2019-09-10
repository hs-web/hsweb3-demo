importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools","request"], function (tools,request) {
        window.tools = tools;

        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + "role");

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/role/save.html", "添加角色", "600", "300", function (e) {
                grid.reload();
            })
        });
        search();

        window.renderAction = function (e) {
            var row = e.record;

            var html = [
                tools.createActionButton("编辑", "icon-edit", function () {
                    edit(row.id);
                })
            ];
            if (request.getParameter("selector") === '1') {
                html.push(
                    tools.createActionButton("选中", "icon-ok", function () {
                        tools.closeWindow(row);
                    })
                );
            } else {
                html.push(
                    tools.createActionButton("角色赋权", "icon-find", function () {
                        tools.openWindow("admin/autz-settings/setting.html?priority=20&merge=true&type=role&settingFor=" + row.id, "角色赋权-" + row.name, "800", "600", function () {

                        });
                    })
                )
            }
            return html.join("");
        }

    });
});

window.renderStatus = function (e) {
    return e.value == 1 ? "是" : "否";
}

function edit(id) {
    tools.openWindow("admin/role/save.html?id=" + id, "编辑角色", "600", "300", function (e) {
        grid.reload();
    })
}

