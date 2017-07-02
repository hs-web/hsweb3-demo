define(function () {
    /**
     * 打开窗口
     * @param url 窗口的URL
     * @param title 标题
     * @param width 宽度
     * @param height 高度
     * @param ondestroy 销毁时回调 , 打开的页面通过 boot.closeWindow(response) ;传递返回值. 通过回调参数获取.
     * @param onload 加载时毁掉 , 可通过 this.getIFrameEl(); 获取frame对象
     */
    function openWindow(url, title, width, height, ondestroy, onload) {
        if (url.indexOf("http") != 0) {
            if (url.indexOf("/") == 0) url = url.substr(1);
            url = window.BASE_PATH + url;
        }
        mini.open({
            url: url,
            showMaxButton: true,
            title: title,
            width: width,
            height: height,
            maskOnLoad: false,
            showModal: false,
            onload: onload,
            ondestroy: ondestroy
        });
    };

    return {
        /**
         * 给表单绑定回车事件
         * @param formEl 表单选择器,如:#search-box
         * @param fun 回调
         */
        bindOnEnter: function (formEl, fun) {
            var form = new mini.Form(formEl);
            var fields = form.getFields();
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (!field.onenter && field.on) {
                    field.on("enter", fun);
                }
            }
        },
        /**
         * 查询表格
         * @param formEL 查询条件表单选择器,如:#search-box
         * @param grid 表格对象
         */
        searchGrid: function (formEL, grid, defaultParam) {
            var param = new mini.Form(formEL).getData(true, false);
            if (defaultParam) {
                for (var field in defaultParam) {
                    param[field] = defaultParam[field];
                }
            }
            require(["request"], function (request) {
                grid.load(request.encodeQueryParam(param));
            });
        },
        /**
         * 打开窗口
         */
        openWindow: openWindow,
        /**
         * 关闭窗口并返回数据
         * @param data
         * @returns {*}
         */
        closeWindow: function (data) {
            if (window.CloseOwnerWindow) return window.CloseOwnerWindow(data);
            else window.close();
        },
        showFormErrors: function (formEl, result) {
            var errorMessage;
            if (typeof result == 'string') {
                errorMessage = mini.decode(result);
            } else {
                errorMessage = result;
            }
            if (errorMessage) {
                $(errorMessage).each(function () {
                    var field = mini.getbyName(this.field);
                    if (field) {
                        field.setIsValid(false);
                        field.setErrorText(this.message);
                        field.focus();
                    }
                });
            }
        },
        /**
         * 初始化表格对象,修改其默认配置,以适配后台api
         * @param grid 表格对象
         */
        initGrid: function (grid) {
            grid.setSortFieldField("sorts[0].name");
            grid.setSortOrderField("sorts[0].order");
            //后台响应数据格式
            grid.setDataField("result.data");
            grid.setTotalField("result.total");
            grid.allowAlternating = true;
            //查询全部为GET
            grid.setAjaxOptions({
                type: "GET",
                async: true,
                dataType: "json"
            });
            grid.un("loaderror",
                function (e) {
                });
            // 解决弹出选择控件的bug
            grid.on("cellbeginedit", function (e) {
                if (e.editor && e.editor.type == "buttonedit") {
                    e.editor.setValue(e.value);
                    e.editor.setText(e.value);
                }
            });
            //加载失败进行提示
            grid.on("loaderror",
                function (e) {
                    require(["message", "logger"], function (message, logger) {
                        try {
                            var res = mini.decode(e.xhr.responseText);
                            if (res.status == 401) {
                                if (window.doLogin) {
                                    window.doLogin(function () {
                                        grid.reload()
                                    });
                                }
                                else if (window.top.doLogin) {
                                    window.top.doLogin(function () {
                                        grid.reload()
                                    });
                                }
                                else {
                                    message.showTips("请登录", "danger");
                                }

                            } else if (res.status == 403) {
                                message.showTips("权限不够", "danger");
                            } else if (res.status == 500) {
                                message.showTips("数据加载失败:" + res.message, "danger");
                                logger.error(res.message);
                            } else {
                                message.showTips("数据加载失败:" + res.message, "danger");
                            }
                        } catch (e) {
                            message.showTips("加载失败...");
                        }
                    });
                });
            // var tip = new mini.ToolTip();
            // tip.set({
            //     target: document,
            //     selector: '.action-button'
            // });
        },
        createActionButton: function (title, icon, onclick) {
            if (!window.action_countter) window.action_countter = 0;
            var callId = "action_" + (++window.action_countter);
            window[callId] = onclick;
            return ["<span", " onclick='", callId, "()'", " title='", title, "'", " class='action-button ", icon, "'", "></span>"].join("");
        },
        getFormData: function (formEl, validate) {
            var form = new mini.Form(formEl);
            form.validate();
            if (validate && form.isValid() == false) {
                return;
            }
            return form.getData();
        }
    };
});
