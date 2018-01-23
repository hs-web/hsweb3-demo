window.BASE_PATH = "/";

//api服务地址
window.API_BASE_PATH = "/";

window.mini_debugger = false;

String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}
/**
 * 获取cooke
 * @param sName cookie名称
 * @param defaultVal 默认值
 * @returns {*} cookie值
 */
function getCookie(sName, defaultVal) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return defaultVal;
}

function importResource(path, callback) {
    if (path.indexOf("http") != 0 || path.indexOf("//") != 0) {
        if (!path.startWith("/"))
            path = window.BASE_PATH + path;
    }
    var head = document.getElementsByTagName('head')[0];
    if (path.endWith("js")) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.timeout = 120000;
        if (typeof callback != "undefined")
            script.async = false;
        script.src = path;
        function onload() {
            if (callback) callback();
        }

        script.onreadystatechange = function () {
            var r = script.readyState;
            if (r === 'loaded' || r === 'complete') {
                script.onreadystatechange = null;
                onload();
            }
        };
        script.onload = onload;
        script.onerror = onload;
        head.appendChild(script);
    } else if (path.endWith("css")) {
        var style = document.createElement('link');
        style.rel = "stylesheet";
        style.href = path;
        style.type = "text/css";
        head.appendChild(style);
        if (callback) callback();
    }
}

function initRequireJs() {
    require.config({
        waitSeconds: 0,
        map: {
            '*': {
                'css': '/plugins/require-css/0.1.10/css.js',
                'text': '/plugins/requirejs-text/2.0.15/text.js'
            }
        },
        shim: {
            'jquery': {exports: "$"}
        },
        paths: {
            "jquery": ["/plugins/jquery/1.10.2/jquery.min"],
            "logger": ["/admin/logger"],
            "authorize": ["/admin/commons/authorize"], //权限管理
            "request": ["/plugins/tools/request"], //ajax请求工具
            "miniui-tools": ["/plugins/miniui/tools"],
            "message": ["/plugins/miniui/message"],
            "ace": ["/plugins/script-editor/ace"],
            "art-template": ["/plugins/template/art-template"],
            "script-editor": ["/plugins/script-editor/script-editor"],
            "plugin": ["/plugins"]
        }
    });
}

function importJquery(callback) {
    require(["jquery"], callback);
    // importResource("/plugins/jquery/1.10.2/jquery.min.js", callback);
}
function importMiniui(callback) {
    function doImport() {
        //重复引入
        if (window.mini) {
            callback();
            return;
        }
        var theme = getCookie("theme", window.miniui_theme ? window.miniui_theme : "pure");
        var mode = getCookie("mode", window.outerHeight > 1000 ? "large" : "medium");

        function loadMini() {
            importResource("/plugins/miniui/themes/default/miniui.css");
            importResource("/plugins/miniui/themes/icons.css");
            importResource('/plugins/miniui/themes/' + theme + '/skin.css');
            importResource("/plugins/miniui/themes/default/" + mode + "-mode.css");
            $.ajax({
                url: "/plugins/miniui/miniui.js",
                async: false,
                cache: true,
                dataType: "script",
                success: callback,
                error: callback
            });
            if ($(window))
                $(window).resize(function () {
                    if (mini)
                        mini.layout();
                });
        }

        if (!window.jQuery && !window.$) {
            importJquery(loadMini);
        } else {
            loadMini();
        }
    }

    doImport();
}
importResource("/plugins/requirejs/2.3.3/require.min.js", initRequireJs);
