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
    require(["request"], function (request) {
        id = request.getParameter("id");
        load();
    });

    function initAction() {
        if (window.onInit) {
            window.onInit({
                init: function (org, dep, pos) {
                    if (!id) {
                        if (org) {
                            mini.getbyName("orgId").setValue(org.id);
                            changeOrg({value: org.id}, function () {
                                if (dep) {
                                    mini.getbyName("departmentId").setValue(dep.id);
                                    changeDep({value: dep.id}, function () {
                                        if (pos) {
                                            mini.getbyName("positionId").setValue(pos.id);
                                            mini.getbyName("positionId").doValueChanged();
                                            addPosToGrid();
                                        }
                                    })
                                }
                            })
                        }
                    }
                }
            });
        }
    }

    function load() {

        require(["request", "message"], function (request, message) {
            //加载机构数据
            request.get("organizational", {paging: false}, function (response) {
                if (response.status == 200) {
                    initAction();
                }
            });
            //加载旧的人员数据
            var box = message.loading("加载数据中...");
            request.get("person/me", function (data) {
                box.hide();
                if (data.status === 200) {
                    var person = data.result;
                    if (person.personUser)
                        person.personUser.password = '$default';
                    person.departmentId = "";
                    person.positionId = "";
                    if (person.photo) {
                        $("#photo").attr("src", person.photo);
                    }
                    $("#sex_" + person.sex).prop("checked", true);
                    new mini.Form("#data-form").setData(person);
                    if (person.positionIds) {
                        window.setTimeout(function () {
                            mini.get("position-grid").loading("加载岗位信息,数量:" + person.positionIds.length);
                            var list = [];
                            $(person.positionIds).each(function () {
                                var posId = this + "";
                                var pos = request.get("position/" + posId).result;
                                if (pos) {
                                    var dep = request.get("department/" + pos.departmentId).result;
                                    var area = request.get("organizational/" + dep.orgId).result;
                                    list.push({org: area, department: dep, position: pos, positionId: pos.id});
                                }
                                mini.get("position-grid").setData(list);
                                mini.get("position-grid").unmask();
                            });
                        }, 1);
                    }
                }
            });

            var uploaderInstance;
            require(["pages/form/designer-drag/file-upload-2"], function (Uploader) {
                uploaderInstance = Uploader.initUploader({
                    // container: $("#upload-photo"),
                    accept: "image",
                    pick: {
                        id: "#choose-photo",
                        multiple: false
                    },
                    process: function (file, percentage) {

                    },
                    callback: function (file, info) {
                        $("#photo").attr("src", info);
                    },
                    uploadError: function (file, response) {
                        // message.showTips("上传失败:" + response.message, "danger")
                    },
                    onAdd: function (file) {
                        uploaderInstance.makeThumb(file, function (error, src) {
                            if (error) {
                                return;
                            }
                            var img = $("#photo")
                                .attr("src", src);
                            $("#")
                        }, 100, 115);
                    }
                });
            })
        });

    }

    $(".save-button").on("click", function () {
        require(["request", "message"], function (request, message) {
            id = id != "" ? id : request.getParameter("id");
            if (!id) id = "";
            var api = "person/me";
            var func = request.put;
            var form = new mini.Form("#data-form");
            form.validate();
            if (form.isValid() == false) return;
            //提交数据
            var data = form.getData();
            data.sex = $('[name="sex"]:checked ').val();
            data.positionIds = [];
            if (data.personUser && data.personUser.password == '$default') {
                delete data.personUser.password;
            }
            $(mini.get("position-grid").getData()).each(function () {
                data.positionIds.push(this.positionId);
            });
            data.photo = $("#photo").attr("src");
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
