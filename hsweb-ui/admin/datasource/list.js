importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["request", "miniui-tools"], function (request, tools) {

        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);

        grid.setUrl(request.basePath + "datasource/config");

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/datasource/save.html", "添加数据源", "650", "530", function (e) {
                grid.reload();
            })
        });
        search();
        function edit(id) {
            tools.openWindow("admin/datasource/save.html?id=" + id, "编辑数据源", "650", "530", function (e) {
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
            return html.join("");
        }

    });
});
