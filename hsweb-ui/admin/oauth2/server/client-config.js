importResource("/admin/css/common.css");

importMiniui(function () {
    require(["request", "miniui-tools"], function (request, tools) {
        mini.parse();
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);

        grid.setUrl(request.basePath + "oauth2/client/config");

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/oauth2/server/save-client.html", "添加客户端", "550", "430", function (e) {
                grid.reload();
            })
        });
        search();
        window.renderStatus = function (e) {
            return e.value==1 ? "是" : "否";
        }
        function edit(id) {
            tools.openWindow("admin/oauth2/server/save-client.html?id="+id, "编辑客户端", "550", "430", function (e) {
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
                tools.createActionButton("刷新密钥", "icon-reload", function () {

                })
            );
            return html.join("");
        }

    });
});
