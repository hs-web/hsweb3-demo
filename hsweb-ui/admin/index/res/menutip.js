
var MenuTip = function (menu) {
    var template = '<div class="tooltip right menutip in"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
    var tip = $(template).appendTo(document.body);
    tip.hide();

    menu.element.on("mouseenter", ".menu-title", function (event) {
        if (!$("body").hasClass("compact")) return;

        var jq = $(event.currentTarget);
        var offset = jq.offset(),
            width = jq.outerWidth(),
            height = jq.outerHeight(),
            text = jq.text();

        tip.find(".tooltip-inner").html(text);
        tip.show();

        var tipWidth = tip.outerWidth(),
            tipHeight = tip.outerHeight();

        tip.css({ top: offset.top + height / 2 - tipHeight / 2, left: offset.left + width });

    });
    menu.element.on("mouseleave", ".menu-title", function (event) {
        tip.hide();
    });

}
