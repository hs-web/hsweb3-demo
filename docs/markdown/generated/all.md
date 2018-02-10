# hsweb 3.0 api


<a name="overview"></a>
## 概览
hsweb 企业后台管理基础框架


### 版本信息
*版本* : 3.0


### 联系方式
*名字* : zhouhao  
*邮箱* : i@hsweb.me


### 许可信息
*许可证* : Apache License, Version 2.0  
*许可网址* : https://www.apache.org/licenses/LICENSE-2.0.html  
*服务条款* : http://www.hsweb.me/


### URI scheme
*域名* : localhost:8080  
*基础路径* : /


### 标签

* OAuth2.0-客户端-token : O Auth 2 User Token Controller
* OAuth2.0-客户端-服务配置 : O Auth 2 Server Config Controller
* OAuth2.0-客户端-请求服务 : O Auth 2 Client Controller
* OAuth2.0-服务-客户端管理 : O Auth 2 Client Config Controller
* OAuth2.0-服务-授权 : O Auth 2 Authorize Controller
* OAuth2.0-服务-申请token : O Auth 2 Token Controller
* OAuth2.0-服务-获取用户信息 : O Auth 2 User Info Controller
* 动态脚本管理 : Script Controller
* 动态表单-发布日志 : Dynamic Form Deploy Log Controller
* 动态表单-数据操作 : Dynamic Form Operation Controller
* 动态表单-表单管理 : Dynamic Form Column Controller
* 定时调度管理 : Schedule Job Controller
* 开发人员工具-数据库维护 : Data Base Manager Controller
* 开发人员工具-数据源 : Datasource Controller
* 文件管理-文件信息管理 : File Info Controller
* 文件管理-文件操作 : File Controller
* 权限-权限管理 : Permission Controller
* 权限-权限设置 : Authorization Setting Controller
* 权限-用户令牌管理 : User Token Info Controller
* 权限-用户授权 : Authorization Controller
* 权限-用户管理 : User Controller
* 权限-菜单管理 : Menu Controller
* 权限-角色管理 : Role Controller
* 用户-用户配置管理 : User Setting Controller
* 第三方应用-ueditor : Ueditor Controller
* 组织架构-人员管理 : Person Controller
* 组织架构-关系定义管理 : Relation Define Controller
* 组织架构-关系管理 : Relation Info Controller
* 组织架构-机构管理 : Organizational Controller
* 组织架构-职位管理 : Position Controller
* 组织架构-行政区划管理 : District Controller
* 组织架构-部门管理 : Department Controller




<a name="paths"></a>
## 资源

<a name="150d7e218e26dd82ae3d0bf0f0c38499"></a>
### OAuth2.0-客户端-token
O Auth 2 User Token Controller


<a name="listusingget_8"></a>
#### 根据动态条件查询
```
GET /oauth2-user-token
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OAuth2UserTokenEntity»»](#652849cecf290786c83f3915b818f8c1)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-user-token
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "accessToken" : "string",
      "clientId" : "string",
      "clientUserId" : "string",
      "createTime" : 0,
      "expiresIn" : 0,
      "grantType" : "string",
      "id" : "string",
      "properties" : "object",
      "refreshToken" : "string",
      "scope" : "string",
      "serverId" : "string",
      "serverUserId" : "string",
      "updateTime" : 0
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_8"></a>
#### 根据动态条件统计
```
GET /oauth2-user-token/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-user-token/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_16"></a>
#### 根据主键查询多条记录
```
GET /oauth2-user-token/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2UserTokenEntity»»](#19dfe8ccdff0ac64ffddf20e38f600c3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-user-token/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "accessToken" : "string",
    "clientId" : "string",
    "clientUserId" : "string",
    "createTime" : 0,
    "expiresIn" : 0,
    "grantType" : "string",
    "id" : "string",
    "properties" : "object",
    "refreshToken" : "string",
    "scope" : "string",
    "serverId" : "string",
    "serverUserId" : "string",
    "updateTime" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_8"></a>
#### 不分页动态查询
```
GET /oauth2-user-token/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2UserTokenEntity»»](#19dfe8ccdff0ac64ffddf20e38f600c3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-user-token/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "accessToken" : "string",
    "clientId" : "string",
    "clientUserId" : "string",
    "createTime" : 0,
    "expiresIn" : 0,
    "grantType" : "string",
    "id" : "string",
    "properties" : "object",
    "refreshToken" : "string",
    "scope" : "string",
    "serverId" : "string",
    "serverUserId" : "string",
    "updateTime" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_17"></a>
#### 根据主键查询
```
GET /oauth2-user-token/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2UserTokenEntity»](#9ce3adcac2f6b56f6a853c19d034f501)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-user-token/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "accessToken" : "string",
    "clientId" : "string",
    "clientUserId" : "string",
    "createTime" : 0,
    "expiresIn" : 0,
    "grantType" : "string",
    "id" : "string",
    "properties" : "object",
    "refreshToken" : "string",
    "scope" : "string",
    "serverId" : "string",
    "serverUserId" : "string",
    "updateTime" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="c9ee5c36665ebaffd5239fd07f46c3e6"></a>
### OAuth2.0-客户端-服务配置
O Auth 2 Server Config Controller


<a name="addusingpost_6"></a>
#### 新增
```
POST /oauth2-server-config
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config
```


###### 请求 body
```
json :
{
  "accessTokenUrl" : "string",
  "apiBaseUrl" : "string",
  "authUrl" : "string",
  "clientId" : "string",
  "clientSecret" : "string",
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "provider" : "string",
  "redirectUri" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_7"></a>
#### 根据动态条件查询
```
GET /oauth2-server-config
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OAuth2ServerConfigEntity»»](#9418f129377a4c78a87d34891784b4ad)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "accessTokenUrl" : "string",
      "apiBaseUrl" : "string",
      "authUrl" : "string",
      "clientId" : "string",
      "clientSecret" : "string",
      "describe" : "string",
      "id" : "string",
      "name" : "string",
      "properties" : "object",
      "provider" : "string",
      "redirectUri" : "string",
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_6"></a>
#### 新增或者修改
```
PATCH /oauth2-server-config
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config
```


###### 请求 body
```
json :
{
  "accessTokenUrl" : "string",
  "apiBaseUrl" : "string",
  "authUrl" : "string",
  "clientId" : "string",
  "clientSecret" : "string",
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "provider" : "string",
  "redirectUri" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_7"></a>
#### 根据动态条件统计
```
GET /oauth2-server-config/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_14"></a>
#### 根据主键查询多条记录
```
GET /oauth2-server-config/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2ServerConfigEntity»»](#7c0de841c030a56e36a3592bab2f4b70)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "accessTokenUrl" : "string",
    "apiBaseUrl" : "string",
    "authUrl" : "string",
    "clientId" : "string",
    "clientSecret" : "string",
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "provider" : "string",
    "redirectUri" : "string",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_7"></a>
#### 不分页动态查询
```
GET /oauth2-server-config/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2ServerConfigEntity»»](#7c0de841c030a56e36a3592bab2f4b70)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "accessTokenUrl" : "string",
    "apiBaseUrl" : "string",
    "authUrl" : "string",
    "clientId" : "string",
    "clientSecret" : "string",
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "provider" : "string",
    "redirectUri" : "string",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_15"></a>
#### 根据主键查询
```
GET /oauth2-server-config/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2ServerConfigEntity»](#f49c55e99fe094081dd3c91f972f307a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "accessTokenUrl" : "string",
    "apiBaseUrl" : "string",
    "authUrl" : "string",
    "clientId" : "string",
    "clientSecret" : "string",
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "provider" : "string",
    "redirectUri" : "string",
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_5"></a>
#### 修改数据
```
PUT /oauth2-server-config/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/string
```


###### 请求 body
```
json :
{
  "accessTokenUrl" : "string",
  "apiBaseUrl" : "string",
  "authUrl" : "string",
  "clientId" : "string",
  "clientSecret" : "string",
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "provider" : "string",
  "redirectUri" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_5"></a>
#### 删除数据
```
DELETE /oauth2-server-config/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-server-config/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="6eb691804efc6126d5e67aa24596506f"></a>
### OAuth2.0-客户端-请求服务
O Auth 2 Client Controller


<a name="bootusingget"></a>
#### 跳转至OAuth2.0服务授权页面
```
GET /oauth2/boot/{serverId}
```


##### 参数

|类型|名称|说明|类型|默认值|
|---|---|---|---|---|
|**Path**|**serverId**  <br>*必填*|serverId|string||
|**Query**|**redirect**  <br>*可选*|redirect|string|`"/"`|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[RedirectView](#redirectview)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/boot/string
```


###### 请求 query
```
json :
{
  "redirect" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "applicationContext" : {
    "applicationName" : "string",
    "autowireCapableBeanFactory" : { },
    "beanDefinitionCount" : 0,
    "beanDefinitionNames" : [ "string" ],
    "classLoader" : {
      "parent" : {
        "parent" : "..."
      }
    },
    "displayName" : "string",
    "environment" : {
      "activeProfiles" : [ "string" ],
      "defaultProfiles" : [ "string" ]
    },
    "id" : "string",
    "parent" : {
      "applicationName" : "string",
      "autowireCapableBeanFactory" : { },
      "beanDefinitionCount" : 0,
      "beanDefinitionNames" : [ "string" ],
      "classLoader" : {
        "parent" : "..."
      },
      "displayName" : "string",
      "environment" : {
        "activeProfiles" : [ "string" ],
        "defaultProfiles" : [ "string" ]
      },
      "id" : "string",
      "parent" : "...",
      "parentBeanFactory" : { },
      "startupDate" : 0
    },
    "parentBeanFactory" : { },
    "startupDate" : 0
  },
  "attributesMap" : "object",
  "beanName" : "string",
  "contentType" : "string",
  "exposePathVariables" : true,
  "hosts" : [ "string" ],
  "propagateQueryProperties" : true,
  "redirectView" : true,
  "requestContextAttribute" : "string",
  "staticAttributes" : "object",
  "url" : "string"
}
```


<a name="requeststateusingget"></a>
#### 申请一个state
```
GET /oauth2/state
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/state
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="e0fdb855d5254b11d23711960018fa8f"></a>
### OAuth2.0-服务-客户端管理
O Auth 2 Client Config Controller


<a name="getallclientusingget"></a>
#### 获取全部客户端
```
GET /oauth2-client-config
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2Client»»](#04bd1f7c2172df55357d15dd7a4b020d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-client-config
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "createTime" : 0,
    "defaultGrantScope" : [ "string" ],
    "id" : "string",
    "name" : "string",
    "ownerId" : "string",
    "redirectUri" : "string",
    "secret" : "string",
    "status" : "string",
    "supportGrantTypes" : [ "string" ]
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_5"></a>
#### 保存客户端
```
PATCH /oauth2-client-config
```


##### 说明
如果客户端不存在则自动新增


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**clientEntity**  <br>*必填*|clientEntity|[OAuth2ClientEntity](#oauth2cliententity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-client-config
```


###### 请求 body
```
json :
{
  "createTime" : 0,
  "creatorId" : "string",
  "defaultGrantScope" : [ "string" ],
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "ownerId" : "string",
  "properties" : "object",
  "redirectUri" : "string",
  "secret" : "string",
  "status" : "string",
  "supportGrantTypes" : [ "string" ],
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : 0,
    "defaultGrantScope" : [ "string" ],
    "id" : "string",
    "name" : "string",
    "ownerId" : "string",
    "redirectUri" : "string",
    "secret" : "string",
    "status" : "string",
    "supportGrantTypes" : [ "string" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyowneridusingget"></a>
#### 根据绑定到用户到客户端
```
GET /oauth2-client-config/owner/{userId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**userId**  <br>*必填*|userId|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-client-config/owner/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : 0,
    "defaultGrantScope" : [ "string" ],
    "id" : "string",
    "name" : "string",
    "ownerId" : "string",
    "redirectUri" : "string",
    "secret" : "string",
    "status" : "string",
    "supportGrantTypes" : [ "string" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyidusingget"></a>
#### 根据id获取客户端
```
GET /oauth2-client-config/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-client-config/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : 0,
    "defaultGrantScope" : [ "string" ],
    "id" : "string",
    "name" : "string",
    "ownerId" : "string",
    "redirectUri" : "string",
    "secret" : "string",
    "status" : "string",
    "supportGrantTypes" : [ "string" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="removebyidusingdelete"></a>
#### 删除客户端
```
DELETE /oauth2-client-config/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2-client-config/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : 0,
    "defaultGrantScope" : [ "string" ],
    "id" : "string",
    "name" : "string",
    "ownerId" : "string",
    "redirectUri" : "string",
    "secret" : "string",
    "status" : "string",
    "supportGrantTypes" : [ "string" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="d1450d57da69e153602bffacf5d988ee"></a>
### OAuth2.0-服务-授权
O Auth 2 Authorize Controller


<a name="authorizebyimplicitusingget"></a>
#### implicit方式申请token
```
GET /oauth2/authorize
```


##### 参数

|类型|名称|说明|类型|默认值|
|---|---|---|---|---|
|**Query**|**client_id**  <br>*必填*||string||
|**Query**|**redirect_uri**  <br>*必填*|redirect_uri|string||
|**Query**|**response_type**  <br>*必填*||enum (token)|`"token"`|
|**Query**|**state**  <br>*必填*|state|string||


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ImplicitAccessTokenModel](#implicitaccesstokenmodel)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/authorize
```


###### 请求 query
```
json :
{
  "client_id" : "string",
  "redirect_uri" : "string",
  "response_type" : "string",
  "state" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "access_token" : "string",
  "expires_in" : 0,
  "redirect_uri" : "string",
  "state" : "string",
  "token_type" : "string"
}
```


<a name="5ebecb32d23ed781f0117af1b7c2c5ad"></a>
### OAuth2.0-服务-申请token
O Auth 2 Token Controller


<a name="authorizebyimplicitusingget"></a>
#### implicit方式申请token
```
GET /oauth2/authorize
```


##### 参数

|类型|名称|说明|类型|默认值|
|---|---|---|---|---|
|**Query**|**client_id**  <br>*必填*||string||
|**Query**|**redirect_uri**  <br>*必填*|redirect_uri|string||
|**Query**|**response_type**  <br>*必填*||enum (token)|`"token"`|
|**Query**|**state**  <br>*必填*|state|string||


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ImplicitAccessTokenModel](#implicitaccesstokenmodel)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/authorize
```


###### 请求 query
```
json :
{
  "client_id" : "string",
  "redirect_uri" : "string",
  "response_type" : "string",
  "state" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "access_token" : "string",
  "expires_in" : 0,
  "redirect_uri" : "string",
  "state" : "string",
  "token_type" : "string"
}
```


<a name="requesttokenusingpost"></a>
#### 申请token
```
POST /oauth2/token
```


##### 说明
具体请求方式请参照: http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Header**|**Authorization**  <br>*可选*||string|
|**Query**|**client_id**  <br>*必填*||string|
|**Query**|**client_secret**  <br>*可选*||string|
|**Query**|**code**  <br>*可选*||string|
|**Query**|**grant_type**  <br>*可选*|grant_type|enum (authorization_code, client_credentials, password, refresh_token, implicit)|
|**Query**|**redirect_uri**  <br>*可选*||string|
|**Query**|**refresh_token**  <br>*可选*||string|
|**Query**|**scope**  <br>*可选*||string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[AccessTokenModel](#accesstokenmodel)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/token
```


###### 请求 header
```
json :
"string"
```


###### 请求 query
```
json :
{
  "client_id" : "string",
  "client_secret" : "string",
  "code" : "string",
  "grant_type" : "string",
  "redirect_uri" : "string",
  "refresh_token" : "string",
  "scope" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "access_token" : "string",
  "expires_in" : 0,
  "refresh_token" : "string",
  "scope" : "string",
  "token_type" : "string"
}
```


<a name="b3340729aa54afa64d4495eea982b1ac"></a>
### OAuth2.0-服务-获取用户信息
O Auth 2 User Info Controller


<a name="getloginuserusingget"></a>
#### 根据accessToken获取对应用户信息
```
GET /oauth2/user-auth-info
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**access_token**  <br>*必填*|access_token|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/user-auth-info
```


###### 请求 query
```
json :
{
  "access_token" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "attributes" : {
      "string" : "[serializable](#serializable)"
    },
    "permissions" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "type" : "string"
      } ],
      "id" : "string"
    } ],
    "roles" : [ {
      "id" : "string",
      "name" : "string"
    } ],
    "user" : {
      "id" : "string",
      "name" : "string",
      "type" : "string",
      "username" : "string"
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getuserbyidusingget"></a>
#### 根据accessToken获取特定的用户信息
```
GET /oauth2/user-auth-info/{userId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**userId**  <br>*必填*|userId|string|
|**Query**|**access_token**  <br>*必填*|access_token|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/oauth2/user-auth-info/string
```


###### 请求 query
```
json :
{
  "access_token" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "attributes" : {
      "string" : "[serializable](#serializable)"
    },
    "permissions" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "type" : "string"
      } ],
      "id" : "string"
    } ],
    "roles" : [ {
      "id" : "string",
      "name" : "string"
    } ],
    "user" : {
      "id" : "string",
      "name" : "string",
      "type" : "string",
      "username" : "string"
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="a5ccb4108d93b76acf9dbe0e1886805d"></a>
### 动态脚本管理
Script Controller


<a name="addusingpost_15"></a>
#### 新增
```
POST /script
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[ScriptEntity](#scriptentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "properties" : "object",
  "remark" : "string",
  "script" : "string",
  "status" : 0,
  "tag" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_17"></a>
#### 根据动态条件查询
```
GET /script
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«ScriptEntity»»](#b526184b0542731e9ce046cd15c7430f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "id" : "string",
      "language" : "string",
      "name" : "string",
      "properties" : "object",
      "remark" : "string",
      "script" : "string",
      "status" : 0,
      "tag" : "string",
      "type" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_15"></a>
#### 新增或者修改
```
PATCH /script
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[ScriptEntity](#scriptentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "properties" : "object",
  "remark" : "string",
  "script" : "string",
  "status" : 0,
  "tag" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_17"></a>
#### 根据动态条件统计
```
GET /script/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_34"></a>
#### 根据主键查询多条记录
```
GET /script/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScriptEntity»»](#d6f39903f6ccd973fe4476e4bdd6b638)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "properties" : "object",
    "remark" : "string",
    "script" : "string",
    "status" : 0,
    "tag" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_17"></a>
#### 不分页动态查询
```
GET /script/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScriptEntity»»](#d6f39903f6ccd973fe4476e4bdd6b638)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "properties" : "object",
    "remark" : "string",
    "script" : "string",
    "status" : 0,
    "tag" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_35"></a>
#### 根据主键查询
```
GET /script/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«ScriptEntity»](#75b3a1a20f80841af6d3065f6ad3b2f7)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "properties" : "object",
    "remark" : "string",
    "script" : "string",
    "status" : 0,
    "tag" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_14"></a>
#### 修改数据
```
PUT /script/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[ScriptEntity](#scriptentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "properties" : "object",
  "remark" : "string",
  "script" : "string",
  "status" : 0,
  "tag" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_14"></a>
#### 删除数据
```
DELETE /script/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executefotpostandputusingpost"></a>
#### 执行脚本
```
POST /script/{id}/execute
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**parameters**  <br>*可选*|parameters|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string/execute
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executeforgetusingget"></a>
#### 执行脚本
```
GET /script/{id}/execute
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Query**|**parameters**  <br>*可选*|parameters|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string/execute
```


###### 请求 query
```
json :
{
  "parameters" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executefotpostandputusingput"></a>
#### 执行脚本
```
PUT /script/{id}/execute
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**parameters**  <br>*可选*|parameters|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/script/string/execute
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="57667a7678c40da787d7021eb0230263"></a>
### 动态表单-发布日志
Dynamic Form Deploy Log Controller


<a name="listusingget_4"></a>
#### 根据动态条件查询
```
GET /dynamic/form-deploy-log
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DynamicFormDeployLogEntity»»](#af1a0c73ed9afec5c76ebf1dce361e01)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form-deploy-log
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "deployTime" : 0,
      "formId" : "string",
      "id" : "string",
      "metaData" : "string",
      "properties" : "object",
      "status" : "string",
      "version" : 0
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_4"></a>
#### 根据动态条件统计
```
GET /dynamic/form-deploy-log/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form-deploy-log/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_8"></a>
#### 根据主键查询多条记录
```
GET /dynamic/form-deploy-log/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormDeployLogEntity»»](#19f5d621630c200f26659affa8d245be)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form-deploy-log/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "deployTime" : 0,
    "formId" : "string",
    "id" : "string",
    "metaData" : "string",
    "properties" : "object",
    "status" : "string",
    "version" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_4"></a>
#### 不分页动态查询
```
GET /dynamic/form-deploy-log/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormDeployLogEntity»»](#19f5d621630c200f26659affa8d245be)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form-deploy-log/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "deployTime" : 0,
    "formId" : "string",
    "id" : "string",
    "metaData" : "string",
    "properties" : "object",
    "status" : "string",
    "version" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_9"></a>
#### 根据主键查询
```
GET /dynamic/form-deploy-log/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormDeployLogEntity»](#a2d83137608215d878bebe740d227f8d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form-deploy-log/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "deployTime" : 0,
    "formId" : "string",
    "id" : "string",
    "metaData" : "string",
    "properties" : "object",
    "status" : "string",
    "version" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="a8f6f99caa07c8584569d49e661e9efb"></a>
### 动态表单-数据操作
Dynamic Form Operation Controller


<a name="addusingpost_4"></a>
#### 新增
```
POST /dynamic/form/operation/{formId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**formId**  <br>*必填*|formId|string|
|**Body**|**data**  <br>*必填*|data|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,object»»](#62b0ac1e9c72a1c12b2ba3dca9050555)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/operation/string
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="selectpagerusingget"></a>
#### 动态查询
```
GET /dynamic/form/operation/{formId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**formId**  <br>*必填*|formId|string|
|**Query**|**excludes**  <br>*可选*||< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*||boolean|
|**Query**|**includes**  <br>*可选*||< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*||integer (int32)|
|**Query**|**pageSize**  <br>*可选*||integer (int32)|
|**Query**|**paging**  <br>*可选*||boolean|
|**Query**|**sorts[0].name**  <br>*可选*||string|
|**Query**|**sorts[0].order**  <br>*可选*||string|
|**Query**|**sorts[0].type**  <br>*可选*||string|
|**Query**|**terms[0].column**  <br>*可选*||string|
|**Query**|**terms[0].termType**  <br>*可选*||string|
|**Query**|**terms[0].type**  <br>*可选*||enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*||object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«object»»](#b067bd9552e787aea006c9b1cd6fcd02)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/operation/string
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ "object" ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updateusingput"></a>
#### 动态修改
```
PUT /dynamic/form/operation/{formId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**formId**  <br>*必填*|formId|string|
|**Body**|**paramEntity**  <br>*必填*|paramEntity|[UpdateParamEntity«Map«string,object»»](#c85b38c7e7c2603ffdc8ca54e841860d)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/operation/string
```


###### 请求 body
```
json :
{
  "data" : "object",
  "excludes" : [ "string" ],
  "includes" : [ "string" ],
  "terms" : [ {
    "column" : "string",
    "termType" : "string",
    "terms" : [ {
      "column" : "string",
      "termType" : "string",
      "terms" : [ "..." ],
      "type" : "string",
      "value" : "object"
    } ],
    "type" : "string",
    "value" : "object"
  } ]
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deleteusingdelete_1"></a>
#### 动态删除
```
DELETE /dynamic/form/operation/{formId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**formId**  <br>*必填*|formId|string|
|**Query**|**excludes**  <br>*可选*||< string > array(multi)|
|**Query**|**includes**  <br>*可选*||< string > array(multi)|
|**Query**|**terms[0].column**  <br>*可选*||string|
|**Query**|**terms[0].termType**  <br>*可选*||string|
|**Query**|**terms[0].type**  <br>*可选*||enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*||object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/operation/string
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "includes" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="259f10c12785f43477afbdfbc9bf50b7"></a>
### 动态表单-表单管理
Dynamic Form Column Controller


<a name="addusingpost_3"></a>
#### 新增
```
POST /dynamic/form
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DynamicFormEntity](#dynamicformentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form
```


###### 请求 body
```
json :
{
  "alias" : "testForm",
  "correlations" : "string",
  "createTime" : 0,
  "creatorId" : "1",
  "dataSourceId" : "string",
  "databaseTableName" : "f_test_form",
  "deployed" : false,
  "describe" : "string",
  "id" : "string",
  "name" : "测试表单",
  "properties" : "object",
  "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
  "type" : "string",
  "updateTime" : 0,
  "version" : 1
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_3"></a>
#### 根据动态条件查询
```
GET /dynamic/form
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DynamicFormEntity»»](#79912e82f1deb6279e26d7fd6a3b5046)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "alias" : "testForm",
      "correlations" : "string",
      "createTime" : 0,
      "creatorId" : "1",
      "dataSourceId" : "string",
      "databaseTableName" : "f_test_form",
      "deployed" : false,
      "describe" : "string",
      "id" : "string",
      "name" : "测试表单",
      "properties" : "object",
      "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
      "type" : "string",
      "updateTime" : 0,
      "version" : 1
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_3"></a>
#### 新增或者修改
```
PATCH /dynamic/form
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DynamicFormEntity](#dynamicformentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form
```


###### 请求 body
```
json :
{
  "alias" : "testForm",
  "correlations" : "string",
  "createTime" : 0,
  "creatorId" : "1",
  "dataSourceId" : "string",
  "databaseTableName" : "f_test_form",
  "deployed" : false,
  "describe" : "string",
  "id" : "string",
  "name" : "测试表单",
  "properties" : "object",
  "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
  "type" : "string",
  "updateTime" : 0,
  "version" : 1
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateformandcolumnusingpatch"></a>
#### 同时保存表单和字段
```
PATCH /dynamic/form/bind
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*必填*|bindEntity|[DynamicFormColumnBindEntity](#dynamicformcolumnbindentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/bind
```


###### 请求 body
```
json :
{
  "columns" : [ {
    "alias" : "string",
    "columnName" : "string",
    "dataType" : "string",
    "describe" : "string",
    "dictConfig" : "string",
    "dictId" : "string",
    "dictParserId" : "string",
    "formId" : "string",
    "id" : "string",
    "javaType" : "string",
    "jdbcType" : "string",
    "length" : 0,
    "name" : "string",
    "precision" : 0,
    "properties" : "object",
    "scale" : 0,
    "sortIndex" : 0
  } ],
  "form" : {
    "alias" : "testForm",
    "correlations" : "string",
    "createTime" : 0,
    "creatorId" : "1",
    "dataSourceId" : "string",
    "databaseTableName" : "f_test_form",
    "deployed" : false,
    "describe" : "string",
    "id" : "string",
    "name" : "测试表单",
    "properties" : "object",
    "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
    "type" : "string",
    "updateTime" : 0,
    "version" : 1
  }
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deleteusingdelete"></a>
#### 删除列
```
DELETE /dynamic/form/column
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*可选*|要删除的列id,多个列以,分割|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormColumnEntity»»](#7db23ee003946511961f3a7df29c6d8d)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/column
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "alias" : "string",
    "columnName" : "string",
    "dataType" : "string",
    "describe" : "string",
    "dictConfig" : "string",
    "dictId" : "string",
    "dictParserId" : "string",
    "formId" : "string",
    "id" : "string",
    "javaType" : "string",
    "jdbcType" : "string",
    "length" : 0,
    "name" : "string",
    "precision" : 0,
    "properties" : "object",
    "scale" : 0,
    "sortIndex" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="addusingpatch_1"></a>
#### 保存表单列
```
PATCH /dynamic/form/column
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**columnEntity**  <br>*必填*|columnEntity|[DynamicFormColumnEntity](#dynamicformcolumnentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/column
```


###### 请求 body
```
json :
{
  "alias" : "string",
  "columnName" : "string",
  "dataType" : "string",
  "describe" : "string",
  "dictConfig" : "string",
  "dictId" : "string",
  "dictParserId" : "string",
  "formId" : "string",
  "id" : "string",
  "javaType" : "string",
  "jdbcType" : "string",
  "length" : 0,
  "name" : "string",
  "precision" : 0,
  "properties" : "object",
  "scale" : 0,
  "sortIndex" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="addusingpatch"></a>
#### 保存多个表单列
```
PATCH /dynamic/form/column/batch
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**columnEntities**  <br>*必填*|columnEntities|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«string»»](#fc10708f9a97feca7dc9e38bed038c18)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/column/batch
```


###### 请求 body
```
json :
[ {
  "alias" : "string",
  "columnName" : "string",
  "dataType" : "string",
  "describe" : "string",
  "dictConfig" : "string",
  "dictId" : "string",
  "dictParserId" : "string",
  "formId" : "string",
  "id" : "string",
  "javaType" : "string",
  "jdbcType" : "string",
  "length" : 0,
  "name" : "string",
  "precision" : 0,
  "properties" : "object",
  "scale" : 0,
  "sortIndex" : 0
} ]
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ "string" ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyformidusingget"></a>
#### 获取表单的所有列
```
GET /dynamic/form/column/{formId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**formId**  <br>*必填*|formId|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormColumnEntity»»](#7db23ee003946511961f3a7df29c6d8d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/column/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "alias" : "string",
    "columnName" : "string",
    "dataType" : "string",
    "describe" : "string",
    "dictConfig" : "string",
    "dictId" : "string",
    "dictParserId" : "string",
    "formId" : "string",
    "id" : "string",
    "javaType" : "string",
    "jdbcType" : "string",
    "length" : 0,
    "name" : "string",
    "precision" : 0,
    "properties" : "object",
    "scale" : 0,
    "sortIndex" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_3"></a>
#### 根据动态条件统计
```
GET /dynamic/form/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_6"></a>
#### 根据主键查询多条记录
```
GET /dynamic/form/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormEntity»»](#26fa949c2addeecdfcd02861128889bd)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "alias" : "testForm",
    "correlations" : "string",
    "createTime" : 0,
    "creatorId" : "1",
    "dataSourceId" : "string",
    "databaseTableName" : "f_test_form",
    "deployed" : false,
    "describe" : "string",
    "id" : "string",
    "name" : "测试表单",
    "properties" : "object",
    "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
    "type" : "string",
    "updateTime" : 0,
    "version" : 1
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_3"></a>
#### 不分页动态查询
```
GET /dynamic/form/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormEntity»»](#26fa949c2addeecdfcd02861128889bd)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "alias" : "testForm",
    "correlations" : "string",
    "createTime" : 0,
    "creatorId" : "1",
    "dataSourceId" : "string",
    "databaseTableName" : "f_test_form",
    "deployed" : false,
    "describe" : "string",
    "id" : "string",
    "name" : "测试表单",
    "properties" : "object",
    "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
    "type" : "string",
    "updateTime" : 0,
    "version" : 1
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_7"></a>
#### 根据主键查询
```
GET /dynamic/form/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormEntity»](#3f6a79e1f3372ef93cbb9d8864461030)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "alias" : "testForm",
    "correlations" : "string",
    "createTime" : 0,
    "creatorId" : "1",
    "dataSourceId" : "string",
    "databaseTableName" : "f_test_form",
    "deployed" : false,
    "describe" : "string",
    "id" : "string",
    "name" : "测试表单",
    "properties" : "object",
    "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
    "type" : "string",
    "updateTime" : 0,
    "version" : 1
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_3"></a>
#### 修改数据
```
PUT /dynamic/form/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[DynamicFormEntity](#dynamicformentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string
```


###### 请求 body
```
json :
{
  "alias" : "testForm",
  "correlations" : "string",
  "createTime" : 0,
  "creatorId" : "1",
  "dataSourceId" : "string",
  "databaseTableName" : "f_test_form",
  "deployed" : false,
  "describe" : "string",
  "id" : "string",
  "name" : "测试表单",
  "properties" : "object",
  "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
  "type" : "string",
  "updateTime" : 0,
  "version" : 1
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_3"></a>
#### 删除数据
```
DELETE /dynamic/form/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deployusingput"></a>
#### 发布表单
```
PUT /dynamic/form/{id}/deploy
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string/deploy
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="geteditingusingget"></a>
#### 获取当前正在编辑的表单
```
GET /dynamic/form/{id}/editing
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string/editing
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "columns" : [ {
      "alias" : "string",
      "columnName" : "string",
      "dataType" : "string",
      "describe" : "string",
      "dictConfig" : "string",
      "dictId" : "string",
      "dictParserId" : "string",
      "formId" : "string",
      "id" : "string",
      "javaType" : "string",
      "jdbcType" : "string",
      "length" : 0,
      "name" : "string",
      "precision" : 0,
      "properties" : "object",
      "scale" : 0,
      "sortIndex" : 0
    } ],
    "form" : {
      "alias" : "testForm",
      "correlations" : "string",
      "createTime" : 0,
      "creatorId" : "1",
      "dataSourceId" : "string",
      "databaseTableName" : "f_test_form",
      "deployed" : false,
      "describe" : "string",
      "id" : "string",
      "name" : "测试表单",
      "properties" : "object",
      "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
      "type" : "string",
      "updateTime" : 0,
      "version" : 1
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="selectdeployedusingget"></a>
#### 获取最新发布的表单
```
GET /dynamic/form/{id}/latest
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string/latest
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "columns" : [ {
      "alias" : "string",
      "columnName" : "string",
      "dataType" : "string",
      "describe" : "string",
      "dictConfig" : "string",
      "dictId" : "string",
      "dictParserId" : "string",
      "formId" : "string",
      "id" : "string",
      "javaType" : "string",
      "jdbcType" : "string",
      "length" : 0,
      "name" : "string",
      "precision" : 0,
      "properties" : "object",
      "scale" : 0,
      "sortIndex" : 0
    } ],
    "form" : {
      "alias" : "testForm",
      "correlations" : "string",
      "createTime" : 0,
      "creatorId" : "1",
      "dataSourceId" : "string",
      "databaseTableName" : "f_test_form",
      "deployed" : false,
      "describe" : "string",
      "id" : "string",
      "name" : "测试表单",
      "properties" : "object",
      "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
      "type" : "string",
      "updateTime" : 0,
      "version" : 1
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="undeployusingput"></a>
#### 取消发布表单
```
PUT /dynamic/form/{id}/un-deploy
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string/un-deploy
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="selectdeployedusingget_1"></a>
#### 获取指定版本的表单
```
GET /dynamic/form/{id}/{version}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Path**|**version**  <br>*必填*|version|integer (int32)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/dynamic/form/string/0
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "columns" : [ {
      "alias" : "string",
      "columnName" : "string",
      "dataType" : "string",
      "describe" : "string",
      "dictConfig" : "string",
      "dictId" : "string",
      "dictParserId" : "string",
      "formId" : "string",
      "id" : "string",
      "javaType" : "string",
      "jdbcType" : "string",
      "length" : 0,
      "name" : "string",
      "precision" : 0,
      "properties" : "object",
      "scale" : 0,
      "sortIndex" : 0
    } ],
    "form" : {
      "alias" : "testForm",
      "correlations" : "string",
      "createTime" : 0,
      "creatorId" : "1",
      "dataSourceId" : "string",
      "databaseTableName" : "f_test_form",
      "deployed" : false,
      "describe" : "string",
      "id" : "string",
      "name" : "测试表单",
      "properties" : "object",
      "triggers" : "[{\"language\":\"groovy\",\"script\":\" return true;\"}]",
      "type" : "string",
      "updateTime" : 0,
      "version" : 1
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="d9f055d9ba20d4f8e559c4140bb9367e"></a>
### 定时调度管理
Schedule Job Controller


<a name="addusingpost_14"></a>
#### 新增
```
POST /schedule/job
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[ScheduleJobEntity](#schedulejobentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "parameters" : "string",
  "properties" : "object",
  "quartzConfig" : "string",
  "remark" : "string",
  "script" : "string",
  "status" : "string",
  "tags" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_16"></a>
#### 根据动态条件查询
```
GET /schedule/job
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«ScheduleJobEntity»»](#42906958f8fba064d74cc15b287b285b)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "id" : "string",
      "language" : "string",
      "name" : "string",
      "parameters" : "string",
      "properties" : "object",
      "quartzConfig" : "string",
      "remark" : "string",
      "script" : "string",
      "status" : "string",
      "tags" : "string",
      "type" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_14"></a>
#### 新增或者修改
```
PATCH /schedule/job
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[ScheduleJobEntity](#schedulejobentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "parameters" : "string",
  "properties" : "object",
  "quartzConfig" : "string",
  "remark" : "string",
  "script" : "string",
  "status" : "string",
  "tags" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_16"></a>
#### 根据动态条件统计
```
GET /schedule/job/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_32"></a>
#### 根据主键查询多条记录
```
GET /schedule/job/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScheduleJobEntity»»](#f93b73ff5f600449b044cf276a20c95d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "parameters" : "string",
    "properties" : "object",
    "quartzConfig" : "string",
    "remark" : "string",
    "script" : "string",
    "status" : "string",
    "tags" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_16"></a>
#### 不分页动态查询
```
GET /schedule/job/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScheduleJobEntity»»](#f93b73ff5f600449b044cf276a20c95d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "parameters" : "string",
    "properties" : "object",
    "quartzConfig" : "string",
    "remark" : "string",
    "script" : "string",
    "status" : "string",
    "tags" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_33"></a>
#### 根据主键查询
```
GET /schedule/job/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«ScheduleJobEntity»](#d803770b9be33fab88c050cc650ebacd)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "id" : "string",
    "language" : "string",
    "name" : "string",
    "parameters" : "string",
    "properties" : "object",
    "quartzConfig" : "string",
    "remark" : "string",
    "script" : "string",
    "status" : "string",
    "tags" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_13"></a>
#### 修改数据
```
PUT /schedule/job/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[ScheduleJobEntity](#schedulejobentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string
```


###### 请求 body
```
json :
{
  "id" : "string",
  "language" : "string",
  "name" : "string",
  "parameters" : "string",
  "properties" : "object",
  "quartzConfig" : "string",
  "remark" : "string",
  "script" : "string",
  "status" : "string",
  "tags" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_13"></a>
#### 删除数据
```
DELETE /schedule/job/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="disableusingput_3"></a>
#### 禁用任务
```
PUT /schedule/job/{id}/disable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string/disable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="enableusingput_3"></a>
#### 启用任务
```
PUT /schedule/job/{id}/enable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string/enable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executeusingpost_2"></a>
#### 执行任务
```
POST /schedule/job/{id}/execute
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**args**  <br>*必填*|args|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/schedule/job/string/execute
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="0f1375eedfcc7ee807705306a3937de6"></a>
### 开发人员工具-数据库维护
Data Base Manager Controller


<a name="executeusingpost_1"></a>
#### 执行SQL
```
POST /database/manager/execute
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**sqlLines**  <br>*可选*|SQL脚本|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `text/plain`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/execute
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "result" : "object",
    "sqlInfo" : {
      "datasourceId" : "string",
      "sql" : "string",
      "type" : "string"
    }
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executeusingpost"></a>
#### 指定数据源执行SQL
```
POST /database/manager/execute/{datasourceId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**datasourceId**  <br>*可选*|数据源ID|string|
|**Body**|**sqlLines**  <br>*可选*|SQL脚本|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `text/plain`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/execute/string
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "result" : "object",
    "sqlInfo" : {
      "datasourceId" : "string",
      "sql" : "string",
      "type" : "string"
    }
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="parseallobjectusingget_1"></a>
#### 获取数据库元数据
```
GET /database/manager/metas
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,List«ObjectMetadata»»»](#a6697cfc6af6e0903eb5ffcd96d3078b)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/metas
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "string" : [ "[objectmetadata](#objectmetadata)" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="parseallobjectusingget"></a>
#### 获取指定数据源的元数据
```
GET /database/manager/metas/{datasourceId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**datasourceId**  <br>*可选*|数据源ID|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,List«ObjectMetadata»»»](#a6697cfc6af6e0903eb5ffcd96d3078b)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/metas/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "string" : [ "[objectmetadata](#objectmetadata)" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="alltransactionusingget"></a>
#### 获取全部事务信息
```
GET /database/manager/transactional
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«TransactionInfo»»](#9e1189b7efd061306fec6127a959452d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/transactional
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "createTime" : "string",
    "id" : "string",
    "lastExecuteTime" : "string",
    "sqlHistory" : [ {
      "datasourceId" : "string",
      "sql" : "string",
      "type" : "string"
    } ]
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="executetransactionalusingpost"></a>
#### 开启事务执行SQL
```
POST /database/manager/transactional/execute/{transactionalId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**transactionalId**  <br>*可选*|事务ID|string|
|**Body**|**sqlLines**  <br>*可选*|SQL脚本|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `text/plain`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/transactional/execute/string
```


###### 请求 body
```
json :
{ }
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "result" : "object",
    "sqlInfo" : {
      "datasourceId" : "string",
      "sql" : "string",
      "type" : "string"
    }
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="newtransactionusingget"></a>
#### 新建事务
```
GET /database/manager/transactional/new
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/transactional/new
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="committransactionusingpost"></a>
#### 提交事务
```
POST /database/manager/transactional/{id}/commit
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/transactional/string/commit
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="rollbacktransactionusingpost"></a>
#### 回滚事务
```
POST /database/manager/transactional/{id}/rollback
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/database/manager/transactional/string/rollback
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="85a3461fd0c0a359ccdc3224413e55bd"></a>
### 开发人员工具-数据源
Datasource Controller


<a name="getallconfigusingget"></a>
#### 获取全部数据源信息
```
GET /datasource
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicDataSourceConfig»»](#b5a7cbe033a2131fc198f225ddd71b9d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/datasource
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "describe" : "string",
    "id" : "string",
    "name" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="f88efb1c5e76d4375a9aeeeadb01be2e"></a>
### 文件管理-文件信息管理
File Info Controller


<a name="listusingget_5"></a>
#### 根据动态条件查询
```
GET /file-info
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«FileInfoEntity»»](#514595c8dda5f56bb0f5c31d0b5c3214)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file-info
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "classified" : "string",
      "createTime" : 0,
      "creatorId" : "string",
      "id" : "string",
      "location" : "string",
      "md5" : "string",
      "name" : "string",
      "properties" : "object",
      "size" : 0,
      "status" : "string",
      "type" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_5"></a>
#### 根据动态条件统计
```
GET /file-info/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file-info/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_10"></a>
#### 根据主键查询多条记录
```
GET /file-info/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file-info/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_5"></a>
#### 不分页动态查询
```
GET /file-info/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file-info/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_11"></a>
#### 根据主键查询
```
GET /file-info/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file-info/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="d8694918e985edbb7528a294fd9be3c2"></a>
### 文件管理-文件操作
File Controller


<a name="downloadtxtusingpost"></a>
#### 构建文本文件并下载
```
POST /file/download-text/{name}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**name**  <br>*可选*|文件名|string|
|**Query**|**text**  <br>*可选*|文本内容|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|无内容|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/download-text/string
```


###### 请求 query
```
json :
{
  "text" : "string"
}
```


<a name="downloadtxtusingget"></a>
#### 构建文本文件并下载
```
GET /file/download-text/{name}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**name**  <br>*可选*|文件名|string|
|**Query**|**text**  <br>*可选*|文本内容|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/download-text/string
```


###### 请求 query
```
json :
{
  "text" : "string"
}
```


<a name="downloadzipusingpost"></a>
#### 构建zip文件并下载
```
POST /file/download-zip/{name}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**name**  <br>*可选*|zip文件名|string|
|**Query**|**data**  <br>*可选*|zip文件内容|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|无内容|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/download-zip/string
```


###### 请求 query
```
json :
{
  "data" : "string"
}
```


<a name="downloadusingget"></a>
#### 下载文件
```
GET /file/download/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*可选*|文件的id或者md5|string|
|**Query**|**name**  <br>*可选*|文件名,如果未指定,默认为上传时的文件名|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/download/string
```


###### 请求 query
```
json :
{
  "name" : "string"
}
```


<a name="restdownloadusingget"></a>
#### 指定文件名下载文件
```
GET /file/download/{id}/{name}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*可选*|文件的id或者md5|string|
|**Path**|**name**  <br>*可选*|文件名|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/download/string/string
```


<a name="uploadstaticusingget"></a>
#### 根据MD5获取文件信息
```
GET /file/md5/{md5}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**md5**  <br>*必填*|md5|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/md5/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="uploadusingpost_1"></a>
#### upload
```
POST /file/upload
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**FormData**|**file**  <br>*必填*|file|file|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `multipart/form-data`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/upload
```


###### 请求 formData
```
json :
"file"
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="uploadusingpost"></a>
#### 上传多个文件
```
POST /file/upload-multi
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**FormData**|**files**  <br>*必填*|files|< file > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/upload-multi
```


###### 请求 formData
```
json :
"file"
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "classified" : "string",
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "location" : "string",
    "md5" : "string",
    "name" : "string",
    "properties" : "object",
    "size" : 0,
    "status" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="uploadstaticusingpost"></a>
#### 上传静态文件
```
POST /file/upload-static
```


##### 说明
上传后响应结果的result字段为文件的访问地址


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**FormData**|**file**  <br>*必填*|file|file|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `multipart/form-data`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/file/upload-static
```


###### 请求 formData
```
json :
"file"
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="99d019505bdec5f0453ce84c0a79dd13"></a>
### 权限-权限管理
Permission Controller


<a name="addusingpost_8"></a>
#### 新增
```
POST /permission
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PermissionEntity](#permissionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission
```


###### 请求 body
```
json :
{
  "actions" : [ {
    "action" : "string",
    "defaultCheck" : true,
    "describe" : "string"
  } ],
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "optionalFields" : [ {
    "describe" : "string",
    "name" : "string"
  } ],
  "parents" : [ {
    "actions" : [ "string" ],
    "permission" : "string"
  } ],
  "properties" : "object",
  "status" : "string",
  "supportDataAccessTypes" : [ "string" ],
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_10"></a>
#### 根据动态条件查询
```
GET /permission
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PermissionEntity»»](#f0740da5a603024d54cffe67ebcfe2f3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "actions" : [ {
        "action" : "string",
        "defaultCheck" : true,
        "describe" : "string"
      } ],
      "describe" : "string",
      "id" : "string",
      "name" : "string",
      "optionalFields" : [ {
        "describe" : "string",
        "name" : "string"
      } ],
      "parents" : [ {
        "actions" : [ "string" ],
        "permission" : "string"
      } ],
      "properties" : "object",
      "status" : "string",
      "supportDataAccessTypes" : [ "string" ],
      "type" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_8"></a>
#### 新增或者修改
```
PATCH /permission
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PermissionEntity](#permissionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission
```


###### 请求 body
```
json :
{
  "actions" : [ {
    "action" : "string",
    "defaultCheck" : true,
    "describe" : "string"
  } ],
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "optionalFields" : [ {
    "describe" : "string",
    "name" : "string"
  } ],
  "parents" : [ {
    "actions" : [ "string" ],
    "permission" : "string"
  } ],
  "properties" : "object",
  "status" : "string",
  "supportDataAccessTypes" : [ "string" ],
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_10"></a>
#### 根据动态条件统计
```
GET /permission/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_20"></a>
#### 根据主键查询多条记录
```
GET /permission/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PermissionEntity»»](#f416115c1aec36913d87bd83aa6b2323)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "actions" : [ {
      "action" : "string",
      "defaultCheck" : true,
      "describe" : "string"
    } ],
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "optionalFields" : [ {
      "describe" : "string",
      "name" : "string"
    } ],
    "parents" : [ {
      "actions" : [ "string" ],
      "permission" : "string"
    } ],
    "properties" : "object",
    "status" : "string",
    "supportDataAccessTypes" : [ "string" ],
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_10"></a>
#### 不分页动态查询
```
GET /permission/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PermissionEntity»»](#f416115c1aec36913d87bd83aa6b2323)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "actions" : [ {
      "action" : "string",
      "defaultCheck" : true,
      "describe" : "string"
    } ],
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "optionalFields" : [ {
      "describe" : "string",
      "name" : "string"
    } ],
    "parents" : [ {
      "actions" : [ "string" ],
      "permission" : "string"
    } ],
    "properties" : "object",
    "status" : "string",
    "supportDataAccessTypes" : [ "string" ],
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_21"></a>
#### 根据主键查询
```
GET /permission/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PermissionEntity»](#50819844bfd86a245c543cc0190b4828)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "actions" : [ {
      "action" : "string",
      "defaultCheck" : true,
      "describe" : "string"
    } ],
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "optionalFields" : [ {
      "describe" : "string",
      "name" : "string"
    } ],
    "parents" : [ {
      "actions" : [ "string" ],
      "permission" : "string"
    } ],
    "properties" : "object",
    "status" : "string",
    "supportDataAccessTypes" : [ "string" ],
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_7"></a>
#### 修改数据
```
PUT /permission/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[PermissionEntity](#permissionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/string
```


###### 请求 body
```
json :
{
  "actions" : [ {
    "action" : "string",
    "defaultCheck" : true,
    "describe" : "string"
  } ],
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "optionalFields" : [ {
    "describe" : "string",
    "name" : "string"
  } ],
  "parents" : [ {
    "actions" : [ "string" ],
    "permission" : "string"
  } ],
  "properties" : "object",
  "status" : "string",
  "supportDataAccessTypes" : [ "string" ],
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_7"></a>
#### 删除数据
```
DELETE /permission/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/permission/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="7710bd3a3edcf4b588e074f9df35af74"></a>
### 权限-权限设置
Authorization Setting Controller


<a name="addusingpost"></a>
#### 新增
```
POST /autz-setting
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "details" : [ {
    "actions" : [ "string" ],
    "dataAccesses" : [ {
      "action" : "string",
      "config" : "string",
      "describe" : "string",
      "type" : "string"
    } ],
    "id" : "string",
    "merge" : true,
    "permissionId" : "string",
    "priority" : 0,
    "properties" : "object",
    "settingId" : "string",
    "status" : "string"
  } ],
  "id" : "string",
  "menus" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "config" : "string",
    "id" : "string",
    "level" : 0,
    "menuId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "settingId" : "string",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "properties" : "object",
  "settingFor" : "string",
  "status" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget"></a>
#### 根据动态条件查询
```
GET /autz-setting
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«AuthorizationSettingEntity»»](#ab7d3745d6ceba77fc00d0bdf50dbd14)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "describe" : "string",
      "details" : [ {
        "actions" : [ "string" ],
        "dataAccesses" : [ {
          "action" : "string",
          "config" : "string",
          "describe" : "string",
          "type" : "string"
        } ],
        "id" : "string",
        "merge" : true,
        "permissionId" : "string",
        "priority" : 0,
        "properties" : "object",
        "settingId" : "string",
        "status" : "string"
      } ],
      "id" : "string",
      "menus" : [ {
        "children" : [ {
          "children" : [ "..." ],
          "config" : "string",
          "id" : "string",
          "level" : 0,
          "menuId" : "string",
          "parentId" : "string",
          "path" : "string",
          "properties" : "object",
          "settingId" : "string",
          "sortIndex" : 0,
          "status" : "string"
        } ],
        "config" : "string",
        "id" : "string",
        "level" : 0,
        "menuId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "settingId" : "string",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "properties" : "object",
      "settingFor" : "string",
      "status" : "string",
      "type" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch"></a>
#### 新增或者修改
```
PATCH /autz-setting
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "details" : [ {
    "actions" : [ "string" ],
    "dataAccesses" : [ {
      "action" : "string",
      "config" : "string",
      "describe" : "string",
      "type" : "string"
    } ],
    "id" : "string",
    "merge" : true,
    "permissionId" : "string",
    "priority" : 0,
    "properties" : "object",
    "settingId" : "string",
    "status" : "string"
  } ],
  "id" : "string",
  "menus" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "config" : "string",
    "id" : "string",
    "level" : 0,
    "menuId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "settingId" : "string",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "properties" : "object",
  "settingFor" : "string",
  "status" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget"></a>
#### 根据动态条件统计
```
GET /autz-setting/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget"></a>
#### 根据主键查询多条记录
```
GET /autz-setting/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«AuthorizationSettingEntity»»](#212938092e05225001462abfc2af0b7f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "describe" : "string",
    "details" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "config" : "string",
        "describe" : "string",
        "type" : "string"
      } ],
      "id" : "string",
      "merge" : true,
      "permissionId" : "string",
      "priority" : 0,
      "properties" : "object",
      "settingId" : "string",
      "status" : "string"
    } ],
    "id" : "string",
    "menus" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "config" : "string",
        "id" : "string",
        "level" : 0,
        "menuId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "settingId" : "string",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "properties" : "object",
    "settingFor" : "string",
    "status" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget"></a>
#### 不分页动态查询
```
GET /autz-setting/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«AuthorizationSettingEntity»»](#212938092e05225001462abfc2af0b7f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "describe" : "string",
    "details" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "config" : "string",
        "describe" : "string",
        "type" : "string"
      } ],
      "id" : "string",
      "merge" : true,
      "permissionId" : "string",
      "priority" : 0,
      "properties" : "object",
      "settingId" : "string",
      "status" : "string"
    } ],
    "id" : "string",
    "menus" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "config" : "string",
        "id" : "string",
        "level" : 0,
        "menuId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "settingId" : "string",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "properties" : "object",
    "settingFor" : "string",
    "status" : "string",
    "type" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_1"></a>
#### 根据主键查询
```
GET /autz-setting/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«AuthorizationSettingEntity»](#c2f4413fddae73a407b1566ae2880d25)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "describe" : "string",
    "details" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "config" : "string",
        "describe" : "string",
        "type" : "string"
      } ],
      "id" : "string",
      "merge" : true,
      "permissionId" : "string",
      "priority" : 0,
      "properties" : "object",
      "settingId" : "string",
      "status" : "string"
    } ],
    "id" : "string",
    "menus" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "config" : "string",
        "id" : "string",
        "level" : 0,
        "menuId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "settingId" : "string",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "properties" : "object",
    "settingFor" : "string",
    "status" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput"></a>
#### 修改数据
```
PUT /autz-setting/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/string
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "details" : [ {
    "actions" : [ "string" ],
    "dataAccesses" : [ {
      "action" : "string",
      "config" : "string",
      "describe" : "string",
      "type" : "string"
    } ],
    "id" : "string",
    "merge" : true,
    "permissionId" : "string",
    "priority" : 0,
    "properties" : "object",
    "settingId" : "string",
    "status" : "string"
  } ],
  "id" : "string",
  "menus" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "config" : "string",
    "id" : "string",
    "level" : 0,
    "menuId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "settingId" : "string",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "properties" : "object",
  "settingFor" : "string",
  "status" : "string",
  "type" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete"></a>
#### 删除数据
```
DELETE /autz-setting/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="selectusingget"></a>
#### 根据type和settingFor获取配置
```
GET /autz-setting/{type}/{settingFor}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**settingFor**  <br>*必填*|settingFor|string|
|**Path**|**type**  <br>*必填*|type|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«AuthorizationSettingEntity»](#c2f4413fddae73a407b1566ae2880d25)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/autz-setting/string/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "describe" : "string",
    "details" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "config" : "string",
        "describe" : "string",
        "type" : "string"
      } ],
      "id" : "string",
      "merge" : true,
      "permissionId" : "string",
      "priority" : 0,
      "properties" : "object",
      "settingId" : "string",
      "status" : "string"
    } ],
    "id" : "string",
    "menus" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "config" : "string",
        "id" : "string",
        "level" : 0,
        "menuId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "settingId" : "string",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "config" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "settingId" : "string",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "properties" : "object",
    "settingFor" : "string",
    "status" : "string",
    "type" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="62b7b546918b2c3df3d9b35a4b697ff2"></a>
### 权限-用户令牌管理
User Token Info Controller


<a name="checkexpiredtokenusingput"></a>
#### 检查所有已过期的token并移除
```
PUT /user-token/check
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/check
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="resettokenusingget"></a>
#### 重置当前用户的令牌
```
GET /user-token/reset
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/reset
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="alltokeninfousingget"></a>
#### 获取所有令牌
```
GET /user-token/token/all
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserToken»»](#3a9a2f2c4c0680c5729862f4845492b2)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/token/all
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "effective" : true,
    "expired" : true,
    "lastRequestTime" : 0,
    "maxInactiveInterval" : 0,
    "offline" : true,
    "requestTimes" : 0,
    "signInTime" : 0,
    "state" : "string",
    "token" : "string",
    "type" : "string",
    "userId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="alllogintokenusingget"></a>
#### 获取已授权令牌的总数
```
GET /user-token/token/total
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«long»](#f505e3d79e9444eeb3266210d702f335)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/token/total
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="changetokenstateusingput"></a>
#### 修改令牌状态
```
PUT /user-token/token/{token}/{state}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**state**  <br>*可选*|要修改的状态|enum (effective, deny, expired, offline)|
|**Path**|**token**  <br>*可选*|令牌|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/token/string/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="allusertokenusingget"></a>
#### 获取已授权用户的总数
```
GET /user-token/user/total
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«long»](#f505e3d79e9444eeb3266210d702f335)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/user/total
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="changeuserstateusingput"></a>
#### 修改用户状态
```
PUT /user-token/user/{userId}/{state}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**state**  <br>*可选*|要修改的状态|enum (effective, deny, expired, offline)|
|**Path**|**userId**  <br>*可选*|用户ID|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-token/user/string/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="4a8f6946d12957abbcdde9d31e2b28da"></a>
### 权限-用户授权
Authorization Controller


<a name="exitusingget"></a>
#### 退出当前登录
```
GET /authorize/exit
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/authorize/exit
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="authorizeusingpost"></a>
#### 用户名密码登录
```
POST /authorize/login
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**password**  <br>*可选*|密码|string|
|**Query**|**username**  <br>*可选*|用户名|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,object»»](#62b0ac1e9c72a1c12b2ba3dca9050555)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/authorize/login
```


###### 请求 query
```
json :
{
  "password" : "string",
  "username" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="exitusingget_1"></a>
#### 退出当前登录
```
GET /authorize/login-out
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/authorize/login-out
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="meusingget"></a>
#### 当前登录用户权限信息
```
GET /authorize/me
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/authorize/me
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "attributes" : {
      "string" : "[serializable](#serializable)"
    },
    "permissions" : [ {
      "actions" : [ "string" ],
      "dataAccesses" : [ {
        "action" : "string",
        "type" : "string"
      } ],
      "id" : "string"
    } ],
    "roles" : [ {
      "id" : "string",
      "name" : "string"
    } ],
    "user" : {
      "id" : "string",
      "name" : "string",
      "type" : "string",
      "username" : "string"
    }
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="exitusingget_2"></a>
#### 退出当前登录
```
GET /authorize/sign-out
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/authorize/sign-out
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="801758d74f8ce869d9e105d990eb15d7"></a>
### 权限-用户管理
User Controller


<a name="addusingpost_16"></a>
#### 新增
```
POST /user
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[BindRoleUserEntity](#bindroleuserentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user
```


###### 请求 body
```
json :
{
  "createTime" : 0,
  "creatorId" : "string",
  "id" : "string",
  "name" : "string",
  "password" : "string",
  "properties" : "object",
  "roles" : [ "string" ],
  "salt" : "string",
  "status" : "string",
  "username" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_18"></a>
#### 根据动态条件查询
```
GET /user
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«UserEntity»»](#022104f1b83fb14da490f0bad176c23f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "createTime" : 0,
      "creatorId" : "string",
      "id" : "string",
      "name" : "string",
      "password" : "string",
      "properties" : "object",
      "salt" : "string",
      "status" : "string",
      "username" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_18"></a>
#### 根据动态条件统计
```
GET /user/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_36"></a>
#### 根据主键查询多条记录
```
GET /user/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserEntity»»](#7009b808a7062b09cd5057c748edf5ce)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "name" : "string",
    "password" : "string",
    "properties" : "object",
    "salt" : "string",
    "status" : "string",
    "username" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_18"></a>
#### 不分页动态查询
```
GET /user/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserEntity»»](#7009b808a7062b09cd5057c748edf5ce)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "name" : "string",
    "password" : "string",
    "properties" : "object",
    "salt" : "string",
    "status" : "string",
    "username" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updateloginuserpasswordusingput"></a>
#### 修改当前登录用户的密码
```
PUT /user/password
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**oldPassword**  <br>*必填*|oldPassword|string|
|**Query**|**password**  <br>*必填*|password|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/password
```


###### 请求 query
```
json :
{
  "oldPassword" : "string",
  "password" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebypasswordprimarykeyusingput"></a>
#### 修改指定用户的密码
```
PUT /user/password/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Query**|**oldPassword**  <br>*必填*|oldPassword|string|
|**Query**|**password**  <br>*必填*|password|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/password/string
```


###### 请求 query
```
json :
{
  "oldPassword" : "string",
  "password" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_37"></a>
#### 根据主键查询
```
GET /user/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«UserEntity»](#26c05b8f050f76cd6252ff48bb3d92d3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : 0,
    "creatorId" : "string",
    "id" : "string",
    "name" : "string",
    "password" : "string",
    "properties" : "object",
    "salt" : "string",
    "status" : "string",
    "username" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_15"></a>
#### 根据ID修改用户信息
```
PUT /user/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**userModel**  <br>*必填*|userModel|[BindRoleUserEntity](#bindroleuserentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/string
```


###### 请求 body
```
json :
{
  "createTime" : 0,
  "creatorId" : "string",
  "id" : "string",
  "name" : "string",
  "password" : "string",
  "properties" : "object",
  "roles" : [ "string" ],
  "salt" : "string",
  "status" : "string",
  "username" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="disableusingput_4"></a>
#### 禁用用户
```
PUT /user/{id}/disable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/string/disable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="enableusingput_4"></a>
#### 启用用户
```
PUT /user/{id}/enable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user/string/enable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="f49f855bcf8e453de7a92fd90d6355f3"></a>
### 权限-菜单管理
Menu Controller


<a name="addusingpost_5"></a>
#### 新增
```
POST /menu
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[MenuEntity](#menuentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  } ],
  "describe" : "string",
  "icon" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "permissionId" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string",
  "url" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_6"></a>
#### 根据动态条件查询
```
GET /menu
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«MenuEntity»»](#988c76f931d9e2f2511502e7d7e19ce1)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "describe" : "string",
        "icon" : "string",
        "id" : "string",
        "level" : 0,
        "name" : "string",
        "parentId" : "string",
        "path" : "string",
        "permissionId" : "string",
        "properties" : "object",
        "sortIndex" : 0,
        "status" : "string",
        "url" : "string"
      } ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string",
      "url" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_4"></a>
#### 新增或者修改
```
PATCH /menu
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[MenuEntity](#menuentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  } ],
  "describe" : "string",
  "icon" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "permissionId" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string",
  "url" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_6"></a>
#### 根据动态条件统计
```
GET /menu/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_12"></a>
#### 根据主键查询多条记录
```
GET /menu/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«MenuEntity»»](#ebcb301625271fb0be42fdd8ac1f9cd7)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string",
      "url" : "string"
    } ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_6"></a>
#### 不分页动态查询
```
GET /menu/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«MenuEntity»»](#ebcb301625271fb0be42fdd8ac1f9cd7)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string",
      "url" : "string"
    } ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getusermenuaslistusingget"></a>
#### 获取当前用户的菜单列表
```
GET /menu/user-own/list
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserMenuEntity»»](#1eddb0f64b7f488855f93d644b623abe)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/user-own/list
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "url" : "string"
    } ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "menuId" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "url" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getusermenuastreeusingget"></a>
#### 获取当前用户的菜单树
```
GET /menu/user-own/tree
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserMenuEntity»»](#1eddb0f64b7f488855f93d644b623abe)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/user-own/tree
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "menuId" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "url" : "string"
    } ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "menuId" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "url" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_13"></a>
#### 根据主键查询
```
GET /menu/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«MenuEntity»](#70aebc08733114eb863389fdebbff05d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "describe" : "string",
      "icon" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "permissionId" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string",
      "url" : "string"
    } ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_4"></a>
#### 修改数据
```
PUT /menu/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[MenuEntity](#menuentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/string
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "describe" : "string",
    "icon" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "permissionId" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string",
    "url" : "string"
  } ],
  "describe" : "string",
  "icon" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "permissionId" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string",
  "url" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_4"></a>
#### 删除数据
```
DELETE /menu/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/menu/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="e02058ecfcf00fb41780953cc88777e5"></a>
### 权限-角色管理
Role Controller


<a name="addusingpost_13"></a>
#### 新增
```
POST /role
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RoleEntity](#roleentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_15"></a>
#### 根据动态条件查询
```
GET /role
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RoleEntity»»](#04b8a0105cc98da475754a7a0d118cac)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "describe" : "string",
      "id" : "string",
      "name" : "string",
      "properties" : "object",
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_13"></a>
#### 新增或者修改
```
PATCH /role
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RoleEntity](#roleentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_15"></a>
#### 根据动态条件统计
```
GET /role/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="disableusingput_2"></a>
#### 禁用角色
```
PUT /role/disable/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/disable/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="enableusingput_2"></a>
#### 启用角色
```
PUT /role/enable/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/enable/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "object",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_30"></a>
#### 根据主键查询多条记录
```
GET /role/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RoleEntity»»](#6470682b8c8826c2502a362cccfb40a3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_15"></a>
#### 不分页动态查询
```
GET /role/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RoleEntity»»](#6470682b8c8826c2502a362cccfb40a3)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_31"></a>
#### 根据主键查询
```
GET /role/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«RoleEntity»](#9de855e0a731771e1c13e47e25e30380)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "describe" : "string",
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_12"></a>
#### 修改数据
```
PUT /role/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[RoleEntity](#roleentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/string
```


###### 请求 body
```
json :
{
  "describe" : "string",
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_12"></a>
#### 删除数据
```
DELETE /role/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/role/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="732b8812ddc8fb9206515dde66d00542"></a>
### 用户-用户配置管理
User Setting Controller


<a name="getusingget_1"></a>
#### 获取当前用户的配置列表
```
GET /user-setting/me/{key}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**key**  <br>*必填*|key|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserSettingEntity»»](#8e2573283f33b25a5c607100d6cc3f8a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-setting/me/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "createTime" : "string",
    "describe" : "string",
    "id" : "string",
    "key" : "string",
    "name" : "string",
    "properties" : "object",
    "setting" : "string",
    "settingId" : "string",
    "updateTime" : "string",
    "userId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveusingpatch"></a>
#### 获取当前用户的配置列表
```
PATCH /user-setting/me/{key}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**key**  <br>*必填*|key|string|
|**Body**|**userSettingEntity**  <br>*必填*|userSettingEntity|[UserSettingEntity](#usersettingentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-setting/me/string
```


###### 请求 body
```
json :
{
  "createTime" : "string",
  "describe" : "string",
  "id" : "string",
  "key" : "string",
  "name" : "string",
  "properties" : "object",
  "setting" : "string",
  "settingId" : "string",
  "updateTime" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getusingget"></a>
#### 获取当前用户的配置
```
GET /user-setting/me/{key}/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Path**|**key**  <br>*必填*|key|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«UserSettingEntity»](#bb605f14ea851832f5ce7d794caaceca)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/user-setting/me/string/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "createTime" : "string",
    "describe" : "string",
    "id" : "string",
    "key" : "string",
    "name" : "string",
    "properties" : "object",
    "setting" : "string",
    "settingId" : "string",
    "updateTime" : "string",
    "userId" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="5a859acebd294265ae1441e4781bc213"></a>
### 第三方应用-ueditor
Ueditor Controller


<a name="runusingpost"></a>
#### 初始化配置
```
POST /ueditor
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|string|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/ueditor
```


##### HTTP响应示例

###### 响应 200
```
json :
"string"
```


<a name="runusingget"></a>
#### 初始化配置
```
GET /ueditor
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|string|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/ueditor
```


##### HTTP响应示例

###### 响应 200
```
json :
"string"
```


<a name="39283febcb5761d8b989df5bc32ea44e"></a>
### 组织架构-人员管理
Person Controller


<a name="addusingpost_9"></a>
#### 新增
```
POST /person
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PersonEntity](#personentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "phone" : "string",
  "photo" : "string",
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_11"></a>
#### 根据动态条件查询
```
GET /person
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PersonEntity»»](#35dd428b2aeda09b4672b75af069d2c1)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "email" : "string",
      "id" : "string",
      "name" : "string",
      "phone" : "string",
      "photo" : "string",
      "properties" : "object",
      "remark" : "string",
      "sex" : "string",
      "status" : "string",
      "userId" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_9"></a>
#### 新增或者修改
```
PATCH /person
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PersonEntity](#personentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "phone" : "string",
  "photo" : "string",
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_11"></a>
#### 根据动态条件统计
```
GET /person/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getdetailusingpost"></a>
#### 新增人员信息,并关联用户信息
```
POST /person/detail
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*必填*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/detail
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "personUser" : {
    "password" : "string",
    "username" : "string"
  },
  "phone" : "string",
  "photo" : "string",
  "positionIds" : [ "string" ],
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_22"></a>
#### 根据主键查询多条记录
```
GET /person/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "phone" : "string",
    "photo" : "string",
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbypositionidusingget"></a>
#### 获取指定岗位的人员
```
GET /person/in-position/{positionId}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**positionId**  <br>*必填*|positionId|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/in-position/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "phone" : "string",
    "photo" : "string",
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getloginuserpersonusingget"></a>
#### 查看当前登录用户的人员信息
```
GET /person/me
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonAuthBindEntity»](#10249428a4d55b979ef50cf7ac890aeb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/me
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "personUser" : {
      "password" : "string",
      "username" : "string"
    },
    "phone" : "string",
    "photo" : "string",
    "positionIds" : [ "string" ],
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatemepersoninfousingput"></a>
#### 修改个人信息
```
PUT /person/me
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*必填*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/me
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "personUser" : {
    "password" : "string",
    "username" : "string"
  },
  "phone" : "string",
  "photo" : "string",
  "positionIds" : [ "string" ],
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getloginuserpersondetailusingget"></a>
#### 查看当前登录用户的人员权限信息
```
GET /person/me/authorization
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonnelAuthorization»](#4c898cb865a7ac8d70a5f816c252d944)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/me/authorization
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "allDepartmentId" : [ "string" ],
    "allDistrictId" : [ "string" ],
    "allOrgId" : [ "string" ],
    "allPositionId" : [ "string" ],
    "departmentIds" : [ {
      "allValue" : [ "string" ],
      "children" : [ {
        "allValue" : [ "string" ],
        "children" : [ "..." ],
        "level" : 0,
        "parent" : "...",
        "value" : "string"
      } ],
      "level" : 0,
      "parent" : "...",
      "value" : "string"
    } ],
    "districtIds" : [ "..." ],
    "orgIds" : [ "..." ],
    "personnel" : {
      "email" : "string",
      "id" : "string",
      "name" : "string",
      "phone" : "string",
      "photo" : "string"
    },
    "positionIds" : [ "..." ],
    "positions" : [ {
      "code" : "string",
      "department" : {
        "code" : "string",
        "id" : "string",
        "name" : "string",
        "org" : {
          "code" : "string",
          "district" : {
            "code" : "string",
            "fullName" : "string",
            "id" : "string",
            "name" : "string"
          },
          "fullName" : "string",
          "id" : "string",
          "name" : "string"
        }
      },
      "id" : "string",
      "name" : "string"
    } ],
    "relations" : {
      "all" : [ {
        "direction" : "string",
        "name" : "string",
        "relation" : "string",
        "target" : "string",
        "targetObject" : "object",
        "type" : "string"
      } ]
    },
    "rootDepartmentId" : [ "string" ],
    "rootDistrictId" : [ "string" ],
    "rootOrgId" : [ "string" ],
    "rootPositionId" : [ "string" ]
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_11"></a>
#### 不分页动态查询
```
GET /person/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "phone" : "string",
    "photo" : "string",
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_23"></a>
#### 根据主键查询
```
GET /person/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonEntity»](#c794f72feaad58a88d3da0cc427d1d9c)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "phone" : "string",
    "photo" : "string",
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_8"></a>
#### 修改数据
```
PUT /person/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[PersonEntity](#personentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/string
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "phone" : "string",
  "photo" : "string",
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_8"></a>
#### 删除数据
```
DELETE /person/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getdetailusingget"></a>
#### 查看人员详情
```
GET /person/{id}/detail
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonAuthBindEntity»](#10249428a4d55b979ef50cf7ac890aeb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/string/detail
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "email" : "string",
    "id" : "string",
    "name" : "string",
    "personUser" : {
      "password" : "string",
      "username" : "string"
    },
    "phone" : "string",
    "photo" : "string",
    "positionIds" : [ "string" ],
    "properties" : "object",
    "remark" : "string",
    "sex" : "string",
    "status" : "string",
    "userId" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getdetailusingput"></a>
#### 修改人员信息,并关联用户信息
```
PUT /person/{id}/detail
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**bindEntity**  <br>*必填*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/person/string/detail
```


###### 请求 body
```
json :
{
  "email" : "string",
  "id" : "string",
  "name" : "string",
  "personUser" : {
    "password" : "string",
    "username" : "string"
  },
  "phone" : "string",
  "photo" : "string",
  "positionIds" : [ "string" ],
  "properties" : "object",
  "remark" : "string",
  "sex" : "string",
  "status" : "string",
  "userId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="3a7e1c4fb3a15ca0dbe26ce8fde9885a"></a>
### 组织架构-关系定义管理
Relation Define Controller


<a name="addusingpost_11"></a>
#### 新增
```
POST /relation/define
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RelationDefineEntity](#relationdefineentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define
```


###### 请求 body
```
json :
{
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string",
  "typeId" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_13"></a>
#### 根据动态条件查询
```
GET /relation/define
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RelationDefineEntity»»](#858faa3bec7747a89f047157de5fa7b5)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "id" : "string",
      "name" : "string",
      "properties" : "object",
      "status" : "string",
      "typeId" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_11"></a>
#### 新增或者修改
```
PATCH /relation/define
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RelationDefineEntity](#relationdefineentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define
```


###### 请求 body
```
json :
{
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string",
  "typeId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_13"></a>
#### 根据动态条件统计
```
GET /relation/define/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_26"></a>
#### 根据主键查询多条记录
```
GET /relation/define/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationDefineEntity»»](#ee6962a89a88ef309187bb871e9cdfd1)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string",
    "typeId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_13"></a>
#### 不分页动态查询
```
GET /relation/define/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationDefineEntity»»](#ee6962a89a88ef309187bb871e9cdfd1)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string",
    "typeId" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_27"></a>
#### 根据主键查询
```
GET /relation/define/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«RelationDefineEntity»](#07e4edac137972c7b8c957a922b992ee)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "id" : "string",
    "name" : "string",
    "properties" : "object",
    "status" : "string",
    "typeId" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_10"></a>
#### 修改数据
```
PUT /relation/define/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[RelationDefineEntity](#relationdefineentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/string
```


###### 请求 body
```
json :
{
  "id" : "string",
  "name" : "string",
  "properties" : "object",
  "status" : "string",
  "typeId" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_10"></a>
#### 删除数据
```
DELETE /relation/define/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/define/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="9a921aa215e0d7c7df3e5733b82125bc"></a>
### 组织架构-关系管理
Relation Info Controller


<a name="addusingpost_12"></a>
#### 新增
```
POST /relation/info
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RelationInfoEntity](#relationinfoentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info
```


###### 请求 body
```
json :
{
  "id" : "string",
  "properties" : "object",
  "relationFrom" : "string",
  "relationId" : "string",
  "relationTo" : "string",
  "relationTypeFrom" : "string",
  "relationTypeTo" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_14"></a>
#### 根据动态条件查询
```
GET /relation/info
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RelationInfoEntity»»](#662abf311f6756ce1515cfc1f3d6497b)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "id" : "string",
      "properties" : "object",
      "relationFrom" : "string",
      "relationId" : "string",
      "relationTo" : "string",
      "relationTypeFrom" : "string",
      "relationTypeTo" : "string",
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_12"></a>
#### 新增或者修改
```
PATCH /relation/info
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[RelationInfoEntity](#relationinfoentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info
```


###### 请求 body
```
json :
{
  "id" : "string",
  "properties" : "object",
  "relationFrom" : "string",
  "relationId" : "string",
  "relationTo" : "string",
  "relationTypeFrom" : "string",
  "relationTypeTo" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_14"></a>
#### 根据动态条件统计
```
GET /relation/info/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_28"></a>
#### 根据主键查询多条记录
```
GET /relation/info/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationInfoEntity»»](#dbc09948d0a6db8c21cecb87af87fa6f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "properties" : "object",
    "relationFrom" : "string",
    "relationId" : "string",
    "relationTo" : "string",
    "relationTypeFrom" : "string",
    "relationTypeTo" : "string",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_14"></a>
#### 不分页动态查询
```
GET /relation/info/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationInfoEntity»»](#dbc09948d0a6db8c21cecb87af87fa6f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "id" : "string",
    "properties" : "object",
    "relationFrom" : "string",
    "relationId" : "string",
    "relationTo" : "string",
    "relationTypeFrom" : "string",
    "relationTypeTo" : "string",
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_29"></a>
#### 根据主键查询
```
GET /relation/info/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«RelationInfoEntity»](#a8d04810db9cc799f48ca42652e0514e)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "id" : "string",
    "properties" : "object",
    "relationFrom" : "string",
    "relationId" : "string",
    "relationTo" : "string",
    "relationTypeFrom" : "string",
    "relationTypeTo" : "string",
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_11"></a>
#### 修改数据
```
PUT /relation/info/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[RelationInfoEntity](#relationinfoentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/string
```


###### 请求 body
```
json :
{
  "id" : "string",
  "properties" : "object",
  "relationFrom" : "string",
  "relationId" : "string",
  "relationTo" : "string",
  "relationTypeFrom" : "string",
  "relationTypeTo" : "string",
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_11"></a>
#### 删除数据
```
DELETE /relation/info/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/relation/info/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="2377f8482fc01f49e4467e995f432db7"></a>
### 组织架构-机构管理
Organizational Controller


<a name="addusingpost_7"></a>
#### 新增
```
POST /organizational
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[OrganizationalEntity](#organizationalentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "districtId" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "optionalRoles" : [ "string" ],
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_9"></a>
#### 根据动态条件查询
```
GET /organizational
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OrganizationalEntity»»](#1e34e66cd932a6e9a2a19ae61f935332)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "code" : "string",
        "districtId" : "string",
        "fullName" : "string",
        "id" : "string",
        "level" : 0,
        "name" : "string",
        "optionalRoles" : [ "string" ],
        "orgId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "code" : "string",
      "districtId" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "optionalRoles" : [ "string" ],
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_7"></a>
#### 新增或者修改
```
PATCH /organizational
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[OrganizationalEntity](#organizationalentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "districtId" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "optionalRoles" : [ "string" ],
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebatchusingpatch_1"></a>
#### 批量修改数据
```
PATCH /organizational/batch
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**batch**  <br>*必填*|batch|< [OrganizationalEntity](#organizationalentity) > array|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/batch
```


###### 请求 body
```
json :
[ {
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "districtId" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "optionalRoles" : [ "string" ],
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
} ]
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_9"></a>
#### 根据动态条件统计
```
GET /organizational/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_18"></a>
#### 根据主键查询多条记录
```
GET /organizational/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OrganizationalEntity»»](#3dd66bd50330e0634288732801c6eae6)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "districtId" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "optionalRoles" : [ "string" ],
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_9"></a>
#### 不分页动态查询
```
GET /organizational/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OrganizationalEntity»»](#3dd66bd50330e0634288732801c6eae6)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "districtId" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "optionalRoles" : [ "string" ],
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_19"></a>
#### 根据主键查询
```
GET /organizational/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«OrganizationalEntity»](#05d6cc19f6ee049e0ac5098efd85ec2d)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "districtId" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "optionalRoles" : [ "string" ],
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_6"></a>
#### 修改数据
```
PUT /organizational/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[OrganizationalEntity](#organizationalentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/string
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "districtId" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "optionalRoles" : [ "string" ],
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "districtId" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "optionalRoles" : [ "string" ],
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_6"></a>
#### 删除数据
```
DELETE /organizational/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="disableusingput_1"></a>
#### 禁用机构
```
PUT /organizational/{id}/disable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/string/disable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="enableusingput_1"></a>
#### 启用机构
```
PUT /organizational/{id}/enable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/organizational/string/enable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="09a3305feeec20b5c8b1624a70051f7d"></a>
### 组织架构-职位管理
Position Controller


<a name="addusingpost_10"></a>
#### 新增
```
POST /position
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PositionEntity](#positionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  } ],
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "positionId" : "string",
  "properties" : "object",
  "remark" : "string",
  "roles" : [ "string" ],
  "sortIndex" : 0
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_12"></a>
#### 根据动态条件查询
```
GET /position
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PositionEntity»»](#0b9846aedba34500c09ff8c883f89c41)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "departmentId" : "string",
        "id" : "string",
        "level" : 0,
        "name" : "string",
        "parentId" : "string",
        "path" : "string",
        "positionId" : "string",
        "properties" : "object",
        "remark" : "string",
        "roles" : [ "string" ],
        "sortIndex" : 0
      } ],
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "positionId" : "string",
      "properties" : "object",
      "remark" : "string",
      "roles" : [ "string" ],
      "sortIndex" : 0
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_10"></a>
#### 新增或者修改
```
PATCH /position
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[PositionEntity](#positionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  } ],
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "positionId" : "string",
  "properties" : "object",
  "remark" : "string",
  "roles" : [ "string" ],
  "sortIndex" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_12"></a>
#### 根据动态条件统计
```
GET /position/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_24"></a>
#### 根据主键查询多条记录
```
GET /position/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PositionEntity»»](#4a3d2505235b212b6d947baba2efb5e6)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "positionId" : "string",
      "properties" : "object",
      "remark" : "string",
      "roles" : [ "string" ],
      "sortIndex" : 0
    } ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_12"></a>
#### 不分页动态查询
```
GET /position/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PositionEntity»»](#4a3d2505235b212b6d947baba2efb5e6)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "positionId" : "string",
      "properties" : "object",
      "remark" : "string",
      "roles" : [ "string" ],
      "sortIndex" : 0
    } ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_25"></a>
#### 根据主键查询
```
GET /position/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PositionEntity»](#81d3f00a16ad771d3c6fbdd99e002afb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "positionId" : "string",
      "properties" : "object",
      "remark" : "string",
      "roles" : [ "string" ],
      "sortIndex" : 0
    } ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_9"></a>
#### 修改数据
```
PUT /position/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[PositionEntity](#positionentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/string
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "positionId" : "string",
    "properties" : "object",
    "remark" : "string",
    "roles" : [ "string" ],
    "sortIndex" : 0
  } ],
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "positionId" : "string",
  "properties" : "object",
  "remark" : "string",
  "roles" : [ "string" ],
  "sortIndex" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_9"></a>
#### 删除数据
```
DELETE /position/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/position/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="906d6b728212af8477e2d418ee830da4"></a>
### 组织架构-行政区划管理
District Controller


<a name="addusingpost_2"></a>
#### 新增
```
POST /district
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DistrictEntity](#districtentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "describe" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "levelCode" : "string",
  "levelName" : "string",
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_2"></a>
#### 根据动态条件查询
```
GET /district
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DistrictEntity»»](#abaea98c9cec2051a3588b919068948f)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "code" : "string",
        "describe" : "string",
        "fullName" : "string",
        "id" : "string",
        "level" : 0,
        "levelCode" : "string",
        "levelName" : "string",
        "name" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_2"></a>
#### 新增或者修改
```
PATCH /district
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DistrictEntity](#districtentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "describe" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "levelCode" : "string",
  "levelName" : "string",
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="allusingget"></a>
#### 获取全部行政区划
```
GET /district/all
```


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/all
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebatchusingpatch"></a>
#### 批量修改数据
```
PATCH /district/batch
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**batch**  <br>*必填*|batch|< [DistrictEntity](#districtentity) > array|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/batch
```


###### 请求 body
```
json :
[ {
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "describe" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "levelCode" : "string",
  "levelName" : "string",
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
} ]
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbycodeusingget"></a>
#### 根据行政区划代码获取
```
GET /district/code/{code}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**code**  <br>*必填*|code|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DistrictEntity»](#e9e4c971e48ff61d32412141df044f36)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/code/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_2"></a>
#### 根据动态条件统计
```
GET /district/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_4"></a>
#### 根据主键查询多条记录
```
GET /district/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_2"></a>
#### 不分页动态查询
```
GET /district/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_5"></a>
#### 根据主键查询
```
GET /district/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DistrictEntity»](#e9e4c971e48ff61d32412141df044f36)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "describe" : "string",
      "fullName" : "string",
      "id" : "string",
      "level" : 0,
      "levelCode" : "string",
      "levelName" : "string",
      "name" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_2"></a>
#### 修改数据
```
PUT /district/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[DistrictEntity](#districtentity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/string
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "describe" : "string",
    "fullName" : "string",
    "id" : "string",
    "level" : 0,
    "levelCode" : "string",
    "levelName" : "string",
    "name" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "describe" : "string",
  "fullName" : "string",
  "id" : "string",
  "level" : 0,
  "levelCode" : "string",
  "levelName" : "string",
  "name" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_2"></a>
#### 删除数据
```
DELETE /district/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="disableusingput"></a>
#### 禁用机构
```
PUT /district/{id}/disable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/string/disable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="enableusingput"></a>
#### 启用机构
```
PUT /district/{id}/enable
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/district/string/enable
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : false,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="5c1c179c04aaa1617188d78a6a5c1e7b"></a>
### 组织架构-部门管理
Department Controller


<a name="addusingpost_1"></a>
#### 新增
```
POST /department
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DepartmentEntity](#departmententity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 201
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listusingget_1"></a>
#### 根据动态条件查询
```
GET /department
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DepartmentEntity»»](#2d642eb6e8bf8069ea7d8748f89a1953)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "data" : [ {
      "children" : [ {
        "children" : [ "..." ],
        "code" : "string",
        "departmentId" : "string",
        "id" : "string",
        "level" : 0,
        "name" : "string",
        "orgId" : "string",
        "parentId" : "string",
        "path" : "string",
        "properties" : "object",
        "sortIndex" : 0,
        "status" : "string"
      } ],
      "code" : "string",
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "total" : 0
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="saveorupdateusingpatch_1"></a>
#### 新增或者修改
```
PATCH /department
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**data**  <br>*必填*|data|[DepartmentEntity](#departmententity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```


<a name="countusingget_1"></a>
#### 根据动态条件统计
```
GET /department/count
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/count
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_2"></a>
#### 根据主键查询多条记录
```
GET /department/ids
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**ids**  <br>*必填*|ids|< string > array(multi)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DepartmentEntity»»](#27bd3061635415c4ea0c73c653f47acf)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/ids
```


###### 请求 query
```
json :
{
  "ids" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="listnopagingusingget_1"></a>
#### 不分页动态查询
```
GET /department/no-paging
```


##### 参数

|类型|名称|类型|
|---|---|---|
|**Query**|**excludes**  <br>*可选*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*可选*|boolean|
|**Query**|**includes**  <br>*可选*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*可选*|integer (int32)|
|**Query**|**pageSize**  <br>*可选*|integer (int32)|
|**Query**|**paging**  <br>*可选*|boolean|
|**Query**|**sorts[0].name**  <br>*可选*|string|
|**Query**|**sorts[0].order**  <br>*可选*|string|
|**Query**|**sorts[0].type**  <br>*可选*|string|
|**Query**|**terms[0].column**  <br>*可选*|string|
|**Query**|**terms[0].termType**  <br>*可选*|string|
|**Query**|**terms[0].type**  <br>*可选*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*可选*|object|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DepartmentEntity»»](#27bd3061635415c4ea0c73c653f47acf)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/no-paging
```


###### 请求 query
```
json :
{
  "excludes" : "string",
  "forUpdate" : true,
  "includes" : "string",
  "pageIndex" : 0,
  "pageSize" : 0,
  "paging" : true,
  "sorts[0].name" : "string",
  "sorts[0].order" : "string",
  "sorts[0].type" : "string",
  "terms[0].column" : "string",
  "terms[0].termType" : "string",
  "terms[0].type" : "string",
  "terms[0].value" : "object"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : [ {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "status" : 0,
  "timestamp" : 0
}
```


<a name="getbyprimarykeyusingget_3"></a>
#### 根据主键查询
```
GET /department/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«DepartmentEntity»](#494d2e8ada457977fe25c668a34a06f7)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : {
    "children" : [ {
      "children" : [ "..." ],
      "code" : "string",
      "departmentId" : "string",
      "id" : "string",
      "level" : 0,
      "name" : "string",
      "orgId" : "string",
      "parentId" : "string",
      "path" : "string",
      "properties" : "object",
      "sortIndex" : 0,
      "status" : "string"
    } ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  },
  "status" : 0,
  "timestamp" : 0
}
```


<a name="updatebyprimarykeyusingput_1"></a>
#### 修改数据
```
PUT /department/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|
|**Body**|**data**  <br>*必填*|data|[DepartmentEntity](#departmententity)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/string
```


###### 请求 body
```
json :
{
  "children" : [ {
    "children" : [ "..." ],
    "code" : "string",
    "departmentId" : "string",
    "id" : "string",
    "level" : 0,
    "name" : "string",
    "orgId" : "string",
    "parentId" : "string",
    "path" : "string",
    "properties" : "object",
    "sortIndex" : 0,
    "status" : "string"
  } ],
  "code" : "string",
  "departmentId" : "string",
  "id" : "string",
  "level" : 0,
  "name" : "string",
  "orgId" : "string",
  "parentId" : "string",
  "path" : "string",
  "properties" : "object",
  "sortIndex" : 0,
  "status" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : 0,
  "status" : 0,
  "timestamp" : 0
}
```


<a name="deletebyprimarykeyusingdelete_1"></a>
#### 删除数据
```
DELETE /department/{id}
```


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**id**  <br>*必填*|id|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/department/string
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "message" : "string",
  "result" : "string",
  "status" : 0,
  "timestamp" : 0
}
```




<a name="definitions"></a>
## 定义

<a name="accesstokenmodel"></a>
### AccessTokenModel

|名称|说明|类型|
|---|---|---|
|**access_token**  <br>*可选*|**样例** : `"string"`|string|
|**expires_in**  <br>*可选*|**样例** : `0`|integer (int32)|
|**refresh_token**  <br>*可选*|**样例** : `"string"`|string|
|**scope**  <br>*可选*|**样例** : `"string"`|string|
|**token_type**  <br>*可选*|**样例** : `"string"`|string|


<a name="actionentity"></a>
### ActionEntity

|名称|说明|类型|
|---|---|---|
|**action**  <br>*可选*|**样例** : `"string"`|string|
|**defaultCheck**  <br>*可选*|**样例** : `true`|boolean|
|**describe**  <br>*可选*|**样例** : `"string"`|string|


<a name="applicationcontext"></a>
### ApplicationContext

|名称|说明|类型|
|---|---|---|
|**applicationName**  <br>*可选*|**样例** : `"string"`|string|
|**autowireCapableBeanFactory**  <br>*可选*|**样例** : `"[autowirecapablebeanfactory](#autowirecapablebeanfactory)"`|[AutowireCapableBeanFactory](#autowirecapablebeanfactory)|
|**beanDefinitionCount**  <br>*可选*|**样例** : `0`|integer (int32)|
|**beanDefinitionNames**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**classLoader**  <br>*可选*|**样例** : `"[classloader](#classloader)"`|[ClassLoader](#classloader)|
|**displayName**  <br>*可选*|**样例** : `"string"`|string|
|**environment**  <br>*可选*|**样例** : `"[environment](#environment)"`|[Environment](#environment)|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**parent**  <br>*可选*|**样例** : `"[applicationcontext](#applicationcontext)"`|[ApplicationContext](#applicationcontext)|
|**parentBeanFactory**  <br>*可选*|**样例** : `"[beanfactory](#beanfactory)"`|[BeanFactory](#beanfactory)|
|**startupDate**  <br>*可选*|**样例** : `0`|integer (int64)|


<a name="authentication"></a>
### Authentication

|名称|说明|类型|
|---|---|---|
|**attributes**  <br>*可选*|**样例** : `{<br>  "string" : "[serializable](#serializable)"<br>}`|< string, [Serializable](#serializable) > map|
|**permissions**  <br>*可选*|**样例** : `[ "[permission](#permission)" ]`|< [Permission](#permission) > array|
|**roles**  <br>*可选*|**样例** : `[ "[role](#role)" ]`|< [Role](#role) > array|
|**user**  <br>*可选*|**样例** : `"[user](#user)"`|[User](#user)|


<a name="authorizationcodemodel"></a>
### AuthorizationCodeModel

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**redirectUri**  <br>*可选*|**样例** : `"string"`|string|
|**state**  <br>*可选*|**样例** : `"string"`|string|


<a name="authorizationsettingdetailentity"></a>
### AuthorizationSettingDetailEntity

|名称|说明|类型|
|---|---|---|
|**actions**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**dataAccesses**  <br>*可选*|**样例** : `[ "[dataaccessentity](#dataaccessentity)" ]`|< [DataAccessEntity](#dataaccessentity) > array|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**merge**  <br>*可选*|**样例** : `true`|boolean|
|**permissionId**  <br>*必填*|**样例** : `"string"`|string|
|**priority**  <br>*可选*|**样例** : `0`|integer (int64)|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**settingId**  <br>*必填*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="authorizationsettingentity"></a>
### AuthorizationSettingEntity

|名称|说明|类型|
|---|---|---|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**details**  <br>*可选*|**样例** : `[ "[authorizationsettingdetailentity](#authorizationsettingdetailentity)" ]`|< [AuthorizationSettingDetailEntity](#authorizationsettingdetailentity) > array|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**menus**  <br>*可选*|**样例** : `[ "[authorizationsettingmenuentity](#authorizationsettingmenuentity)" ]`|< [AuthorizationSettingMenuEntity](#authorizationsettingmenuentity) > array|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**settingFor**  <br>*必填*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**type**  <br>*必填*|**样例** : `"string"`|string|


<a name="authorizationsettingmenuentity"></a>
### AuthorizationSettingMenuEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[authorizationsettingmenuentity](#authorizationsettingmenuentity)" ]`|< [AuthorizationSettingMenuEntity](#authorizationsettingmenuentity) > array|
|**config**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**menuId**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**settingId**  <br>*可选*|**样例** : `"string"`|string|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="autowirecapablebeanfactory"></a>
### AutowireCapableBeanFactory
*类型* : object


<a name="beanfactory"></a>
### BeanFactory
*类型* : object


<a name="bindroleuserentity"></a>
### BindRoleUserEntity

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**creatorId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**password**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**roles**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**salt**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**username**  <br>*可选*|**样例** : `"string"`|string|


<a name="classloader"></a>
### ClassLoader

|名称|说明|类型|
|---|---|---|
|**parent**  <br>*可选*|**样例** : `"[classloader](#classloader)"`|[ClassLoader](#classloader)|


<a name="dataaccessconfig"></a>
### DataAccessConfig

|名称|说明|类型|
|---|---|---|
|**action**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="dataaccessentity"></a>
### DataAccessEntity

|名称|说明|类型|
|---|---|---|
|**action**  <br>*可选*|**样例** : `"string"`|string|
|**config**  <br>*可选*|**样例** : `"string"`|string|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="department"></a>
### Department

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**org**  <br>*可选*|**样例** : `"[organization](#organization)"`|[Organization](#organization)|


<a name="departmententity"></a>
### DepartmentEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[departmententity](#departmententity)" ]`|< [DepartmentEntity](#departmententity) > array|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**departmentId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**orgId**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="district"></a>
### District

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**fullName**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="districtentity"></a>
### DistrictEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[districtentity](#districtentity)" ]`|< [DistrictEntity](#districtentity) > array|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**fullName**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**levelCode**  <br>*可选*|**样例** : `"string"`|string|
|**levelName**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="dynamicdatasourceconfig"></a>
### DynamicDataSourceConfig

|名称|说明|类型|
|---|---|---|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="dynamicformcolumnbindentity"></a>
### DynamicFormColumnBindEntity

|名称|说明|类型|
|---|---|---|
|**columns**  <br>*可选*|**样例** : `[ "[dynamicformcolumnentity](#dynamicformcolumnentity)" ]`|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|
|**form**  <br>*可选*|**样例** : `"[dynamicformentity](#dynamicformentity)"`|[DynamicFormEntity](#dynamicformentity)|


<a name="dynamicformcolumnentity"></a>
### DynamicFormColumnEntity

|名称|说明|类型|
|---|---|---|
|**alias**  <br>*可选*|**样例** : `"string"`|string|
|**columnName**  <br>*必填*|**样例** : `"string"`|string|
|**dataType**  <br>*可选*|**样例** : `"string"`|string|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**dictConfig**  <br>*可选*|**样例** : `"string"`|string|
|**dictId**  <br>*可选*|**样例** : `"string"`|string|
|**dictParserId**  <br>*可选*|**样例** : `"string"`|string|
|**formId**  <br>*必填*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**javaType**  <br>*必填*|**样例** : `"string"`|string|
|**jdbcType**  <br>*必填*|**样例** : `"string"`|string|
|**length**  <br>*可选*|**样例** : `0`|integer (int32)|
|**name**  <br>*必填*|**样例** : `"string"`|string|
|**precision**  <br>*可选*|**样例** : `0`|integer (int32)|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**scale**  <br>*可选*|**样例** : `0`|integer (int32)|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|


<a name="dynamicformdeploylogentity"></a>
### DynamicFormDeployLogEntity

|名称|说明|类型|
|---|---|---|
|**deployTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**formId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**metaData**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**version**  <br>*可选*|**样例** : `0`|integer (int64)|


<a name="dynamicformentity"></a>
### DynamicFormEntity

|名称|说明|类型|
|---|---|---|
|**alias**  <br>*可选*|表别名.  <br>**样例** : `"testForm"`|string|
|**correlations**  <br>*可选*|**样例** : `"string"`|string|
|**createTime**  <br>*可选*|创建时间,新增时自动设置.  <br>**样例** : `0`|integer (int64)|
|**creatorId**  <br>*可选*|创建人,根据当前用户自动获取.  <br>**样例** : `"1"`|string|
|**dataSourceId**  <br>*可选*|**样例** : `"string"`|string|
|**databaseTableName**  <br>*必填*|数据库表名  <br>**样例** : `"f_test_form"`|string|
|**deployed**  <br>*可选*|是否已发布,发布时自动设置.  <br>**样例** : `false`|boolean|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*必填*|表单名称  <br>**样例** : `"测试表单"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**triggers**  <br>*可选*|触发器.  <br>**样例** : `"[{\"language\":\"groovy\",\"script\":\" return true;\"}]"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|
|**updateTime**  <br>*可选*|创建时间,修改时自动设置.  <br>**样例** : `0`|integer (int64)|
|**version**  <br>*可选*|版本号,无需设置,每次保存自动自增.  <br>**样例** : `1`|integer (int64)|


<a name="environment"></a>
### Environment

|名称|说明|类型|
|---|---|---|
|**activeProfiles**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**defaultProfiles**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|


<a name="fileinfoentity"></a>
### FileInfoEntity

|名称|说明|类型|
|---|---|---|
|**classified**  <br>*可选*|**样例** : `"string"`|string|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**creatorId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**location**  <br>*可选*|**样例** : `"string"`|string|
|**md5**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**size**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="implicitaccesstokenmodel"></a>
### ImplicitAccessTokenModel

|名称|说明|类型|
|---|---|---|
|**access_token**  <br>*可选*|**样例** : `"string"`|string|
|**expires_in**  <br>*可选*|**样例** : `0`|integer (int32)|
|**redirect_uri**  <br>*可选*|**样例** : `"string"`|string|
|**state**  <br>*可选*|**样例** : `"string"`|string|
|**token_type**  <br>*可选*|**样例** : `"string"`|string|


<a name="24c8c56e43e10da9bfd8857a61126e08"></a>
### Map«string,List«ObjectMetadata»»
*类型* : < string, [List](#list) > map


<a name="menuentity"></a>
### MenuEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[menuentity](#menuentity)" ]`|< [MenuEntity](#menuentity) > array|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**icon**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**permissionId**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**url**  <br>*可选*|**样例** : `"string"`|string|


<a name="oauth2client"></a>
### OAuth2Client

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**defaultGrantScope**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**ownerId**  <br>*可选*|**样例** : `"string"`|string|
|**redirectUri**  <br>*可选*|**样例** : `"string"`|string|
|**secret**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**supportGrantTypes**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|


<a name="oauth2cliententity"></a>
### OAuth2ClientEntity

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**creatorId**  <br>*可选*|**样例** : `"string"`|string|
|**defaultGrantScope**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**ownerId**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**redirectUri**  <br>*可选*|**样例** : `"string"`|string|
|**secret**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**supportGrantTypes**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="oauth2serverconfigentity"></a>
### OAuth2ServerConfigEntity

|名称|说明|类型|
|---|---|---|
|**accessTokenUrl**  <br>*可选*|**样例** : `"string"`|string|
|**apiBaseUrl**  <br>*可选*|**样例** : `"string"`|string|
|**authUrl**  <br>*可选*|**样例** : `"string"`|string|
|**clientId**  <br>*可选*|**样例** : `"string"`|string|
|**clientSecret**  <br>*可选*|**样例** : `"string"`|string|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**provider**  <br>*可选*|**样例** : `"string"`|string|
|**redirectUri**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="oauth2usertokenentity"></a>
### OAuth2UserTokenEntity

|名称|说明|类型|
|---|---|---|
|**accessToken**  <br>*可选*|**样例** : `"string"`|string|
|**clientId**  <br>*可选*|**样例** : `"string"`|string|
|**clientUserId**  <br>*可选*|**样例** : `"string"`|string|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**expiresIn**  <br>*可选*|**样例** : `0`|integer (int32)|
|**grantType**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**refreshToken**  <br>*可选*|**样例** : `"string"`|string|
|**scope**  <br>*可选*|**样例** : `"string"`|string|
|**serverId**  <br>*可选*|**样例** : `"string"`|string|
|**serverUserId**  <br>*可选*|**样例** : `"string"`|string|
|**updateTime**  <br>*可选*|**样例** : `0`|integer (int64)|


<a name="objectmetadata"></a>
### ObjectMetadata

|名称|说明|类型|
|---|---|---|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|enum (TABLE, VIEW, SEQUENCES)|


<a name="optionalfield"></a>
### OptionalField

|名称|说明|类型|
|---|---|---|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="organization"></a>
### Organization

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**district**  <br>*可选*|**样例** : `"[district](#district)"`|[District](#district)|
|**fullName**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="organizationalentity"></a>
### OrganizationalEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[organizationalentity](#organizationalentity)" ]`|< [OrganizationalEntity](#organizationalentity) > array|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**districtId**  <br>*可选*|**样例** : `"string"`|string|
|**fullName**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**optionalRoles**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**orgId**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="f8441b82a42771685acc229c7164da92"></a>
### PagerResult«AuthorizationSettingEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[authorizationsettingentity](#authorizationsettingentity)" ]`|< [AuthorizationSettingEntity](#authorizationsettingentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="0167b0879b1a2fbf522f91fb37d3f628"></a>
### PagerResult«DepartmentEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[departmententity](#departmententity)" ]`|< [DepartmentEntity](#departmententity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="7ae352fc158747f08dd5eb90855a89f8"></a>
### PagerResult«DistrictEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[districtentity](#districtentity)" ]`|< [DistrictEntity](#districtentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="27fe728492934f59e88d33a2b3766933"></a>
### PagerResult«DynamicFormDeployLogEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[dynamicformdeploylogentity](#dynamicformdeploylogentity)" ]`|< [DynamicFormDeployLogEntity](#dynamicformdeploylogentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="e4260528def855a58a0656f691a7915f"></a>
### PagerResult«DynamicFormEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[dynamicformentity](#dynamicformentity)" ]`|< [DynamicFormEntity](#dynamicformentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="9d35a78643baac21c0fe6f107f9d2240"></a>
### PagerResult«FileInfoEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[fileinfoentity](#fileinfoentity)" ]`|< [FileInfoEntity](#fileinfoentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="7e2ce4331019959450104bfb2dffd23f"></a>
### PagerResult«MenuEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[menuentity](#menuentity)" ]`|< [MenuEntity](#menuentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="ebda22c7bc1513232ab81083e253e208"></a>
### PagerResult«OAuth2ServerConfigEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[oauth2serverconfigentity](#oauth2serverconfigentity)" ]`|< [OAuth2ServerConfigEntity](#oauth2serverconfigentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="a6a076d035327679df47051bad4a58ab"></a>
### PagerResult«OAuth2UserTokenEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[oauth2usertokenentity](#oauth2usertokenentity)" ]`|< [OAuth2UserTokenEntity](#oauth2usertokenentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="ca90e82f68dd6bae04544c264662a182"></a>
### PagerResult«OrganizationalEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[organizationalentity](#organizationalentity)" ]`|< [OrganizationalEntity](#organizationalentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="8630f4cda224d8ff5faf619fac8c9875"></a>
### PagerResult«PermissionEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[permissionentity](#permissionentity)" ]`|< [PermissionEntity](#permissionentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="8c2ab88d5455871f901a74e62b505b47"></a>
### PagerResult«PersonEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[personentity](#personentity)" ]`|< [PersonEntity](#personentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="6e02dbdccfce51084450a2d632d0fe45"></a>
### PagerResult«PositionEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[positionentity](#positionentity)" ]`|< [PositionEntity](#positionentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="bd1d9065a052eddc01b75243abd873cd"></a>
### PagerResult«RelationDefineEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[relationdefineentity](#relationdefineentity)" ]`|< [RelationDefineEntity](#relationdefineentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="720330473169ba94d7e5e1840dac11db"></a>
### PagerResult«RelationInfoEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[relationinfoentity](#relationinfoentity)" ]`|< [RelationInfoEntity](#relationinfoentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="6e67c47f04808732b2f0546672e9f4ca"></a>
### PagerResult«RoleEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[roleentity](#roleentity)" ]`|< [RoleEntity](#roleentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="3c5582dff446edfec2b56a38e400f979"></a>
### PagerResult«ScheduleJobEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[schedulejobentity](#schedulejobentity)" ]`|< [ScheduleJobEntity](#schedulejobentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="8600a8255df0072a9ebdcef867f5c524"></a>
### PagerResult«ScriptEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[scriptentity](#scriptentity)" ]`|< [ScriptEntity](#scriptentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="8c19b416cd9de9ffbed9082acff5fc80"></a>
### PagerResult«UserEntity»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "[userentity](#userentity)" ]`|< [UserEntity](#userentity) > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="87daa132c4ff15bc24c3702dd105f6c8"></a>
### PagerResult«object»
分页结果


|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|查询结果  <br>**样例** : `[ "object" ]`|< object > array|
|**total**  <br>*可选*|数据总数量  <br>**样例** : `0`|integer (int32)|


<a name="parentpermission"></a>
### ParentPermission

|名称|说明|类型|
|---|---|---|
|**actions**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**permission**  <br>*可选*|**样例** : `"string"`|string|


<a name="permission"></a>
### Permission

|名称|说明|类型|
|---|---|---|
|**actions**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**dataAccesses**  <br>*可选*|**样例** : `[ "[dataaccessconfig](#dataaccessconfig)" ]`|< [DataAccessConfig](#dataaccessconfig) > array|
|**id**  <br>*可选*|**样例** : `"string"`|string|


<a name="permissionentity"></a>
### PermissionEntity

|名称|说明|类型|
|---|---|---|
|**actions**  <br>*可选*|**样例** : `[ "[actionentity](#actionentity)" ]`|< [ActionEntity](#actionentity) > array|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**模式** : `"[a-zA-Z0-9_\\-]+"`**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**optionalFields**  <br>*可选*|**样例** : `[ "[optionalfield](#optionalfield)" ]`|< [OptionalField](#optionalfield) > array|
|**parents**  <br>*可选*|**样例** : `[ "[parentpermission](#parentpermission)" ]`|< [ParentPermission](#parentpermission) > array|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**supportDataAccessTypes**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="personauthbindentity"></a>
### PersonAuthBindEntity

|名称|说明|类型|
|---|---|---|
|**email**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**personUser**  <br>*可选*|**样例** : `"[personuserentity](#personuserentity)"`|[PersonUserEntity](#personuserentity)|
|**phone**  <br>*可选*|**样例** : `"string"`|string|
|**photo**  <br>*可选*|**样例** : `"string"`|string|
|**positionIds**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**remark**  <br>*可选*|**样例** : `"string"`|string|
|**sex**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**userId**  <br>*可选*|**样例** : `"string"`|string|


<a name="personentity"></a>
### PersonEntity

|名称|说明|类型|
|---|---|---|
|**email**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**phone**  <br>*可选*|**样例** : `"string"`|string|
|**photo**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**remark**  <br>*可选*|**样例** : `"string"`|string|
|**sex**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**userId**  <br>*可选*|**样例** : `"string"`|string|


<a name="personuserentity"></a>
### PersonUserEntity

|名称|说明|类型|
|---|---|---|
|**password**  <br>*可选*|**样例** : `"string"`|string|
|**username**  <br>*可选*|**样例** : `"string"`|string|


<a name="personnel"></a>
### Personnel

|名称|说明|类型|
|---|---|---|
|**email**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**phone**  <br>*可选*|**样例** : `"string"`|string|
|**photo**  <br>*可选*|**样例** : `"string"`|string|


<a name="personnelauthorization"></a>
### PersonnelAuthorization

|名称|说明|类型|
|---|---|---|
|**allDepartmentId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**allDistrictId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**allOrgId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**allPositionId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**departmentIds**  <br>*可选*|**样例** : `[ "[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)" ]`|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**districtIds**  <br>*可选*|**样例** : `[ "[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)" ]`|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**orgIds**  <br>*可选*|**样例** : `[ "[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)" ]`|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**personnel**  <br>*可选*|**样例** : `"[personnel](#personnel)"`|[Personnel](#personnel)|
|**positionIds**  <br>*可选*|**样例** : `[ "[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)" ]`|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**positions**  <br>*可选*|**样例** : `[ "[position](#position)" ]`|< [Position](#position) > array|
|**relations**  <br>*可选*|**样例** : `"[relations](#relations)"`|[Relations](#relations)|
|**rootDepartmentId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**rootDistrictId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**rootOrgId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**rootPositionId**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|


<a name="position"></a>
### Position

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**department**  <br>*可选*|**样例** : `"[department](#department)"`|[Department](#department)|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="positionentity"></a>
### PositionEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[positionentity](#positionentity)" ]`|< [PositionEntity](#positionentity) > array|
|**departmentId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**positionId**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**remark**  <br>*可选*|**样例** : `"string"`|string|
|**roles**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|


<a name="redirectview"></a>
### RedirectView

|名称|说明|类型|
|---|---|---|
|**applicationContext**  <br>*可选*|**样例** : `"[applicationcontext](#applicationcontext)"`|[ApplicationContext](#applicationcontext)|
|**attributesMap**  <br>*可选*|**样例** : `"object"`|object|
|**beanName**  <br>*可选*|**样例** : `"string"`|string|
|**contentType**  <br>*可选*|**样例** : `"string"`|string|
|**exposePathVariables**  <br>*可选*|**样例** : `true`|boolean|
|**hosts**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**propagateQueryProperties**  <br>*可选*|**样例** : `true`|boolean|
|**redirectView**  <br>*可选*|**样例** : `true`|boolean|
|**requestContextAttribute**  <br>*可选*|**样例** : `"string"`|string|
|**staticAttributes**  <br>*可选*|**样例** : `"object"`|object|
|**url**  <br>*可选*|**样例** : `"string"`|string|


<a name="relation"></a>
### Relation

|名称|说明|类型|
|---|---|---|
|**direction**  <br>*可选*|**样例** : `"string"`|enum (POSITIVE, REVERSE, ALL)|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**relation**  <br>*可选*|**样例** : `"string"`|string|
|**target**  <br>*可选*|**样例** : `"string"`|string|
|**targetObject**  <br>*可选*|**样例** : `"object"`|object|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="relationdefineentity"></a>
### RelationDefineEntity

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**typeId**  <br>*可选*|**样例** : `"string"`|string|


<a name="relationinfoentity"></a>
### RelationInfoEntity

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**relationFrom**  <br>*可选*|**样例** : `"string"`|string|
|**relationId**  <br>*可选*|**样例** : `"string"`|string|
|**relationTo**  <br>*可选*|**样例** : `"string"`|string|
|**relationTypeFrom**  <br>*可选*|**样例** : `"string"`|string|
|**relationTypeTo**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="relations"></a>
### Relations

|名称|说明|类型|
|---|---|---|
|**all**  <br>*可选*|**样例** : `[ "[relation](#relation)" ]`|< [Relation](#relation) > array|


<a name="responsemessage"></a>
### ResponseMessage
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"object"`|object|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="91e04724f2ad858185d5fc280d46daa4"></a>
### ResponseMessage«Authentication»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[authentication](#authentication)"`|[Authentication](#authentication)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="c2f4413fddae73a407b1566ae2880d25"></a>
### ResponseMessage«AuthorizationSettingEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[authorizationsettingentity](#authorizationsettingentity)"`|[AuthorizationSettingEntity](#authorizationsettingentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="494d2e8ada457977fe25c668a34a06f7"></a>
### ResponseMessage«DepartmentEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[departmententity](#departmententity)"`|[DepartmentEntity](#departmententity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="e9e4c971e48ff61d32412141df044f36"></a>
### ResponseMessage«DistrictEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[districtentity](#districtentity)"`|[DistrictEntity](#districtentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="e7f4b98f55b7cb1bb5814471463d959a"></a>
### ResponseMessage«DynamicFormColumnBindEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[dynamicformcolumnbindentity](#dynamicformcolumnbindentity)"`|[DynamicFormColumnBindEntity](#dynamicformcolumnbindentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="a2d83137608215d878bebe740d227f8d"></a>
### ResponseMessage«DynamicFormDeployLogEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[dynamicformdeploylogentity](#dynamicformdeploylogentity)"`|[DynamicFormDeployLogEntity](#dynamicformdeploylogentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="3f6a79e1f3372ef93cbb9d8864461030"></a>
### ResponseMessage«DynamicFormEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[dynamicformentity](#dynamicformentity)"`|[DynamicFormEntity](#dynamicformentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="dccd344201bca930cbb01c5576401ddd"></a>
### ResponseMessage«FileInfoEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[fileinfoentity](#fileinfoentity)"`|[FileInfoEntity](#fileinfoentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="212938092e05225001462abfc2af0b7f"></a>
### ResponseMessage«List«AuthorizationSettingEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[authorizationsettingentity](#authorizationsettingentity)" ]`|< [AuthorizationSettingEntity](#authorizationsettingentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="27bd3061635415c4ea0c73c653f47acf"></a>
### ResponseMessage«List«DepartmentEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[departmententity](#departmententity)" ]`|< [DepartmentEntity](#departmententity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="020e52a447243dd2c4d0bef080da4b24"></a>
### ResponseMessage«List«DistrictEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[districtentity](#districtentity)" ]`|< [DistrictEntity](#districtentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="b5a7cbe033a2131fc198f225ddd71b9d"></a>
### ResponseMessage«List«DynamicDataSourceConfig»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[dynamicdatasourceconfig](#dynamicdatasourceconfig)" ]`|< [DynamicDataSourceConfig](#dynamicdatasourceconfig) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="7db23ee003946511961f3a7df29c6d8d"></a>
### ResponseMessage«List«DynamicFormColumnEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[dynamicformcolumnentity](#dynamicformcolumnentity)" ]`|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="19f5d621630c200f26659affa8d245be"></a>
### ResponseMessage«List«DynamicFormDeployLogEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[dynamicformdeploylogentity](#dynamicformdeploylogentity)" ]`|< [DynamicFormDeployLogEntity](#dynamicformdeploylogentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="26fa949c2addeecdfcd02861128889bd"></a>
### ResponseMessage«List«DynamicFormEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[dynamicformentity](#dynamicformentity)" ]`|< [DynamicFormEntity](#dynamicformentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ec6dc31ad20662480c1d124b03ac7a8d"></a>
### ResponseMessage«List«FileInfoEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[fileinfoentity](#fileinfoentity)" ]`|< [FileInfoEntity](#fileinfoentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ebcb301625271fb0be42fdd8ac1f9cd7"></a>
### ResponseMessage«List«MenuEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[menuentity](#menuentity)" ]`|< [MenuEntity](#menuentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="04bd1f7c2172df55357d15dd7a4b020d"></a>
### ResponseMessage«List«OAuth2Client»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[oauth2client](#oauth2client)" ]`|< [OAuth2Client](#oauth2client) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="7c0de841c030a56e36a3592bab2f4b70"></a>
### ResponseMessage«List«OAuth2ServerConfigEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[oauth2serverconfigentity](#oauth2serverconfigentity)" ]`|< [OAuth2ServerConfigEntity](#oauth2serverconfigentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="19dfe8ccdff0ac64ffddf20e38f600c3"></a>
### ResponseMessage«List«OAuth2UserTokenEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[oauth2usertokenentity](#oauth2usertokenentity)" ]`|< [OAuth2UserTokenEntity](#oauth2usertokenentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="3dd66bd50330e0634288732801c6eae6"></a>
### ResponseMessage«List«OrganizationalEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[organizationalentity](#organizationalentity)" ]`|< [OrganizationalEntity](#organizationalentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="f416115c1aec36913d87bd83aa6b2323"></a>
### ResponseMessage«List«PermissionEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[permissionentity](#permissionentity)" ]`|< [PermissionEntity](#permissionentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="7d0d15c646ed164f964fb8d2f6b3000a"></a>
### ResponseMessage«List«PersonEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[personentity](#personentity)" ]`|< [PersonEntity](#personentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="4a3d2505235b212b6d947baba2efb5e6"></a>
### ResponseMessage«List«PositionEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[positionentity](#positionentity)" ]`|< [PositionEntity](#positionentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ee6962a89a88ef309187bb871e9cdfd1"></a>
### ResponseMessage«List«RelationDefineEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[relationdefineentity](#relationdefineentity)" ]`|< [RelationDefineEntity](#relationdefineentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="dbc09948d0a6db8c21cecb87af87fa6f"></a>
### ResponseMessage«List«RelationInfoEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[relationinfoentity](#relationinfoentity)" ]`|< [RelationInfoEntity](#relationinfoentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="6470682b8c8826c2502a362cccfb40a3"></a>
### ResponseMessage«List«RoleEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[roleentity](#roleentity)" ]`|< [RoleEntity](#roleentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="f93b73ff5f600449b044cf276a20c95d"></a>
### ResponseMessage«List«ScheduleJobEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[schedulejobentity](#schedulejobentity)" ]`|< [ScheduleJobEntity](#schedulejobentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="d6f39903f6ccd973fe4476e4bdd6b638"></a>
### ResponseMessage«List«ScriptEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[scriptentity](#scriptentity)" ]`|< [ScriptEntity](#scriptentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ccb3581f1a83df607e130bbc2cc8649a"></a>
### ResponseMessage«List«SqlExecuteResult»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[sqlexecuteresult](#sqlexecuteresult)" ]`|< [SqlExecuteResult](#sqlexecuteresult) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="9e1189b7efd061306fec6127a959452d"></a>
### ResponseMessage«List«TransactionInfo»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[transactioninfo](#transactioninfo)" ]`|< [TransactionInfo](#transactioninfo) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="7009b808a7062b09cd5057c748edf5ce"></a>
### ResponseMessage«List«UserEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[userentity](#userentity)" ]`|< [UserEntity](#userentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="1eddb0f64b7f488855f93d644b623abe"></a>
### ResponseMessage«List«UserMenuEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[usermenuentity](#usermenuentity)" ]`|< [UserMenuEntity](#usermenuentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="8e2573283f33b25a5c607100d6cc3f8a"></a>
### ResponseMessage«List«UserSettingEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[usersettingentity](#usersettingentity)" ]`|< [UserSettingEntity](#usersettingentity) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="3a9a2f2c4c0680c5729862f4845492b2"></a>
### ResponseMessage«List«UserToken»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "[usertoken](#usertoken)" ]`|< [UserToken](#usertoken) > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="fc10708f9a97feca7dc9e38bed038c18"></a>
### ResponseMessage«List«string»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `[ "string" ]`|< string > array|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="a6697cfc6af6e0903eb5ffcd96d3078b"></a>
### ResponseMessage«Map«string,List«ObjectMetadata»»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `{<br>  "string" : [ "[objectmetadata](#objectmetadata)" ]<br>}`|< string, < [ObjectMetadata](#objectmetadata) > array > map|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="62b0ac1e9c72a1c12b2ba3dca9050555"></a>
### ResponseMessage«Map«string,object»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"object"`|object|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="70aebc08733114eb863389fdebbff05d"></a>
### ResponseMessage«MenuEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[menuentity](#menuentity)"`|[MenuEntity](#menuentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ebb1050c759c13591fdd208d058d0332"></a>
### ResponseMessage«OAuth2Client»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[oauth2client](#oauth2client)"`|[OAuth2Client](#oauth2client)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="f49c55e99fe094081dd3c91f972f307a"></a>
### ResponseMessage«OAuth2ServerConfigEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[oauth2serverconfigentity](#oauth2serverconfigentity)"`|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="9ce3adcac2f6b56f6a853c19d034f501"></a>
### ResponseMessage«OAuth2UserTokenEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[oauth2usertokenentity](#oauth2usertokenentity)"`|[OAuth2UserTokenEntity](#oauth2usertokenentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="05d6cc19f6ee049e0ac5098efd85ec2d"></a>
### ResponseMessage«OrganizationalEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[organizationalentity](#organizationalentity)"`|[OrganizationalEntity](#organizationalentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="ab7d3745d6ceba77fc00d0bdf50dbd14"></a>
### ResponseMessage«PagerResult«AuthorizationSettingEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[f8441b82a42771685acc229c7164da92](#f8441b82a42771685acc229c7164da92)"`|[PagerResult«AuthorizationSettingEntity»](#f8441b82a42771685acc229c7164da92)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="2d642eb6e8bf8069ea7d8748f89a1953"></a>
### ResponseMessage«PagerResult«DepartmentEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[0167b0879b1a2fbf522f91fb37d3f628](#0167b0879b1a2fbf522f91fb37d3f628)"`|[PagerResult«DepartmentEntity»](#0167b0879b1a2fbf522f91fb37d3f628)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="abaea98c9cec2051a3588b919068948f"></a>
### ResponseMessage«PagerResult«DistrictEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[7ae352fc158747f08dd5eb90855a89f8](#7ae352fc158747f08dd5eb90855a89f8)"`|[PagerResult«DistrictEntity»](#7ae352fc158747f08dd5eb90855a89f8)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="af1a0c73ed9afec5c76ebf1dce361e01"></a>
### ResponseMessage«PagerResult«DynamicFormDeployLogEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[27fe728492934f59e88d33a2b3766933](#27fe728492934f59e88d33a2b3766933)"`|[PagerResult«DynamicFormDeployLogEntity»](#27fe728492934f59e88d33a2b3766933)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="79912e82f1deb6279e26d7fd6a3b5046"></a>
### ResponseMessage«PagerResult«DynamicFormEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[e4260528def855a58a0656f691a7915f](#e4260528def855a58a0656f691a7915f)"`|[PagerResult«DynamicFormEntity»](#e4260528def855a58a0656f691a7915f)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="514595c8dda5f56bb0f5c31d0b5c3214"></a>
### ResponseMessage«PagerResult«FileInfoEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[9d35a78643baac21c0fe6f107f9d2240](#9d35a78643baac21c0fe6f107f9d2240)"`|[PagerResult«FileInfoEntity»](#9d35a78643baac21c0fe6f107f9d2240)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="988c76f931d9e2f2511502e7d7e19ce1"></a>
### ResponseMessage«PagerResult«MenuEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[7e2ce4331019959450104bfb2dffd23f](#7e2ce4331019959450104bfb2dffd23f)"`|[PagerResult«MenuEntity»](#7e2ce4331019959450104bfb2dffd23f)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="9418f129377a4c78a87d34891784b4ad"></a>
### ResponseMessage«PagerResult«OAuth2ServerConfigEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[ebda22c7bc1513232ab81083e253e208](#ebda22c7bc1513232ab81083e253e208)"`|[PagerResult«OAuth2ServerConfigEntity»](#ebda22c7bc1513232ab81083e253e208)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="652849cecf290786c83f3915b818f8c1"></a>
### ResponseMessage«PagerResult«OAuth2UserTokenEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[a6a076d035327679df47051bad4a58ab](#a6a076d035327679df47051bad4a58ab)"`|[PagerResult«OAuth2UserTokenEntity»](#a6a076d035327679df47051bad4a58ab)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="1e34e66cd932a6e9a2a19ae61f935332"></a>
### ResponseMessage«PagerResult«OrganizationalEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[ca90e82f68dd6bae04544c264662a182](#ca90e82f68dd6bae04544c264662a182)"`|[PagerResult«OrganizationalEntity»](#ca90e82f68dd6bae04544c264662a182)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="f0740da5a603024d54cffe67ebcfe2f3"></a>
### ResponseMessage«PagerResult«PermissionEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[8630f4cda224d8ff5faf619fac8c9875](#8630f4cda224d8ff5faf619fac8c9875)"`|[PagerResult«PermissionEntity»](#8630f4cda224d8ff5faf619fac8c9875)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="35dd428b2aeda09b4672b75af069d2c1"></a>
### ResponseMessage«PagerResult«PersonEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[8c2ab88d5455871f901a74e62b505b47](#8c2ab88d5455871f901a74e62b505b47)"`|[PagerResult«PersonEntity»](#8c2ab88d5455871f901a74e62b505b47)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="0b9846aedba34500c09ff8c883f89c41"></a>
### ResponseMessage«PagerResult«PositionEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[6e02dbdccfce51084450a2d632d0fe45](#6e02dbdccfce51084450a2d632d0fe45)"`|[PagerResult«PositionEntity»](#6e02dbdccfce51084450a2d632d0fe45)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="858faa3bec7747a89f047157de5fa7b5"></a>
### ResponseMessage«PagerResult«RelationDefineEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[bd1d9065a052eddc01b75243abd873cd](#bd1d9065a052eddc01b75243abd873cd)"`|[PagerResult«RelationDefineEntity»](#bd1d9065a052eddc01b75243abd873cd)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="662abf311f6756ce1515cfc1f3d6497b"></a>
### ResponseMessage«PagerResult«RelationInfoEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[720330473169ba94d7e5e1840dac11db](#720330473169ba94d7e5e1840dac11db)"`|[PagerResult«RelationInfoEntity»](#720330473169ba94d7e5e1840dac11db)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="04b8a0105cc98da475754a7a0d118cac"></a>
### ResponseMessage«PagerResult«RoleEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[6e67c47f04808732b2f0546672e9f4ca](#6e67c47f04808732b2f0546672e9f4ca)"`|[PagerResult«RoleEntity»](#6e67c47f04808732b2f0546672e9f4ca)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="42906958f8fba064d74cc15b287b285b"></a>
### ResponseMessage«PagerResult«ScheduleJobEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[3c5582dff446edfec2b56a38e400f979](#3c5582dff446edfec2b56a38e400f979)"`|[PagerResult«ScheduleJobEntity»](#3c5582dff446edfec2b56a38e400f979)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="b526184b0542731e9ce046cd15c7430f"></a>
### ResponseMessage«PagerResult«ScriptEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[8600a8255df0072a9ebdcef867f5c524](#8600a8255df0072a9ebdcef867f5c524)"`|[PagerResult«ScriptEntity»](#8600a8255df0072a9ebdcef867f5c524)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="022104f1b83fb14da490f0bad176c23f"></a>
### ResponseMessage«PagerResult«UserEntity»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[8c19b416cd9de9ffbed9082acff5fc80](#8c19b416cd9de9ffbed9082acff5fc80)"`|[PagerResult«UserEntity»](#8c19b416cd9de9ffbed9082acff5fc80)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="b067bd9552e787aea006c9b1cd6fcd02"></a>
### ResponseMessage«PagerResult«object»»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[87daa132c4ff15bc24c3702dd105f6c8](#87daa132c4ff15bc24c3702dd105f6c8)"`|[PagerResult«object»](#87daa132c4ff15bc24c3702dd105f6c8)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="50819844bfd86a245c543cc0190b4828"></a>
### ResponseMessage«PermissionEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[permissionentity](#permissionentity)"`|[PermissionEntity](#permissionentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="10249428a4d55b979ef50cf7ac890aeb"></a>
### ResponseMessage«PersonAuthBindEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[personauthbindentity](#personauthbindentity)"`|[PersonAuthBindEntity](#personauthbindentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="c794f72feaad58a88d3da0cc427d1d9c"></a>
### ResponseMessage«PersonEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[personentity](#personentity)"`|[PersonEntity](#personentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="4c898cb865a7ac8d70a5f816c252d944"></a>
### ResponseMessage«PersonnelAuthorization»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[personnelauthorization](#personnelauthorization)"`|[PersonnelAuthorization](#personnelauthorization)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="81d3f00a16ad771d3c6fbdd99e002afb"></a>
### ResponseMessage«PositionEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[positionentity](#positionentity)"`|[PositionEntity](#positionentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="07e4edac137972c7b8c957a922b992ee"></a>
### ResponseMessage«RelationDefineEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[relationdefineentity](#relationdefineentity)"`|[RelationDefineEntity](#relationdefineentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="a8d04810db9cc799f48ca42652e0514e"></a>
### ResponseMessage«RelationInfoEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[relationinfoentity](#relationinfoentity)"`|[RelationInfoEntity](#relationinfoentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="9de855e0a731771e1c13e47e25e30380"></a>
### ResponseMessage«RoleEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[roleentity](#roleentity)"`|[RoleEntity](#roleentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="d803770b9be33fab88c050cc650ebacd"></a>
### ResponseMessage«ScheduleJobEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[schedulejobentity](#schedulejobentity)"`|[ScheduleJobEntity](#schedulejobentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="75b3a1a20f80841af6d3065f6ad3b2f7"></a>
### ResponseMessage«ScriptEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[scriptentity](#scriptentity)"`|[ScriptEntity](#scriptentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="26c05b8f050f76cd6252ff48bb3d92d3"></a>
### ResponseMessage«UserEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[userentity](#userentity)"`|[UserEntity](#userentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="bb605f14ea851832f5ce7d794caaceca"></a>
### ResponseMessage«UserSettingEntity»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"[usersettingentity](#usersettingentity)"`|[UserSettingEntity](#usersettingentity)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="6c061a07afa1c9738e33d1b5ec1728a9"></a>
### ResponseMessage«Void»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="bbdc11e8c14b5b13fda321a82dc3a3ac"></a>
### ResponseMessage«boolean»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `false`|boolean|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="d53a2c1e07a660f2c3f1b54e6a7c98bb"></a>
### ResponseMessage«int»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `0`|integer (int32)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="f505e3d79e9444eeb3266210d702f335"></a>
### ResponseMessage«long»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `0`|integer (int64)|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="4e3465260d0b339c0ae101c8a6821732"></a>
### ResponseMessage«object»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"object"`|object|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="7706c642a9473cc1b49b8f456cc26073"></a>
### ResponseMessage«string»
响应结果


|名称|说明|类型|
|---|---|---|
|**message**  <br>*可选*|调用结果消息  <br>**样例** : `"string"`|string|
|**result**  <br>*可选*|成功时响应数据  <br>**样例** : `"string"`|string|
|**status**  <br>*必填*|状态码  <br>**样例** : `0`|integer (int32)|
|**timestamp**  <br>*必填*|时间戳  <br>**样例** : `0`|integer (int64)|


<a name="role"></a>
### Role

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|


<a name="roleentity"></a>
### RoleEntity

|名称|说明|类型|
|---|---|---|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|


<a name="schedulejobentity"></a>
### ScheduleJobEntity

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**language**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**parameters**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**quartzConfig**  <br>*可选*|**样例** : `"string"`|string|
|**remark**  <br>*可选*|**样例** : `"string"`|string|
|**script**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**tags**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="scriptentity"></a>
### ScriptEntity

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**language**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**remark**  <br>*可选*|**样例** : `"string"`|string|
|**script**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**样例** : `0`|integer (int64)|
|**tag**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="serializable"></a>
### Serializable
*类型* : object


<a name="sqlexecuteresult"></a>
### SqlExecuteResult

|名称|说明|类型|
|---|---|---|
|**result**  <br>*可选*|**样例** : `"object"`|object|
|**sqlInfo**  <br>*可选*|**样例** : `"[sqlinfo](#sqlinfo)"`|[SqlInfo](#sqlinfo)|


<a name="sqlinfo"></a>
### SqlInfo

|名称|说明|类型|
|---|---|---|
|**datasourceId**  <br>*可选*|**样例** : `"string"`|string|
|**sql**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|


<a name="term"></a>
### Term

|名称|说明|类型|
|---|---|---|
|**column**  <br>*可选*|**样例** : `"string"`|string|
|**termType**  <br>*可选*|**样例** : `"string"`|string|
|**terms**  <br>*可选*|**样例** : `[ "[term](#term)" ]`|< [Term](#term) > array|
|**type**  <br>*可选*|**样例** : `"string"`|enum (or, and)|
|**value**  <br>*可选*|**样例** : `"object"`|object|


<a name="transactioninfo"></a>
### TransactionInfo

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `"string"`|string (date-time)|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**lastExecuteTime**  <br>*可选*|**样例** : `"string"`|string (date-time)|
|**sqlHistory**  <br>*可选*|**样例** : `[ "[sqlinfo](#sqlinfo)" ]`|< [SqlInfo](#sqlinfo) > array|


<a name="6cb863976d93d76997d3a0a3d6c32f27"></a>
### TreeNode«string»

|名称|说明|类型|
|---|---|---|
|**allValue**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**children**  <br>*可选*|**样例** : `[ "[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)" ]`|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**parent**  <br>*可选*|**样例** : `"[6cb863976d93d76997d3a0a3d6c32f27](#6cb863976d93d76997d3a0a3d6c32f27)"`|[TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27)|
|**value**  <br>*可选*|**样例** : `"string"`|string|


<a name="852541f5d496d0afc6b3900a123fca7e"></a>
### TreeSupportEntity«string»

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[852541f5d496d0afc6b3900a123fca7e](#852541f5d496d0afc6b3900a123fca7e)" ]`|< [TreeSupportEntity«string»](#852541f5d496d0afc6b3900a123fca7e) > array|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|


<a name="c85b38c7e7c2603ffdc8ca54e841860d"></a>
### UpdateParamEntity«Map«string,object»»

|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|**样例** : `"object"`|object|
|**excludes**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**includes**  <br>*可选*|**样例** : `[ "string" ]`|< string > array|
|**terms**  <br>*可选*|**样例** : `[ "[term](#term)" ]`|< [Term](#term) > array|


<a name="user"></a>
### User

|名称|说明|类型|
|---|---|---|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|
|**username**  <br>*可选*|**样例** : `"string"`|string|


<a name="userentity"></a>
### UserEntity

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**creatorId**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**password**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**salt**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**模式** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`**样例** : `"string"`|string (byte)|
|**username**  <br>*可选*|**样例** : `"string"`|string|


<a name="usermenuentity"></a>
### UserMenuEntity

|名称|说明|类型|
|---|---|---|
|**children**  <br>*可选*|**样例** : `[ "[usermenuentity](#usermenuentity)" ]`|< [UserMenuEntity](#usermenuentity) > array|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**icon**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**level**  <br>*可选*|**样例** : `0`|integer (int32)|
|**menuId**  <br>*可选*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**parentId**  <br>*可选*|**样例** : `"string"`|string|
|**path**  <br>*可选*|**样例** : `"string"`|string|
|**permissionId**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**sortIndex**  <br>*可选*|**样例** : `0`|integer (int64)|
|**url**  <br>*可选*|**样例** : `"string"`|string|


<a name="usersettingentity"></a>
### UserSettingEntity

|名称|说明|类型|
|---|---|---|
|**createTime**  <br>*可选*|**样例** : `"string"`|string (date-time)|
|**describe**  <br>*可选*|**样例** : `"string"`|string|
|**id**  <br>*可选*|**样例** : `"string"`|string|
|**key**  <br>*必填*|**样例** : `"string"`|string|
|**name**  <br>*可选*|**样例** : `"string"`|string|
|**properties**  <br>*可选*|**样例** : `"object"`|object|
|**setting**  <br>*必填*|**样例** : `"string"`|string|
|**settingId**  <br>*必填*|**样例** : `"string"`|string|
|**updateTime**  <br>*可选*|**样例** : `"string"`|string (date-time)|
|**userId**  <br>*必填*|**样例** : `"string"`|string|


<a name="usertoken"></a>
### UserToken

|名称|说明|类型|
|---|---|---|
|**effective**  <br>*可选*|**样例** : `true`|boolean|
|**expired**  <br>*可选*|**样例** : `true`|boolean|
|**lastRequestTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**maxInactiveInterval**  <br>*可选*|**样例** : `0`|integer (int64)|
|**offline**  <br>*可选*|**样例** : `true`|boolean|
|**requestTimes**  <br>*可选*|**样例** : `0`|integer (int64)|
|**signInTime**  <br>*可选*|**样例** : `0`|integer (int64)|
|**state**  <br>*可选*|**样例** : `"string"`|enum (effective, deny, expired, offline)|
|**token**  <br>*可选*|**样例** : `"string"`|string|
|**type**  <br>*可选*|**样例** : `"string"`|string|
|**userId**  <br>*可选*|**样例** : `"string"`|string|





