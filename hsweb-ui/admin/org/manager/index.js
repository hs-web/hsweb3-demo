importResource("/admin/css/common.css");

importMiniui(function () {
    require(["jquery", "miniui-tools"], function ($, tools) {

        //TODO 根据权限,隐藏各个按钮

        //初始化
        mini.parse();

        var org_grid = mini.get("org-grid");
        var position_grid = mini.get("position-grid");
        var department_grid = mini.get("department-grid");
        var person_grid = mini.get("person-grid");
        tools.initGrid(org_grid);
        tools.initGrid(position_grid);
        tools.initGrid(department_grid);
        tools.initGrid(person_grid);

        window.tools = tools;
        initOrg();
        initDepartment();
        initPosition();
        initPerson();
        /**************************部门相关*******************************/
        /**
         * 加载部门数据
         */
        function loadDepartment() {
            if (window.nowSelectedOrg) {
                department_grid.loading();
                require(["request", "message"], function (request, message) {
                    request.createQuery("department")
                        .where("orgId", window.nowSelectedOrg.id)
                        .noPaging()
                        .exec(function (response) {
                            department_grid.unmask();
                            if (response.status == 200) {
                                department_grid.loadList(response.result.data);
                            } else {
                                message.showTips("加载部门数据失败:" + response.message);
                            }
                        });
                });
            }
        }

        /**
         * 弹出新建部门页面
         * @param parent 父级部门
         */
        function goSaveDepartmentPage(old, parent) {
            //新增部门
            tools.openWindow("admin/org/manager/department/save.html" + (old ? "?id=" + old.id : ""), "新建部门", 800, 400, loadDepartment, function () {
                var iframe = this.getIFrameEl();
                var win = iframe.contentWindow;

                function init() {
                    //初始化回调,部门管理页面在加载完成后会调用这个函数
                    //并返回一些操作的方法
                    win.onInit = function (e) {
                        e.setParent(parent);
                        old = mini.clone(old);
                        if (old)
                            e.setOld(old);
                        e.setOrg(mini.clone(window.nowSelectedOrg));
                    }
                }

                init();
                $(iframe).on("load", init);
            });
        }

        //点击toolbar上的新增按钮
        $(".department-add").on("click", function () {
            if (!window.nowSelectedOrg) {
                return;
            }
            goSaveDepartmentPage();

        });
        //初始化部门表格,绑定事件等操作
        function initDepartment() {
            //操作栏的按钮
            department_grid.getColumn("action").renderer = function (e) {
                var html = [];
                var row = e.record;
                html.push(tools.createActionButton("添加子部门", "icon-add", function () {
                    goSaveDepartmentPage(null, e.record);
                }));
                html.push(tools.createActionButton("编辑", "icon-edit", function () {
                    goSaveDepartmentPage(e.record, e.sender.getParentNode(e.record));
                }));
                html.push(
                    tools.createActionButton("部门赋权", "icon-find", function () {
                        tools.openWindow("admin/autz-settings/setting.html?priority=30&merge=true&type=department&settingFor=" + row.id,
                            "部门赋权-" + row.name, "800", "600", function () {
                            });
                    })
                );
                return html.join("");
            };
            //点击表格时的操作
            department_grid.on("nodeclick", function (e) {
                window.nowSelectedDepartment = e.record;
                position_grid.loadList([]);
                person_grid.setData([]);
                loadPosition();
            });
        }


        /************************岗位相关****************************/
        /**
         * 加载岗位数据
         */
        function loadPosition() {
            if (window.nowSelectedDepartment) {
                position_grid.loading();
                require(["request", "message"], function (request, message) {
                    request.createQuery("position")
                        .where("departmentId", window.nowSelectedDepartment.id)
                        .noPaging()
                        .exec(function (response) {
                            position_grid.unmask();
                            if (response.status == 200) {
                                position_grid.loadList(response.result.data);
                            } else {
                                message.showTips("加载岗位数据失败:" + response.message);
                            }
                        });
                });
            }
        }


        /**
         * 弹出新建岗位页面
         * @param parent 父级部门
         */
        function goSavePositionPage(old, parent) {
            //新增部门
            tools.openWindow("admin/org/manager/position/save.html" + (old ? "?id=" + old.id : ""), "新建岗位", 800, 400, loadPosition, function () {
                var iframe = this.getIFrameEl();
                var win = iframe.contentWindow;

                function init() {
                    //初始化回调,部门管理页面在加载完成后会调用这个函数
                    //并返回一些操作的方法
                    win.onInit = function (e) {
                        e.setParent(mini.clone(parent));
                        old = mini.clone(old);
                        if (old)
                            e.setOld(old);
                        e.setDepartment(mini.clone(window.nowSelectedDepartment));
                    }
                }

                init();
                $(iframe).on("load", init);
            });
        }

        //点击toolbar上的新增按钮
        $(".position-add").on("click", function () {
            if (!window.nowSelectedDepartment) {
                return;
            }
            goSavePositionPage();
        });
        //初始化岗位表格,绑定事件等操作
        function initPosition() {
            //操作栏的按钮
            position_grid.getColumn("action").renderer = function (e) {
                var html = [];
                var row =e.record;
                html.push(tools.createActionButton("添加子级岗位", "icon-add", function () {
                    goSavePositionPage(null, e.record);
                }));
                html.push(tools.createActionButton("编辑", "icon-edit", function () {
                    goSavePositionPage(e.record, e.sender.getParent(e.record));
                }));
                html.push(
                    tools.createActionButton("岗位赋权", "icon-find", function () {
                        tools.openWindow("admin/autz-settings/setting.html?priority=30&merge=true&type=position&settingFor=" + row.id,
                            "岗位赋权-" + row.name, "800", "600", function () {
                            });
                    })
                );
                return html.join("");
            };
            //点击表格时的操作
            position_grid.on("nodeclick", function (e) {
                window.nowSelectedPostion = e.record;
                person_grid.setData([]);
                loadPerson();
            });
        }

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
        }

        function initPerson() {
            person_grid.getColumn("sex").renderer = function (e) {
                // fix #4
                return e.value === 1 ? "男" : "女";
                // return e.valueOf === 1 ? "男" : "女";
            };
            person_grid.getColumn("action").renderer = function (e) {
                var html = [];
                var row = e.record;
                html.push(tools.createActionButton("编辑", "icon-edit", function () {
                    tools.openWindow("admin/org/manager/person/save.html?id=" + e.record.id, "编辑人员", 800, 650, loadPerson);
                }));
                html.push(
                    tools.createActionButton("人员赋权", "icon-find", function () {
                        tools.openWindow("admin/autz-settings/setting.html?priority=30&merge=true&type=person&settingFor=" + row.id,
                            "人员赋权-" + row.name, "800", "600", function () {
                            });
                    })
                );
                return html.join("");
            }
            $(".add-person").on("click", function () {
                require(["message"], function (message) {
                    if (!window.nowSelectedOrg) {
                        message.showTips("请先选择机构", "danger");
                        return;o
                    }
                    if (!window.nowSelectedDepartment) {
                        message.showTips("请先选择部门", "danger");
                        return;
                    }
                    if (!window.nowSelectedPostion) {
                        message.showTips("请先选择岗位", "danger");
                        return;
                    }
                    tools.openWindow("admin/org/manager/person/save.html", "新建人员", 800, 650, loadPerson, function () {
                        var iframe = this.getIFrameEl();
                        var win = iframe.contentWindow;

                        function init() {
                            //初始化回调,部门管理页面在加载完成后会调用这个函数
                            //并返回一些操作的方法
                            win.onInit = function (e) {
                                e.init(window.nowSelectedOrg, window.nowSelectedDepartment, window.nowSelectedPostion);
                            }
                        }

                        init();
                        $(iframe).on("load", init);
                    });
                });
            })
        }


        /***********************机构相关*****************************/
        //初始机构相关表格
        function initOrg() {
            org_grid.setUrl(API_BASE_PATH + "organizational?paging=false");

            org_grid.on("nodeclick", function (e) {
                var row = e.record;
                window.nowSelectedOrg = row;
                department_grid.loadList([]);
                position_grid.loadList([]);
                person_grid.setData([]);
                loadDepartment();
            });
        }

    });
});

