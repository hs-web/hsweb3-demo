
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



