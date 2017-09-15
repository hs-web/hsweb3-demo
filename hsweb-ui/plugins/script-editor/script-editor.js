define(["ace/ace"], function (ace) {
    var aceEditor = {};

    function initAce(el, call) {
        var editor = ace.edit(el);
        editor.setTheme("ace/theme/eclipse");
        aceEditor[el] = {};
        aceEditor[el].setScript = function (script) {
            if (typeof script!=='undefined') {
                editor.setValue(script, -1);
            }
        }
        aceEditor[el].getScript = function () {
            return editor.getValue();
        }

        require(["ace/ext/language_tools"], function (langTools) {
            aceEditor[el].setCompleteData = function (data) {
                langTools.addCompleter({
                    getCompletions: function (editor, session, pos, prefix, callback) {
                        if (prefix.length === 0) {
                            return callback(null, []);
                        } else {
                            return callback(null, data);
                        }
                    }
                });
            }
        });
        aceEditor[el].init = function (lang, script) {
            require(["ace/ext/language_tools"], function (langTools) {
                editor.getSession().setMode("ace/mode/" + lang);
                editor.$blockScrolling = Infinity;
                editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: true
                });
                editor.setValue(script, -1);
            });
        }
        aceEditor[el].destroy = function () {
            editor.destroy();
            delete aceEditor[el];
        }
        call(aceEditor[el]);
    }

    return {
        createEditor: function (el, call) {
            if (aceEditor[el]) {
                call(aceEditor[el]);
            } else {
                initAce(el, call);
            }
        }
    }
});