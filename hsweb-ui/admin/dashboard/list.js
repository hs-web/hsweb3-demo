importResource("/admin/css/common.css");

importMiniui(function () {
    require(["request", "miniui-tools"], function (request, tools) {
        mini.parse();
        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);

        grid.setAutoLoad(false);
        grid.setUrl(request.basePath + "dashboard?paging=false&excludes="+(['template','script','scriptLanguage'].join(",")));

        grid.getColumn("type").renderer = function (e) {
            return e.value === 'static' ? "静态" : "图表";
        }

        function saveSortIndex() {
            $(grid.getData()).each(function (index,node) {
                request.put("dashboard/"+node.id,{sortIndex:index},function (response) {
                    // if(response.status!==200){
                    //     mini.alert("提交失败:"+response.message+",错误码:"+response.requestId);
                    // }
                })
            })
        }
        grid.on('drop',function (e) {
           saveSortIndex();
        })

        grid.getColumn("status").renderer = function (e) {
            var html;
            var row = e.record;
            if (e.value === 1) {
                html = tools.createActionButton("点击禁用", "fa fa-check text-success", function () {
                    grid.loading("提交中...");

                    request.put("dashboard/"+row.id,{status:0},function (response) {
                        e.sender.unmask();

                        if(response.status===200){
                            e.sender.updateNode(row,{status:0});
                            e.sender.accept();
                        }else{
                            mini.alert("提交失败:"+response.message+",错误码:"+response.requestId);
                        }
                    })
                })
            }else{
                html = tools.createActionButton("点击启用", "fa fa-times text-danger", function () {
                    grid.loading("提交中...");
                    request.put("dashboard/"+row.id,{status:1},function (response) {
                        e.sender.unmask();
                        if(response.status===200){
                            e.sender.updateNode(row,{status:1});
                            e.sender.accept();
                        }else{
                            mini.alert("提交失败:"+response.message+",错误码:"+response.requestId);
                        }
                    })
                })
            }
            return html;
        }


        function search() {
            tools.searchGrid("#search-box", grid);
        }

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/dashboard/save.html", "添加配置", '80%', "600", function (e) {
                grid.reload();
            })
        });
        search();

        function edit(id) {
            tools.openWindow("admin/dashboard/save.html?id=" + id, "添加配置", "80%", "600", function (e) {
                grid.reload();
            })
        }

        window.renderAction = function (e) {
            var row = e.record;
            var html = [
                tools.createActionButton("编辑", "icon-edit", function () {
                    edit(row.id);
                })
            ];
            return html.join("");
        }

    });
});
