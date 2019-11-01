/**
 require(["pages/form/operation/save-page"], function (savePage) {
   //testForm为表单模板id或者表单配置对象
    savePage.singlePage("testForm", {
        title: "编辑数据",
        width: "80%",
        height: "80%",
        close: function () {
            //关闭窗口时触发,返回false时不关闭
        },
        onload: function (conf) {
            var formParser = conf.form;
            var toolbar=conf.toolbar;// 工具栏html容器, jquery对象
        },
        submit: function (data, conf) {
            console.log(data);
            //表单解析器对象
            var formParser = conf.form;
            conf.close();//关闭窗口

        }
    })
});
 */

define(["pages/template/parser", "message"], function (parser, message) {
    function singlePage(template, config) {
        var loading = message.loading("加载中...");
        try {
            config = config || {};
            var onSubmit = config.submit;
            var onClose = config.close;

            var data = config.data || {};
            var windowId = "window_" + Math.round(Math.random() * 100000);
            var div = config.el || $("<div class='mini-window' allowResize='true' showCloseButton='false' showToolbar='true' " +
                " style='width: 80%;height: 80%;display: none'>");

            var toolbar = $("<div property='toolbar'>");
            div.append(toolbar);

            var submit = $("<a class='mini-button submit-form' plain='true' iconCls='icon-ok'>").text("提交");
            var undo = $("<a class='mini-button reset-form' plain='true' iconCls='icon-undo'>").text("重新填写");
            var close = $("<a class='mini-button close-form' plain='true' iconCls='icon-remove'>").text("关闭");
            toolbar.append(submit).append(undo).append(close);
            var body =$("<div class='mini-fit'>");
            div.append(body);
            div.attr("id", windowId);
            if (!config.el) {
                div.attr({
                    "title": config.title || '编辑数据'
                });
                div.css({
                    "width": config.width || "80%",
                    "height": config.height || "80%"
                });
                $(document.body).append(div);
            }


            function bindEvent(selector, call) {
                $("#" + windowId + " " + selector).unbind("click").on("click", call);
            }

            parser(body, template, {
                    beforeLoad: function () {
                        if (config.beforeLoad) {
                            config.beforeLoad({
                                form: this,
                                toolbar: toolbar
                            });
                        }
                    },
                    load: function () {
                        var formParser = this;
                        try {
                            if (mini.get(windowId))
                                mini.get(windowId).show();
                            mini.parse();
                            formParser.setData(data);
                            if (config.onload) {
                                config.onload({
                                    form: formParser,
                                    toolbar: toolbar
                                });
                            }
                            bindEvent(".submit-form", function () {
                                var data = formParser.getData(true);
                                if (data && onSubmit) {
                                    onSubmit(data, {
                                        close: function () {
                                            if (mini.get(windowId)) {
                                                mini.get(windowId).hide();
                                            }
                                        }, form: formParser
                                    });
                                }
                            });
                            bindEvent(".reset-form", function () {
                                formParser.setData(data);
                            });
                            bindEvent(".close-form", function () {
                                if (onClose) {
                                    if (onClose() === false) {
                                        return;
                                    }
                                }
                                if (mini.get(windowId)) {
                                    mini.get(windowId).hide();
                                }
                                div.remove();
                            });
                            loading.hide();
                        } catch (e) {
                            loading.hide();
                            message.alert("加载表单失败");
                            console.error("加载表单失败", e);

                        }
                    }
                }
            );
        } catch (e) {
            loading.hide();
            message.alert("加载表单失败");
            console.error("加载表单失败", e);
        }

    }

    return {
        singlePage: singlePage
    }
});