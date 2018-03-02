importResource("/admin/css/common.css");

importMiniui(function () {
    require(["parser","text!list.hl"],function (parser, module) {
        parser.parse($(document.body),JSON.parse(module));
    })
});