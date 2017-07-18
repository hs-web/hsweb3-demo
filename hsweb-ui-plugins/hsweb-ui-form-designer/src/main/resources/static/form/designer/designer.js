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
            "value ":"否",
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
        "name": "文本输入框",
        "type": "text",
        "properties": getDefaultProperties([])
    },
    {
        "name": "下拉列表",
        "type": "select",
        "properties": getDefaultProperties([
            {
                "id": "data",
                "text": "可选项目",
                "editor": "textarea",
                "column": [{title: "项目名称"}]
            }
        ])
    },
    {
        "name": "单选框",
        "type": "radio",
        "properties": getDefaultProperties([
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
        "type": "radio",
        "properties": getDefaultProperties([
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
                "id": "multiple",
                "text": "可上传多个文件",
                "editor": "select",
                "data": [
                    {text: "是", id: true},
                    {text: "否", id: false}
                ]
            }
        ])
    }
];

var chooseWidgets = {};
var editor;
var nowEditId;
function insertWidget(widget) {
    var id = randomChar(5);
    var newWidget = mini.clone(widget);
    newWidget.id = id;
    chooseWidgets[id] = newWidget;
    var html = "<input widget-id='" + id + "'/>";
    editor.execCommand('insertHtml', html);
}

function initEditor() {
    editor.addListener('selectionchange', function () {
        var focusNode = editor.selection.getStart();
        var id = $(focusNode).attr("widget-id");
        // if(id){
        nowEditId = id;
        initWidgetProperties();
        //}
    });
}
function getEditor(row){
    var editor = mini.get('widget-editor-'+row.editor);
    if(editor){
        if(editor.setData&&row.data){
            editor.setData(row.data);
        }
        return editor;
    }
    return {type:"textbox"};
}
function initPropertiesGrid() {
    var grid = mini.get("properties-grid");
    grid.on("cellbeginedit",function (e) {
        if (e.field == "value") {
            var editor = getEditor(e.record);
            e.editor = editor;
            e.column.editor = editor;
        }
    });
}
function initWidgetProperties(){
    var grid = mini.get("properties-grid");
    if(!nowEditId)grid.setData([]);
    else{
        var wg = chooseWidgets[nowEditId];
        grid.setData(wg.properties);
    }

}
importMiniui(function () {
    mini.parse();
    window.UEDITOR_HOME_URL = "/ueditor/";
    initPropertiesGrid();
    require(["ueditor.config.js", "/ueditor/ueditor.all.min.js"], function () {
        require(["/ueditor/lang/zh-cn/zh-cn.js"]);
        editor = UE.getEditor("container");
        initEditor();
    });

    var tree = mini.get("leftTree");
    tree.loadList(widgets);

    tree.on("nodedblclick", function (e) {
        var node = e.node;
        insertWidget(node);
    });
    $('.write-source-button').on("click",function () {
        var html = editor.getContent();
        require(["../parser/parser-miniui"],function (parser) {
            console.log(parser.parse(html,mini.clone(chooseWidgets)));
        });
    });
});

function randomChar(len) {
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var s = "";
    for (var i = 0; i < len; i++) {
        var rand = Math.floor(Math.random() * str.length);
        s += str.charAt(rand);
    }
    return s;
}