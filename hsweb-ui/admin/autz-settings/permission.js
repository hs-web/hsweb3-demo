importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();

    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        var permissionId = request.getParameter("id");
        if (!permissionId) {
            message.showTips("加载权限失败", "danger");
            return;
        }

        var permission = {};
        var actionMapping = {};

        var Editor = function (grid) {

            grid.getColumn('actions').renderer = function (e) {
                if (e.value instanceof Array) {
                    e.value = e.value.join(",");
                    e.record.detail.actions = e.value;
                }
                return ((e.value + '')).split(",")
                    .map(function (value) {
                        return actionMapping[value];
                    }).join(" , ");
            };

            grid.getColumn('action').renderer = function (e) {
                var row = e.record;
                var html = [
                    tools.createActionButton("保存", "icon-save", function () {
                        grid.loading("保存中...");
                        var data = mini.clone(row);
                        data.detail.actions = data.detail.actions.split(",");
                        data.details = [data.detail];
                        data.menus = [{menuId: permissionId}];

                        request.put("autz-setting/merge", [data], function (resp) {
                            grid.unmask();
                            if (resp.status === 200) {
                                message.showTips("保存成功");
                            } else {
                                message.showTips("保存失败:" + resp.message, "danger");
                            }
                        })
                    }),
                    tools.createActionButton("完整配置", "icon-find", function () {
                        tools.openWindow("admin/autz-settings/permission-setting.html?priority=10&merge=true&type="+row.type+"&settingFor="
                            + row.settingFor+"&permission="+row.detail.permissionId+"&permissionType="+(request.getParameter("permissionType")||''),
                            "赋权-"+row.settingForName, "800", "600", function () {
                            init()
                        });
                    }),
                    tools.createActionButton("删除", "icon-remove", function () {
                        message.confirm("确认删除?", function () {
                            grid.loading("删除中...");
                            request['delete']('autz-setting/' + row.id + "/" + row.detail.permissionId, function (resp) {
                                grid.unmask();
                                if (resp.status === 200) {
                                    grid.removeRow(row);
                                } else {
                                    message.showTips("保存失败:" + resp.message, "danger")
                                }
                            })
                        })
                    })
                ];

                return html.join("");
            };


            this.setData = function (settings) {
                grid.setData(settings)

            };

            return this;
        };



        var supports = {
            user: function () {
                var grid = mini.get('user-grid');
                var editor = new Editor(grid);

                $(".bind-user").on('click', function () {
                    tools.openWindow("admin/user/list.html?selector=1", "选中用户", "800", "600", function (data) {
                        if (data !== 'cancel' && data !== 'close') {
                            var data = {
                                type: 'user',
                                settingFor: data.id,
                                settingForName: data.name,
                                detail: {
                                    status: 1,
                                    permissionId: permissionId,
                                    actions: []
                                }
                            };
                            grid.addRow(data);
                            startEdit(grid, data);
                        }
                    })
                });

                return editor;
            }(),
            role: function () {
                var grid = mini.get('role-grid');
                var editor = new Editor(grid);

                $(".bind-role").on('click', function () {
                    tools.openWindow("admin/role/list.html?selector=1", "选中角色", "800", "600", function (data) {
                        if (data !== 'cancel' && data !== 'close') {
                            var data = {
                                type: 'role',
                                settingFor: data.id,
                                settingForName: data.name,
                                detail: {
                                    status: 1,
                                    permissionId: permissionId,
                                    actions: []
                                }
                            };
                            grid.addRow(data);
                            startEdit(grid, data);
                        }
                    })
                });

                return editor;
            }()
        };

        function startEdit(grid, row) {
            grid.select(row, true);
            var column = grid.getColumn('actions');

            grid.setCurrentCell([row, column]);
            grid.beginEditCell();
            column.editor.showPopup()
        }

        function init(){

            loadPermission(function () {

                loadAutzSettings(function (settings) {
                    /*
                        构造数据
                        [

                        ]
                     */
                    for (var f in settings) {
                        if (supports[f]) {
                            supports[f].setData(settings[f]);
                        }
                    }

                });

            });

        }
        init();

        function loadAutzSettings(call) {
            request.get("autz-setting/detail/" + permissionId, function (resp) {
                if (resp.status === 200) {

                    call(resp.result);
                } else {
                    message.showTips("加载权限失败:" + resp.message, "danger");
                }
            })
        }

        function loadPermission(call) {
            request.get("permission/" + permissionId, function (resp) {

                if (resp.status === 200) {
                    permission = resp.result;
                    $(window.permissionActions = permission.actions).each(function () {
                        actionMapping[this.action] = this.describe || this.action;
                    });
                    call();
                } else if (resp.status === 404) {
                    message.showTips("请分配权限");
                } else {
                    message.showTips("加载权限失败:" + resp.message, "danger");
                }
            })
        }

    });

});