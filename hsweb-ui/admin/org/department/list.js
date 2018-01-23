importResource("/admin/css/common.css");

require(["authorize"], function (authorize) {
    authorize.parse(document.body);
    window.authorize = authorize;
    importMiniui(function () {
        require(["miniui-tools"], function (tools) {
            mini.parse();
            window.tools = tools;
            var grid = window.grid = mini.get("data-grid");
            var org_grid = mini.get("org-grid");
            tools.initGrid(grid);
            //加载查询机构选择项
            require(["request"], function (request) {
               request.get("organizational?paging=false",function (response) {
                   org_grid.loadList(response.result.data,"id","parentId");
               });
            });
            $(".search-button").on("click", function () {
                tools.searchGrid("#search-box", grid, null);
            });
            $(".add-button").on("click", function () {
                tools.openWindow("admin/org/department/addDepartment.html" , "新建部门", 800, 400, loadDepartment, function () {
                    var iframe = this.getIFrameEl();
                    var win = iframe.contentWindow;

                    function init() {
                        //初始化回调,部门管理页面在加载完成后会调用这个函数
                        //并返回一些操作的方法
                        win.onInit = function (e) {
                            e.setParent();
                        }
                    }

                    init();
                    $(iframe).on("load", init);
                });
            });
        });
        //加载机构列表
        require(["request", "message"], function (request, message) {
            var orgNameMap = {};
            request.get("organizational?paging=false",function (response) {
                if(response.status == 200){
                    for(var i = 0; i<response.result.data.length; i++){
                        orgNameMap[response.result.data[i].orgId] = response.result.data[i].fullName;
                    }
                    grid.setUrl(API_BASE_PATH + "department?paging=false");
                    window.orgName = function (e) {
                        var name = orgNameMap[e.value];
                        return name;
                    }
                }else {
                    message.showTips("数据加载失败:" + response.message);
                }
            });
        });
    });
});
/**
 * 弹出新建部门页面
 * @param parent 父级部门
 */
function goSaveDepartmentPage(old, parent, title) {
    //新增部门
    tools.openWindow("admin/org/manager/department/save.html" + (old ? "?id=" + old.id : ""), title, 800, 400, loadDepartment, function () {
        var iframe = this.getIFrameEl();
        var win = iframe.contentWindow;

        function init() {
            //初始化回调,部门管理页面在加载完成后会调用这个函数
            //并返回一些操作的方法
            win.onInit = function (e) {
                e.setParent(parent);
                old = mini.clone(old);
                if (old){
                    e.setOld(old);
                    findOrgByOrgId(old.orgId, e);
                }else {
                    findOrgByOrgId(parent.orgId, e);
                }
            }
        }

        init();
        $(iframe).on("load", init);
    });
}
function findOrgByOrgId(id, e) {
    require(["request", "message"], function (request, message) {
        request.get("organizational/"+id,function (response) {
            if(response.status == 200){
                window.nowSelectedOrg = response.result;
                e.setOrg(mini.clone(response.result));
            }else {
                message.showTips("数据加载失败:" + response.message);
            }
        });
    });
}
/**
 * 加载部门数据
 */
function loadDepartment() {
    grid.reload();
}
window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("添加子部门", "icon-add", function () {
        goSaveDepartmentPage(null, e.record, "新建部门");
    }));
    html.push(tools.createActionButton("编辑", "icon-edit", function () {
        goSaveDepartmentPage(e.record, e.sender.getParentNode(e.record), "编辑部门");
    }));
    html.push(tools.createActionButton("删除部门", "icon-remove", function (){
        if (row._state == "added" || row._state == "modified") {
            e.sender.removeNode(row);
        }else {
            require(["request", "message"], function (request, message) {
                message.confirm("确定删除该部门?", function () {
                    var loading = message.loading("删除中...");
                    request["delete"]("department/" + row.id, {}, function (res) {
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