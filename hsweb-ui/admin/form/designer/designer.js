function getDefaultProperties(other) {
    var properties = [
        {
            "id": "name",
            "text": "名称",
            "editor": "text"
        },
        {
            "id": "require",
            "text": "不能为空",
            "editor": "select",
            "value ": "否",
            "data": [
                {text: "是", id: "是"},
                {text: "否", id: "否"}
            ]
        }
    ];
    for (var i = 0; i < other.length; i++) {
        properties.push(other[i]);
    }
    return properties;
}

var widgets = [
    {
        "name": "文本标签", //组件名称
        "type": "label",  //组件类型
        "html": "<span>新建标签</span>", //组件html内容
        "properties": [     //组件的配置内容
            {
                "id": "widget-type",  //配置id
                "text": "控件类型",
                "value": "文本标签"     //配置值
            },
            {
                "id": "text",  //配置id
                "text": "标签内容",
                "value": "新建标签"     //配置值
            }
        ]
    },
    // {
    //     "name": "按钮",
    //     "type": "button",
    //     "html": "<button>新建按钮</button>",
    //     "properties": [
    //         {
    //             "id": "widget-type",
    //             "text": "控件类型",
    //             "value": "按钮"
    //         }, {
    //             "id": "onclick",
    //             "text": "点击事件",
    //             "editor": "textarea"
    //         }
    //     ]
    // },
    {
        "name": "文本输入框",
        "type": "text",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "文本输入框"
            }
        ])
    }, {
        "name": "日期选择框",
        "type": "date",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "日期选择框"
            },
            {
                "id": "format",
                "text": "日期格式",
                "editor": "text",       //配置的编辑器类型
                "value": "yyyy-MM-dd"
            }
        ])
    }, {
        "name": "数字调节器",
        "type": "number",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "数字调节器"
            },
            {
                "id": "format",
                "text": "格式",
                "editor": "text",
                "value": ""
            },
            {
                "id": "maxValue",
                "text": "最大值",
                "editor": "text",
                "value": ""
            },
            {
                "id": "minValue",
                "text": "最小值",
                "editor": "text",
                "value": "0"
            }
        ])
    }, {
        "name": "下拉列表",
        "type": "select",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "下拉列表"
            },
            {
                "id": "data",
                "text": "可选项目",
                "editor": "textarea",
                "column": [{title: "项目名称"}]     //使用表格时 表格的列配置(暂时未使用此功能)
            }
        ])
    },
    {
        "name": "单选框",
        "type": "radio",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "单选框"
            },
            {

                "id": "data",
                "text": "可选项目",
                "editor": "textarea",
                "column": [{title: "项目名称"}]
            }
        ])
    },
    {
        "name": "多选框",
        "type": "checkbox",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "多选框"
            },
            {
                "id": "data",
                "text": "可选项目",
                "editor": "textarea",
                "column": [{title: "项目名称"}]
            }
        ])
    },
    {
        "name": "文件上传",
        "type": "upload-file",
        "properties": getDefaultProperties([
            {
                "id": "widget-type",
                "text": "控件类型",
                "value": "文件上传"
            },
            {
                "id": "multiple",
                "text": "可上传多个文件",
                "editor": "select",
                "data": [                   //编辑器为下拉列表时，下拉列表的选项
                    {text: "是", id: "是"},
                    {text: "否", id: "否"}
                ]
            }
        ])
    }
];

var chooseWidgets = {}; //当前已经选择列的组件格式为{id:widget}. id为键，组件对象为值。
var editor;
var nowEditId;
var changedEvents = [];

window.getWidgetByType = function (type) {
    for (var i = 0; i < widgets.length; i++) {
        if (widgets[i].type == type) return mini.clone(widgets[i]);
    }
    return null;
};

window.insertWidget = function (widget) {
    var id = randomChar(5);
    var newWidget = mini.clone(widget);
    newWidget.id = id;
    chooseWidgets[id] = newWidget
    var html = newWidget.html ? newWidget.html : "<input>";

    html = $("<div>").append($(html).attr("widget-id", id)).html();
    editor.execCommand('insertHtml', html);
    doConfigChange();
};

function initEditor() {
    editor.addListener('selectionchange', function () {
        var focusNode = editor.selection.getStart();
        var id = $(focusNode).attr("widget-id");
        // if(id){
        nowEditId = id;
        doConfigChange();
        initWidgetProperties();
        //}
    });

}

function getEditor(row) {
    if (!row.editor) return;
    var editor = mini.get('widget-editor-' + row.editor);
    if (editor) {
        if (editor.setData && row.data) {
            editor.setData(row.data);
        }
        return editor;
    }
    return {type: "textbox"};
}

function initPropertiesGrid() {
    var grid = mini.get("properties-grid");
    if (grid)
        grid.on("cellbeginedit", function (e) {
            if (e.field == "value") {
                var editor = getEditor(e.record);
                if (!editor) {
                    e.cancel = true;
                } else {
                    e.editor = editor;
                    e.column.editor = editor;
                }
            }
        });
}

function initWidgetProperties() {
    var grid = mini.get("properties-grid");
    if (!nowEditId) {
        grid.setData([]);
    } else {
        var wg = chooseWidgets[nowEditId];
        grid.setData(wg.properties);
    }
}

var lstChangeConfig="";

function doConfigChange() {
    var config = getConfig();
    var configJSON = JSON.stringify(config);

    if (configJSON != lstChangeConfig) {
        lstChangeConfig=configJSON;
        $(changedEvents).each(function () {
            this(config);
        });
    }
}

//绑定配置发生变动事件
window.onConfigChanged = function (e) {
    changedEvents.push(e);
};
window.setConfig = function (text) {
    var cfg = JSON.parse(text);
    editor.ready(function () {
        editor.setContent(cfg.html);
    });
    chooseWidgets = cfg.config;
};
window.getUeditor = function () {
    return editor;
}
window.getConfig = function () {
    // 返回整个表单的元数据,json格式
    return JSON.stringify({"html": editor.getContent(), "config": chooseWidgets});
};

function initClp() {
    require(["clipboard.min.js"], function (Clipboard) {
        var clipboard = new Clipboard('.copy-button', {
            text: function (trigger) {
                return JSON.stringify({"html": editor.getContent(), "config": chooseWidgets});
            }
        });

        clipboard.on('success', function (e) {
            require(["message"], function (message) {
                message.showTips("复制成功");
            });
            // console.log(e);
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            //console.error('Action:', e.action);
            // console.error('Trigger:', e.trigger);
        });
    });

}

importMiniui(function () {
    mini.parse();
    window.UEDITOR_HOME_URL = window.BASE_PATH + "plugins/ueditor/";

    initPropertiesGrid();
    require(["ueditor.config.js", "plugin/ueditor/ueditor.all.min"], function () {
        require(["plugin/ueditor/lang/zh-cn/zh-cn"], function () {
            editor = UE.getEditor("container");
            initEditor();
        });
    });
    require(["md5"], function (md5) {
        window.md5 = md5;
    });
    var tree = mini.get("leftTree");
    tree.loadList(widgets);

    tree.on("nodedblclick", function (e) {
        var node = e.node;
        insertWidget(node);
    });
    $('.write-source-button').on("click", function () {
        var html = editor.getContent();
        require(["jquery", "../parser/parser-miniui", "html-formatter"],
            function ($, parser, formatter) {
                var win = window.open("about:blank");
                var textarea = $("<textarea>")
                    .val(formatter(parser.parse(html, mini.clone(chooseWidgets))));
                textarea.css({width: window.innerWidth, height: window.innerHeight});
                $(win.document.body).append(textarea);
            });
    });
    $(".preview-button").on("click", function () {
        require(["jquery", "../parser/parser-miniui"], function ($, parser) {
            var win = window.open("preview.html");

            $(win.document).ready(function () {
                win.ready = function () {
                    win.init("miniui", parser.parse(editor.getContent(), mini.clone(chooseWidgets)));
                }
            })
        });
    });
    initClp();
    $(".paste-button").on("click", function () {
        require(["message"], function (message) {
            message.prompt("请输入要粘贴的内容", " ", function (text) {
                try {
                    var cfg = JSON.parse(text);
                    editor.setContent(cfg.html);
                    chooseWidgets = cfg.config;
                } catch (e) {
                    message.alert("内容格式错误");
                }
            }, true);
        })
    });

    $(".save-button").on("click", function () {
        if (window.save) {
            window.save();
        }
    });
    if (window.init) {
        window.init();
    }
});

function randomChar(len) {
    // var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // var s = "";
    // for (var i = 0; i < len; i++) {
    //     var rand = Math.floor(Math.random() * str.length);
    //     s += str.charAt(rand);
    // }
    return md5(new Date().getTime() + "" + Math.random());
}