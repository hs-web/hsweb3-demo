/*
 * Copyright 2016 http://www.hswebframework.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
//组件信息
var info = {
    groupId: "${project.groupId}",
    artifactId: "${project.artifactId}",
    version: "${project.version}",
    website: "https://github.com/hs-web/",
    author: "admin@hsweb.me",
    comment: "演示系统"
};
var menus = [{
    "describe": " ",
    "icon": "fa fa-cogs",
    "id": "e9dc96d6b677cbae865670e6813f5e8b",
    "name": "系统设置",
    "parentId": "-1",
    "path": "sOrB",
    "permissionId": "",
    "sortIndex": 1,
    "status": 1,
    "url": ""
}, {
    "describe": " ",
    "icon": "fa fa-sitemap",
    "id": "org-01",
    "name": "组织架构",
    "parentId": "-1",
    "path": "a2o0",
    "permissionId": "",
    "sortIndex": 2,
    "status": 1,
    "url": ""
}, {
    "describe": " ",
    "icon": "fa fa-th-list",
    "id": "dev-01",
    "name": "开发人员工具",
    "parentId": "-1",
    "path": "d010",
    "permissionId": "",
    "sortIndex": 3,
    "status": 1,
    "url": ""
}, {
    "icon": "fa fa-deaf",
    "id": "b7f349813e3e67348c78f069f92ced46",
    "name": "工作流",
    "parentId": "-1",
    "path": "0I2J",
    "sortIndex": 4,
    "status": 1
},  {
    "icon": "fa fa-book",
    "id": "915f4a85cbbac4b757956a99333ae2a7",
    "name": "数据字典",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-fhFG",
    "permissionId": "dictionary",
    "sortIndex": 101,
    "status": 1,
    "url": "admin/dictionary/list.html"
}, {
    "icon": "fa fa-navicon",
    "id": "8db17b9ba28dd949c926b329af477a08",
    "name": "菜单管理",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-i2ea",
    "permissionId": "menu",
    "sortIndex": 102,
    "status": 1,
    "url": "admin/menu/list.html"
}, {
    "icon": "fa fa-briefcase",
    "id": "a52df62b69e21fd756523faf8f0bd986",
    "name": "权限管理",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-X27v",
    "permissionId": "permission,autz-setting",
    "sortIndex": 103,
    "status": 1,
    "url": "admin/permission/list.html"
}, {
    "icon": "fa fa-users",
    "id": "42fc4f83d12cc172e4690937eb15752a",
    "name": "角色管理",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-4ofL",
    "permissionId": "role",
    "sortIndex": 104,
    "status": 1,
    "url": "admin/role/list.html"
}, {
    "icon": "fa fa-user",
    "id": "58eba1a4371dd3c0da24fac5da8cadc2",
    "name": "用户管理",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-Dz7b",
    "permissionId": "user",
    "sortIndex": 105,
    "status": 1,
    "url": "admin/user/list.html"
}, {
    "icon": "fa fa-dashboard",
    "id": "f84b8dacb3ea07ecd811cfb869137b90",
    "name": "首页设置",
    "parentId": "e9dc96d6b677cbae865670e6813f5e8b",
    "path": "sOrB-JOQv",
    "permissionId": "dashboard",
    "sortIndex": 106,
    "status": 1,
    "url": "admin/dashboard/list.html"
}, {
    "icon": "fa fa-leaf",
    "id": "org-01-01",
    "name": "机构管理",
    "parentId": "org-01",
    "path": "a2o0-iL0F",
    "permissionId": "organizational",
    "sortIndex": 201,
    "status": 1,
    "url": "admin/org/list.html"
}, {
    "icon": "fa fa-sitemap",
    "id": "org-01-02",
    "name": "综合设置",
    "parentId": "org-01",
    "path": "a2o0-A12e",
    "permissionId": "organizational,department,position,person",
    "sortIndex": 202,
    "status": 1,
    "url": "admin/org/manager/index.html"
}, {
    "icon": "fa fa-vcard",
    "id": "d9b7a672a63d214a1f063bbbacab89ee",
    "name": "人员管理",
    "parentId": "org-01",
    "path": "a2o0-vfXJ",
    "permissionId": "person",
    "sortIndex": 203,
    "status": 1,
    "url": "admin/org/person/list.html"
}, {
    "icon": "fa fa-database",
    "id": "datasource-manager",
    "name": "数据源管理",
    "parentId": "dev-01",
    "path": "d010-jG1A",
    "permissionId": "datasource",
    "sortIndex": 301,
    "status": 1,
    "url": "admin/datasource/list.html"
}, {
    "icon": "fa fa-desktop",
    "id": "code-gen",
    "name": "代码生成器",
    "parentId": "dev-01",
    "path": "d010-jG1V",
    "permissionId": "file,database-manager,datasource",
    "sortIndex": 302,
    "status": 1,
    "url": "admin/code-generator/index.html"
}, {
    "icon": "fa fa-puzzle-piece",
    "id": "dyn-form",
    "name": "动态表单",
    "parentId": "dev-01",
    "path": "d010-6tVw",
    "permissionId": "form",
    "sortIndex": 303,
    "status": 1,
    "url": "admin/form/list.html"
}, {
    "icon": "fa fa-send-o",
    "id": "template",
    "name": "模板管理",
    "parentId": "dev-01",
    "path": "d010-54Ph",
    "permissionId": "template",
    "sortIndex": 304,
    "status": 1,
    "url": "pages/template/list.hl"
}, {
    "icon": "fa fa-database",
    "id": "database-manager",
    "name": "数据库维护",
    "parentId": "dev-01",
    "path": "d010-FH4w",
    "permissionId": "database-manager,datasource",
    "sortIndex": 305,
    "status": 1,
    "url": "admin/database-manager/index.html"
}, {
    "icon": "fa fa-file-word-o",
    "id": "quartz",
    "name": "定时任务",
    "parentId": "dev-01",
    "path": "d010-V54b",
    "permissionId": "schedule",
    "sortIndex": 306,
    "status": 1,
    "url": "admin/schedule/index.html"
}, {
    "icon": "fa fa-object-ungroup",
    "id": "9d65115ee9788c0e1fe8bf95e67e10da",
    "name": "模型管理",
    "parentId": "b7f349813e3e67348c78f069f92ced46",
    "path": "0I2J-5ALi",
    "permissionId": "workflow-model",
    "sortIndex": 401,
    "url": "admin/workflow/model/list.html"
}, {
    "icon": "fa fa-map-signs",
    "id": "8a2fd0aebdc2eef1de66a19bfc66823f",
    "name": "流程管理",
    "parentId": "b7f349813e3e67348c78f069f92ced46",
    "path": "0I2J-IoqP",
    "permissionId": "workflow-definition",
    "sortIndex": 402,
    "url": "admin/workflow/define/list.html"
}];


var user = [
    {
        "id": "4291d7da9005377ec9aec4a71ea837f",
        "name": "超级管理员",
        "username": "admin",
        "password": "ba7a97be0609c22fa1d300691dfcd790",
        "salt": "HX8Hr5Yd",
        "status": 1,
        "creatorId": "admin",
        "createTime": new Date().getTime()
    }
];

var autz_setting = [
    {
        "id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "type": "user",
        "settingFor": "4291d7da9005377ec9aec4a71ea837f",
        "describe": null,
        "status": 1
    }
];
var autz_menu = [];
menus.forEach(function (menu) {
    autz_menu.push({
        id: org.hswebframework.web.id.IDGenerator.MD5.generate(),
        parentId: "-1",
        menuId: menu.id,
        status: 1,
        settingId: "98d74130b3cb06afc0ae8e5b57a6c052",
        path: "-"
    });
});
//版本更新信息
var versions = [
    // {
    //     version: "3.0.0",
    //     upgrade: function (context) {
    //         java.lang.System.out.println("更新到3.0.2了");
    //     }
    // }
];
var JDBCType = java.sql.JDBCType;

function install(context) {
    var database = context.database;

}

function initialize(context) {
    var database = context.database;
    database.getTable("s_menu").createInsert().values(menus).exec();
    database.getTable("s_autz_setting").createInsert().values(autz_setting).exec();
    database.getTable("s_autz_menu").createInsert().values(autz_menu).exec();
    database.getTable("s_user").createInsert().values(user).exec();
}

//设置依赖
dependency.setup(info)
    .onInstall(install)
    .onUpgrade(function (context) { //更新时执行
        var upgrader = context.upgrader;
        upgrader.filter(versions)
            .upgrade(function (newVer) {
                newVer.upgrade(context);
            });
    })
    .onUninstall(function (context) { //卸载时执行

    }).onInitialize(initialize);