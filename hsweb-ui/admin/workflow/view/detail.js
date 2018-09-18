importResource("/admin/css/common.css");
importResource("/admin/form/designer-drag/defaults-border.css");


importMiniui(function () {


    var diagramFrame = $(".diagram-viewer");

    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        var taskEditor = {
            userTask: function (info) {
                var task = $(".user-task").show();
                task.find(".activity-name").text(info.properties.name);
                var activityConfigId;
                var form = new mini.Form("#user-task-form");
                form.setData({});

                var candidates = [];
                var candidateMap = {
                    personCandidate: "user",
                    positionCandidate: "position",
                    departmentCandidate: "department"
                };
                var candidateMapReverse = {};
                for (var c in candidateMap) {
                    candidateMapReverse[candidateMap[c]] = c;
                }

                $(".save-candidate-button").on('click', function () {
                    //setCandidate(candidates);
                    mini.get("candidate-window").show();
                });

                function setCandidate(candidate) {
                    new mini.Form("#candidate-form").setData({});
                    $(candidate).each(function () {
                        var candidateInputId = candidateMapReverse[this.dimension];
                        if (candidateInputId) {
                            var input = mini.get(candidateInputId);
                            if (input) {
                                input.setValue(this.idList.join(","));
                                input.setText(this.nameList.join(","));
                            }
                        }
                    })
                }
                function setActivityConfig(config) {
                    form.setData(config);
                    activityConfigId = config.id;
                    setCandidate(candidates=parseCandidate(config.candidateDimension));
                }

                function parseCandidate(json) {
                    if (!json) {
                        return [];
                    }
                    return JSON.parse(json);
                }

                $(".save-candidate")
                    .unbind("click")
                    .on("click", function () {
                        for (var type in candidateMap) {
                            var candidate = mini.get(type);
                            if (candidate && candidate.getValue()) {
                                candidates.push({
                                    dimension: candidateMap[type],
                                    idList: candidate.getValue().split(","),
                                    nameList: candidate.getText().split(",")
                                })
                            }
                        }
                        mini.get("candidate-window").hide();
                    });

                $(".save-button").unbind("click").on("click", function () {
                    var data = tools.getFormData("#user-task-form");
                    if (!data) {
                        return;
                    }
                    data.activityId = info.id;
                    data.processDefineKey = info.processDefinitionKey;
                    data.processDefineId = info.processDefinitionId;
                    data.candidateDimension = JSON.stringify(candidates);

                    if (activityConfigId) {
                        data.id = activityConfigId;
                    }
                    var loading = message.loading("保存中....");
                    request.patch("workflow/process/configuration/activity", data, function (response) {
                        loading.hide();
                        if (response.status === 200) {
                            message.showTips("保存成功")
                        } else {
                            message.showTips("保存失败:" + response.message, "danger");
                        }
                    })
                });


                request.createQuery("workflow/process/configuration/activity")
                    .where("processDefineId", info.processDefinitionId)
                    .and("activityId", info.id)
                    .limit(0, 1)
                    .exec(function (response) {
                        if (response.status === 200 && response.result.total === 1) {
                            setActivityConfig(response.result.data[0]);
                        } else {
                            request.createQuery("workflow/process/configuration/activity")
                                .where("processDefineKey", info.processDefinitionKey)
                                .and("activityId", info.id)
                                .and("status", 1)
                                .orderByDesc("updateTime")
                                .limit(0, 1)
                                .exec(function (res) {
                                    if (response.status === 200 && res.result.total === 1) {
                                        setActivityConfig(res.result.data[0]);
                                    }
                                })
                        }
                    });
            }
        };

        mini.parse();
        var defId = request.getParameter("processDefinitionId");
        var insId = request.getParameter("processInstanceId");

        diagramFrame.attr("src", window.BASE_PATH + "workflow/diagram-viewer/operation.html?processInstanceId="+insId+"&processDefinitionId=" + defId);
        diagramFrame.on("load", function () {
            var win = diagramFrame[0].contentWindow;
            win.onNodeClick = function (canvas, element, activity) {
                console.log(activity)
                $(".activity-editor").hide();
                activity.processDefinitionId = defId;

                mini.layout()
            }
        });


    })

});