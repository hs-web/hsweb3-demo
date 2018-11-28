//importResource("/admin/css/common.css");

importMiniui(function () {
    require(["request", "miniui-tools", "message"], function (request, tools, message) {

        //完成编辑
        window.complete = function(){
  /*          message.confirm("确定删除该菜单?", function () {

            });*/
            tools.closeWindow(getElConfig());
        }
    });
});

