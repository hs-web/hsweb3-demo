importResource("/admin/css/common.css");
importResource("/plugins/font-awesome/4.7.0/css/font-awesome.css");
importResource("/admin/index.css");

function initMenu() {
    require(["request", "message"], function (request, message) {
        // var loading = message.loading("加载用户菜单...")
        var api = "menu/user-own/list";

        request.get(api, function (response) {
            // loading.hide();
            if (response.status === 200) {
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
        if (e.node && e.node.id !== "-1" && $.trim(e.node.url) !== "") {
            showTab(e.node);
            return;
        }
    }

    function createTemplateTab(tab, id) {
        var el = tabs.getTabBodyEl(tab);
        require(["pages/template/parser"], function (parser) {
            parser($(el), id);
        })
    }

    function createFormTab(tab, id) {
        var el = tabs.getTabBodyEl(tab);
        var container = $("<div>");
        $(el).append(container);
        require(["pages/form/operation/save-page"], function (save) {
            //testForm为表单模板id或者表单配置对象
            save.singlePage(id, {
                title: "编辑数据",
                width: "100%",
                height: "100%",
                el: container,
                beforeLoad: function (conf) {
                    var formParser = conf.form;
                    formParser.setParameters({
                        id: "1234"
                    });
                },
                close: function () {
                    //关闭窗口时触发,返回false时不关闭
                    tabs.removeTab(tab);
                },
                onload: function (conf) {
                    var formParser = conf.form;
                    var toolbar = conf.toolbar;// 工具栏html容器, jquery对象

                },
                submit: function (data, conf) {
                    //表单解析器对象
                    var formParser = conf.form;
                    formParser.doEvent("submit", data);
                    conf.close();//关闭窗口
                }
            })
        });
    }

    function createHLTab(tab, page) {
        var el = tabs.getTabBodyEl(tab);
        require(["pages/module/parser", "text!" + page], function (parser, pageConfig) {
            new parser().parse($(el), JSON.parse(pageConfig));
        });
    }

    window.showTab = function (node) {
        if (!node.url || node.url === "") return;
        var id = "tab$" + node.id;
        var tab = tabs.getTab(id);
        var url = node.url;
        if (!tab) {
            tab = {};
            tab.name = id;
            tab.title = node.name;
            tab.showCloseButton = true;
            tab = tabs.addTab(tab);
            if (url.indexOf("template:") === 0) {
                var templateId = url.split(":")[1];
                createTemplateTab(tab, templateId);
            } else if (url.indexOf("form:") === 0) {
                var templateId = url.split(":")[1];
                createFormTab(tab, templateId);
            } else if (url.indexOf(".hl") !== -1) {
                createHLTab(tab, url);
            } else {
                tab.url = node.url;
            }
        }
        if (!mini.get("layout").isExpandRegion("west"))
            mini.get("layout").collapseRegion("west");
        tabs.activeTab(tab);
    };

    tree.on("nodeclick", selectNode);
    initLogin();
});

function initLogin() {
    function doLogin() {
        require(["request", "message"], function (request, message) {
            var form = new mini.Form("#loginWindow");
            form.validate();
            if (form.isValid() === false) return;
            var loding = message.loading("登录中...");
            var data = form.getData();
            request.post("authorize/login", {
                // token_type: "token",
                username: data.username,
                password: data.password
            }, function (e) {
                loding.hide();
                if (e.status === 200) {
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
    // initMenu();
    $(".settings").on("click", function () {
        require(["miniui-tools"], function (tools) {
            tools.openWindow("admin/me/info.html", "个人信息", "800", "600", function () {

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
