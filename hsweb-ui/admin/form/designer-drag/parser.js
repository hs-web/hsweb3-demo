(function () {
    var FormParser = function () {
        this.config = {};
    };

    function openPersonSelector(call) {
        call({id: "admin", "name": "张三"});
    }

    FormParser.prototype.renderPersonSelector = function () {

    };
    FormParser.prototype.render = function () {
        this.renderPersonSelector();

    };

    window.FormParser = FormParser;
})();