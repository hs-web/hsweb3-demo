define(['css!search-box'], function () {
    function createOnclick(script) {
        var me = this;
        var eventId = "e_" + (Math.round(Math.random() * 100000));
        var call = typeof script === 'function' ? script : function () {
            if (script) {
                try {
                    var fun = eval("(function(){return function(){\n" +
                        script +
                        "\n}})()");
                    fun.call(me);
                } catch (e) {
                    console.log(script, e);
                }
            }
        };
        window[eventId] = call;
        return eventId;
    }

    function SearchBox(config) {

        var condition = config.container;
        var onSearch = config.onSearch || function () {
            console.error("请设置SearchBox(config)的onSearch属性")
        };
        var onReset = config.onReset || function () {
            var id = condition.attr("id");
            if (!id) {
                console.error("请设置SearchBox(config)onReset属性")
            }
            new mini.Form("#" + id).reset();
            onSearch();
        }
        var showSize = config.initSize || 2;

        var cls = config.cls || 'form-component';

        this.init = function () {
            condition.find(".buttons:first").remove();
            var searchButton = $("<a class='mini-button search-button' >")
                .text("查询")
                .attr("onclick", createOnclick(function () {
                    onSearch();
                }));
            var resetButton = $("<a class='mini-button reset-button' plain='true' >")
                .text("重置")
                .attr("onclick", createOnclick(function () {
                    onReset();
                }));
            var expandButton = $("<span style='cursor: pointer;font-size: 14px;color: #1890ff' >");
            var line1len = 0;
            condition
                .find("." + cls + ":lt(" + showSize + ")")
                .each(function () {
                    $($(this).attr("class").split(" ")).each(function () {
                        if (this.indexOf("mini-col-") === 0) {
                            line1len += parseInt(this.substr(9));
                        }
                    })
                });

            expandButton.append(
                $("<span class='text'>").text("展开"))
                .append($("<i style='margin-left: 0.2em' class='fa fa-angle-down'>"))
                .on('click', function () {
                    var condition = config.container;
                    var me = $(this);
                    var len = condition.find("." + cls).length;
                    var allLen = 0;
                    condition.find("." + cls)
                        .each(function () {
                            $($(this).attr("class").split(" ")).each(function () {
                                if (this.indexOf("mini-col-") === 0) {
                                    allLen += parseInt(this.substr(9));
                                }
                            })
                        });
                    var size = (12 - (allLen % 12));
                    var text = me.find('.text');
                    var icon = me.find(".fa");
                    if (text.text() === '展开') {
                        text.text("收起");
                        icon.removeClass("fa-angle-down").addClass("fa fa-angle-up");
                        condition.find("." + cls + ":gt(" + (showSize - 1) + ")").show();
                        condition.find(".buttons")
                            .removeClass()
                            .addClass("buttons")
                            .addClass("mini-col-" + size)
                            .css("text-align", allLen >= 12 ? "right" : "left");
                        mini.parse();
                    } else {
                        if (text.text() === '收起') {
                            text.text("展开");
                            icon.removeClass("fa-angle-up")
                                .addClass("fa fa-angle-down");
                            condition.find("." + cls + ":gt(" + (showSize - 1) + ")").hide();
                            condition.find(".buttons").removeClass()
                                .addClass("buttons")
                                .addClass("mini-col-" + (12 - (line1len % 12)))
                                .css("text-align", "left");
                            mini.parse();
                        }
                    }
                });

            var conditionLen = condition.children().length;
            if (conditionLen <= showSize) {
                expandButton.hide();
            }
            if (conditionLen > 0) {
                condition.append($("<div class='buttons mini-col-" + (12 - (line1len % 12)) + "' style='text-align: left'>")
                    .append(searchButton)
                    .append("<span style='margin-left: 0.5em'>")
                    .append(resetButton)
                    .append("<span style='margin-left: 0.5em'>")
                    .append(expandButton));
            }
            condition.find("." + cls + ":gt(" + (showSize - 1) + ")").hide();
            mini.parse();
        }
    }

    return SearchBox;
});