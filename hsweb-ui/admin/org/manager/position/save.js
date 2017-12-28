importResource("/admin/css/common.css");

importMiniui(function () {
    mini.parse();
    require(["plugin/ueditor/ueditor.parse"], function () {
        uParse('#data-form', {
            rootPath: BASE_PATH + 'ui/plugins/ueditor',
            chartContainerHeight: 500
        });
    });
    var id = "";
    var exp = {};

    exp.setDepartment = function (dept) {
        var department = mini.getbyName("departmentId");
        department.setValue(dept.id);
        department.setText(dept.name);
        department.setEnabled(false);
    };
    exp.setParent = function (dep) {
        var parentIdEl = mini.getbyName("parentId");
        if (!dep) {
            dep = {id: "-1", name: "/"};
        }
        parentIdEl.setValue(dep.id);
        parentIdEl.setText(dep.name);
        parentIdEl.setEnabled(false);
    };
    exp.setOld = function (old) {
        var form = new mini.Form("#data-form");
        form.setData(old);
        if (old.department)
            exp.setDepartment(old.department);
        if (old.parentId == "-1") {
            exp.setParent(null);
        } else {
            require(["request"], function (request) {
                request.get("position/" + old.parentId, function (d) {
                    exp.setParent(d.result);
                });
            });
        }
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
