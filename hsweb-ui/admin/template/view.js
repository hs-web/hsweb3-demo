importResource("/admin/css/common.css");


importMiniui(function () {
    mini.parse();

    require(["plugin/jquery-ui/jquery-ui", "plugin/ueditor/ueditor.parse"], function () {
        uParse("#basicForm", {
            rootPath: window.BASE_PATH + 'plugins/ueditor',
            chartContainerHeight: 5000
        });
    });


    require(["request", "message", "miniui-tools"], function (request, message, tools) {
        var id = request.getParameter("id");
        if(id){
            require(["parser"], function (parser) {
                parser($("#preview").html(""), id);
                mini.parse();
            })
        }
    });
});