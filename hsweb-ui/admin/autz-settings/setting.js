importResource("/admin/css/common.css");
importResource("/admin/autz-settings/setting.css");

importMiniui(function () {
    mini.parse();
    $(".data-access-table").hide();

    $(".custom_setting").hide();

    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        window.tools = tools;
        var type = request.getParameter("type");
        var settingFor = request.getParameter("settingFor");
        var merge = request.getParameter("merge");
        var priority = request.getParameter("priority");

        if (!type || !settingFor) {
            message.showTips("参数错误!", "danger");
            return;
        }
        initData(type, settingFor);
        initPermissionTabActive();
        $(".save-button").on("click", function () {
            var loading = message.loading("提交中...");
            saveDataAccess();
            var data = getData(type, settingFor, merge, priority);
            request.patch("autz-setting", data, function (response) {
                loading.hide();
                if (response.status === 200) {
                    message.showTips("保存成功");
                } else {
                    message.showTips("保存失败:" + response.message, "danger");
                }
            });
        });
    });
    var customGrid = mini.get("custom_grid");

    mini.get("permission-setting-grid").on("nodeselect", initDataAccessSetting);
    customGrid.setEnabled(false);
    $(".data-access-table input").on("click", function () {
        var tr = $(this).parents("tr");
        var input = $(this);
        customGrid.setEnabled(false);
        customGrid.setShowCheckBox(false)
        customGrid.uncheckAllNodes();
        if (tr.hasClass("CUSTOM_SCOPE")) {
            if (input.prop("checked")) {
                customGrid.setEnabled(true);
                customGrid.setShowCheckBox(true);
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
                if (detail.actions.indexOf(action) == -1) return false;
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
                        if (this.type == "DENY_FIELDS") return;
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

function getPermissionData(merge, priority) {
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
                if (denyField.length === action.children.length && !action.checked) {
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
        list.push({
            permissionId: this.permissionId,
            actions: actions,
            dataAccesses: tmp,
            merge: merge,
            priority: priority ? priority : 0
        });
    });
    return list;
}

function initPermissionTabActive() {
    var tab = mini.get("tabs");
    tab.on("beforeactivechanged", function (e) {
        var tab = e.tab;
        if (tab.name === "permissionSetting") {
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
                if (old.length === 0) return true;
                var oldPer = dataMap[permission];
                if (!oldPer) return true;
                if (field) {
                    if (!(oldPer.actions.indexOf(action) > -1)) return false;
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
                if (tmp.indexOf(this.id) !== -1) return;
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
                            if (this.type == "DENY_FIELDS") return;
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

function saveDataAccess(applyChildren) {
    var allType = [];
    $(".data-access-table input").each(function () {
        var input = $(this);
        allType.push(input.attr("access-type") + "_" + input.attr("scope-type"));
    });

    $(".data-access-table input:checked").each(function () {
        var input = $(this);
        if (nowSelectPermission) {
            var accessType = input.attr("access-type");
            var scopeType = input.attr("scope-type");

            function applyDataAccess(per) {
                if (!per.dataAccesses) {
                    per.dataAccesses = [];
                }
                var newAccess = [];
                for (var i = 0; i < per.dataAccesses.length; i++) {
                    var old = per.dataAccesses;
                    if (typeof(old.config) == "string") {
                        old.config = mini.decode(old.config);
                    }
                    if (old.config && allType.indexOf(old.type + "_" + old.config.scopeType) == -1) {
                        newAccess.push(old);
                    }
                }
                if (per.type === "action") {
                    var accessConfig = {config: {scopeType: scopeType}, type: accessType, action: per.action};
                    if (accessType === "CUSTOM_SCOPE") {
                        var customGrid = mini.get("custom_grid");
                        var selecteds = [];
                        $(customGrid.getList()).each(function () {
                            if (this.checked === true) selecteds.add(this);
                        });
                        var tmp = {};
                        $(selecteds).each(function () {
                            if (!tmp[this.type]) {
                                tmp[this.type] = [];
                            }
                            tmp[this.type].push(this.id);
                        });
                        //转为 [{type:"ORG_SCOPE",ids:["","",""]]
                        var list = [];
                        for (var type in tmp) {
                            list.push({type: type, ids: tmp[type]});
                        }
                        accessConfig.config = {scope: list};
                    }
                    newAccess.push(accessConfig)
                }
                if (applyChildren && per.permission) {
                    //选中的是权限节点,并且指定了要设置到所有子节点
                    $(per.children).each(function () {
                        applyDataAccess(this);
                    });
                }
                per.dataAccesses = newAccess;

            }

            applyDataAccess(nowSelectPermission);
            // console.log(nowSelectPermission);
        }
    });
}

function loadCustomSettingGrid() {
    require(["request"], function (request) {
        var list = [];
        mini.get("custom_grid").loading();

        function done() {
            mini.get("custom_grid").loadList(list);
        }

        //加载机构
        request.get("organizational", {paging: false}, function (response) {
            if (response.status == 200) {
                var orgIds = [];
                var orgMap = {};
                $(response.result.data).each(function () {
                    var data = {type: "ORG_SCOPE", id: this.id, text: this.name, parentId: this.parentId};
                    orgIds.push(this.id);
                    orgMap[this.id] = data;
                    data.children = [];
                    list.push(data);
                });
                if (orgIds.length == 0) return;
                //加载部门,一次性使用in查询出来
                request.createQuery("department").where()
                    .noPaging()
                    .in("orgId", orgIds.join(","))
                    .exec(function (depResponse) {
                        if (depResponse.status == 200) {
                            var deptIds = [];
                            var depMap = {};
                            $(depResponse.result.data).each(function () {
                                var depData = {
                                    type: "DEPARTMENT_SCOPE",
                                    id: this.id,
                                    text: this.name,
                                    parentId: this.parentId && this.parentId !== "-1" ? this.parentId : this.orgId,
                                    children: []
                                };
                                deptIds.push(this.id);
                                depMap[this.id] = depData;
                                // if (orgMap[this.orgId]) {
                                list.push(depData);
                                // }
                            });
                            if (deptIds.length > 0) {
                                //加载岗位,一次性使用in查询出来
                                request.createQuery("position").where()
                                    .noPaging()
                                    .in("departmentId", deptIds.join(","))
                                    .exec(function (posResponse) {
                                        if (posResponse.status == 200) {
                                            $(posResponse.result.data).each(function () {
                                                var depData = {
                                                    type: "POSITION_SCOPE",
                                                    id: this.id,
                                                    text: this.name,
                                                    parentId: this.parentId && this.parentId !== "-1" ? this.parentId : this.departmentId
                                                };
                                                //if (depMap[this.orgId]) {
                                                list.push(depData);
                                                //}
                                            });
                                            done();
                                        }
                                    });
                            } else {
                                done();
                            }
                        }
                    });
            }
        });
    });
}

function initDataAccessSetting(e) {
    $(".apply-all").hide();
    $(".data-access-table").show();
    $(".custom_setting").show();

    var node = e.node;
    //先保存
    saveDataAccess();
    nowSelectPermission = e.node;
    var customGrid = mini.get("custom_grid");
    customGrid.setEnabled(false);
    customGrid.setShowCheckBox(false)
    customGrid.uncheckAllNodes();

    function init(permission) {
        customGrid.clearFilter();
        var supportDataAccessTypes = permission.supportDataAccessTypes;
        $(".data-access-table tr").hide();
        $(".custom_setting").hide();
        $(supportDataAccessTypes).each(function () {
            $(".ALL").show();
            var tmp = this + "";
            if (tmp.indexOf("CUSTOM_SCOPE") != -1) {
                $(".CUSTOM_SCOPE").show();
                $(".custom_setting").show();
                mini.layout();
                //过滤可选项
            }
            if (this && "" != this)
                $("." + this).show();
        });
        customGrid.filter(function (row) {
            for (var i = 0; i < supportDataAccessTypes.length; i++) {
                if ((supportDataAccessTypes[i]).indexOf(row.type + "_") !== -1) {
                    return true;
                }
            }
            return false;
        });
    }

    $("input[access-type]").prop("checked", false);
    $("input[access-type=ALL]").prop("checked", true);
    if (node.dataAccesses) {
        $(node.dataAccesses).each(function () {
            if (this.type) {
                $("input[access-type=" + (this.type) + "]").prop("checked", true);
                var type = this.type;
                if (this.type.indexOf("CUSTOM_SCOPE") !== -1) {
                    customGrid.setEnabled(true);
                    customGrid.setShowCheckBox(true);
                    //加载选中的自定义信息
                    $(mini.decode(this.config)).each(function () {
                        $(this.scope).each(function () {
                            customGrid.checkNodes(this.ids, false);
                        });
                    });
                }
            }
        });
    }
    //permission
    if (node.permission) {
        init(node.permission);
        $(".apply-all").show();
        $(".apply-all").unbind("click").on("click", function () {
            saveDataAccess(true);
        });
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
    loadCustomSettingGrid();
    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        var loading = message.loading("加载数据中...");

        function initSetting() {
            if (settingFor) {
                request.get("autz-setting/" + type + "/" + settingFor, function (response) {
                    loading.hide();
                    if (response.status === 200) {
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
            if (response.status === 200) {
                menuList = response.result.data;
                $(menuList).each(function () {
                    menuMap[this.id] = this;
                });
                mini.get("menu-grid").loadList(menuList);
                request.get("permission?paging=false", function (response) {
                    if (response.status === 200) {
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

function getData(type, settingFor, merge, priority) {
    var data = {type: type, settingFor: settingFor};
    data.menus = mini.get("menu-setting-grid").getData();
    var details = getPermissionData(merge, priority);
    data.details = details;
    data.merge = merge;
    data.priority = priority;
    return data;
}
