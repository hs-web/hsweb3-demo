importResource("/admin/css/common.css");
importResource("/plugins/font-awesome/4.7.0/css/font-awesome.css");
importResource("/admin/index.css");
function initMenu() {
    require(["request", "message"], function (request, message) {
        // var loading = message.loading("加载用户菜单...")
        request.get("menu/user-own/list", function (response) {
            // loading.hide();
            if (response.status == 200) {
                mini.get("leftTree").loadList(response.result);
            } else {
                message.showTips("加载菜单失败:" + response.message, "danger");
            }
        })
    });
}

//引入miniui,miniui不支持require,使用此方式引入
importMiniui(function () {
    mini.parse();
    //加载菜单
    var tabs = mini.get('mainTabs');
    var tree = mini.get("leftTree");

    window.showTabById = function (id) {
        var node = tree.getNodesByValue(id);
        if (node) {
            showTab(node);
        }
    };

    function selectNode(e) {
        if (e.node && e.node.id != "-1" && $.trim(e.node.url) != "") {
            showTab(e.node);
            return;
        }
    }

    window.showTab = function (node) {
        if (!node.url || node.url == "")return;
        var id = "tab$" + node.id;
        var tab = tabs.getTab(id);
        if (!tab) {
            tab = {};
            tab.name = id;
            tab.title = node.name;
            tab.showCloseButton = true;
            tab.url = node.url;
            tabs.addTab(tab);
        }
        if (!mini.get("layout").isExpandRegion("west"))
            mini.get("layout").collapseRegion("west");
        tabs.activeTab(tab);
    }

    tree.on("nodeclick", selectNode);
    initLogin();
});

function initLogin() {
    function doLogin() {
        require(["request", "message"], function (request, message) {
            var form = new mini.Form("#loginWindow");
            form.validate();
            if (form.isValid() == false) return;
            var loding = message.loading("登录中...");
            var data = form.getData();
            request.post("authorize/login", {
                // token_type: "token",
                username: data.username,
                password: data.password
            }, function (e) {
                loding.hide();
                if (e.status == 200) {
                    mini.get("loginWindow").hide();
                    // require(["storejs"], function (store) {
                    //     store.set("autz-token", e.result.token);
                    // });
                    if (window.onLoginSuccess) {
                        window.onLoginSuccess();
                    }
                } else {
                    mini.alert(e.message);
                }
            }, false);
        });
    }

    mini.getbyName("password").on("enter", doLogin);
    //绑定登录事件
    $(".login-button").on("click", doLogin);

    $(".reset-button").on("click", function () {
        new mini.Form("#loginWindow").reset();
    });
    $(".login-out").on("click", function () {
        require(["request", "message"], function (request, message) {
            message.confirm("确认退出系统?", function () {
                request.get("authorize/login-out", function (reponse) {
                    window.location.reload();
                });
            });
        });
    });
    initAuthorize();
    $(".settings").on("click", function () {
        require(["miniui-tools"],function (tools) {
            tools.openWindow("admin/me/info.html","个人信息","800","600",function () {

            });
        });
    });
}
window.doLogin = function (callback) {
    mini.get("loginWindow").show();
    window.onLoginSuccess = function () {
        initAuthorize(callback);
    };
};
function initAuthorize(call) {
    require(["authorize"], function (authorize) {
        authorize.init(function () {
            $(".username").text(authorize.user.username);
            if (call)
                call();
            initMenu();
        });
    });
}
