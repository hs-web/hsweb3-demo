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

        doProcessEditor();
        diagramFrame.attr("src", window.BASE_PATH + "workflow/diagram-viewer/operation.html?processInstanceId="+insId+"&processDefinitionId=" + defId);
        diagramFrame.on("load", function () {
            var win = diagramFrame[0].contentWindow;
            win.onNodeClick = function (canvas, element, activity) {
                console.log(activity)
                $(".activity-editor").hide();
                activity.processDefinitionId = defId;
                var editor = taskEditor[activity.properties.type];
                if (editor) {
                    editor(activity);
                } else {
                    doProcessEditor();
                }
                mini.layout()
            }
        });

        function doProcessEditor() {
            $(".activity-editor").hide();
            $(".process-editor").show();
            mini.layout();
            var processForm = new mini.Form("#process-form");
            var nowEditProcessId;

            $(".save-button")
                .unbind('click')
                .on("click", function () {
                    var form = tools.getFormData("#process-form", true);
                    if (form) {
                        form.id = nowEditProcessId;
                        form.processDefineKey = defKey;
                        form.processDefineId = defId;
                        request.patch("workflow/process/configuration/definition", form, function (response) {
                            if (response.status === 200) {
                                nowEditProcessId = response.result;
                            } else {
                                message.showTips("保存失败:" + response.message);
                            }
                        })
                    }
                });

            function setProcessConfig(config) {
                nowEditProcessId = config.id;
                processForm.setData(config);


                console.log(config);
            }

            request.createQuery("workflow/process/configuration/definition")
                .where("processDefineId", defId)
                .limit(0, 1)
                .exec(function (response) {
                    if (response.status === 200 && response.result.total === 1) {
                        setProcessConfig(response.result.data[0]);
                    } else {
                        request.createQuery("workflow/process/configuration/definition")
                            .where("processDefineKey", defKey)
                            .and("status", 1)
                            .orderByDesc("updateTime")
                            .limit(0, 1).exec(function (res) {
                            if (response.status === 200 && res.result.total === 1) {
                                setProcessConfig(res.result.data[0]);
                            }
                        })
                    }
                });

        }

        function addPersonList(persons) {
            var personCandidate = mini.get('personCandidate');
            var oldValue = personCandidate.getValue() ? personCandidate.getValue().split(",") : [];
            var oldText = personCandidate.getText() ? personCandidate.getText().split(",") : [];

            $(persons).each(function () {
                if (oldValue.indexOf(this.userId) === -1) {
                    oldValue.push(this.userId);
                    oldText.push(this.name);
                }
            });
            personCandidate.setValue(oldValue.join(","));
            personCandidate.setText(oldText.join(","));
        }

        function removePersonList(persons) {
            var personCandidate = mini.get('personCandidate');
            var oldValue = personCandidate.getValue() ? personCandidate.getValue().split(",") : [];
            var oldText = personCandidate.getText() ? personCandidate.getText().split(",") : [];

            $(persons).each(function () {
                var index = oldValue.indexOf(this.userId);
                if (index !== -1) {
                    oldValue.splice(index, 1);
                    oldText.splice(index, 1);
                }
            });
            personCandidate.setValue(oldValue.join(","));
            personCandidate.setText(oldText.join(","));
        }

        $(".select-person").on("click", function () {
            tools.openWindow("admin/org/person/selector.html", "选择人员", "800", "600", function () {

            }, function () {
                var iframe = this.getIFrameEl();

                function bindEvent() {
                    var win = iframe.contentWindow;
                    if (win) {
                        win.onSelect = function (person) {
                            addPersonList([person])
                            //  console.log(person)
                        };
                        win.onDeSelect = function (person) {
                            removePersonList([person])
                            //  console.log(person)
                        };
                        win.onGridLoad = function (grid) {
                            var personCandidate = mini.get('personCandidate');
                            $(personCandidate.getValue().split(",")).each(function () {
                                var userId = this + "";
                                grid.filter(function (row) {
                                    if (row.userId === userId) {
                                        grid.select(row.id);
                                    }
                                })
                            })
                        }
                    }
                }

                bindEvent()
                $(iframe).on("load", bindEvent)
            })
        })
    })

});