define(["request", "jquery"], function (request, $) {
    if (window.top._autz) {
        return window.top._autz;
    }
    var autz = window.top._autz = {};

    autz.hasPermission = function () {
        return true;
    };
    autz.hasRole = function () {
        return true;
    };
    autz.hasFieldAccess = function () {
        return true;
    };
    autz.parse = function () {

    };

    function init(onSuccess) {
        var authInfo = request.get("authorize/me");
        if (authInfo && authInfo.status === 200) {
            authInfo = authInfo.result;

            autz.user = authInfo.user;

            var permissionMap = {};
            var rowMap = {};

            $(authInfo.permissions).each(function () {
                permissionMap[this.id] = this;
            });
            $(authInfo.roles).each(function () {
                rowMap[this.id] = this;
            });
            autz.hasPermission = function () {
                if (arguments.length === 0) return true;
                var permission = arguments[0];
                //用户持有的权限
                var per = permissionMap[permission];
                if (!per) return false;
                if (arguments.length === 1) return true;
                for (var i = 1; i < arguments.length; i++) {
                    if (per.actions.indexOf(arguments[i]) !== -1) {
                        return true;
                    }
                }
                return false;
            };
            autz.hasRole = function () {
                for (var i = 1; i < arguments.length; i++) {
                    if (rowMap[arguments[i]]) return true;
                }
                return false;
            };
            autz.hasFieldAccess = function () {
                if (arguments.length === 0) return true;
                var permission = arguments[0];
                var per = permissionMap[permission];
                if (!per) return false;
                var access = true;
                if (arguments.length !== 3) return true;
                var arg = arguments;
                $(per.dataAccesses).each(function () {
                    if (this.type === "DENY_FIELDS" && this.action === arg[1]) {
                        if (this.fields && this.fields.indexOf(arg[2]) !== -1) {
                            access = false;
                        }
                    }
                });
                return access;
            };
            autz.parse = function (el) {
                $(el).find("[autz]").each(function () {
                    var el = $(this);
                    var expression = el.attr("autz");
                    try {
                        var success = eval("(function(hasPermission,hasRole,hasFieldAccess){return " + expression + "})")(autz.hasPermission, autz.hasRole, autz.hasFieldAccess);
                        if (success === false) {
                            el.remove();
                        }
                    } catch (e) {
                        if (window.console) {
                            window.console.error(e);
                        }
                    }
                });
            };
            if (onSuccess)
                onSuccess();
        }
    }

    init();
    autz.init = init;
    return autz;
});