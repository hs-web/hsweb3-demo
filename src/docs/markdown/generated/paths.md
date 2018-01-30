
<a name="paths"></a>
## Resources

<a name="150d7e218e26dd82ae3d0bf0f0c38499"></a>
### OAuth2.0-客户端-token
O Auth 2 User Token Controller


<a name="listusingget_8"></a>
#### 根据动态条件查询
```
GET /oauth2-user-token
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OAuth2UserTokenEntity»»](#652849cecf290786c83f3915b818f8c1)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_8"></a>
#### 根据动态条件统计
```
GET /oauth2-user-token/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_16"></a>
#### 根据主键查询多条记录
```
GET /oauth2-user-token/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2UserTokenEntity»»](#19dfe8ccdff0ac64ffddf20e38f600c3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_8"></a>
#### 不分页动态查询
```
GET /oauth2-user-token/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2UserTokenEntity»»](#19dfe8ccdff0ac64ffddf20e38f600c3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_17"></a>
#### 根据主键查询
```
GET /oauth2-user-token/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2UserTokenEntity»](#9ce3adcac2f6b56f6a853c19d034f501)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="c9ee5c36665ebaffd5239fd07f46c3e6"></a>
### OAuth2.0-客户端-服务配置
O Auth 2 Server Config Controller


<a name="addusingpost_6"></a>
#### 新增
```
POST /oauth2-server-config
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_7"></a>
#### 根据动态条件查询
```
GET /oauth2-server-config
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OAuth2ServerConfigEntity»»](#9418f129377a4c78a87d34891784b4ad)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_6"></a>
#### 新增或者修改
```
PATCH /oauth2-server-config
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_7"></a>
#### 根据动态条件统计
```
GET /oauth2-server-config/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_14"></a>
#### 根据主键查询多条记录
```
GET /oauth2-server-config/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2ServerConfigEntity»»](#7c0de841c030a56e36a3592bab2f4b70)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_7"></a>
#### 不分页动态查询
```
GET /oauth2-server-config/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2ServerConfigEntity»»](#7c0de841c030a56e36a3592bab2f4b70)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_15"></a>
#### 根据主键查询
```
GET /oauth2-server-config/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2ServerConfigEntity»](#f49c55e99fe094081dd3c91f972f307a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_5"></a>
#### 修改数据
```
PUT /oauth2-server-config/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_5"></a>
#### 删除数据
```
DELETE /oauth2-server-config/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="6eb691804efc6126d5e67aa24596506f"></a>
### OAuth2.0-客户端-请求服务
O Auth 2 Client Controller


<a name="bootusingget"></a>
#### 跳转至OAuth2.0服务授权页面
```
GET /oauth2/boot/{serverId}
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**serverId**  <br>*required*|serverId|string||
|**Query**|**redirect**  <br>*optional*|redirect|string|`"/"`|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[RedirectView](#redirectview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="requeststateusingget"></a>
#### 申请一个state
```
GET /oauth2/state
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="e0fdb855d5254b11d23711960018fa8f"></a>
### OAuth2.0-服务-客户端管理
O Auth 2 Client Config Controller


<a name="getallclientusingget"></a>
#### 获取全部客户端
```
GET /oauth2-client-config
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OAuth2Client»»](#04bd1f7c2172df55357d15dd7a4b020d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_5"></a>
#### 保存客户端
```
PATCH /oauth2-client-config
```


##### Description
如果客户端不存在则自动新增


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**clientEntity**  <br>*required*|clientEntity|[OAuth2ClientEntity](#oauth2cliententity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyowneridusingget"></a>
#### 根据绑定到用户到客户端
```
GET /oauth2-client-config/owner/{userId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**userId**  <br>*required*|userId|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyidusingget"></a>
#### 根据id获取客户端
```
GET /oauth2-client-config/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="removebyidusingdelete"></a>
#### 删除客户端
```
DELETE /oauth2-client-config/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OAuth2Client»](#ebb1050c759c13591fdd208d058d0332)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="d1450d57da69e153602bffacf5d988ee"></a>
### OAuth2.0-服务-授权
O Auth 2 Authorize Controller


<a name="authorizebyimplicitusingget"></a>
#### implicit方式申请token
```
GET /oauth2/authorize
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Query**|**client_id**  <br>*required*||string||
|**Query**|**redirect_uri**  <br>*required*|redirect_uri|string||
|**Query**|**response_type**  <br>*required*||enum (token)|`"token"`|
|**Query**|**state**  <br>*required*|state|string||


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ImplicitAccessTokenModel](#implicitaccesstokenmodel)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="5ebecb32d23ed781f0117af1b7c2c5ad"></a>
### OAuth2.0-服务-申请token
O Auth 2 Token Controller


<a name="authorizebyimplicitusingget"></a>
#### implicit方式申请token
```
GET /oauth2/authorize
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Query**|**client_id**  <br>*required*||string||
|**Query**|**redirect_uri**  <br>*required*|redirect_uri|string||
|**Query**|**response_type**  <br>*required*||enum (token)|`"token"`|
|**Query**|**state**  <br>*required*|state|string||


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ImplicitAccessTokenModel](#implicitaccesstokenmodel)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="requesttokenusingpost"></a>
#### 申请token
```
POST /oauth2/token
```


##### Description
具体请求方式请参照: http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Header**|**Authorization**  <br>*optional*||string|
|**Query**|**client_id**  <br>*required*||string|
|**Query**|**client_secret**  <br>*optional*||string|
|**Query**|**code**  <br>*optional*||string|
|**Query**|**grant_type**  <br>*optional*|grant_type|enum (authorization_code, client_credentials, password, refresh_token, implicit)|
|**Query**|**redirect_uri**  <br>*optional*||string|
|**Query**|**refresh_token**  <br>*optional*||string|
|**Query**|**scope**  <br>*optional*||string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AccessTokenModel](#accesstokenmodel)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="b3340729aa54afa64d4495eea982b1ac"></a>
### OAuth2.0-服务-获取用户信息
O Auth 2 User Info Controller


<a name="getloginuserusingget"></a>
#### 根据accessToken获取对应用户信息
```
GET /oauth2/user-auth-info
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**access_token**  <br>*required*|access_token|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getuserbyidusingget"></a>
#### 根据accessToken获取特定的用户信息
```
GET /oauth2/user-auth-info/{userId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**userId**  <br>*required*|userId|string|
|**Query**|**access_token**  <br>*required*|access_token|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="a5ccb4108d93b76acf9dbe0e1886805d"></a>
### 动态脚本管理
Script Controller


<a name="addusingpost_15"></a>
#### 新增
```
POST /script
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[ScriptEntity](#scriptentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_17"></a>
#### 根据动态条件查询
```
GET /script
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«ScriptEntity»»](#b526184b0542731e9ce046cd15c7430f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_15"></a>
#### 新增或者修改
```
PATCH /script
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[ScriptEntity](#scriptentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_17"></a>
#### 根据动态条件统计
```
GET /script/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_34"></a>
#### 根据主键查询多条记录
```
GET /script/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScriptEntity»»](#d6f39903f6ccd973fe4476e4bdd6b638)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_17"></a>
#### 不分页动态查询
```
GET /script/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScriptEntity»»](#d6f39903f6ccd973fe4476e4bdd6b638)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_35"></a>
#### 根据主键查询
```
GET /script/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«ScriptEntity»](#75b3a1a20f80841af6d3065f6ad3b2f7)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_14"></a>
#### 修改数据
```
PUT /script/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[ScriptEntity](#scriptentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_14"></a>
#### 删除数据
```
DELETE /script/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="executefotpostandputusingpost"></a>
#### 执行脚本
```
POST /script/{id}/execute
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**parameters**  <br>*optional*|parameters|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="executeforgetusingget"></a>
#### 执行脚本
```
GET /script/{id}/execute
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Query**|**parameters**  <br>*optional*|parameters|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="executefotpostandputusingput"></a>
#### 执行脚本
```
PUT /script/{id}/execute
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**parameters**  <br>*optional*|parameters|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="57667a7678c40da787d7021eb0230263"></a>
### 动态表单-发布日志
Dynamic Form Deploy Log Controller


<a name="listusingget_4"></a>
#### 根据动态条件查询
```
GET /dynamic/form-deploy-log
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DynamicFormDeployLogEntity»»](#af1a0c73ed9afec5c76ebf1dce361e01)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_4"></a>
#### 根据动态条件统计
```
GET /dynamic/form-deploy-log/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_8"></a>
#### 根据主键查询多条记录
```
GET /dynamic/form-deploy-log/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormDeployLogEntity»»](#19f5d621630c200f26659affa8d245be)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_4"></a>
#### 不分页动态查询
```
GET /dynamic/form-deploy-log/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormDeployLogEntity»»](#19f5d621630c200f26659affa8d245be)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_9"></a>
#### 根据主键查询
```
GET /dynamic/form-deploy-log/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormDeployLogEntity»](#a2d83137608215d878bebe740d227f8d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="a8f6f99caa07c8584569d49e661e9efb"></a>
### 动态表单-数据操作
Dynamic Form Operation Controller


<a name="addusingpost_4"></a>
#### 新增
```
POST /dynamic/form/operation/{formId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**formId**  <br>*required*|formId|string|
|**Body**|**data**  <br>*required*|data|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,object»»](#62b0ac1e9c72a1c12b2ba3dca9050555)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="selectpagerusingget"></a>
#### 动态查询
```
GET /dynamic/form/operation/{formId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**formId**  <br>*required*|formId|string|
|**Query**|**excludes**  <br>*optional*||< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*||boolean|
|**Query**|**includes**  <br>*optional*||< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*||integer (int32)|
|**Query**|**pageSize**  <br>*optional*||integer (int32)|
|**Query**|**paging**  <br>*optional*||boolean|
|**Query**|**sorts[0].name**  <br>*optional*||string|
|**Query**|**sorts[0].order**  <br>*optional*||string|
|**Query**|**sorts[0].type**  <br>*optional*||string|
|**Query**|**terms[0].column**  <br>*optional*||string|
|**Query**|**terms[0].termType**  <br>*optional*||string|
|**Query**|**terms[0].type**  <br>*optional*||enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*||object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«object»»](#b067bd9552e787aea006c9b1cd6fcd02)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updateusingput"></a>
#### 动态修改
```
PUT /dynamic/form/operation/{formId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**formId**  <br>*required*|formId|string|
|**Body**|**paramEntity**  <br>*required*|paramEntity|[UpdateParamEntity«Map«string,object»»](#c85b38c7e7c2603ffdc8ca54e841860d)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deleteusingdelete_1"></a>
#### 动态删除
```
DELETE /dynamic/form/operation/{formId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**formId**  <br>*required*|formId|string|
|**Query**|**excludes**  <br>*optional*||< string > array(multi)|
|**Query**|**includes**  <br>*optional*||< string > array(multi)|
|**Query**|**terms[0].column**  <br>*optional*||string|
|**Query**|**terms[0].termType**  <br>*optional*||string|
|**Query**|**terms[0].type**  <br>*optional*||enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*||object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="259f10c12785f43477afbdfbc9bf50b7"></a>
### 动态表单-表单管理
Dynamic Form Column Controller


<a name="addusingpost_3"></a>
#### 新增
```
POST /dynamic/form
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DynamicFormEntity](#dynamicformentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_3"></a>
#### 根据动态条件查询
```
GET /dynamic/form
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DynamicFormEntity»»](#79912e82f1deb6279e26d7fd6a3b5046)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_3"></a>
#### 新增或者修改
```
PATCH /dynamic/form
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DynamicFormEntity](#dynamicformentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateformandcolumnusingpatch"></a>
#### 同时保存表单和字段
```
PATCH /dynamic/form/bind
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*required*|bindEntity|[DynamicFormColumnBindEntity](#dynamicformcolumnbindentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deleteusingdelete"></a>
#### 删除列
```
DELETE /dynamic/form/column
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*optional*|要删除的列id,多个列以,分割|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormColumnEntity»»](#7db23ee003946511961f3a7df29c6d8d)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="addusingpatch_1"></a>
#### 保存表单列
```
PATCH /dynamic/form/column
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**columnEntity**  <br>*required*|columnEntity|[DynamicFormColumnEntity](#dynamicformcolumnentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="addusingpatch"></a>
#### 保存多个表单列
```
PATCH /dynamic/form/column/batch
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**columnEntities**  <br>*required*|columnEntities|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«string»»](#fc10708f9a97feca7dc9e38bed038c18)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyformidusingget"></a>
#### 获取表单的所有列
```
GET /dynamic/form/column/{formId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**formId**  <br>*required*|formId|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormColumnEntity»»](#7db23ee003946511961f3a7df29c6d8d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_3"></a>
#### 根据动态条件统计
```
GET /dynamic/form/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_6"></a>
#### 根据主键查询多条记录
```
GET /dynamic/form/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormEntity»»](#26fa949c2addeecdfcd02861128889bd)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_3"></a>
#### 不分页动态查询
```
GET /dynamic/form/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicFormEntity»»](#26fa949c2addeecdfcd02861128889bd)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_7"></a>
#### 根据主键查询
```
GET /dynamic/form/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormEntity»](#3f6a79e1f3372ef93cbb9d8864461030)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_3"></a>
#### 修改数据
```
PUT /dynamic/form/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[DynamicFormEntity](#dynamicformentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_3"></a>
#### 删除数据
```
DELETE /dynamic/form/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deployusingput"></a>
#### 发布表单
```
PUT /dynamic/form/{id}/deploy
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="geteditingusingget"></a>
#### 获取当前正在编辑的表单
```
GET /dynamic/form/{id}/editing
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="selectdeployedusingget"></a>
#### 获取最新发布的表单
```
GET /dynamic/form/{id}/latest
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="undeployusingput"></a>
#### 取消发布表单
```
PUT /dynamic/form/{id}/un-deploy
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="selectdeployedusingget_1"></a>
#### 获取指定版本的表单
```
GET /dynamic/form/{id}/{version}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Path**|**version**  <br>*required*|version|integer (int32)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DynamicFormColumnBindEntity»](#e7f4b98f55b7cb1bb5814471463d959a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="d9f055d9ba20d4f8e559c4140bb9367e"></a>
### 定时调度管理
Schedule Job Controller


<a name="addusingpost_14"></a>
#### 新增
```
POST /schedule/job
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[ScheduleJobEntity](#schedulejobentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_16"></a>
#### 根据动态条件查询
```
GET /schedule/job
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«ScheduleJobEntity»»](#42906958f8fba064d74cc15b287b285b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_14"></a>
#### 新增或者修改
```
PATCH /schedule/job
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[ScheduleJobEntity](#schedulejobentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_16"></a>
#### 根据动态条件统计
```
GET /schedule/job/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_32"></a>
#### 根据主键查询多条记录
```
GET /schedule/job/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScheduleJobEntity»»](#f93b73ff5f600449b044cf276a20c95d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_16"></a>
#### 不分页动态查询
```
GET /schedule/job/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«ScheduleJobEntity»»](#f93b73ff5f600449b044cf276a20c95d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_33"></a>
#### 根据主键查询
```
GET /schedule/job/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«ScheduleJobEntity»](#d803770b9be33fab88c050cc650ebacd)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_13"></a>
#### 修改数据
```
PUT /schedule/job/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[ScheduleJobEntity](#schedulejobentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_13"></a>
#### 删除数据
```
DELETE /schedule/job/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="disableusingput_3"></a>
#### 禁用任务
```
PUT /schedule/job/{id}/disable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="enableusingput_3"></a>
#### 启用任务
```
PUT /schedule/job/{id}/enable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="executeusingpost_2"></a>
#### 执行任务
```
POST /schedule/job/{id}/execute
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**args**  <br>*required*|args|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«object»](#4e3465260d0b339c0ae101c8a6821732)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="0f1375eedfcc7ee807705306a3937de6"></a>
### 开发人员工具-数据库维护
Data Base Manager Controller


<a name="executeusingpost_1"></a>
#### 执行SQL
```
POST /database/manager/execute
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**sqlLines**  <br>*optional*|SQL脚本|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `text/plain`


##### Produces

* `*/*`


<a name="executeusingpost"></a>
#### 指定数据源执行SQL
```
POST /database/manager/execute/{datasourceId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**datasourceId**  <br>*optional*|数据源ID|string|
|**Body**|**sqlLines**  <br>*optional*|SQL脚本|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `text/plain`


##### Produces

* `*/*`


<a name="parseallobjectusingget_1"></a>
#### 获取数据库元数据
```
GET /database/manager/metas
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,List«ObjectMetadata»»»](#a6697cfc6af6e0903eb5ffcd96d3078b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="parseallobjectusingget"></a>
#### 获取指定数据源的元数据
```
GET /database/manager/metas/{datasourceId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**datasourceId**  <br>*optional*|数据源ID|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,List«ObjectMetadata»»»](#a6697cfc6af6e0903eb5ffcd96d3078b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="alltransactionusingget"></a>
#### 获取全部事务信息
```
GET /database/manager/transactional
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«TransactionInfo»»](#9e1189b7efd061306fec6127a959452d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="executetransactionalusingpost"></a>
#### 开启事务执行SQL
```
POST /database/manager/transactional/execute/{transactionalId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**transactionalId**  <br>*optional*|事务ID|string|
|**Body**|**sqlLines**  <br>*optional*|SQL脚本|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«SqlExecuteResult»»](#ccb3581f1a83df607e130bbc2cc8649a)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `text/plain`


##### Produces

* `*/*`


<a name="newtransactionusingget"></a>
#### 新建事务
```
GET /database/manager/transactional/new
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="committransactionusingpost"></a>
#### 提交事务
```
POST /database/manager/transactional/{id}/commit
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="rollbacktransactionusingpost"></a>
#### 回滚事务
```
POST /database/manager/transactional/{id}/rollback
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="85a3461fd0c0a359ccdc3224413e55bd"></a>
### 开发人员工具-数据源
Datasource Controller


<a name="getallconfigusingget"></a>
#### 获取全部数据源信息
```
GET /datasource
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DynamicDataSourceConfig»»](#b5a7cbe033a2131fc198f225ddd71b9d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="f88efb1c5e76d4375a9aeeeadb01be2e"></a>
### 文件管理-文件信息管理
File Info Controller


<a name="listusingget_5"></a>
#### 根据动态条件查询
```
GET /file-info
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«FileInfoEntity»»](#514595c8dda5f56bb0f5c31d0b5c3214)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_5"></a>
#### 根据动态条件统计
```
GET /file-info/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_10"></a>
#### 根据主键查询多条记录
```
GET /file-info/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_5"></a>
#### 不分页动态查询
```
GET /file-info/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_11"></a>
#### 根据主键查询
```
GET /file-info/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="d8694918e985edbb7528a294fd9be3c2"></a>
### 文件管理-文件操作
File Controller


<a name="downloadtxtusingpost"></a>
#### 构建文本文件并下载
```
POST /file/download-text/{name}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**name**  <br>*optional*|文件名|string|
|**Query**|**text**  <br>*optional*|文本内容|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="downloadtxtusingget"></a>
#### 构建文本文件并下载
```
GET /file/download-text/{name}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**name**  <br>*optional*|文件名|string|
|**Query**|**text**  <br>*optional*|文本内容|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="downloadzipusingpost"></a>
#### 构建zip文件并下载
```
POST /file/download-zip/{name}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**name**  <br>*optional*|zip文件名|string|
|**Query**|**data**  <br>*optional*|zip文件内容|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="downloadusingget"></a>
#### 下载文件
```
GET /file/download/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*optional*|文件的id或者md5|string|
|**Query**|**name**  <br>*optional*|文件名,如果未指定,默认为上传时的文件名|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="restdownloadusingget"></a>
#### 指定文件名下载文件
```
GET /file/download/{id}/{name}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*optional*|文件的id或者md5|string|
|**Path**|**name**  <br>*optional*|文件名|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="uploadstaticusingget"></a>
#### 根据MD5获取文件信息
```
GET /file/md5/{md5}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**md5**  <br>*required*|md5|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="uploadusingpost_1"></a>
#### upload
```
POST /file/upload
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**FormData**|**file**  <br>*required*|file|file|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«FileInfoEntity»](#dccd344201bca930cbb01c5576401ddd)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `multipart/form-data`


##### Produces

* `*/*`


<a name="uploadusingpost"></a>
#### 上传多个文件
```
POST /file/upload-multi
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**FormData**|**files**  <br>*required*|files|< file > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«FileInfoEntity»»](#ec6dc31ad20662480c1d124b03ac7a8d)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="uploadstaticusingpost"></a>
#### 上传静态文件
```
POST /file/upload-static
```


##### Description
上传后响应结果的result字段为文件的访问地址


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**FormData**|**file**  <br>*required*|file|file|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `multipart/form-data`


##### Produces

* `*/*`


<a name="99d019505bdec5f0453ce84c0a79dd13"></a>
### 权限-权限管理
Permission Controller


<a name="addusingpost_8"></a>
#### 新增
```
POST /permission
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PermissionEntity](#permissionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_10"></a>
#### 根据动态条件查询
```
GET /permission
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PermissionEntity»»](#f0740da5a603024d54cffe67ebcfe2f3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_8"></a>
#### 新增或者修改
```
PATCH /permission
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PermissionEntity](#permissionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_10"></a>
#### 根据动态条件统计
```
GET /permission/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_20"></a>
#### 根据主键查询多条记录
```
GET /permission/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PermissionEntity»»](#f416115c1aec36913d87bd83aa6b2323)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_10"></a>
#### 不分页动态查询
```
GET /permission/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PermissionEntity»»](#f416115c1aec36913d87bd83aa6b2323)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_21"></a>
#### 根据主键查询
```
GET /permission/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PermissionEntity»](#50819844bfd86a245c543cc0190b4828)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_7"></a>
#### 修改数据
```
PUT /permission/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[PermissionEntity](#permissionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_7"></a>
#### 删除数据
```
DELETE /permission/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="7710bd3a3edcf4b588e074f9df35af74"></a>
### 权限-权限设置
Authorization Setting Controller


<a name="addusingpost"></a>
#### 新增
```
POST /autz-setting
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget"></a>
#### 根据动态条件查询
```
GET /autz-setting
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«AuthorizationSettingEntity»»](#ab7d3745d6ceba77fc00d0bdf50dbd14)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch"></a>
#### 新增或者修改
```
PATCH /autz-setting
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget"></a>
#### 根据动态条件统计
```
GET /autz-setting/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget"></a>
#### 根据主键查询多条记录
```
GET /autz-setting/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«AuthorizationSettingEntity»»](#212938092e05225001462abfc2af0b7f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget"></a>
#### 不分页动态查询
```
GET /autz-setting/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«AuthorizationSettingEntity»»](#212938092e05225001462abfc2af0b7f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_1"></a>
#### 根据主键查询
```
GET /autz-setting/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«AuthorizationSettingEntity»](#c2f4413fddae73a407b1566ae2880d25)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput"></a>
#### 修改数据
```
PUT /autz-setting/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[AuthorizationSettingEntity](#authorizationsettingentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete"></a>
#### 删除数据
```
DELETE /autz-setting/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="selectusingget"></a>
#### 根据type和settingFor获取配置
```
GET /autz-setting/{type}/{settingFor}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**settingFor**  <br>*required*|settingFor|string|
|**Path**|**type**  <br>*required*|type|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«AuthorizationSettingEntity»](#c2f4413fddae73a407b1566ae2880d25)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="62b7b546918b2c3df3d9b35a4b697ff2"></a>
### 权限-用户令牌管理
User Token Info Controller


<a name="checkexpiredtokenusingput"></a>
#### 检查所有已过期的token并移除
```
PUT /user-token/check
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="resettokenusingget"></a>
#### 重置当前用户的令牌
```
GET /user-token/reset
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="alltokeninfousingget"></a>
#### 获取所有令牌
```
GET /user-token/token/all
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserToken»»](#3a9a2f2c4c0680c5729862f4845492b2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="alllogintokenusingget"></a>
#### 获取已授权令牌的总数
```
GET /user-token/token/total
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«long»](#f505e3d79e9444eeb3266210d702f335)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="changetokenstateusingput"></a>
#### 修改令牌状态
```
PUT /user-token/token/{token}/{state}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**state**  <br>*optional*|要修改的状态|enum (effective, deny, expired, offline)|
|**Path**|**token**  <br>*optional*|令牌|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="allusertokenusingget"></a>
#### 获取已授权用户的总数
```
GET /user-token/user/total
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«long»](#f505e3d79e9444eeb3266210d702f335)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="changeuserstateusingput"></a>
#### 修改用户状态
```
PUT /user-token/user/{userId}/{state}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**state**  <br>*optional*|要修改的状态|enum (effective, deny, expired, offline)|
|**Path**|**userId**  <br>*optional*|用户ID|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="4a8f6946d12957abbcdde9d31e2b28da"></a>
### 权限-用户授权
Authorization Controller


<a name="exitusingget"></a>
#### 退出当前登录
```
GET /authorize/exit
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="authorizeusingpost"></a>
#### 用户名密码登录
```
POST /authorize/login
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**password**  <br>*optional*|密码|string|
|**Query**|**username**  <br>*optional*|用户名|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Map«string,object»»](#62b0ac1e9c72a1c12b2ba3dca9050555)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="exitusingget_1"></a>
#### 退出当前登录
```
GET /authorize/login-out
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="meusingget"></a>
#### 当前登录用户权限信息
```
GET /authorize/me
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Authentication»](#91e04724f2ad858185d5fc280d46daa4)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="exitusingget_2"></a>
#### 退出当前登录
```
GET /authorize/sign-out
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="801758d74f8ce869d9e105d990eb15d7"></a>
### 权限-用户管理
User Controller


<a name="addusingpost_16"></a>
#### 新增
```
POST /user
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[BindRoleUserEntity](#bindroleuserentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_18"></a>
#### 根据动态条件查询
```
GET /user
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«UserEntity»»](#022104f1b83fb14da490f0bad176c23f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_18"></a>
#### 根据动态条件统计
```
GET /user/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_36"></a>
#### 根据主键查询多条记录
```
GET /user/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserEntity»»](#7009b808a7062b09cd5057c748edf5ce)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_18"></a>
#### 不分页动态查询
```
GET /user/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserEntity»»](#7009b808a7062b09cd5057c748edf5ce)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updateloginuserpasswordusingput"></a>
#### 修改当前登录用户的密码
```
PUT /user/password
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**oldPassword**  <br>*required*|oldPassword|string|
|**Query**|**password**  <br>*required*|password|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebypasswordprimarykeyusingput"></a>
#### 修改指定用户的密码
```
PUT /user/password/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Query**|**oldPassword**  <br>*required*|oldPassword|string|
|**Query**|**password**  <br>*required*|password|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_37"></a>
#### 根据主键查询
```
GET /user/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«UserEntity»](#26c05b8f050f76cd6252ff48bb3d92d3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_15"></a>
#### 根据ID修改用户信息
```
PUT /user/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**userModel**  <br>*required*|userModel|[BindRoleUserEntity](#bindroleuserentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="disableusingput_4"></a>
#### 禁用用户
```
PUT /user/{id}/disable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="enableusingput_4"></a>
#### 启用用户
```
PUT /user/{id}/enable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="f49f855bcf8e453de7a92fd90d6355f3"></a>
### 权限-菜单管理
Menu Controller


<a name="addusingpost_5"></a>
#### 新增
```
POST /menu
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[MenuEntity](#menuentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_6"></a>
#### 根据动态条件查询
```
GET /menu
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«MenuEntity»»](#988c76f931d9e2f2511502e7d7e19ce1)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_4"></a>
#### 新增或者修改
```
PATCH /menu
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[MenuEntity](#menuentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_6"></a>
#### 根据动态条件统计
```
GET /menu/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_12"></a>
#### 根据主键查询多条记录
```
GET /menu/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«MenuEntity»»](#ebcb301625271fb0be42fdd8ac1f9cd7)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_6"></a>
#### 不分页动态查询
```
GET /menu/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«MenuEntity»»](#ebcb301625271fb0be42fdd8ac1f9cd7)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getusermenuaslistusingget"></a>
#### 获取当前用户的菜单列表
```
GET /menu/user-own/list
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserMenuEntity»»](#1eddb0f64b7f488855f93d644b623abe)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getusermenuastreeusingget"></a>
#### 获取当前用户的菜单树
```
GET /menu/user-own/tree
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserMenuEntity»»](#1eddb0f64b7f488855f93d644b623abe)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_13"></a>
#### 根据主键查询
```
GET /menu/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«MenuEntity»](#70aebc08733114eb863389fdebbff05d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_4"></a>
#### 修改数据
```
PUT /menu/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[MenuEntity](#menuentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_4"></a>
#### 删除数据
```
DELETE /menu/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="e02058ecfcf00fb41780953cc88777e5"></a>
### 权限-角色管理
Role Controller


<a name="addusingpost_13"></a>
#### 新增
```
POST /role
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RoleEntity](#roleentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_15"></a>
#### 根据动态条件查询
```
GET /role
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RoleEntity»»](#04b8a0105cc98da475754a7a0d118cac)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_13"></a>
#### 新增或者修改
```
PATCH /role
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RoleEntity](#roleentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_15"></a>
#### 根据动态条件统计
```
GET /role/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="disableusingput_2"></a>
#### 禁用角色
```
PUT /role/disable/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="enableusingput_2"></a>
#### 启用角色
```
PUT /role/enable/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage](#responsemessage)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_30"></a>
#### 根据主键查询多条记录
```
GET /role/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RoleEntity»»](#6470682b8c8826c2502a362cccfb40a3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_15"></a>
#### 不分页动态查询
```
GET /role/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RoleEntity»»](#6470682b8c8826c2502a362cccfb40a3)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_31"></a>
#### 根据主键查询
```
GET /role/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«RoleEntity»](#9de855e0a731771e1c13e47e25e30380)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_12"></a>
#### 修改数据
```
PUT /role/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[RoleEntity](#roleentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_12"></a>
#### 删除数据
```
DELETE /role/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="732b8812ddc8fb9206515dde66d00542"></a>
### 用户-用户配置管理
User Setting Controller


<a name="getusingget_1"></a>
#### 获取当前用户的配置列表
```
GET /user-setting/me/{key}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**key**  <br>*required*|key|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«UserSettingEntity»»](#8e2573283f33b25a5c607100d6cc3f8a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveusingpatch"></a>
#### 获取当前用户的配置列表
```
PATCH /user-setting/me/{key}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**key**  <br>*required*|key|string|
|**Body**|**userSettingEntity**  <br>*required*|userSettingEntity|[UserSettingEntity](#usersettingentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getusingget"></a>
#### 获取当前用户的配置
```
GET /user-setting/me/{key}/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Path**|**key**  <br>*required*|key|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«UserSettingEntity»](#bb605f14ea851832f5ce7d794caaceca)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="5a859acebd294265ae1441e4781bc213"></a>
### 第三方应用-ueditor
Ueditor Controller


<a name="runusingpost"></a>
#### 初始化配置
```
POST /ueditor
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|string|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="runusingget"></a>
#### 初始化配置
```
GET /ueditor
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|string|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="39283febcb5761d8b989df5bc32ea44e"></a>
### 组织架构-人员管理
Person Controller


<a name="addusingpost_9"></a>
#### 新增
```
POST /person
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PersonEntity](#personentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_11"></a>
#### 根据动态条件查询
```
GET /person
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PersonEntity»»](#35dd428b2aeda09b4672b75af069d2c1)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_9"></a>
#### 新增或者修改
```
PATCH /person
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PersonEntity](#personentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_11"></a>
#### 根据动态条件统计
```
GET /person/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getdetailusingpost"></a>
#### 新增人员信息,并关联用户信息
```
POST /person/detail
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*required*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_22"></a>
#### 根据主键查询多条记录
```
GET /person/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbypositionidusingget"></a>
#### 获取指定岗位的人员
```
GET /person/in-position/{positionId}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**positionId**  <br>*required*|positionId|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getloginuserpersonusingget"></a>
#### 查看当前登录用户的人员信息
```
GET /person/me
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonAuthBindEntity»](#10249428a4d55b979ef50cf7ac890aeb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatemepersoninfousingput"></a>
#### 修改个人信息
```
PUT /person/me
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**bindEntity**  <br>*required*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getloginuserpersondetailusingget"></a>
#### 查看当前登录用户的人员权限信息
```
GET /person/me/authorization
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonnelAuthorization»](#4c898cb865a7ac8d70a5f816c252d944)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_11"></a>
#### 不分页动态查询
```
GET /person/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PersonEntity»»](#7d0d15c646ed164f964fb8d2f6b3000a)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_23"></a>
#### 根据主键查询
```
GET /person/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonEntity»](#c794f72feaad58a88d3da0cc427d1d9c)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_8"></a>
#### 修改数据
```
PUT /person/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[PersonEntity](#personentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_8"></a>
#### 删除数据
```
DELETE /person/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getdetailusingget"></a>
#### 查看人员详情
```
GET /person/{id}/detail
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PersonAuthBindEntity»](#10249428a4d55b979ef50cf7ac890aeb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getdetailusingput"></a>
#### 修改人员信息,并关联用户信息
```
PUT /person/{id}/detail
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**bindEntity**  <br>*required*|bindEntity|[PersonAuthBindEntity](#personauthbindentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="3a7e1c4fb3a15ca0dbe26ce8fde9885a"></a>
### 组织架构-关系定义管理
Relation Define Controller


<a name="addusingpost_11"></a>
#### 新增
```
POST /relation/define
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RelationDefineEntity](#relationdefineentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_13"></a>
#### 根据动态条件查询
```
GET /relation/define
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RelationDefineEntity»»](#858faa3bec7747a89f047157de5fa7b5)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_11"></a>
#### 新增或者修改
```
PATCH /relation/define
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RelationDefineEntity](#relationdefineentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_13"></a>
#### 根据动态条件统计
```
GET /relation/define/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_26"></a>
#### 根据主键查询多条记录
```
GET /relation/define/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationDefineEntity»»](#ee6962a89a88ef309187bb871e9cdfd1)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_13"></a>
#### 不分页动态查询
```
GET /relation/define/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationDefineEntity»»](#ee6962a89a88ef309187bb871e9cdfd1)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_27"></a>
#### 根据主键查询
```
GET /relation/define/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«RelationDefineEntity»](#07e4edac137972c7b8c957a922b992ee)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_10"></a>
#### 修改数据
```
PUT /relation/define/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[RelationDefineEntity](#relationdefineentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_10"></a>
#### 删除数据
```
DELETE /relation/define/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="9a921aa215e0d7c7df3e5733b82125bc"></a>
### 组织架构-关系管理
Relation Info Controller


<a name="addusingpost_12"></a>
#### 新增
```
POST /relation/info
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RelationInfoEntity](#relationinfoentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_14"></a>
#### 根据动态条件查询
```
GET /relation/info
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«RelationInfoEntity»»](#662abf311f6756ce1515cfc1f3d6497b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_12"></a>
#### 新增或者修改
```
PATCH /relation/info
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[RelationInfoEntity](#relationinfoentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_14"></a>
#### 根据动态条件统计
```
GET /relation/info/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_28"></a>
#### 根据主键查询多条记录
```
GET /relation/info/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationInfoEntity»»](#dbc09948d0a6db8c21cecb87af87fa6f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_14"></a>
#### 不分页动态查询
```
GET /relation/info/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«RelationInfoEntity»»](#dbc09948d0a6db8c21cecb87af87fa6f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_29"></a>
#### 根据主键查询
```
GET /relation/info/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«RelationInfoEntity»](#a8d04810db9cc799f48ca42652e0514e)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_11"></a>
#### 修改数据
```
PUT /relation/info/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[RelationInfoEntity](#relationinfoentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_11"></a>
#### 删除数据
```
DELETE /relation/info/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="2377f8482fc01f49e4467e995f432db7"></a>
### 组织架构-机构管理
Organizational Controller


<a name="addusingpost_7"></a>
#### 新增
```
POST /organizational
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[OrganizationalEntity](#organizationalentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_9"></a>
#### 根据动态条件查询
```
GET /organizational
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«OrganizationalEntity»»](#1e34e66cd932a6e9a2a19ae61f935332)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_7"></a>
#### 新增或者修改
```
PATCH /organizational
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[OrganizationalEntity](#organizationalentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebatchusingpatch_1"></a>
#### 批量修改数据
```
PATCH /organizational/batch
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**batch**  <br>*required*|batch|< [OrganizationalEntity](#organizationalentity) > array|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_9"></a>
#### 根据动态条件统计
```
GET /organizational/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_18"></a>
#### 根据主键查询多条记录
```
GET /organizational/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OrganizationalEntity»»](#3dd66bd50330e0634288732801c6eae6)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_9"></a>
#### 不分页动态查询
```
GET /organizational/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«OrganizationalEntity»»](#3dd66bd50330e0634288732801c6eae6)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_19"></a>
#### 根据主键查询
```
GET /organizational/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«OrganizationalEntity»](#05d6cc19f6ee049e0ac5098efd85ec2d)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_6"></a>
#### 修改数据
```
PUT /organizational/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[OrganizationalEntity](#organizationalentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_6"></a>
#### 删除数据
```
DELETE /organizational/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="disableusingput_1"></a>
#### 禁用机构
```
PUT /organizational/{id}/disable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="enableusingput_1"></a>
#### 启用机构
```
PUT /organizational/{id}/enable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="09a3305feeec20b5c8b1624a70051f7d"></a>
### 组织架构-职位管理
Position Controller


<a name="addusingpost_10"></a>
#### 新增
```
POST /position
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PositionEntity](#positionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_12"></a>
#### 根据动态条件查询
```
GET /position
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«PositionEntity»»](#0b9846aedba34500c09ff8c883f89c41)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_10"></a>
#### 新增或者修改
```
PATCH /position
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[PositionEntity](#positionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_12"></a>
#### 根据动态条件统计
```
GET /position/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_24"></a>
#### 根据主键查询多条记录
```
GET /position/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PositionEntity»»](#4a3d2505235b212b6d947baba2efb5e6)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_12"></a>
#### 不分页动态查询
```
GET /position/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«PositionEntity»»](#4a3d2505235b212b6d947baba2efb5e6)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_25"></a>
#### 根据主键查询
```
GET /position/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PositionEntity»](#81d3f00a16ad771d3c6fbdd99e002afb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_9"></a>
#### 修改数据
```
PUT /position/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[PositionEntity](#positionentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_9"></a>
#### 删除数据
```
DELETE /position/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="906d6b728212af8477e2d418ee830da4"></a>
### 组织架构-行政区划管理
District Controller


<a name="addusingpost_2"></a>
#### 新增
```
POST /district
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DistrictEntity](#districtentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_2"></a>
#### 根据动态条件查询
```
GET /district
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DistrictEntity»»](#abaea98c9cec2051a3588b919068948f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_2"></a>
#### 新增或者修改
```
PATCH /district
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DistrictEntity](#districtentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="allusingget"></a>
#### 获取全部行政区划
```
GET /district/all
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebatchusingpatch"></a>
#### 批量修改数据
```
PATCH /district/batch
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**batch**  <br>*required*|batch|< [DistrictEntity](#districtentity) > array|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«Void»](#6c061a07afa1c9738e33d1b5ec1728a9)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbycodeusingget"></a>
#### 根据行政区划代码获取
```
GET /district/code/{code}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**code**  <br>*required*|code|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DistrictEntity»](#e9e4c971e48ff61d32412141df044f36)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_2"></a>
#### 根据动态条件统计
```
GET /district/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_4"></a>
#### 根据主键查询多条记录
```
GET /district/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_2"></a>
#### 不分页动态查询
```
GET /district/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DistrictEntity»»](#020e52a447243dd2c4d0bef080da4b24)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_5"></a>
#### 根据主键查询
```
GET /district/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DistrictEntity»](#e9e4c971e48ff61d32412141df044f36)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_2"></a>
#### 修改数据
```
PUT /district/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[DistrictEntity](#districtentity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_2"></a>
#### 删除数据
```
DELETE /district/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="disableusingput"></a>
#### 禁用机构
```
PUT /district/{id}/disable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="enableusingput"></a>
#### 启用机构
```
PUT /district/{id}/enable
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«boolean»](#bbdc11e8c14b5b13fda321a82dc3a3ac)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="5c1c179c04aaa1617188d78a6a5c1e7b"></a>
### 组织架构-部门管理
Department Controller


<a name="addusingpost_1"></a>
#### 新增
```
POST /department
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DepartmentEntity](#departmententity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listusingget_1"></a>
#### 根据动态条件查询
```
GET /department
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«PagerResult«DepartmentEntity»»](#2d642eb6e8bf8069ea7d8748f89a1953)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="saveorupdateusingpatch_1"></a>
#### 新增或者修改
```
PATCH /department
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**data**  <br>*required*|data|[DepartmentEntity](#departmententity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="countusingget_1"></a>
#### 根据动态条件统计
```
GET /department/count
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_2"></a>
#### 根据主键查询多条记录
```
GET /department/ids
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|ids|< string > array(multi)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DepartmentEntity»»](#27bd3061635415c4ea0c73c653f47acf)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="listnopagingusingget_1"></a>
#### 不分页动态查询
```
GET /department/no-paging
```


##### Parameters

|Type|Name|Schema|
|---|---|---|
|**Query**|**excludes**  <br>*optional*|< string > array(multi)|
|**Query**|**forUpdate**  <br>*optional*|boolean|
|**Query**|**includes**  <br>*optional*|< string > array(multi)|
|**Query**|**pageIndex**  <br>*optional*|integer (int32)|
|**Query**|**pageSize**  <br>*optional*|integer (int32)|
|**Query**|**paging**  <br>*optional*|boolean|
|**Query**|**sorts[0].name**  <br>*optional*|string|
|**Query**|**sorts[0].order**  <br>*optional*|string|
|**Query**|**sorts[0].type**  <br>*optional*|string|
|**Query**|**terms[0].column**  <br>*optional*|string|
|**Query**|**terms[0].termType**  <br>*optional*|string|
|**Query**|**terms[0].type**  <br>*optional*|enum (or, and)|
|**Query**|**terms[0].value**  <br>*optional*|object|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«List«DepartmentEntity»»](#27bd3061635415c4ea0c73c653f47acf)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="getbyprimarykeyusingget_3"></a>
#### 根据主键查询
```
GET /department/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«DepartmentEntity»](#494d2e8ada457977fe25c668a34a06f7)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="updatebyprimarykeyusingput_1"></a>
#### 修改数据
```
PUT /department/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|
|**Body**|**data**  <br>*required*|data|[DepartmentEntity](#departmententity)|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«int»](#d53a2c1e07a660f2c3f1b54e6a7c98bb)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`


<a name="deletebyprimarykeyusingdelete_1"></a>
#### 删除数据
```
DELETE /department/{id}
```


##### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|string|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResponseMessage«string»](#7706c642a9473cc1b49b8f456cc26073)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


##### Consumes

* `application/json`


##### Produces

* `*/*`



