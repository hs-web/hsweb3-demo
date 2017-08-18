(function () {
    require(["css!plugin/ueditor/themes/default/dialogbase"])
    function load() {
        window.init = function (theme, html) {
            if (theme === "miniui") {
                // console.log(html);
                importMiniui(function () {
                    setHtml(html);
                });

            }
        }

        window.setHtml = function (html) {
            require(['jquery', "plugin/ueditor/ueditor.parse"], function ($) {
                $("#preview").html(html);
                uParse("#preview", {
                    rootPath: window.BASE_PATH + 'plugins/ueditor',
                    chartContainerHeight: 5000
                });

                mini.parse();
                $(".mini-radiobuttonlist td").css("border", "0px");
                $(".mini-checkboxlist td").css("border", "0px");
                $(".mini-radiobuttonlist").css("display ", "inline");
            });

        }
    }

    load();
    if (window.ready) {
        window.ready();
    }
})();

