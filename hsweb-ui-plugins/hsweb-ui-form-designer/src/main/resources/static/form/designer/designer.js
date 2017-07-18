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
            "data": [
                {text: "是", id: true},
                {text: "否", id: false}
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
                "id": "options",
                "text": "可选项目",
                "editor": "table",
                "column": [{title: "项目名称"}]
            }
        ])
    },
    {
        "name": "单选框",
        "type": "radio",
        "properties": getDefaultProperties([
            {
                "id": "options",
                "text": "可选项目",
                "editor": "table",
                "column": [{title: "项目名称"}]
            }
        ])
    },
    {
        "name": "多选框",
        "type": "radio",
        "properties": getDefaultProperties([
            {
                "id": "options",
                "text": "可选项目",
                "editor": "table",
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

importMiniui(function () {
    mini.parse();
    window.UEDITOR_HOME_URL = "/ueditor/";

    require(["/ueditor/ueditor.config.js","/ueditor/ueditor.all.min.js"],function () {
        var editor = UE.getEditor("container");

    });

});
