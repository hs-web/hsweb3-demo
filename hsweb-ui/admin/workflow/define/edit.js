importResource("/admin/css/common.css");
importResource("/admin/form/designer-drag/defaults-border.css");

var scriptLanguages = [
    {id: "javascript", text: 'js'}
    , {id: "groovy", text: 'groovy'}
];

var supportListeners = {
    task: [
        {id: "task_created", text: "任务创建时"},
        {id: "task_assigned", text: "任务签收时"},
        {id: "task_completed", text: "任务完成时"}
    ],
    process: [
        {id: "process_started", text: "流程启动时"},
        {id: "process_completed", text: "流程完成时"},
        {id: "process_completed_with_error_end_event", text: "流程错误"},
        {id: "process_cancelled", text: "流程取消时"}
    ]
};


importMiniui(function () {


    var diagramFrame = $(".diagram-viewer");

    require(["request", "miniui-tools", "message"], function (request, tools, message) {
        mini.parse();
        var listenerGrid = mini.get("listener-grid");

        var taskEditor = {
            userTask: function (info) {
                var task = $(".user-task").show();
                task.find(".activity-name").text(info.properties.name);
                var activityConfigId;
                var form = new mini.Form("#user-task-form");
                form.setData({});
                window.eventTypeData = supportListeners.task;
                var eventTypeInput = mini.get("eventType");
                if (eventTypeInput) {
                    eventTypeInput.setData(window.eventTypeData);
                }
                var candidates = [];
                var candidateMap = {
                    personCandidate: "user",
                    positionCandidate: "position",
                    departmentCandidate: "department"
                };
                var listeners = [];
                var candidateMapReverse = {};
                for (var c in candidateMap) {
                    candidateMapReverse[candidateMap[c]] = c;
                }

                $(".save-candidate-button").unbind("click").on('click', function () {
                    //setCandidate(candidates);
                    mini.get("candidate-window").show();
                });
                $(".save-task-listener-button").unbind("click")
                    .on("click", function () {
                        listenerGrid.setData(listeners);
                        mini.get("listener-window").show();

                    });
                $(".save-listener").unbind("click").on("click", function () {
                    listeners = listenerGrid.getData();
                    mini.get("listener-window").hide();
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
                    listenerGrid.setData(listeners = config.listeners);
                    form.setData(config);
                    activityConfigId = config.id;
                    setCandidate(candidates = parseCandidate(config.candidateDimension));
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
                    data.listeners = listeners;
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


        var defId = request.getParameter("id");
        var defKey = request.getParameter("key");

        listenerGrid.getColumn("script").renderer = function (e) {
            return tools.createActionButton("编辑脚本", "icon-edit", function () {
                doEditScript(e.record.language, e.value, function (script) {
                    e.value = script;
                    e.record.script = script;
                })
            })
        };

        listenerGrid.getColumn("action").renderer = function (e) {
            return tools.createActionButton("删除", "icon-remove", function () {
                e.sender.removeRow(e.record);
            })
        }
        doProcessEditor();
        diagramFrame.attr("src", window.BASE_PATH + "workflow/diagram-viewer/operation.html?processDefinitionId=" + defId);
        diagramFrame.on("load", function () {
            var win = diagramFrame[0].contentWindow;
            win.onNodeClick = function (canvas, element, activity) {
                $(".activity-editor").hide();
                activity.processDefinitionId = defId;
                activity.processDefinitionKey = defKey;
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
                        }
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

        function doEditScript(lang, script, callback) {
            script = script || "";
            require(['script-editor'], function (editorBuilder) {
                editorBuilder.createEditor("script-editor", function (editor) {
                    editor.init(lang, script);
                    $(".save-script-editor").unbind("click").on("click", function () {
                        if (callback) {
                            callback(editor.getScript());
                        }
                        mini.get("scriptEditor").hide();
                    })
                });
            });
            mini.get("scriptEditor").show();
        }
    })

});