define(function () {
        return {
            info: function (arg) {
                if (console.log) {
                    console.log(arg);
                }
            },
            warn: function (arg) {
                if (console.warn) {
                    console.warn(arg)
                }
            },
            error: function (arg) {
                if (console.error) {
                    console.error(arg)
                }
            }
        }
    }
);