window.BASE_PATH = "/";

//api服务地址
window.API_BASE_PATH = "/";

window.mini_debugger = false;

String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
};

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
};

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
    if (path.indexOf("http") !== 0 || path.indexOf("//") !== 0) {
        if (!path.startWith("/")) {
            path = window.BASE_PATH + path;
        } else {
            path = window.BASE_PATH + (path.substr(1, path.length));
        }
    }
    var head = document.getElementsByTagName('head')[0];
    if (path.endWith("js")) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.timeout = 120000;
        if (typeof callback !== "undefined")
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
                'css': BASE_PATH + "plugins/require-css/0.1.10/css.js",
                'text': BASE_PATH + "plugins/requirejs-text/2.0.15/text.js"
            }
        },
        shim: {
            'jquery': {exports: "$"},
            'request': {exports: "request"}
        },
        paths: {
            "jquery": [BASE_PATH + "plugins/jquery/1.10.2/jquery.min"],
            "logger": [BASE_PATH + "admin/logger"],
            "authorize": [BASE_PATH + "admin/commons/authorize"], //权限管理
            "request": [BASE_PATH + "plugins/tools/request"], //ajax请求工具
            "miniui-tools": [BASE_PATH + "plugins/miniui/tools"],
            "message": [BASE_PATH + "plugins/miniui/message"],
            "storejs": [BASE_PATH + "plugins/storejs/store.everything.min"],
            "ace": [BASE_PATH + "plugins/script-editor/ace"],
            "art-template": [BASE_PATH + "plugins/template/art-template"],
            "script-editor": [BASE_PATH + "plugins/script-editor/script-editor"],
            "plugin": [BASE_PATH + "plugins"],
            "pages": [BASE_PATH + "admin"],
            "echarts": [BASE_PATH + "plugins/echarts/echarts.min"],
            "search-box": [BASE_PATH + "admin/commons/search-box"],
            "admin": [BASE_PATH + "admin"],
            "workflow": [BASE_PATH + "workflow"]
        }
    });
    require(['request']);
}

function getParameter(name, def) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : def;
}

function importJquery(callback) {
    require(["jquery"], callback);
}

function importMiniui(callback) {
    function doImport() {
        //重复引入
        if (window.mini) {
            callback();
            return;
        }

        var theme = getParameter("_theme", getCookie("theme", window.miniui_theme || "worry"));
        var mode = getParameter("_mode", getCookie("mode", 'my'));

        // window.outerHeight > 1000 ? "large" : "medium");

        function loadMini() {
            importResource("plugins/miniui/themes/default/miniui.3.8.2.css");
            importResource("plugins/miniui/themes/icons.css");
            importResource('plugins/miniui/themes/' + theme + '/skin.css');
            importResource("plugins/miniui/themes/default/" + mode + "-mode.css");
            importResource("plugins/font-awesome/4.7.0/css/font-awesome.min.css");

            function loadMiniJs() {
                $.ajax({
                    url: BASE_PATH + "plugins/miniui/miniui.3.8.2.js",
                    async: false,
                    cache: true,
                    dataType: "script",
                    success: function () {
                        $(document.body).fadeIn(300);
                        callback();
                    },
                    error: function () {
                        loadMiniJs();
                    }
                });
            }
            loadMiniJs();
            if ($(window)) {
                $(window).resize(function () {
                    if (mini) {
                        mini.layout();
                    }
                });
            }
        }

        if (!window.jQuery && !window.$) {
            importJquery(loadMini);
        } else {
            loadMini();
        }
    }

    doImport();
}

importResource("plugins/requirejs/2.3.3/require.min.js", initRequireJs);
