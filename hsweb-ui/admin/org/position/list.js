importResource("/admin/css/common.css");

require(["authorize"], function (authorize) {
    authorize.parse(document.body);
    window.authorize = authorize;
    importMiniui(function () {
        require(["miniui-tools"], function (tools) {
            mini.parse();
            window.tools = tools;
            var grid = window.grid = mini.get("data-grid");
            var department_grid = mini.get("position-grid");
            tools.initGrid(grid);
            //加载查询部门选择项
            require(["request"], function (request) {
               request.get("department?paging=false",function (response) {
                   department_grid.loadList(response.result.data,"id","parentId");
               });
            });
            $(".search-button").on("click", function () {
                tools.searchGrid("#search-box", grid, null);
            });
            $(".add-button").on("click", function () {
                tools.openWindow("admin/org/position/addPosition.html" , "新建职位", 800, 400, loadPosition, function () {
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
        //加载部门列表
        require(["request", "message"], function (request, message) {
            var departmentNameMap = {};
            request.get("department?paging=false",function (response) {
                if(response.status == 200){
                    for(var i = 0; i<response.result.data.length; i++){
                        departmentNameMap[response.result.data[i].departmentId] = response.result.data[i].name;
                    }
                    grid.setUrl(API_BASE_PATH + "position?paging=false");
                    window.departmentName = function (e) {
                        var name = departmentNameMap[e.value];
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
 * 弹出新建职位页面
 * @param parent 父级职位
 */
function goSaveDepartmentPage(old, parent, title) {
    //新增部门
    tools.openWindow("admin/org/manager/position/save.html" + (old ? "?id=" + old.id : ""), title, 800, 400, loadPosition, function () {
        var iframe = this.getIFrameEl();
        var win = iframe.contentWindow;

        function init() {
            //初始化回调,职位管理页面在加载完成后会调用这个函数
            //并返回一些操作的方法
            win.onInit = function (e) {
                e.setParent(parent);
                old = mini.clone(old);
                if (old){
                    e.setOld(old);
                    findDepartmentById(old.departmentId, e);
                }else {
                    findDepartmentById(parent.departmentId, e);
                }
            }
        }

        init();
        $(iframe).on("load", init);
    });
}
function findDepartmentById(id, e) {
    require(["request", "message"], function (request, message) {
        request.get("department/"+id,function (response) {
            if(response.status == 200){
                window.nowSelectedOrg = response.result;
                e.setDepartment(mini.clone(response.result));
            }else {
                message.showTips("数据加载失败:" + response.message);
            }
        });
    });
}
/**
 * 加载职位数据
 */
function loadPosition() {
    grid.reload();
}
window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("添加子职位", "icon-add", function () {
        goSaveDepartmentPage(null, e.record, "新建职位");
    }));
    html.push(tools.createActionButton("编辑", "icon-edit", function () {
        goSaveDepartmentPage(e.record, e.sender.getParentNode(e.record), "编辑职位");
    }));
    html.push(tools.createActionButton("删除职位", "icon-remove", function (){
        if (row._state == "added" || row._state == "modified") {
            e.sender.removeNode(row);
        }else {
            require(["request", "message"], function (request, message) {
                message.confirm("确定删除该职位?", function () {
                    var loading = message.loading("删除中...");
                    request["delete"]("position/" + row.id, {}, function (res) {
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