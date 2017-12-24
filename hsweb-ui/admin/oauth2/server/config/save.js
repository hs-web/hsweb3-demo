importResource("/admin/css/common.css");
var statusData = [
    {
        id:"1",text:"启用"
    },
    {
        id:"0",text:"禁用"
    }
];

var defaultPassword = Math.random() + "";

importMiniui(function () {
    mini.parse();
    require(["request", "miniui-tools"], function (request, tools) {
        var api = "oauth2-server-config";
        var func = request.patch;
        var id = request.getParameter("id");
        if(id){
           loadData(id);
        }
        $(".save-button").on("click", (function () {
            require(["message"], function (message) {
                var data = tools.getFormData("#basic-info",true);
                if (!data)return;
                var loading = message.loading("提交中");
                func(api, data, function (response) {
                    loading.close();
                    if (response.status === 200) {
                        message.showTips("保存成功");
                        if (!id) id = response.result;
                    } else {
                        message.showTips("保存失败:" + response.message, "danger");
                        if (response.result)
                            tools.showFormErrors("#basic-info", response.result);
                    }
                })
            });
        }));
    });
});
function loadData(id) {
    require(["request", "message"], function (request, message) {
        var loading = message.loading("加载中...");
        request.get("oauth2-server-config/" + id, function (response) {
            mini.getbyName("id").setEnabled(false);
            loading.hide();
            if (response.status === 200) {
                new mini.Form("#basic-info").setData(response.result);
            } else {
                message.showTips("加载数据失败", "danger");
            }
        });
    });
}


function randomChar(len) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function generateMixed(n) {
        var res = "";
        for(var i = 0; i < n ; i ++) {
            var id = Math.ceil(Math.random()*35);
            res += chars[id];
        }
        return res;
    }
    return generateMixed(len);
}