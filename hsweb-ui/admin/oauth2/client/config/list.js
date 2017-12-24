importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools","request"], function (tools,request) {
        window.tools = tools;
        var grid = window.grid = mini.get("datagrid");
        loadData(request);
       // grid.setUrl(API_BASE_PATH + "oauth2-client-config");
        window.search = function() {
            var name = mini.getbyName("name$EQ").getValue().toLowerCase();
            grid.filter(function (row) {
                if(name){
                    if((row.name.toLowerCase()).indexOf(name) !== -1){
                        return true;
                    }else {
                        return false;
                    }
                }
            });
        }
        window.renderStatus = function (e) {
            return (e.value == 1) ? "启用" : "禁用";
        };
        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/oauth2/client/config/save.html", "添加客户端", "800", "500", function (e) {
                loadData(request);
            })
        });
    });
});

/*window.renderStatus = function (e) {
    return e.value == 1 ? "正常" : "失效";
}*/
function loadData(request) {
    request.get("oauth2-client-config",function (response) {
        if(response.status === 200){
            grid.setData(response.result);
        }
        search();
    });
}
function edit(id) {
    tools.openWindow("admin/oauth2/client/config/save.html?id=" + id, "编辑客户端", "800", "500", function (e) {
        require(["request"], function (request) {
            loadData(request);
        });
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
        tools.createActionButton("删除", "icon-remove", function () {
            if (row._state === "added") {
                e.sender.removeNode(row);
            } else {
                require(["request", "message"], function (request, message) {
                    message.confirm("确定删除该客户端?", function () {
                        var loading = message.loading("删除中...");
                        request["delete"]("oauth2-client-config/" + row.id, {}, function (res) {
                            loading.close();
                            if (res.status === 200) {
                                e.sender.removeRow(row);
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

