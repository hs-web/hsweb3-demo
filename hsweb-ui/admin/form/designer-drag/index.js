importResource("/admin/css/common.css");


var componentsImport = [
    "components-default"
]

importMiniui(function () {
    require(["designer", "md5", "plugin/jquery-ui/jquery-ui", "css!defaults","css!plugin/jquery-ui/jquery-ui.min"], function (Designer, md5) {
        window.md5 = md5;
        require(componentsImport, function () {
            var designer = new Designer();
            designer.init();
        });
    })
})
