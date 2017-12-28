importResource("/admin/css/common.css");

require(["authorize"], function (authorize) {
    authorize.parse(document.body);
    window.authorize = authorize;
    importMiniui(function () {
        require(["miniui-tools"], function (tools) {
            mini.parse();
            window.tools = tools;
            var grid = window.grid = mini.get("data-grid");
            tools.initGrid(grid);
            var position_grid = mini.get("position-grid");
            //加载查询职位选择项
            require(["request"], function (request) {
                request.get("position?paging=false",function (response) {
                    position_grid.loadList(response.result.data,"id","parentId");
                });
            });
            grid.setUrl(API_BASE_PATH + "person?paging=false");
            $(".search-button").on("click", function () {
                tools.searchGrid("#search-box", grid, null);
            });
            $(".add-button").on("click", function () {
                tools.openWindow("admin/org/person/addPerson.html", "新建人员", 800, 650, loadPerson, function () {
                });
            });
            /**
             * 加载人员数据
             */
            function loadPerson() {
                grid.reload();
            }
        });
        window.renderSex = function (e) {
            var name = '';
            if (e.value == 1) {
                name = '男';
            } else if (e.value == 0) {
                name = '女';
            } else {
                name = '';
            }
            return name;
        }
        window.renderStatus = function (e) {
            var name = '';
            if (e.value == 1) {
                name = '在职';
            } else {
                name = '离职';
            }
            return name;
        }
    });
});

window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("编辑", "icon-edit", function () {
        tools.openWindow("admin/org/manager/person/save.html?id=" + e.record.id, "编辑人员", 800, 650, function (e) {
            grid.reload();
        });
    }));
    html.push(tools.createActionButton("删除人员", "icon-remove", function (){
        if (row._state == "added" || row._state == "modified") {
            e.sender.removeNode(row);
        }else {
            require(["request", "message"], function (request, message) {
                message.confirm("确定删除该人员?", function () {
                    var loading = message.loading("删除中...");
                    request["delete"]("person/" + row.id, {}, function (res) {
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
    }));
    return html.join("");
}