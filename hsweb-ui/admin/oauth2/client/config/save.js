importResource("/admin/css/common.css");
var supportGrantTypes = [
    {
        id: "authorization_code", text: "authorization_code"
    },
    {
        id: "client_credentials", text: "client_credentials"
    },
    {
        id: "refresh_token", text: "refresh_token"
    },
    {
        id: "password", text: "password"
    },
    {
        id: "implicit", text: "implicit"
    }
];
var statusData = [
    {
        id:"1",text:"启用"
    },
    {
        id:"0",text:"禁用"
    }
];

importMiniui(function () {
    mini.parse();
    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        var api = "oauth2-client-config";
        var func = request.patch;
        var id = request.getParameter("id");
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);
        grid.setUrl(request.basePath + "user");
        grid.load();
        var keyText = mini.get("keyText");
        keyText.on("enter", search);

        function search() {
            var param = request.createQuery()
                .like("name", "%" + keyText.getValue() + "%")
                .or()
                .like("username", "%" + keyText.getValue() + "%").getParams();

            grid.load(param);
        }

        $(".search-button").click(search);

        if (id) {
            loadData(id);
        } else {
            var clientId = randomChar(16);
            var clientSecure = randomChar(32);
            mini.getbyName("id").setValue(clientId);
            mini.getbyName("secret").setValue(clientSecure);
        }
        $(".new-secret").on("click", function () {
            message.confirm("确定刷新secret?", function () {
                mini.getbyName("secret").setValue(randomChar(32));
            });
        });
        $(".save-button").on("click", (function () {
            require(["message"], function (message) {
                var data = tools.getFormData("#basic-info",true);
                if (!data) {
                    return;
                }
                var loading = message.loading("提交中");
                var resultData = {};
                for (var temp in data) {

                    if (temp === "supportGrantTypes") {
                        try {
                            resultData[temp] = data[temp].split(",");
                        } catch (e) {
                            resultData[temp] = data[temp];
                        }

                    } else {
                        resultData[temp] = data[temp];
                    }
                }
                func(api, resultData, function (response) {
                    loading.close();
                    if (response.status === 200) {
                        message.showTips("保存成功");
                        if (!id) id = response.result;
                    } else {
                        message.showTips("保存失败:" + response.message, "danger");
                        if (response.result)
                            tools.showFormErrors("#basic-info", response.result);
                    }
                })
            });
        }));
    });
});

function onCloseClick(e) {
    var lookup = mini.get("lookup");
    lookup.hidePopup();
}

function onClearClick(e) {
    var lookup = mini.get("lookup");
    lookup.deselectAll();
}

function loadData(id) {
    require(["request", "message"], function (request, message) {
        request.get("oauth2-client-config/" + id, function (response) {
            if (response.status === 200) {
                var lookup = mini.get("lookup");
                new mini.Form("#basic-info").setData(response.result);
                var supportGrantType = mini.get("supportGrantType");
                supportGrantType.setText(supportGrantType.getValue().join(","));
                var loading = message.loading("数据加载中...");
                request.get("user/" + lookup.getValue(), function (response2) {
                    if (response2.status == 200) {
                        loading.close();
                        lookup.setText(response2.result.name);
                    }
                });
            } else {
                message.showTips("加载数据失败", "danger");
            }
        });

    });
}


function randomChar(len) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    function generateMixed(n) {
        var res = "";
        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    }

    return generateMixed(len);
}