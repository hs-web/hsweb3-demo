importResource("/admin/css/common.css");

importMiniui(function () {
    require(["message", "miniui-tools"], function (message, tools) {
        var loading = message.loading("加载图标中...");
        initMiniuiIcon();
        initFontIcon();

        function initMiniuiIcon() {
            var iconList = [];
            //提取图标css中的信息
            require(["text!plugin/miniui/themes/icons.css"], function (icons) {
                var p = /\.([^.}]+){/g;
                var tmp;
                while (tmp = p.exec(icons)) {
                    iconList.push(tmp[1].replace("\n", ""));
                }
                loading.hide();
                layout(0);
            });

            var nowPage = 0;
            $(".page-up").on("click", function () {
                layout(--nowPage);
            });
            $(".page-down").on("click", function () {
                layout(++nowPage);
            });

            function layout(page) {
                var newLineIndex = 15;
                var pageSize = 15 * 10 - 1;
                var index = 0;
                if (page < 0) page = nowPage = Math.ceil(iconList.length / pageSize) - 1;

                if (Math.ceil(iconList.length / pageSize) <= page) {
                    // showTips("没有更多图标了!")
                    page = nowPage = 0;
                }
                $("#icon-list").children().remove();
                for (var i = page * pageSize; i < iconList.length; i++) {
                    var e = iconList[i];
                    if (i > page * pageSize + pageSize) break;
                    if (index !== 0 && index % newLineIndex === 0) {
                        $("#icon-list").append($("<br>"));
                    }
                    var icon = $("<a onclick=\"selectIcon('" + e + "')\" class='select-icon mini-button' plain='true'>")
                        .attr({
                            "iconCls": e,
                            "title": e,
                            "data-placement": "right"
                        })
                        .text("");
                    $("#icon-list").append(icon);
                    index++;
                }
                mini.parse();
            }
        }

        function initFontIcon() {
            var iconList = [];
            require(["text!font-awesome-list.txt", "css!plugin/font-awesome/4.7.0/css/font-awesome.css"], function (icons) {
                $(icons.split(" ")).each(function () {
                    if (this && this !== '') {
                        iconList.push(this);
                    }
                });
                layout(0);
            });
            var nowPage = 0;
            $(".font-page-up").on("click", function () {
                layout(--nowPage);
            });
            $(".font-page-down").on("click", function () {
                layout(++nowPage);
            });

            function layout(page) {
                var newLineIndex = 15;
                var pageSize = 15 * 10 - 1;
                var index = 0;
                if (page < 0) page = nowPage = Math.ceil(iconList.length / pageSize) - 1;

                if (Math.ceil(iconList.length / pageSize) <= page) {
                    // showTips("没有更多图标了!")
                    page = nowPage = 0;
                }
                $("#font-icon-list").children().remove();
                for (var i = page * pageSize; i < iconList.length; i++) {
                    var e = iconList[i];
                    if (i > page * pageSize + pageSize) break;
                    if (index !== 0 && index % newLineIndex === 0) {
                        $("#font-icon-list").append($("<br>"));
                    }
                    var icon = $("<a onclick=\"selectIcon('fa fa-" + e + "')\" class=\" mini-button\" plain='true' iconCls=\"fa fa-" + e + "\" >")
                        .attr({"title": "fa fa-" + e, "data-placement": "right"});
                    $("#font-icon-list").append(icon);
                    index++;
                }
                mini.parse();
            }
        }

        window.selectIcon = function (e) {
            tools.closeWindow(e);
        }
    });
});