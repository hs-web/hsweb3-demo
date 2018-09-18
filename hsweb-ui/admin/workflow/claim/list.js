importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools", "request", "message"], function (tools, request, message) {
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + "workflow/process/claims");

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            mini.get('add-model').show()
        });

        $(".create-model-button").unbind("click").on("click", function () {
            var data = tools.getFormData("#addModelForm", true);
            if (data) {
                var loading = message.loading("提交中...");
                request.post("workflow/model/", data, function (response) {
                    loading.hide();
                    if (response.status === 201 || response.status === 200) {
                        new mini.Form("#addModelForm").clear();
                        mini.get("add-model").hide();
                        edit(response.result.id);
                    } else {
                        message.showTips("创建失败:" + response.message);
                    }
                })
            }
        })
        search();
        grid.getColumn("action").renderer = function (e) {
            var row = e.record;
            var html = [
                tools.createActionButton("签收", "icon-ok", function () {
                    message.confirm("确定签收此任务", function () {
                        grid.loading("签收中...");
                        request['put']("workflow/process/claim/" + row.id,{}, function (response) {
                            grid.reload();
                            if (response.status === 200) {
                               //  grid.reload();
                            } else {
                                message.showTips("签收失败:" + response.message);
                            }
                        });
                    })
                })
            ];
            html.push(
                tools.createActionButton("查看流程图", "icon-find", function () {
                    tools.openWindow("workflow/diagram-viewer/index.html?processInstanceId="+row.processInstanceId+"&processDefinitionId=" + row.processDefinitionId, row.name, "800", "600", function (e) {
                        grid.reload();
                    })
                })
            );
            html.push(
                tools.createActionButton("删除", "icon-remove", function () {
                    message.confirm("确认删除?", function () {
                        grid.loading("删除中...");
                        request['delete']("workflow/process/definition/deployment/" + row.deploymentId, function (response) {
                            grid.reload();
                            if (response.status === 200) {
                                //grid.reload();
                            } else {
                                message.showTips("删除失败:" + response.message);
                            }
                        });
                    })
                })
            )
            return html.join("");
        }

    });


});
