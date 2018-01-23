define(function () {
    return {
        loading: function (message) {
            mini.mask({
                el: document.body,
                cls: 'mini-mask-loading',
                html: message
            });

            function hide() {
                mini.unmask(document.body);
            }

            return {
                close: hide,
                hide: hide
            };
        },
        alert: function (msg) {
            mini.alert(msg);
        },
        showTips: function (msg, state, timeout) {
            mini.showTips({
                content: msg,
                state: state || 'success',
                x: 'center',
                y: 'top',
                timeout: timeout || 3000
            });
        },
        prompt: function (msg, title, call, isMulti) {
            mini.prompt(title, msg,
                function (action, value) {
                    if (action == "ok") {
                        return call(value);
                    }
                },
                isMulti === true
            );
        },
        confirm: function (message, onOk, onCancel) {
            mini.confirm(message, "确定？",
                function (action) {
                    if (action == "ok") {
                        if (onOk) onOk();
                    } else {
                        if (onCancel) onCancel();
                    }
                }
            );
        }
    }
});