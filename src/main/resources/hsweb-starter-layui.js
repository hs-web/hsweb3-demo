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
var menus = [
    {
        "u_id": "system-menu-parent",
        "name": "系统",
        "parent_id": "-1",
        "permission_id": "",
        "path": "sOrB",
        "sort_index": 1,
        "describe": "父菜单 ",
        "url": "",
        "icon": "",
        "status": 1
    },
    {
        "u_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "name": "系统设置",
        "parent_id": "system-menu-parent",
        "permission_id": "",
        "path": "sOrB",
        "sort_index": 1,
        "describe": "父菜单 ",
        "url": "",
        "icon": "",
        "status": 1
    },
    // {
    //     "u_id": "8db17b9ba28dd949c926b329af477a08",
    //     "name": "菜单管理",
    //     "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
    //     "permission_id": "menu",
    //     "path": "sOrB-ocxx",
    //     "sort_index": 101,
    //     "describe": null,
    //     "url": "pages/menu/list",
    //     "icon": "",
    //     "status": 1
    // },
    {
        "u_id": "a52df62b69e21fd756523faf8f0bd986",
        "name": "权限管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "permission,autz-setting",
        "path": "sOrB-InQ5",
        "sort_index": 102,
        "describe": null,
        "url": "pages/permission/list",
        "icon": null,
        "status": 1
    },
    {
        "u_id": "42fc4f83d12cc172e4690937eb15752a",
        "name": "角色管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "role",
        "path": "sOrB-Gpa8",
        "sort_index": 103,
        "describe": null,
        "url": "pages/role/list",
        "icon": "",
        "status": 1
    },
    {
        "u_id": "58eba1a4371dd3c0da24fac5da8cadc2",
        "name": "用户管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "user",
        "path": "sOrB-vSbQ",
        "sort_index": 104,
        "describe": null,
        "url": "pages/user/list",
        "icon": null,
        "status": 1
    }
];
var permissions = [
    {
        "u_id": "permission",
        "name": "权限管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"列表查询\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":true,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":false,\"describe\":\"新增\"}]",
        "optional_fields": "[{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"权限名称\",\"name\":\"name\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"说明\",\"name\":\"describe\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"状态\",\"name\":\"status\"}]"
    },
    {
        "u_id": "role",
        "name": "角色管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"查询列表\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":true,\"describe\":\"新增\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":false,\"describe\":\"删除\"}]",
        "data_access": null,
        "optional_fields": "[{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"名称\",\"name\":\"name\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"说明\",\"name\":\"describe\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"状态\",\"name\":\"status\"}]"
    },
    {
        "u_id": "menu",
        "name": "菜单管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"查询列表\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":false,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":true,\"describe\":\"新增\"}]",
        "optional_fields": "[{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"名称\",\"name\":\"name\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"说明\",\"name\":\"descibe\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"权限ID\",\"name\":\"permissionId\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"URL\",\"name\":\"url\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"图标\",\"name\":\"icon\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"状态\",\"name\":\"status\"}]"
    },
    {
        "u_id": "autz-setting",
        "name": "权限设置",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":false,\"describe\":\"查询列表\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":false,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":false,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":true,\"describe\":\"新增\"}]",
        "data_access": null,
        "optional_fields": "[]"
    },
    {
        "u_id": "user",
        "name": "用户管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"查询列表\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":true,\"describe\":\"新增\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":false,\"describe\":\"删除\"}]",
        "data_access": null,
        "optional_fields": "[{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"姓名\",\"name\":\"name\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"用户名\",\"name\":\"username\"},{\"@type\":\"org.hswebframework.web.entity.authorization.OptionalField\",\"describe\":\"密码\",\"name\":\"password\"}]"
    }, {
        "u_id": "organizational",
        "name": "组织架构",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"列表查询\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":true,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":false,\"describe\":\"新增\"}]",
    }, {
        "u_id": "department",
        "name": "部门管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"列表查询\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":true,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":false,\"describe\":\"新增\"}]",
    }, {
        "u_id": "position",
        "name": "岗位管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"列表查询\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":true,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":false,\"describe\":\"新增\"}]",
    }, {
        "u_id": "person",
        "name": "人员管理",
        "describe": "",
        "status": 1,
        "actions": "[{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"query\",\"defaultCheck\":true,\"describe\":\"列表查询\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"get\",\"defaultCheck\":true,\"describe\":\"查询明细\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"update\",\"defaultCheck\":true,\"describe\":\"修改\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"delete\",\"defaultCheck\":true,\"describe\":\"删除\"},{\"@type\":\"org.hswebframework.web.entity.authorization.ActionEntity\",\"action\":\"add\",\"defaultCheck\":false,\"describe\":\"新增\"}]",
    }
];

var user = [
    {
        "u_id": "4291d7da9005377ec9aec4a71ea837f",
        "name": "超级管理员",
        "username": "admin",
        "password": "ba7a97be0609c22fa1d300691dfcd790",
        "salt": "HX8Hr5Yd",
        "status": 1,
        "last_login_ip": null,
        "last_login_time": null,
        "creator_id": "admin",
        "create_time": 1497160610259
    }
];

var autz_setting = [
    {
        "u_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "type": "user",
        "setting_for": "4291d7da9005377ec9aec4a71ea837f",
        "describe": null,
        "status": 1
    }
];
// var autz_menu = [
//     {
//         "u_id": "asdasdqweqweasdas",
//         "parent_id": null,
//         "menu_id": "org-01",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },{
//         "u_id": "asdasdqweqweasdas",
//         "parent_id": null,
//         "menu_id": "org-01",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },
//     {
//         "u_id": "asdasdqweqwe",
//         "parent_id": null,
//         "menu_id": "org-01",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },
//     {
//         "u_id": "qweqweqweqwe",
//         "parent_id": null,
//         "menu_id": "org-01-01",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },
//     {
//         "u_id": "qweqweqwe",
//         "parent_id": null,
//         "menu_id": "org-01-02",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },
//     {
//         "u_id": "8bd75f4ef288ffb1a05e9bf3a1733b7d",
//         "parent_id": null,
//         "menu_id": "e9dc96d6b677cbae865670e6813f5e8b",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM",
//         "sort_index": 1,
//         "status": 1,
//         "level": 1,
//         "config": null
//     },
//     {
//         "u_id": "ac6fda029dfa955f99bd50e1ca0a7e4b",
//         "parent_id": "8bd75f4ef288ffb1a05e9bf3a1733b7d",
//         "menu_id": "a52df62b69e21fd756523faf8f0bd986",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM-XE9I",
//         "sort_index": 101,
//         "status": 1,
//         "level": 2,
//         "config": null
//     },
//     {
//         "u_id": "3e19194f865ed24d624c509d0ce0a1a9",
//         "parent_id": "8bd75f4ef288ffb1a05e9bf3a1733b7d",
//         "menu_id": "8db17b9ba28dd949c926b329af477a08",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM-UWVv",
//         "sort_index": 102,
//         "status": 1,
//         "level": 2,
//         "config": null
//     },
//     {
//         "u_id": "e6b5aeceaf82ea52f991cb94b6f5c44c",
//         "parent_id": "8bd75f4ef288ffb1a05e9bf3a1733b7d",
//         "menu_id": "42fc4f83d12cc172e4690937eb15752a",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM-f4iK",
//         "sort_index": 103,
//         "status": 1,
//         "level": 2,
//         "config": null
//     },
//     {
//         "u_id": "15e45349d9c6f09ef7fd6fba180a60e2",
//         "parent_id": "8bd75f4ef288ffb1a05e9bf3a1733b7d",
//         "menu_id": "58eba1a4371dd3c0da24fac5da8cadc2",
//         "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
//         "path": "opyM-d8eW",
//         "sort_index": 104,
//         "status": 1,
//         "level": 2,
//         "config": null
//     }
// ]
var autz_menu = [];
menus.forEach(function (menu) {
    autz_menu.push({
        u_id: org.hswebframework.web.id.IDGenerator.MD5.generate(),
        parent_id: "-1",
        menu_id: menu.u_id,
        status: 1,
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "path": "-"
    });
});
var autz_detail = [
    {
        "u_id": "adasdasdasd",
        "permission_id": "database-manager",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"execute\",\"query\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "123123123",
        "permission_id": "datasource",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"query\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "asdasdqweqwe",
        "permission_id": "file",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"download\",\"static\",\"upload\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "asdasdasdas",
        "permission_id": "organizational",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "qweqweqweqwe",
        "permission_id": "department",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    }, {
        "u_id": "asdqweqweasdasd",
        "permission_id": "position",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    }, {
        "u_id": "asgdfgwertwetr",
        "permission_id": "person",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "67e15b9dd48462bcd5892fd902fafa16",
        "permission_id": "permission",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "44ef01ac17c2d74d55b35bc62d891b39",
        "permission_id": "autz-setting",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "3adb23b8070800d7f6e3dcb835148a83",
        "permission_id": "menu",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "34d1730a2bc0ff33fbf699ed7c82370d",
        "permission_id": "role",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    },
    {
        "u_id": "f242e8eae3f181601ce632a078d026c2",
        "permission_id": "user",
        "setting_id": "98d74130b3cb06afc0ae8e5b57a6c052",
        "actions": "Set[\"add\",\"query\",\"get\",\"update\",\"delete\"]",
        "data_accesses": "[]",
        "status": 1
    }
];
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
    database.getTable("s_permission").createInsert().values(permissions).exec();
    database.getTable("s_autz_setting").createInsert().values(autz_setting).exec();
    database.getTable("s_autz_detail").createInsert().values(autz_detail).exec();
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