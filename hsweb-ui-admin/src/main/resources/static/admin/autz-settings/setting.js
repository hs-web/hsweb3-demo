importResource("/admin/css/common.css");
importResource("/admin/autz-settings/setting.css");

importMiniui(function () {
    mini.parse();
    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        window.tools = tools;
        var type = request.getParameter("type");
        var settingFor = request.getParameter("settingFor");
        if (!type || !settingFor) {
            message.showTips("参数错误!", "danger");
            return;
        }
        initData(type, settingFor);
        initPermissionTabActive();
        $(".save-button").on("click", function () {
            var loading = message.loading("提交中...");
            var data = getData(type, settingFor);
            request.patch("autz-setting", data, function (response) {
                loading.hide();
                if (response.status == 200) {
                    message.showTips("保存成功");
                } else {
                    message.showTips("保存失败:" + response.message, "danger");
                }
            });
        });
    });
    mini.get("permission-setting-grid").on("nodeselect", initDataAccessSetting);
    mini.get("custom_grid").setEnabled(false);
    $(".data-access-table input").on("click", function () {
        var tr = $(this).parents("tr");
        var input = $(this);
        mini.get("custom_grid").setEnabled(false);
        if (tr.hasClass("CUSTOM_SCOPE")) {
            if (input.prop("checked")) {
                mini.get("custom_grid").setEnabled(true);
            }
        }
    });
});

var menuList = [];
var menuMap = {};

var permissionList = [];

var permissionMap = {};
window.actions = [
    {"id": "query", "text": "查询"},
    {"id": "update", "text": "修改"},
    {"id": "delete", "text": "删除"}
];
window.renderSettingMenuAction = function (e) {
    return tools.createActionButton("删除菜单", "icon-remove", function () {
        mini.get("menu-setting-grid").removeNode(e.record);
        autoHideChooseMenu();
    });
}

window.renderMenuAction = function (e) {
    var html = [];
    var row = e.record;

    html.push(tools.createActionButton("添加到用户菜单", "icon-arrow-left", function () {
        var settingGrid = mini.get("menu-setting-grid");
        var menuGrid = mini.get("menu-grid");

        function createNode(menu) {
            var node = {
                menuId: menu.id,
                icon: menu.icon,
                menu: mini.clone(menu)
            };
            var children = [];
            if (menu.children) {
                $(menu.children).each(function () {
                    children.push(createNode(this));
                });
            }
            node.children = children;
            return node;
        }

        var node = createNode(row);
        settingGrid.addNode(node);
        settingGrid.expandNode(node);
        menuGrid.removeNode(row);
    }));
    return html.join("");
}

function autoHideChooseMenu() {
    var settingGrid = mini.get("menu-setting-grid");
    var menuGrid = mini.get("menu-grid");
    var mapping = {};
    $(settingGrid.getList()).each(function () {
        mapping[this.menuId] = this;
    });
    var list = [];

    $(mini.clone(menuList)).each(function () {
        if (!mapping[this.id]) {
            list.add(this);
        }
    });
    menuGrid.loadList(list);
}
function initPermissionData(details) {
    if (details) {
        var list = [];
        $(details).each(function () {
            var permission = permissionMap[this.permissionId];
            var optionalFields = permission.optionalFields;
            var actions = [];
            var detail = mini.clone(this);

            permission.actionMap = {};
            $(permission.actions).each(function () {
                permission.actionMap[this.action] = this;
            });
            detail.dataAccessesMap = {};
            $(detail.dataAccesses).each(function () {
                detail.dataAccessesMap[this.action + this.type] = this;
            });
            function isChecked(action, field) {
                if (detail.actions.indexOf(action) == -1)return false;
                if (field) {
                    var dataAccess = detail.dataAccessesMap[action + "DENY_FIELDS"];
                    if (dataAccess) {
                        return !(mini.decode(dataAccess.config).fields.indexOf(field) > -1);
                    } else {
                        return true;
                    }
                }
                return true;
            }

            $(permission.actions).each(function () {
                var action = this;
                var fields = [];
                var dataAccesses = [];
                if (detail.dataAccesses) {
                    $(detail.dataAccesses).each(function () {
                        if (this.type == "DENY_FIELDS")return;
                        if (this.action == action.action)
                            dataAccesses.push(this);
                    });
                }
                $(optionalFields).each(function () {
                    var fieldChecked = isChecked(action.action, this.name);
                    fields.push({
                        type: "fields"
                        , checked: fieldChecked
                        , field: this.name
                        , text: this.describe ? this.describe : this.name
                    });
                });
                var actionData = {
                    type: "action",
                    action: this.action,
                    text: this.describe ? this.describe : this.action,
                    children: mini.clone(fields),
                    dataAccesses: dataAccesses
                };
                if (fields.length == 0 && detail.actions.indexOf(this.action) != -1) {
                    actionData.checked = true;
                }
                actions.push(actionData);
            });
            list.push({permission: this, permissionId: permission.id, text: this.name, children: actions});
        });
        mini.get("permission-setting-grid").loadData(list);
    }
}
function getSelectMenuPermission() {
    var selectMenus = mini.get("menu-setting-grid").getList();
    var permissions = [];
    $(selectMenus).each(function () {
        var permission;
        var menuPer = this.menu.permissionId;
        if (menuPer) menuPer = menuPer.split(",");
        if (this.menu) {
            $(menuPer).each(function () {
                if (permission = permissionMap[this])
                    permissions.push(permission);
            });
        }
    });
    return mini.clone(permissions);
}
function getPermissionData() {
    var data = mini.get("permission-setting-grid").getData();
    var list = [];
    $(data).each(function () {
        var actions = [];
        var dataAccesses = {};
        $(this.children).each(function () {
            var action = this;
            if (action.dataAccesses) {
                $(action.dataAccesses).each(function () {
                    dataAccesses[this.action + this.type] = this;
                });
            }
            if (action.children) {
                var denyField = [];
                $(action.children).each(function () {
                    if (!this.checked)
                        denyField.push(this.field);
                });
                if (denyField.length == action.children.length && !action.checked) {
                    return;
                }
                //没有全部进行勾选,则进行deny操作
                if (denyField.length > 0) {
                    var fieldDataAccess = {
                        action: action.action,
                        type: "DENY_FIELDS",
                        describe: "不能操作字段",
                        config: mini.encode({fields: denyField})
                    };
                    dataAccesses[fieldDataAccess.action + fieldDataAccess.type] = fieldDataAccess;
                }
            }
            actions.push(action.action);
        });
        //设置
        if (this.dataAccesses) {
            $(this.dataAccesses).each(function () {
                var dataAccess = this;
                $(actions).each(function () {
                    if (!dataAccesses[this.action + dataAccess.type]) {
                        dataAccesses[this.action + dataAccess.type] = dataAccess;
                    }
                })
            })
        }
        var tmp = [];
        for (var action in dataAccesses) {
            tmp.push(dataAccesses[action]);
        }
        //create data access
        list.push({permissionId: this.permissionId, actions: actions, dataAccesses: tmp});
    });
    return list;
}
function initPermissionTabActive() {
    var tab = mini.get("tabs");
    tab.on("beforeactivechanged", function (e) {
        var tab = e.tab;
        if (tab.name == "permissionSetting") {
            var menuPermissions = getSelectMenuPermission();
            var list = [];
            var tmp = [];
            var old = getPermissionData();
            var dataMap = {};
            $(old).each(function () {
                dataMap[this.permissionId] = this;
                var dataAccessesMap = this.dataAccessesMap = {};
                $(this.dataAccesses).each(function () {
                    dataAccessesMap[this.action + this.type] = this;
                });
            });
            function isChecked(permission, action, field) {
                if (old.length == 0)return true;
                var oldPer = dataMap[permission];
                if (!oldPer)return true;
                if (field) {
                    if (!(oldPer.actions.indexOf(action) > -1))return false;
                    var dataAccess = oldPer.dataAccessesMap[action + "DENY_FIELDS"];
                    if (dataAccess) {
                        return !(mini.decode(dataAccess.config).fields.indexOf(field) > -1);
                    } else {
                        return true;
                    }
                }
                return false;
            }

            $(menuPermissions).each(function () {
                if (tmp.indexOf(this.id) != -1)return;
                var actions = [];
                var permission = this;
                var optionalFields = this.optionalFields;
                var oldPer = dataMap[permission.id];

                $(this.actions).each(function () {
                    var action = this;
                    var fields = [];
                    var dataAccesses = [];
                    if (oldPer && oldPer.dataAccesses) {
                        $(oldPer.dataAccesses).each(function () {
                            if (this.type == "DENY_FIELDS")return;
                            if (this.action == action.action)
                                dataAccesses.push(this);
                        });
                    }
                    $(optionalFields).each(function () {
                        var fieldChecked = isChecked(permission.id, action.action, this.name);
                        fields.push({
                            type: "fields"
                            , checked: fieldChecked
                            , field: this.name
                            , text: this.describe ? this.describe : this.name
                        });
                    });
                    var actionData = {
                        type: "action",
                        action: this.action,
                        text: this.describe ? this.describe : this.action,
                        children: mini.clone(fields),
                        dataAccesses: dataAccesses
                    };
                    if (fields.length == 0 && oldPer && oldPer.actions.indexOf(this.action) != -1) {
                        actionData.checked = true;
                    }
                    actions.push(actionData);
                });
                list.push({permission: this, permissionId: this.id, text: this.name, children: actions});
                tmp.push(this.id);
            });
            mini.get("permission-setting-grid").loadData(list);
        }
    });
}
var nowSelectPermission;
function saveDataAccess() {

}
function initDataAccessSetting(e) {
    var node = e.node;
    //先保存
    saveDataAccess();
    nowSelectPermission = e.node;
    function init(permission) {
        var supportDataAccessTypes = permission.supportDataAccessTypes;
        $(".data-access-table tr").hide();
        $(".custom_setting").hide();
        $(supportDataAccessTypes).each(function () {
            $(".ALL").show();
            if (this == "CUSTOM_SCOPE") {
                $(".custom_setting").show();
                mini.layout();
            }
            if (this && "" != this)
                $("." + this).show();
        });
    }

    //permission
    if (node.permission) {
        init(node.permission);
    } else if (node.type == 'action') {
        var parent = e.sender.getParentNode(node);
        if (parent && parent.permission) {
            init(parent.permission);
        }
    } else {
        $(".data-access-table tr").hide();
        $(".custom_setting").hide();
        nowSelectPermission = undefined;
    }

}
function initData(type, settingFor) {
    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        var loading = message.loading("加载数据中...");

        function initSetting() {
            if (settingFor) {
                request.get("autz-setting/" + type + "/" + settingFor, function (response) {
                    loading.hide();
                    if (response.status == 200) {
                        if (!response.result) {
                            return;
                        }
                        var settingGrid = mini.get("menu-setting-grid");
                        var setting = response.result;
                        var menus = setting.menus;
                        $(menus).each(function () {
                            var menu = menuMap[this.menuId];
                            this.menu = menu;
                            if (menu) this.icon = menu.icon;
                        });
                        settingGrid.loadList(menus);
                        var details = setting.details;
                        initPermissionData(details);
                        autoHideChooseMenu();
                    } else {
                        message.showTips("获取数据失败:" + response.message, "danger");
                    }
                });
            }
        }

        request.get("menu?paging=false", function (response) {
            if (response.status == 200) {
                menuList = response.result.data;
                $(menuList).each(function () {
                    menuMap[this.id] = this;
                });
                mini.get("menu-grid").loadList(menuList);
                request.get("permission?paging=false", function (response) {
                    if (response.status == 200) {
                        permissionList = response.result.data;
                        $(permissionList).each(function () {
                            permissionMap[this.id] = this;
                        });
                        initSetting();
                    } else {
                        loading.hide();
                        message.showTips("加载权限失败:" + response.message, "danger");
                    }
                })
            } else {
                loading.hide();
                message.showTips("加载菜单失败:" + response.message, "danger");
            }
        });
    });
}

function getData(type, settingFor) {
    var data = {type: type, settingFor: settingFor};
    data.menus = mini.get("menu-setting-grid").getData();
    var details = getPermissionData();
    data.details = details;
    return data;
}
