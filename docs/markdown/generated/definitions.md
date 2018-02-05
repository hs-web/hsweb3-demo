
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



