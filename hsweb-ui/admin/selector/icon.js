/**
 * require(["/admin/selector/icon.js"],function(selector){
 *      selector(function(icon){
 *          console.log(icon)
 *      })
 * })
 */
define(["miniui-tools"], function (tools) {

    function selector(callback) {
        tools.openWindow("admin/selector/icon/index.html", "图标选择", "800", "500", function (e) {
            if (e && e !== 'close' && e !== 'cancel') {
                callback(e);
            }
        });
    }

    return selector;
});