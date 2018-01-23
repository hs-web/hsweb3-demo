define(["jquery"], function ($) {
    //fix #113 ie8不能使用patch方法的bug
    if (window.ActiveXObject) {
        $.ajaxPrefilter(function (options) {
            if (/^patch$/i.test(options.type)) {
                options.xhr = function () {
                    return new window.ActiveXObject("Microsoft.XMLHTTP");
                };
            }
        });
    }

    function doAjax(url, data, method, callback, syc, requestBody) {
        var data_tmp = data;
        if (requestBody == true) {
            if (typeof(data) != 'string') {
                data = JSON.stringify(data);
            }
        }
        var param = {
            type: method,
            url: url,
            data: data,
            cache: false,
            async: syc == true,
            success: callback,
            error: function (e) {
                if (e.status == 200) {
                    msg = {status: 200, result: e.statusText, success: true};
                    return msg;
                }
                var msg = {};
                if (e.responseJSON) {
                    msg = e.responseJSON;
                } else {
                    msg = {status: e.status, message: e.statusText ? e.statusText : "未知错误", success: false};
                }
                if (msg.status == 401) {
                    if (window.doLogin) {
                        window.doLogin(function () {
                            doAjax(url, data_tmp, method, callback, syc, requestBody);
                        });
                    } else if (window.top.doLogin) {
                        window.top.doLogin(function () {
                            doAjax(url, data_tmp, method, callback, syc, requestBody);
                        });
                    } else {
                        if (callback)
                            callback(msg);
                    }
                } else {
                    if (callback)
                        callback(msg);
                }
            },
            dataType: 'json'
        };

        if (requestBody == true) {
            param.contentType = "application/json";
        }
        return $.ajax(param).responseJSON;
    }

    function getRequestUrl(url) {
        if (url.indexOf("http") == 0) {
            return url;
        } else {
            return ( window.API_BASE_PATH ? window.API_BASE_PATH : window.BASE_PATH) + url;
        }
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
        createQuery: function (api) {
            var query = {};
            query.param = {};
            query.terms = [];
            query.sorts = [];

            query.nowType = "and";

            function bindOperate(operate) {
                function accept(k, t, v) {
                    operate.terms.push({column: k, type: operate.nowType, termType: t, value: v});
                    return operate;
                }

                var mapping = [
                    "gt", "gte", "lt", "lte", "like", "nlike", "in", "is", "eq"
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

            bindOperate(query);
            query.getParams = function () {
                var tmp = buildParam(query.terms);
                for (var f in tmp) {
                    query.param[f] = tmp[f];
                }
                return query.param;
            };
            query.select = function (columns) {
                query.param.includes = columns + "";
                return query;
            };
            query.excludes = function (columns) {
                query.param.excludes = columns + "";
                return query;
            };
            query.where = function (k, v, t) {
                query.and(k, v, t);
                return query;
            };
            query.and = function (k, v, t) {
                query.nowType = "and";
                if (k && v)
                    query.terms.push({column: k, termType: t ? "eq" : t, type: query.nowType, value: v});
                return query;
            };
            query.orNest = function () {
                return query.nest(true, query);
            };
            query.nest = function (isOr, parent) {
                var nest = {type: isOr ? 'or' : 'and'};
                if (!parent) parent = query;

                parent.terms.push(nest);
                nest.terms = [];
                var fun = {terms: nest.terms, nowType: isOr ? 'or' : 'and'};

                bindOperate(fun);
                fun.and = function (k, v, t) {
                    fun.nowType = "and";
                    if (k && v)
                        fun.terms.push({column: k, termType: t ? "eq" : t, value: v, type: 'and'});
                    return fun;
                };
                fun.or = function (k, v, t) {
                    fun.nowType = "or";
                    if (k && v)
                        nest.terms.push({column: k, termType: t ? "eq" : t, value: v, type: 'or'});
                    return fun;
                };
                fun.exec = query.exec;
                fun.orNest = function () {
                    return query.orNest();
                };
                fun.nest = function () {
                    return query.nest(false, nest);
                };
                fun.end = function () {
                    return parent;
                };
                return fun;
            };
            query.or = function (k, v, t) {
                query.nowType = "or";
                if (k && v)
                    query.terms.push({column: k, termType: t ? "eq" : t, value: v, type: query.nowType});
                return query;
            };
            query.orderByDesc = function (f) {
                query.sorts.push({"name": f, "order": "desc"});
                return query;
            };
            query.orderBy = function (f) {
                query.sorts.push({"name": f, "order": "asc"});
                return query;
            };
            query.orderByAsc = function (f) {
                query.sorts.push({"name": f, "order": "asc"});
                return query;
            };
            query.noPaging = function () {
                query.param.paging = 'false';
                return query;
            };
            query.limit = function (pageIndex, pageSize) {
                query.param.pageIndex = pageIndex;
                if (pageSize){
                    query.param.pageSize = pageSize;
                }
                return query;
            };

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

            function buildParam(terms) {
                var tmp = {};
                $(terms).each(function (i, e) {
                    for (var f in e) {
                        if (f !== 'terms')
                            tmp["terms[" + i + "]." + f] = e[f]; else {
                            var tmpTerms = buildParam(e[f]);
                            for (var f2 in tmpTerms) {
                                tmp["terms[" + i + "]." + f2] = tmpTerms[f2];
                            }
                        }
                    }

                });
                return tmp
            }

            query.exec = function (callback) {
                var tmp = buildParam(query.terms);
                var sorts = buildSort(query.sorts);

                for (var f in tmp) {
                    query.param[f] = tmp[f];
                }
                for (var f in sorts) {
                    query.param[f] = sorts[f];
                }
                return doAjax(getRequestUrl(api), query.param, "GET", callback, typeof(callback) != 'undefined', false);
            };
            return query;
        }
        , get: function (uri, data, callback) {
            var data_ = data, callback_ = callback;
            if (typeof(data) == 'undefined') data_ = {};
            if (typeof(callback) == 'object') data_ = callback;
            if (typeof(data) == 'function') callback_ = data;
            return doAjax(getRequestUrl(uri), data_, "GET", callback_, typeof(callback_) != 'undefined', false);
        }, post: function (uri, data, callback, requestBody) {
            if (requestBody != false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "POST", callback, true, requestBody);
        }, put: function (uri, data, callback, requestBody) {
            if (requestBody != false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "PUT", callback, true, requestBody);
        }, patch: function (uri, data, callback, requestBody) {
            if (requestBody != false) requestBody = true;
            doAjax(getRequestUrl(uri), data, "PATCH", callback, true, requestBody);
        }, "delete": function (uri, data, callback) {
            var data_ = data, callback_ = callback;
            if (typeof(data) == 'undefined') data_ = {};
            if (typeof(callback) == 'object') data_ = callback;
            if (typeof(data) == 'function') callback_ = data;
            return doAjax(getRequestUrl(uri), data_, "DELETE", callback_, typeof(callback_) != 'undefined', false);
        }, doAjax: doAjax
    };
});
