define(function () {

    var MultiSort = function (grid, onSort) {
        var me = this;
        me.grid = grid;
        me.sortFields = [];
        me.onSort = onSort;
        grid.on("headercellclick", function (e) {

            var column = e.column,
                field = column.field;

            if (column.allowSort) {

                var o = me.getSort(field);
                if (!o) {
                    o = {field: field, dir: "asc"};
                } else {
                    if (o.dir === "asc") {
                        o.dir = "desc";
                    } else {
                        me.removeSort(o);
                        return;
                    }
                }
                me.addSort(o);
            }
        });

        grid.on("update", function () {
            me.syncGridSortIcon();
        });
        grid.on("loaderror", function () {
            me.syncGridSortIcon();
        });

        grid.on("load", function () {
            me.syncGridSortIcon();
        });
    };

    MultiSort.prototype = {

        sortFieldsParam: "sortFields",

        getSortParam: function () {
            var fields = this.sortFields;

            var sortParam = {};
            var i = 0;
            $(fields).each(function () {
                sortParam["sorts[" + i + "].name"] = this.field;
                sortParam["sorts[" + i + "].order"] = this.dir;
                i++;
            });
            return sortParam;
        },
        sort: function (fields) {
            this.sortFields = fields;

            var sortParam = {};
            var i = 0;
            $(fields).each(function () {
                sortParam["sorts[" + i + "].name"] = this.field;
                sortParam["sorts[" + i + "].order"] = this.dir;
                i++;
            });
            if (this.onSort) {
                this.onSort(sortParam)
            } else {
                this.grid.load(sortParam);
            }
            this.syncGridSortIcon();
        },

        addSort: function (field, dir) {

            var me = this,
                fields = me.sortFields;

            if (typeof field == "object") {
                dir = field.dir;
                field = field.field;
            }

            var o = me.getSort(field);
            if (o) {
                o.dir = dir;
            } else {
                o = {field: field, dir: dir};
            }

            fields.remove(o);
            //fields.insert(0, o);
            fields.push(o);
            me.sort(fields);
        },

        removeSort: function (field) {
            var o = this.getSort(field);
            if (o) {
                this.sortFields.remove(o);
                this.sort(this.sortFields);
            }
        },

        getSort: function (field) {
            if (typeof field === "object") return field;
            for (var i = 0, l = this.sortFields.length; i < l; i++) {
                var o = this.sortFields[i];
                if (o.field === field) return o;
            }
        },

        clearSort: function () {
            this.sort([]);
        },

        syncGridSortIcon: function () {
            var me = this,
                grid = me.grid,
                sortFields = me.sortFields,
                columns = grid.getBottomColumns();

            function createHeaderCellId(column, index) {
                var id = grid._id + "$headerCell" + index + "$" + column._id;
                return id;
            }

            function getHeaderCellEl(column) {
                var el = document.getElementById(createHeaderCellId(column, 1));
                if (!el) el = document.getElementById(createHeaderCellId(column, 2));
                return el;
            }

            function getColumnByField(field) {
                for (var i = 0, l = columns.length; i < l; i++) {
                    var col = columns[i];
                    if (col.field === field) return col;
                }
            }

            function syncSortIcon() {
                me.syncSortIconTimer = null;
                $(columns).each(function () {
                    var el = getHeaderCellEl(this);
                    $(el).removeClass("mini-grid-asc mini-grid-desc");
                    $(el).find(".mini-grid-sortIcon").remove();
                });
                for (var i = 0, l = sortFields.length; i < l; i++) {
                    var o = sortFields[i];
                    var column = getColumnByField(o.field);
                    if (!column) continue;
                    var el = getHeaderCellEl(column);
                    if (!el) {
                        continue;
                    }
                    var sortCls = o.dir == "asc" ? "mini-grid-asc" : "mini-grid-desc";

                    $(el).removeClass("mini-grid-asc mini-grid-desc").addClass(sortCls);

                    $(el).find(".mini-grid-sortIcon").remove();

                    $(el).find(".mini-grid-headerCell-inner").append('<span class="mini-grid-sortIcon"></span>');
                }
            }

            //                if (me.syncSortIconTimer) {
            //                    clearTimeout(me.syncSortIconTimer);
            //                    me.syncSortIconTimer = null;
            //                }
            //                me.syncSortIconTimer = setTimeout(syncSortIcon, 100);

            syncSortIcon();
        }

    };

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
        multiSort: function (grid, onSort) {
            return new MultiSort(grid, onSort);
        },
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
        setFromReadyOny: function (formEl) {

        },
        /**
         * 查询表格
         * @param formEL 查询条件表单选择器,如:#search-box
         * @param grid 表格对象
         */
        searchGrid: function (formEL, grid, parameter, defaultParam) {
            require(["request"], function (request) {
                var param = new mini.Form(formEL).getData(true, false);
                if (defaultParam) {
                    for (var field in defaultParam) {
                        param[field] = defaultParam[field];
                    }
                }
                param = request.encodeQueryParam(param);
                for (var f in parameter) {
                    param[f] = parameter[f];
                }
                grid.load(param);
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
            // if (window.ActiveXObject) {
            //     $.ajaxPrefilter(function (options) {
            //         options.xhr = function () {
            //             return new window.ActiveXObject("Microsoft.XMLHTTP");
            //         };
            //     });
            // }

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
                dataType: "json",
                cache:true
            });
            grid.un("loaderror", function (e) {
            });
            // 解决弹出选择控件的bug
            grid.on("cellbeginedit", function (e) {
                if (e.editor && e.editor.type == "buttonedit") {
                    e.editor.setValue(e.value);
                    e.editor.setText(e.value);
                }
            });
            //加载失败进行提示
            grid.on("loaderror", function (e) {
                //#115 修复ie8下 require回调获取的e为undefined
                var xhr = e.xhr;
                require(["message", "logger"], function (message, logger) {
                    try {
                        var res = mini.decode(xhr.responseText);//#115
                        if (res.status === 401) {
                            if (window.doLogin) {
                                window.doLogin(function () {
                                    grid.reload()
                                },res);
                            }
                            else if (window.top.doLogin) {
                                window.top.doLogin(function () {
                                    grid.reload()
                                },res);
                            } else {
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
                        logger.error(e);
                    }
                });
            });
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
            if (validate && form.isValid() === false) {
                return;
            }
            return form.getData();
        },
        downloadZip: function (data, fileName) {
            var form = $("<form style='display: none'></form>");
            form.attr({
                action: API_BASE_PATH + "file/download-zip/" + fileName,
                target: "_blank",
                method: "POST"
            });
            form.append($("<input name='data' />").val(mini.encode(data)));
            form.appendTo(document.body);
            form.submit();
        },
        downloadText: function (data, fileName) {
            var form = $("<form style='display: none'></form>");
            form.attr({
                action: API_BASE_PATH + "file/download-text/" + fileName,
                target: "_blank",
                method: "POST"
            });
            form.append($("<input name='text' />").val(data));
            form.appendTo(document.body);
            form.submit();
        }

    };
});
