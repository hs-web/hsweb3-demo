importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    $(".get-department-tree").on("click",function () {
        var btnEdit = mini.getbyName("departmentId");
        mini.open({
            url: "org/position/departmentTree.html",
            showMaxButton: false,
            title: "选择机构",
            width: 350,
            height: 350,
            ondestroy: function (action) {
                if (action == "ok") {
                    var iframe = this.getIFrameEl();
                    var data = iframe.contentWindow.onInit();
                    if (data) {
                        btnEdit.setValue(data.id);
                        btnEdit.setText(data.name);
                    }
                }
            }
        });
    });
    require(["plugin/ueditor/ueditor.parse"], function () {
        uParse('#data-form', {
            rootPath: BASE_PATH + 'ui/plugins/ueditor',
            chartContainerHeight: 500
        });
    });
    var id = "";
    var exp = {};
    exp.setParent = function () {
        var parentIdEl = mini.getbyName("parentId");
        var  dep = {id: "-1", name: "/"};

        parentIdEl.setValue(dep.id);
        parentIdEl.setText(dep.name);
        parentIdEl.setEnabled(false);
    };
    if (window.onInit) {
        window.onInit(exp);
    }

    $(".save-button").on("click", function () {
        require(["request", "message"], function (request, message) {
            id = id != "" ? id : request.getParameter("id");
            if (!id) id = "";
            var api = "position/" + id;
            var func = id === "" ? request.post : request.put;
            var form = new mini.Form("#data-form");
            form.validate();
            if (form.isValid() == false) return;
            //提交数据
            var data = form.getData();
            var box = message.loading("提交中...", "");
            func(api, data, function (e) {
                console.log(e);
                box.hide();
                if (e.status == 201 || e.status == 200) {
                    if (id === "")
                        id = e.result;
                    message.showTips("保存成功!");
                } else {
                    message.showTips(e.message, "danger");
                }
            });
        });

    });

    $(".back-button").on("click", function () {
        require(["miniui-tools"], function (tools) {
            tools.closeWindow('cancel');
        })
    });
});
