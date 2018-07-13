importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["miniui-tools", "request", "message"], function (tools, request, message) {
        window.tools = tools;
        var server = request.getParameter("server") || "";
        var selector = request.getParameter("selector")||"0";

        var grid = window.grid = mini.get("datagrid");
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + server + "dictionary");

        var itemsGrid = mini.get("item-grid");
        tools.initGrid(itemsGrid);
        itemsGrid.setDataField("result");
        itemsGrid.setAutoLoad(false);
        itemsGrid.setUrl(API_BASE_PATH + server + "dictionary-item/no-paging");

        itemsGrid.getColumn("status").renderer = function (e) {
            return e.value === 1 ? "是" : "否";
        };
        grid.getColumn("action").renderer = function (e) {
            var html = [];
            var row = e.record;
            if(selector==='1'&&row._state !== 'added'){
                html.push(tools.createActionButton("选择", "icon-ok", function () {
                     tools.closeWindow(row.id);
                }));
            }
            if (row._state === 'added' || row._state === 'modified') {
                html.push(tools.createActionButton("保存", "icon-save", function () {
                    if (!row.id) {
                        message.showTips("请输入ID", "danger")
                        return;
                    }
                    var loading = message.loading("保存中...");
                    request.patch(server + "dictionary", row, function (resp) {
                        loading.hide();
                        if (resp.status === 200) {
                            e.sender.acceptRecord(row);
                        } else {
                            message.showTips(resp.message, "danger");
                        }
                    });
                }));
            }
            html.push(tools.createActionButton("删除", "icon-remove", function () {
                if (row._state === 'added') {
                    e.sender.removeNode(row);
                } else {
                    message.confirm("是否删除此数据字典", function () {
                        var loading = message.loading("删除中...");
                        request['delete'](server + "dictionary/" + row.id, function (resp) {
                            loading.hide();
                            if (resp.status === 200) {
                                e.sender.removeRow(row);
                            } else {
                                message.showTips(resp.message, "danger");
                            }
                        });
                    })

                }
            }));
            return html.join("");
        }
        itemsGrid.getColumn("action").renderer = function (e) {

            var html = [];
            if (e.record._state === 'added' || e.record._state === 'modified') {
                html.push(tools.createActionButton("保存", "icon-save", function () {
                    var node = e.record;
                    node.dictId = nowSelectDict.id;
                    var loading = message.loading("保存中...");
                    request.patch(server + "dictionary-item/", node, function (resp) {
                        loading.hide();
                        if (resp.status === 200) {
                            node.id = resp.result;
                            e.sender.updateNode(node, node);
                            e.sender.acceptRecord(node);
                        } else {
                            message.showTips(resp.message, "danger");
                        }
                    });
                }));
            }
            html.push(tools.createActionButton("删除", "icon-remove", function () {
                var node = e.record;
                if (node._state === 'added') {
                    e.sender.removeNode(node);
                } else {
                    message.confirm("是否删除此选项", function () {
                        var loading = message.loading("删除中...");
                        request['delete'](server + "dictionary-item/" + node.id, function (resp) {
                            loading.hide();
                            if (resp.status === 200) {
                                e.sender.removeNode(node);
                            } else {
                                message.showTips(resp.message, "danger");
                            }
                        });
                    })

                }
            }));

            return html.join("");
        }

        function search() {
            tools.searchGrid("#search-box", grid);
        }

        var itemsForm = document.getElementById("itemsForm");
        var nowSelectDict;
        $('.add-item-button').on("click", function () {
            var items = itemsGrid.getData();
            var ordinal = 0;
            $(items).each(function () {
                if (ordinal < parseInt(this.ordinal)) {
                    ordinal = parseInt(this.ordinal);
                }
            });
            itemsGrid.addNode({
                status: 1,
                ordinal: ordinal + 1,
                dictId: nowSelectDict.id,
                sortIndex: items.length
            });
        });
        $(".save-all-item").on("click", function () {
            var loading = message.loading("保存中...");
            $(itemsGrid.getData()).each(function (idx, item) {
                item.sortIndex = idx;
            });
            request.patch(server + "dictionary-item/batch", itemsGrid.getData(), function (response) {
                loading.hide();
                if (response.status === 200) {
                    itemsGrid.reload();
                } else {
                    message.showTips(response.message, "danger");
                }
            })
        });
        $(".add-dict-button").on("click", function () {
            var row = {status: 1};
            grid.addRow(row);
            grid.select(row);
            grid.beginEditRow(row);
        });

        function searchItem() {
            var id = nowSelectDict.id || "-1";
            var params = request.createQuery().where("dictId", id).getParams();
            itemsGrid.load(params);
        }

        grid.on("cellbeginedit", function (e) {
            if (e.field === 'id' && e.record._state !== 'added') {
                e.cancel = true;
            }
        });
        grid.on("showRowDetail", function (e) {
            var grid = e.sender;
            var row = nowSelectDict = e.record;
            var td = grid.getRowDetailCellEl(row);
            td.appendChild(itemsForm);
            itemsForm.style.display = "block";
            searchItem();
        });

        $(".search-button").click(search);
        tools.bindOnEnter("#search-box", search);
        $(".add-button").click(function () {
            tools.openWindow("admin/role/save.html", "添加字典", "600", "300", function (e) {
                grid.reload();
            })
        });
        search();
    });
});

window.renderStatus = function (e) {
    return e.value == 1 ? "是" : "否";
}

function edit(id) {
    tools.openWindow("admin/role/save.html?id=" + id, "编辑角色", "600", "300", function (e) {
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
    html.push(
        tools.createActionButton("角色赋权", "icon-find", function () {
            tools.openWindow("admin/autz-settings/setting.html?priority=20&merge=true&type=role&settingFor=" + row.id, "角色赋权-" + row.name, "800", "600", function () {

            });
        })
    )
    return html.join("");
}
