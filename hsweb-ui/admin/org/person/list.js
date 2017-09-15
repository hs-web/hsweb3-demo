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
            grid.setUrl(API_BASE_PATH + "person?paging=false");
            $(".search-button").on("click", function () {
                var keyword = mini.getbyName("keyword").getValue();
                var param = {};
                if (keyword && keyword.length > 0) {
                    require(["request"], function (request) {
                        param = request.createQuery().where()
                            .like("name", "%" + keyword + "%")
                            .or().like("phone", "%" + keyword + "%")
                            .getParams();
                        grid.load(param);
                    });
                } else {
                    grid.load(param);
                }
            });
        });
       /* initPerson();
        function initPerson() {
            var grid = window.grid = mini.get("data-grid");
            grid.getColumn("sex").renderer = function (e) {
                return e.valueOf === 1 ? "男" : "女";
            };
        }*/
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
function loadPerson() {
    if (window.nowSelectedPostion) {
        require(["request", "message"], function (request, message) {
            person_grid.loading("加载中");
            request.get("person/in-position/" + window.nowSelectedPostion.id, function (response) {
                person_grid.unmask();
                if (response.status == 200) {
                    person_grid.setData(response.result);
                } else {
                    message.showTips("加载失败:" + response.message);
                }
            });
        });
    }
    grid.reload();
}

window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("编辑", "icon-edit", function () {
        tools.openWindow("admin/org/manager/person/save.html?id=" + e.record.id, "编辑人员", 800, 650, loadPerson);
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