importResource("/admin/css/common.css");

require(["authorize"], function (authorize) {
    authorize.parse(document.body);
    window.authorize = authorize;
    importMiniui(function () {
        mini.parse();
        require(["miniui-tools"], function (tools) {
            window.tools = tools;
            var grid = window.grid = mini.get("data-grid");
            tools.initGrid(grid);
            grid.setUrl(API_BASE_PATH + "organizational?paging=false");
            $(".search-button").on("click", function () {
                var keyword = mini.getbyName("keyword").getValue();
                var param = {};
                if (keyword && keyword.length > 0) {
                    require(["request"], function (request) {
                        param = request.createQuery().where()
                            .like("name", "%" + keyword + "%")
                            .or().like("fullName", "%" + keyword + "%")
                            .or().like("code", "%" + keyword + "%")
                            .getParams();
                        grid.load(param);
                    });
                } else {
                    grid.load(param);
                }
            });
            $(".save-all-button").on("click", function () {
                require(["request", "message"], function (request, message) {
                    message.confirm("确认保存全部机构数据", function () {
                        grid.loading("保存中...");
                        request.patch("organizational/batch", grid.getData(), function (response) {
                            if (response.status == 200) {
                                message.showTips("保存成功");
                                grid.reload();
                            } else {
                                message.showTips("保存失败:" + response.message);
                            }
                        });
                    });
                })
            });
        });
    });
});

window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    if (authorize.hasPermission("organizational", "add")) {
        html.push(tools.createActionButton("添加子机构", "icon-add", function () {
            var sortIndex = row.sortIndex ? (row.sortIndex + "0" + (row.chidren ? row.chidren.length + 1 : 1)) : 1;
            grid.addNode({sortIndex: sortIndex}, row.chidren ? row.chidren.length : 0, row);
        }));
    }
    html.push(
        tools.createActionButton("机构赋权", "icon-find", function () {
            tools.openWindow("admin/autz-settings/setting.html?priority=40&merge=true&type=org&settingFor=" + row.id,
                "机构赋权-" + row.name, "800", "600", function () {
                });
        })
    );
    if (row._state == "added" || row._state == "modified") {
        html.push(tools.createActionButton("保存", "icon-save", function () {
            var api = "organizational/";
            require(["request", "message"], function (request, message) {
                var loading = message.loading("保存中...");
                request.patch(api, row, function (res) {
                    loading.hide();
                    if (res.status == 200) {
                        request.get(api + res.result, function (data) {
                            grid.updateNode(row, data.result);
                            grid.acceptRecord(row);
                            message.showTips("保存成功!");
                        });
                    } else {
                        message.showTips("保存失败:" + res.message, "danger");
                    }
                })
            });
        }));
    }
    return html.join("");
}