importResource("/admin/css/common.css");

require(["authorize"], function (authorize) {
    authorize.parse(document.body);
    window.authorize = authorize;
    importMiniui(function () {
        mini.parse();
        require(["miniui-tools", "request", "search-box"], function (tools, request, SearchBox) {
            new SearchBox({
                container: $("#search-box"),
                onSearch: search,
                initSize: 2
            }).init();
            window.tools = tools;
            var grid = window.grid = mini.get("data-grid");
            tools.initGrid(grid);
            grid.setUrl(API_BASE_PATH + "person?paging=false");
            request.get("organizational/no-paging", function (response) {
                if (response.status === 200) {
                    mini.getbyName("id$person-in-org").loadList(response.result);
                }
            });
            var org = mini.getbyName("id$person-in-org");
            org.on("valueChanged", changeOrg);
            var dept = mini.getbyName("id$person-in-department");
            dept.on("valueChanged", changeDep);
            var position = mini.getbyName("id$person-in-position");
            position.on("valueChanged", search);


            function search() {
                var name = mini.getbyName("name");
                var query = request.createQuery();
                if (name.getValue()) {
                    query.like("name", "%" + name.getValue() + "%");
                }
                if (position.getValue()) {
                    query.and("id", position.getValue(), "person-in-position");
                } else if (dept.getValue()) {
                    query.and("id", dept.getValue(), "person-in-department");
                } else if (org.getValue()) {
                    query.and("id", org.getValue(), "person-in-org");
                }
                grid.load(query.getParams());
            }
            grid.on("load",function () {
                if(window.onGridLoad){
                    window.onGridLoad(grid);
                }
            })

            function changeDep(e, cbk) {
                search();
                var depId = e.value;
                if (!depId || depId === '') return;
                require(["request"], function (request) {
                    request.createQuery("position")
                        .where("departmentId", depId).noPaging()
                        .orderBy("sortIndex")
                        .exec(function (e) {
                            mini.getbyName("id$person-in-position").loadList(e.result.data);
                            if (!cbk)
                                mini.getbyName("id$person-in-position").showPopup();
                            if (cbk) cbk();
                        });
                });
            }

            function changeOrg(e, cbk) {

                var orgId = e.value;
                if (!orgId || orgId === '') return;
                mini.getbyName("id$person-in-position").loadList([]);
                mini.getbyName("id$person-in-position").setValue("");
                mini.getbyName("id$person-in-department").setValue("");

                search();
                require(["request"], function (request) {
                    request.createQuery("department")
                        .where("orgId", orgId).noPaging()
                        .orderBy("sortIndex")
                        .exec(function (e) {
                            mini.getbyName("id$person-in-department").loadList(e.result.data);
                            if (!cbk)
                                mini.getbyName("id$person-in-department").showPopup();
                            if (cbk) cbk();
                        });
                });
            }

            $(".search-button").on("click", function () {
                search()
            });
            search();
            $(".ok-button").on("click",function () {
                tools.closeWindow()
            })
            grid.on("select", function (e) {
                var row = e.record;
                if (window.onSelect) {
                    window.onSelect(row);
                }
            });

            grid.on("deselect", function (e) {
                var row = e.record;
                if (window.onDeSelect) {
                    window.onDeSelect(row);
                }
            });
            /**
             * 加载人员数据
             */
            function loadPerson() {
                grid.reload();
            }
        });
        window.renderSex = function (e) {
            var name = '';
            if (e.value == 1) {
                name = '男';
            } else if (e.value == 0) {
                name = '女';
            } else {
                name = '';
            }
            return name;
        }
        window.renderStatus = function (e) {
            var name = '';
            if (e.value == 1) {
                name = '在职';
            } else {
                name = '离职';
            }
            return name;
        }

    });
});

window.renderAction = function (e) {
    var html = [];
    var row = e.record;
    html.push(tools.createActionButton("选择", "icon-ok", function () {
        tools.openWindow("admin/org/manager/person/save.html?id=" + e.record.id, "编辑人员", 850, 680, function (e) {
            tools.closeWindow(row);
        });
    }));
    return html.join("");
}