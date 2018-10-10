define(["jquery", "storejs"], function ($, storejs) {
    //fix #113 ie8不能使用patch方法的bug

    $.ajaxPrefilter(function (options) {
        if (window.router) {
            var url = options.url;
            if (url.indexOf(window.API_BASE_PATH) === -1) {
                return;
            }
            var uri = url.substr(window.API_BASE_PATH.length, url.length);
            for (var i = 0; i < window.router.length; i++) {
                var route = window.router[i];
                if (typeof route.test === 'string') {
                    if (new RegExp(route.test).test(uri)) {
                        if (route.prefix) {
                            uri = route.prefix + uri;
                        }
                        break;
                    }
                }
            }
            options.url = window.API_BASE_PATH + uri;
        }
        if (window.ActiveXObject) {
            if (/^patch$/i.test(options.type)) {
                options.xhr = function () {
                    return new window.ActiveXObject("Microsoft.XMLHTTP");
                };
            }
        }
    });

    $.ajaxSetup({ //设置全局性的Ajax选项
        beforeSend: function (r) {
            var token = storejs.get("hsweb-user");
            if (token) {
                r.setRequestHeader("hsweb-user", token);
            }
        }, cache: true
    });

    function doAjax(url, data, method, callback, syc, requestBody, contentType) {
        var data_tmp = data;
        if (requestBody === true) {
            if (typeof(data) !== 'string') {
                data = JSON.stringify(data);
            }
        }
        var param = {
            type: method,
            url: url,
            data: data,
            cache: true,
            async: syc === true,
            success: function () {
                var xhr = arguments[2];
                var requestId = xhr.getResponseHeader("request-id");
                if (callback) {
                    arguments[0].requestId = requestId;
                    callback(arguments[0]);
                }
            },
            error: function (e) {

                var requestId = e.getResponseHeader("request-id");

                if (e.status === 200) {
                    msg = {status: 200, result: e.statusText, success: true, requestId: requestId};
                    return msg;
                }
                var msg = {};
                if (e.responseJSON) {
                    msg = e.responseJSON;
                } else {
                    msg = {status: e.status, message: e.statusText ? e.statusText : "未知错误", success: false};
                }
                msg.requestId = requestId;
                if (msg.status === 401) {
                    if (window.doLogin) {
                        window.doLogin(function () {
                            doAjax(url, data_tmp, method, callback, syc, requestBody);
                        }, msg);
                    } else if (window.top.doLogin) {
                        window.top.doLogin(function () {
                            doAjax(url, data_tmp, method, callback, syc, requestBody);
                        }, msg);
                    } else {
                        if (callback) {
                            callback(msg);
                        }
                    }
                } else {
                    if (callback) {
                        callback(msg);
                    }
                }
            },
            dataType: 'json'
        };

        if (requestBody === true) {
            contentType = contentType || "application/json";
            param.contentType = contentType;
        }
        return $.ajax(param).responseJSON;
    }

    function getRequestUrl(url) {
        if (url.indexOf("http") === 0) {
            return url;
        } else {
            return ( window.API_BASE_PATH ? window.API_BASE_PATH : window.BASE_PATH) + url;
        }
    }

    function DSLParameterBuilder() {
        var me = this;
        me.param = {};
        me.terms = [];
        me.sorts = [];
        me.nowType = "and";
        function buildSort(sorts) {
            var tmp = {};
            $(sorts).each(function (i, e) {
                for (var f in e) {
                    if (f !== 'sorts')
                        tmp["sorts[" + i + "]." + f] = e[f];
                    else {
                        var tmpTerms = buildSort(e[f]);
                        for (var f2 in tmpTerms) {
                            tmp["sorts[" + i + "]." + f2] = tmpTerms[f2];
                        }
                    }
                }
            });
            return tmp
        }

        function bindOperate(operate) {
            function accept(k, t, v) {
                operate.terms.push({column: k, type: operate.nowType, termType: t, value: v});
                return operate;
            }

            var mapping = [
                "gt", "gte", "lt", "lte", "like", "nlike", "in", "is", "eq", "not"
            ];
            $(mapping).each(function () {
                var type = this + "";
                operate[type] = function (k, v) {
                    return accept(k, type, v);
                }
            });
            var mapping2 = [
                "isnull", "notnull", "empty", "nempty"
            ];
            $(mapping2).each(function () {
                var type = this + "";
                operate[type] = function (k) {
                    return accept(k, type, "1");
                }
            });

            operate.btw = operate.between = function (column, between, and) {
                return accept(column, "btw", between + "," + and);
            };

            operate.nbtw = operate.notBetween = function (column, between, and) {
                return accept(column, "nbtw", between + "," + and);
            }
        }

        bindOperate(me);
        me.getParams = function () {
            var tmp = me.buildParam(me.terms);
            var sorts = buildSort(me.sorts);
            for (var f in tmp) {
                me.param[f] = tmp[f];
            }
            for (var f in sorts) {
                me.param[f] = sorts[f];
            }
            return me.param;
        };
        me.includes = function (columns) {
            me.param.includes = columns + "";
            return me;
        };
        me.excludes = function (columns) {
            me.param.excludes = columns + "";
            return me;
        };
        me.where = function (k, v, t) {
            me.and(k, v, t);
            return me;
        };
        me.and = function (k, v, t) {
            me.nowType = "and";
            if (k && v)
                me.terms.push({column: k, termType: t, type: me.nowType, value: v});
            return me;
        };
        me.orNest = function () {
            return me.nest(true, me);
        };
        me.nest = function (isOr, parent) {
            var nest = {type: isOr ? 'or' : 'and'};
            if (!parent) parent = me;

            parent.terms.push(nest);
            nest.terms = [];
            var fun = {terms: nest.terms, nowType: isOr ? 'or' : 'and'};

            bindOperate(fun);
            fun.and = function (k, v, t) {
                fun.nowType = "and";
                if (k && v)
                    fun.terms.push({column: k, termType: t, value: v, type: 'and'});
                return fun;
            };
            fun.or = function (k, v, t) {
                fun.nowType = "or";
                if (k && v)
                    nest.terms.push({column: k, termType: t, value: v, type: 'or'});
                return fun;
            };
            fun.exec = me.exec;
            fun.orNest = function () {
                return me.orNest();
            };
            fun.nest = function () {
                return me.nest(false, nest);
            };
            fun.end = function () {
                return parent;
            };
            return fun;
        };
        me.or = function (k, v, t) {
            me.nowType = "or";
            if (k && v)
                me.terms.push({column: k, termType: t, value: v, type: me.nowType});
            return me;
        };

        me.buildParam = function (terms) {
            var tmp = {};
            $(terms).each(function (i, e) {
                for (var f in e) {
                    if (f !== 'terms')
                        tmp["terms[" + i + "]." + f] = e[f]; else {
                        var tmpTerms = me.buildParam(e[f]);
                        for (var f2 in tmpTerms) {
                            tmp["terms[" + i + "]." + f2] = tmpTerms[f2];
                        }
                    }
                }

            });
            return tmp
        }

        return me;
    }

    return {
        basePath: window.API_BASE_PATH ? window.API_BASE_PATH : window.BASE_PATH,
        getParameter: function (name) {
            // 获取参数
            var url = window.location.search;
            // 正则筛选地址栏
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            // 匹配目标参数
            var result = url.substr(1).match(reg);
            //返回参数值
            return result ? decodeURIComponent(result[2]) : null;
            /* var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
             var r = window.location.search.substr(1).match(reg);
             if (r != null) return unescape(r[2]);
             return null;*/
        },
        encodeQueryParam: function (data) {
            var queryParam = {};
            var index = 0;
            for (var f in data) {
                if (data[f] === "") continue;
                if (f.indexOf('$LIKE') != -1 && data[f].indexOf('%') == -1) data[f] = "%" + data[f] + "%";
                if (f.indexOf('$START') != -1) data[f] = "%" + data[f];
                if (f.indexOf('$END') != -1) data[f] = data[f] + "%";
                queryParam["terms[" + (index) + "].column"] = f;
                queryParam["terms[" + (index) + "].value"] = data[f];
                index++;
            }
            return queryParam;
        },
        createUpdate: function (api, data) {
            var me = new DSLParameterBuilder();
            me.data = data || {};
            me.set = function (key, value) {
                if (typeof key === 'object') {
                    for (var e in key) {
                        me.data[e] = key[e];
                    }
                } else {
                    me.data[key] = value;
                }
                return me;
            };
            me.setData = function (data) {
                me.data = data;
                return me;
            };
            me.exec = function (callback) {
                return doAjax(getRequestUrl(api), {
                    data: me.data,
                    terms: me.terms
                }, "PUT", callback, typeof(callback) !== 'undefined', true);
            };
            return me;
        },
        createDelete: function (api) {
            var me = new DSLParameterBuilder();
            me.exec = function (callback) {
                var tmp = me.buildParam(me.terms);
                var arr = [];
                for (var f in tmp) {
                    arr.push(f + "=" + tmp[f]);
                    me.param[f] = tmp[f];
                }

                return doAjax(getRequestUrl(api + "?" + (arr.join("&"))), {}, "DELETE", callback, typeof(callback) !== 'undefined', false);
            };
            return me;
        },
        createQuery: function (api) {
            var me = new DSLParameterBuilder();
            me.orderByDesc = function (f) {
                me.sorts.push({"name": f, "order": "desc"});
                return me;
            };
            me.orderBy = function (f) {
                me.sorts.push({"name": f, "order": "asc"});
                return me;
            };


            me.orderByAsc = function (f) {
                me.sorts.push({"name": f, "order": "asc"});
                return me;
            };
            me.noPaging = function () {
                me.param.paging = 'false';
                return me;
            };
            me.limit = function (pageIndex, pageSize) {
                me.param.pageIndex = pageIndex;
                if (pageSize) {
                    me.param.pageSize = pageSize;
                }
                return me;
            };
            me.exec = function (callback) {

                return doAjax(getRequestUrl(api), me.getParams(), "GET", callback, typeof(callback) !== 'undefined', false);
            };
            return me;
        }
        , get: function (uri, data, callback) {
            var data_ = data, callback_ = callback;
            if (typeof(data) === 'undefined') data_ = {};
            if (typeof(callback) === 'object') data_ = callback;
            if (typeof(data) === 'function') callback_ = data;
            return doAjax(getRequestUrl(uri), data_, "GET", callback_, typeof(callback_) !== 'undefined', false);
        }, post: function (uri, data, callback, requestBody, contentType) {
            if (requestBody !== false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "POST", callback, true, requestBody, contentType);
        }, put: function (uri, data, callback, requestBody) {
            if (requestBody !== false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "PUT", callback, true, requestBody);
        }, patch: function (uri, data, callback, requestBody) {
            if (requestBody !== false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "PATCH", callback, true, requestBody);
        }, "delete": function (uri, data, callback) {
            var data_ = data, callback_ = callback;
            if (typeof(data) === 'undefined') data_ = {};
            if (typeof(callback) === 'object') data_ = callback;
            if (typeof(data) === 'function') callback_ = data;
            return doAjax(getRequestUrl(uri), data_, "DELETE", callback_, typeof(callback_) !== 'undefined', false);
        }, doAjax: doAjax
    };
});
