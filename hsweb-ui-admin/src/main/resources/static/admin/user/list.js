importResource("/admin/css/common.css");

importMiniui(function () {
    require(["request", "miniui-tools"], function (request, tools) {
        mini.parse();
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);

        grid.setUrl(request.basePath + "user");

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/user/save.html", "添加用户", "550", "430", function (e) {
                grid.reload();
            })
        });
        search();
        window.renderStatus = function (e) {
            return e.value==1 ? "是" : "否";
        }
        function edit(id) {
            tools.openWindow("admin/user/save.html?id=" + id, "编辑用户", "550", "430", function (e) {
                grid.reload();
            })
        }

        window.renderAction = function (e) {
            var row = e.record;

            var html = [
                tools.createActionButton("编辑", "icon-edit", function () {
                    edit(row.id);
                })
            ];
            html.push(
                tools.createActionButton("用户赋权", "icon-find", function () {
                    tools.openWindow("admin/autz-settings/setting.html?priority=10&merge=false&type=user&settingFor=" + row.id,
                        "用户赋权-" + row.name, "800", "600", function () {
                        });
                })
            );
            return html.join("");
        }

    });
});
