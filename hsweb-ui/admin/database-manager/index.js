importResource("/admin/css/common.css");
importResource("/admin/css/common.css");
importResource("/plugins/font-awesome/4.7.0/css/font-awesome.css");

importMiniui(function () {
    require(["miniui-tools", "message", "request"], function (tools, message, request) {
        var datasourceList = [{name: "默认数据源", children: [{name:"加载中..."}], id: "", type: "database"}];
        mini.parse();
        var databaseTree = mini.get("database-tree");

        request.get("datasource", function (res) {
            if (res.status === 200) {
                if (res.result) {
                    $(res.result).each(function () {
                        this.type = "database";
                        this.children = [{name:"加载中..."}];
                        datasourceList.push(this);
                    });
                }
                databaseTree.loadData(datasourceList);
            } else {
                message.showTips("获取模板配置失败");
            }
        });
        databaseTree.on("drawnode", renderIcon)
        databaseTree.on("beforeexpand", function (e) {
            var node = e.node;
            if(node.type==='database'&&!node.loaded){
                e.cancel=true;
                request.get("database/manager/metas/"+node.id,function (res) {
                    if(res.status===200){
                        node.loaded=true;
                        var table = res.result.TABLE;
                        $(table).each(function () {
                            this.type="table";
                            this.expanded=false;
                            this.children=this.columns;
                        });
                        // node.children=table;
                        node.children=[];
                        databaseTree.addNodes(table,node)
                        databaseTree.expandNode(node);
                    }
                })
            }
        });

        function renderIcon(e) {
            var node = e.node;
            if (node.type === 'database') {
                e.iconCls = "fa fa-database"
                e.isLeaf = false;
            } else if (node.type === 'table') {
                e.iconCls = "fa fa-table"
            } else {
                e.iconCls = "fa fa-columns";
            }
            if(node.comment){
                e.nodeHtml=node.name+"("+node.comment+")";
            }
        }

        var templateMap = {};

        importResource('/plugins/miniui/themes/bootstrap/skin.css');


    });
});

function onBeforeOpen(e) {
    var menu = e.sender;
    var tree = mini.get("result");
    var node = tree.getSelectedNode();
    if (!node) {
        e.cancel = true;
        return;
    }
}