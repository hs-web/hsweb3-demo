importResource("/admin/css/common.css");
function test() {
    console.log("test");
}
importMiniui(function () {
    require(["miniui-tools","request"], function (tools, request) {
        //初始化
        mini.parse();
        var grid = mini.get("org-grid");
        window.onKeyEnter = function () {
            window.search();
        };
        window.search=function () {
            var key = mini.get("key").getValue();
            var param = {};
            if (key && key.length > 0) {
                require(["request"], function (request) {
                    param = request.createQuery().where()
                        .like("name", "%" + key + "%")
                        .getParams();
                    grid.load(param);
                });
            } else {
                grid.load(param);
            }
        }

        $(".mini-tree-nodetext").on("dblclick", function () {
            var node = grid.getSelectedNode();
            if (node && grid.isLeaf(node) == false) {
                alert("不能选中父节点");
                return;
            }
            closeWindow("ok");
        });
        $(".on-concel-button").on("click", function () {
            closeWindow("cancel");
        });
        $(".ok-button").on("click", function () {
            var node = grid.getSelectedNode();
            if (node && grid.isLeaf(node) == false) {
                alert("不能选中父节点");
                return;
            }
            closeWindow("ok");
        });
        $(".dblclick").on("dblclick", function () {
            var node = grid.getSelectedNode();
            if (node && grid.isLeaf(node) == false) {
                alert("不能选中父节点");
                return;
            }
            closeWindow("ok");
        });
        function closeWindow(action) {
            if (window.CloseOwnerWindow) return window.CloseOwnerWindow(action);
            else window.close();
        }
        window.onInit = function () {
            return grid.getSelectedNode();
        };
        tools.initGrid(grid);
        grid.setUrl(API_BASE_PATH + "organizational?paging=false");
    });

});

