define(['request',"message"], function (request,message) {

    function executeDashboard(id, call) {
        request.get("dashboard/" + id + "/execute", function (response) {
            if (response.status === 200) {
                call(response.result);
            }
        })
    }

    var builders = {
        "static": function (conf, container, events, id) {
            var js = conf.js;
            container.html(conf.html);
            try {
                if (js) {
                    eval("(function(){return function(){" +
                        "\n" +
                        js +
                        "\n" +
                        "}})()")
                        .call({
                            html: container,
                            events: events,
                            message:message,
                            request:request,
                            getData: function (call) {
                                executeDashboard(id, call);
                            }
                        });
                }
            } catch (e) {
                console.error("执行js错误", js, e)
            }
        },
        "charts": function (conf, container, events, id) {

            var body = $("<div>").css("height", "100%");
            var c = body[0];
            container.html("").append(body);
            var js = conf.js;
            require(['echarts'], function (echarts) {
                var chart = echarts.init(c);
                var option = {
                    // title: {
                    //     // text: '统计报表'
                    // },
                    tooltip: {},
                    legend: {
                        // data: ['销量']
                    },
                    xAxis: {
                        data: ["一月", "二月", "三月", "四月", "五月", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        // name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };
                try {
                    if (js) {
                        eval("(function(){return function(){" +
                            "\n" +
                            js +
                            "\n" +
                            "}})()")
                            .call({
                                html: container,
                                events: events,
                                message:message,
                                request:request,
                                option: option,
                                chart: chart,
                                getData: function (call) {
                                    executeDashboard(id, call);
                                },
                                setOption: function (o) {
                                    chart.setOption(o);
                                }
                            });
                    }
                } catch (e) {
                    console.error("执行js错误", js, e)
                }
                chart.setOption(option);

            })
        }
    };

    function DashBoard(config) {
        this.init = function () {
            var el = $(config.target);
            var dashboards = config.config;
            $(dashboards).each(function () {
                var dashboard = this;
                var template = JSON.parse(dashboard.template);
                var body = $("<div>").addClass("mini-col-" + (template.width || 6));
                var panel = $("<div>")
                    .addClass("mini-panel")
                    .attr({
                        id: "dashboard-" + dashboard.id,
                        title: dashboard.name,
                        width: "auto",
                        showCollapseButton: false,
                        showCloseButton: false
                    });

                var builder = builders[dashboard.type];
                if (builder) {
                    var fit = $("<div class='mini-fit'>")
                        .css("height", template.height + "px")
                    panel.append(fit);
                    var events = {};
                    builder(template, fit, events, dashboard.id);
                }
                body.append(panel);
                el.append(body);
            });
        }
    }

    return DashBoard;
})