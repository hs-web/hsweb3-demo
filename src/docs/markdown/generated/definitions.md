
<a name="definitions"></a>
## Definitions

<a name="accesstokenmodel"></a>
### AccessTokenModel

|Name|Schema|
|---|---|
|**access_token**  <br>*optional*|string|
|**expires_in**  <br>*optional*|integer (int32)|
|**refresh_token**  <br>*optional*|string|
|**scope**  <br>*optional*|string|
|**token_type**  <br>*optional*|string|


<a name="actionentity"></a>
### ActionEntity

|Name|Schema|
|---|---|
|**action**  <br>*optional*|string|
|**defaultCheck**  <br>*optional*|boolean|
|**describe**  <br>*optional*|string|


<a name="applicationcontext"></a>
### ApplicationContext

|Name|Schema|
|---|---|
|**applicationName**  <br>*optional*|string|
|**autowireCapableBeanFactory**  <br>*optional*|[AutowireCapableBeanFactory](#autowirecapablebeanfactory)|
|**beanDefinitionCount**  <br>*optional*|integer (int32)|
|**beanDefinitionNames**  <br>*optional*|< string > array|
|**classLoader**  <br>*optional*|[ClassLoader](#classloader)|
|**displayName**  <br>*optional*|string|
|**environment**  <br>*optional*|[Environment](#environment)|
|**id**  <br>*optional*|string|
|**parent**  <br>*optional*|[ApplicationContext](#applicationcontext)|
|**parentBeanFactory**  <br>*optional*|[BeanFactory](#beanfactory)|
|**startupDate**  <br>*optional*|integer (int64)|


<a name="authentication"></a>
### Authentication

|Name|Schema|
|---|---|
|**attributes**  <br>*optional*|< string, [Serializable](#serializable) > map|
|**permissions**  <br>*optional*|< [Permission](#permission) > array|
|**roles**  <br>*optional*|< [Role](#role) > array|
|**user**  <br>*optional*|[User](#user)|


<a name="authorizationcodemodel"></a>
### AuthorizationCodeModel

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**redirectUri**  <br>*optional*|string|
|**state**  <br>*optional*|string|


<a name="authorizationsettingdetailentity"></a>
### AuthorizationSettingDetailEntity

|Name|Description|Schema|
|---|---|---|
|**actions**  <br>*optional*||< string > array|
|**dataAccesses**  <br>*optional*||< [DataAccessEntity](#dataaccessentity) > array|
|**id**  <br>*optional*||string|
|**merge**  <br>*optional*||boolean|
|**permissionId**  <br>*required*||string|
|**priority**  <br>*optional*||integer (int64)|
|**properties**  <br>*optional*||object|
|**settingId**  <br>*required*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="authorizationsettingentity"></a>
### AuthorizationSettingEntity

|Name|Description|Schema|
|---|---|---|
|**describe**  <br>*optional*||string|
|**details**  <br>*optional*||< [AuthorizationSettingDetailEntity](#authorizationsettingdetailentity) > array|
|**id**  <br>*optional*||string|
|**menus**  <br>*optional*||< [AuthorizationSettingMenuEntity](#authorizationsettingmenuentity) > array|
|**properties**  <br>*optional*||object|
|**settingFor**  <br>*required*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**type**  <br>*required*||string|


<a name="authorizationsettingmenuentity"></a>
### AuthorizationSettingMenuEntity

|Name|Description|Schema|
|---|---|---|
|**children**  <br>*optional*||< [AuthorizationSettingMenuEntity](#authorizationsettingmenuentity) > array|
|**config**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**level**  <br>*optional*||integer (int32)|
|**menuId**  <br>*optional*||string|
|**parentId**  <br>*optional*||string|
|**path**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**settingId**  <br>*optional*||string|
|**sortIndex**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="autowirecapablebeanfactory"></a>
### AutowireCapableBeanFactory
*Type* : object


<a name="beanfactory"></a>
### BeanFactory
*Type* : object


<a name="bindroleuserentity"></a>
### BindRoleUserEntity

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||integer (int64)|
|**creatorId**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**password**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**roles**  <br>*optional*||< string > array|
|**salt**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**username**  <br>*optional*||string|


<a name="classloader"></a>
### ClassLoader

|Name|Schema|
|---|---|
|**parent**  <br>*optional*|[ClassLoader](#classloader)|


<a name="dataaccessconfig"></a>
### DataAccessConfig

|Name|Schema|
|---|---|
|**action**  <br>*optional*|string|
|**type**  <br>*optional*|string|


<a name="dataaccessentity"></a>
### DataAccessEntity

|Name|Schema|
|---|---|
|**action**  <br>*optional*|string|
|**config**  <br>*optional*|string|
|**describe**  <br>*optional*|string|
|**type**  <br>*optional*|string|


<a name="department"></a>
### Department

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**org**  <br>*optional*|[Organization](#organization)|


<a name="departmententity"></a>
### DepartmentEntity

|Name|Description|Schema|
|---|---|---|
|**children**  <br>*optional*||< [DepartmentEntity](#departmententity) > array|
|**code**  <br>*optional*||string|
|**departmentId**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**level**  <br>*optional*||integer (int32)|
|**name**  <br>*optional*||string|
|**orgId**  <br>*optional*||string|
|**parentId**  <br>*optional*||string|
|**path**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**sortIndex**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="district"></a>
### District

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**fullName**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="districtentity"></a>
### DistrictEntity

|Name|Description|Schema|
|---|---|---|
|**children**  <br>*optional*||< [DistrictEntity](#districtentity) > array|
|**code**  <br>*optional*||string|
|**describe**  <br>*optional*||string|
|**fullName**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**level**  <br>*optional*||integer (int32)|
|**levelCode**  <br>*optional*||string|
|**levelName**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**parentId**  <br>*optional*||string|
|**path**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**sortIndex**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="dynamicdatasourceconfig"></a>
### DynamicDataSourceConfig

|Name|Schema|
|---|---|
|**describe**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="dynamicformcolumnbindentity"></a>
### DynamicFormColumnBindEntity

|Name|Schema|
|---|---|
|**columns**  <br>*optional*|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|
|**form**  <br>*optional*|[DynamicFormEntity](#dynamicformentity)|


<a name="dynamicformcolumnentity"></a>
### DynamicFormColumnEntity

|Name|Schema|
|---|---|
|**alias**  <br>*optional*|string|
|**columnName**  <br>*required*|string|
|**dataType**  <br>*optional*|string|
|**describe**  <br>*optional*|string|
|**dictConfig**  <br>*optional*|string|
|**dictId**  <br>*optional*|string|
|**dictParserId**  <br>*optional*|string|
|**formId**  <br>*required*|string|
|**id**  <br>*optional*|string|
|**javaType**  <br>*required*|string|
|**jdbcType**  <br>*required*|string|
|**length**  <br>*optional*|integer (int32)|
|**name**  <br>*required*|string|
|**precision**  <br>*optional*|integer (int32)|
|**properties**  <br>*optional*|object|
|**scale**  <br>*optional*|integer (int32)|
|**sortIndex**  <br>*optional*|integer (int64)|


<a name="dynamicformdeploylogentity"></a>
### DynamicFormDeployLogEntity

|Name|Description|Schema|
|---|---|---|
|**deployTime**  <br>*optional*||integer (int64)|
|**formId**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**metaData**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**version**  <br>*optional*||integer (int64)|


<a name="dynamicformentity"></a>
### DynamicFormEntity

|Name|Description|Schema|
|---|---|---|
|**alias**  <br>*optional*|表别名.  <br>**Example** : `"testForm"`|string|
|**correlations**  <br>*optional*||string|
|**createTime**  <br>*optional*|创建时间,新增时自动设置.|integer (int64)|
|**creatorId**  <br>*optional*|创建人,根据当前用户自动获取.  <br>**Example** : `"1"`|string|
|**dataSourceId**  <br>*optional*||string|
|**databaseTableName**  <br>*required*|数据库表名  <br>**Example** : `"f_test_form"`|string|
|**deployed**  <br>*optional*|是否已发布,发布时自动设置.  <br>**Example** : `false`|boolean|
|**describe**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*required*|表单名称  <br>**Example** : `"测试表单"`|string|
|**properties**  <br>*optional*||object|
|**triggers**  <br>*optional*|触发器.  <br>**Example** : `"[{\"language\":\"groovy\",\"script\":\" return true;\"}]"`|string|
|**type**  <br>*optional*||string|
|**updateTime**  <br>*optional*|创建时间,修改时自动设置.|integer (int64)|
|**version**  <br>*optional*|版本号,无需设置,每次保存自动自增.  <br>**Example** : `1`|integer (int64)|


<a name="environment"></a>
### Environment

|Name|Schema|
|---|---|
|**activeProfiles**  <br>*optional*|< string > array|
|**defaultProfiles**  <br>*optional*|< string > array|


<a name="fileinfoentity"></a>
### FileInfoEntity

|Name|Description|Schema|
|---|---|---|
|**classified**  <br>*optional*||string|
|**createTime**  <br>*optional*||integer (int64)|
|**creatorId**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**location**  <br>*optional*||string|
|**md5**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**size**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**type**  <br>*optional*||string|


<a name="implicitaccesstokenmodel"></a>
### ImplicitAccessTokenModel

|Name|Schema|
|---|---|
|**access_token**  <br>*optional*|string|
|**expires_in**  <br>*optional*|integer (int32)|
|**redirect_uri**  <br>*optional*|string|
|**state**  <br>*optional*|string|
|**token_type**  <br>*optional*|string|


<a name="24c8c56e43e10da9bfd8857a61126e08"></a>
### Map«string,List«ObjectMetadata»»
*Type* : < string, [List](#list) > map


<a name="menuentity"></a>
### MenuEntity

|Name|Description|Schema|
|---|---|---|
|**children**  <br>*optional*||< [MenuEntity](#menuentity) > array|
|**describe**  <br>*optional*||string|
|**icon**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**level**  <br>*optional*||integer (int32)|
|**name**  <br>*optional*||string|
|**parentId**  <br>*optional*||string|
|**path**  <br>*optional*||string|
|**permissionId**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**sortIndex**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**url**  <br>*optional*||string|


<a name="oauth2client"></a>
### OAuth2Client

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||integer (int64)|
|**defaultGrantScope**  <br>*optional*||< string > array|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**ownerId**  <br>*optional*||string|
|**redirectUri**  <br>*optional*||string|
|**secret**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**supportGrantTypes**  <br>*optional*||< string > array|


<a name="oauth2cliententity"></a>
### OAuth2ClientEntity

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||integer (int64)|
|**creatorId**  <br>*optional*||string|
|**defaultGrantScope**  <br>*optional*||< string > array|
|**describe**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**ownerId**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**redirectUri**  <br>*optional*||string|
|**secret**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**supportGrantTypes**  <br>*optional*||< string > array|
|**type**  <br>*optional*||string|


<a name="oauth2serverconfigentity"></a>
### OAuth2ServerConfigEntity

|Name|Description|Schema|
|---|---|---|
|**accessTokenUrl**  <br>*optional*||string|
|**apiBaseUrl**  <br>*optional*||string|
|**authUrl**  <br>*optional*||string|
|**clientId**  <br>*optional*||string|
|**clientSecret**  <br>*optional*||string|
|**describe**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**provider**  <br>*optional*||string|
|**redirectUri**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="oauth2usertokenentity"></a>
### OAuth2UserTokenEntity

|Name|Schema|
|---|---|
|**accessToken**  <br>*optional*|string|
|**clientId**  <br>*optional*|string|
|**clientUserId**  <br>*optional*|string|
|**createTime**  <br>*optional*|integer (int64)|
|**expiresIn**  <br>*optional*|integer (int32)|
|**grantType**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**properties**  <br>*optional*|object|
|**refreshToken**  <br>*optional*|string|
|**scope**  <br>*optional*|string|
|**serverId**  <br>*optional*|string|
|**serverUserId**  <br>*optional*|string|
|**updateTime**  <br>*optional*|integer (int64)|


<a name="objectmetadata"></a>
### ObjectMetadata

|Name|Schema|
|---|---|
|**name**  <br>*optional*|string|
|**type**  <br>*optional*|enum (TABLE, VIEW, SEQUENCES)|


<a name="optionalfield"></a>
### OptionalField

|Name|Schema|
|---|---|
|**describe**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="organization"></a>
### Organization

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**district**  <br>*optional*|[District](#district)|
|**fullName**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="organizationalentity"></a>
### OrganizationalEntity

|Name|Description|Schema|
|---|---|---|
|**children**  <br>*optional*||< [OrganizationalEntity](#organizationalentity) > array|
|**code**  <br>*optional*||string|
|**districtId**  <br>*optional*||string|
|**fullName**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**level**  <br>*optional*||integer (int32)|
|**name**  <br>*optional*||string|
|**optionalRoles**  <br>*optional*||< string > array|
|**orgId**  <br>*optional*||string|
|**parentId**  <br>*optional*||string|
|**path**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**sortIndex**  <br>*optional*||integer (int64)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="f8441b82a42771685acc229c7164da92"></a>
### PagerResult«AuthorizationSettingEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [AuthorizationSettingEntity](#authorizationsettingentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="0167b0879b1a2fbf522f91fb37d3f628"></a>
### PagerResult«DepartmentEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [DepartmentEntity](#departmententity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="7ae352fc158747f08dd5eb90855a89f8"></a>
### PagerResult«DistrictEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [DistrictEntity](#districtentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="27fe728492934f59e88d33a2b3766933"></a>
### PagerResult«DynamicFormDeployLogEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [DynamicFormDeployLogEntity](#dynamicformdeploylogentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="e4260528def855a58a0656f691a7915f"></a>
### PagerResult«DynamicFormEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [DynamicFormEntity](#dynamicformentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="9d35a78643baac21c0fe6f107f9d2240"></a>
### PagerResult«FileInfoEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [FileInfoEntity](#fileinfoentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="7e2ce4331019959450104bfb2dffd23f"></a>
### PagerResult«MenuEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [MenuEntity](#menuentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="ebda22c7bc1513232ab81083e253e208"></a>
### PagerResult«OAuth2ServerConfigEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [OAuth2ServerConfigEntity](#oauth2serverconfigentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="a6a076d035327679df47051bad4a58ab"></a>
### PagerResult«OAuth2UserTokenEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [OAuth2UserTokenEntity](#oauth2usertokenentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="ca90e82f68dd6bae04544c264662a182"></a>
### PagerResult«OrganizationalEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [OrganizationalEntity](#organizationalentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="8630f4cda224d8ff5faf619fac8c9875"></a>
### PagerResult«PermissionEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [PermissionEntity](#permissionentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="8c2ab88d5455871f901a74e62b505b47"></a>
### PagerResult«PersonEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [PersonEntity](#personentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="6e02dbdccfce51084450a2d632d0fe45"></a>
### PagerResult«PositionEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [PositionEntity](#positionentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="bd1d9065a052eddc01b75243abd873cd"></a>
### PagerResult«RelationDefineEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [RelationDefineEntity](#relationdefineentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="720330473169ba94d7e5e1840dac11db"></a>
### PagerResult«RelationInfoEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [RelationInfoEntity](#relationinfoentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="6e67c47f04808732b2f0546672e9f4ca"></a>
### PagerResult«RoleEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [RoleEntity](#roleentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="3c5582dff446edfec2b56a38e400f979"></a>
### PagerResult«ScheduleJobEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [ScheduleJobEntity](#schedulejobentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="8600a8255df0072a9ebdcef867f5c524"></a>
### PagerResult«ScriptEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [ScriptEntity](#scriptentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="8c19b416cd9de9ffbed9082acff5fc80"></a>
### PagerResult«UserEntity»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< [UserEntity](#userentity) > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="87daa132c4ff15bc24c3702dd105f6c8"></a>
### PagerResult«object»
分页结果


|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|查询结果|< object > array|
|**total**  <br>*optional*|数据总数量|integer (int32)|


<a name="parentpermission"></a>
### ParentPermission

|Name|Schema|
|---|---|
|**actions**  <br>*optional*|< string > array|
|**permission**  <br>*optional*|string|


<a name="permission"></a>
### Permission

|Name|Schema|
|---|---|
|**actions**  <br>*optional*|< string > array|
|**dataAccesses**  <br>*optional*|< [DataAccessConfig](#dataaccessconfig) > array|
|**id**  <br>*optional*|string|


<a name="permissionentity"></a>
### PermissionEntity

|Name|Description|Schema|
|---|---|---|
|**actions**  <br>*optional*||< [ActionEntity](#actionentity) > array|
|**describe**  <br>*optional*||string|
|**id**  <br>*optional*|**Pattern** : `"[a-zA-Z0-9_\\-]+"`|string|
|**name**  <br>*optional*||string|
|**optionalFields**  <br>*optional*||< [OptionalField](#optionalfield) > array|
|**parents**  <br>*optional*||< [ParentPermission](#parentpermission) > array|
|**properties**  <br>*optional*||object|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**supportDataAccessTypes**  <br>*optional*||< string > array|
|**type**  <br>*optional*||string|


<a name="personauthbindentity"></a>
### PersonAuthBindEntity

|Name|Description|Schema|
|---|---|---|
|**email**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**personUser**  <br>*optional*||[PersonUserEntity](#personuserentity)|
|**phone**  <br>*optional*||string|
|**photo**  <br>*optional*||string|
|**positionIds**  <br>*optional*||< string > array|
|**properties**  <br>*optional*||object|
|**remark**  <br>*optional*||string|
|**sex**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**userId**  <br>*optional*||string|


<a name="personentity"></a>
### PersonEntity

|Name|Description|Schema|
|---|---|---|
|**email**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**phone**  <br>*optional*||string|
|**photo**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**remark**  <br>*optional*||string|
|**sex**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**userId**  <br>*optional*||string|


<a name="personuserentity"></a>
### PersonUserEntity

|Name|Schema|
|---|---|
|**password**  <br>*optional*|string|
|**username**  <br>*optional*|string|


<a name="personnel"></a>
### Personnel

|Name|Schema|
|---|---|
|**email**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**phone**  <br>*optional*|string|
|**photo**  <br>*optional*|string|


<a name="personnelauthorization"></a>
### PersonnelAuthorization

|Name|Schema|
|---|---|
|**allDepartmentId**  <br>*optional*|< string > array|
|**allDistrictId**  <br>*optional*|< string > array|
|**allOrgId**  <br>*optional*|< string > array|
|**allPositionId**  <br>*optional*|< string > array|
|**departmentIds**  <br>*optional*|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**districtIds**  <br>*optional*|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**orgIds**  <br>*optional*|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**personnel**  <br>*optional*|[Personnel](#personnel)|
|**positionIds**  <br>*optional*|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**positions**  <br>*optional*|< [Position](#position) > array|
|**relations**  <br>*optional*|[Relations](#relations)|
|**rootDepartmentId**  <br>*optional*|< string > array|
|**rootDistrictId**  <br>*optional*|< string > array|
|**rootOrgId**  <br>*optional*|< string > array|
|**rootPositionId**  <br>*optional*|< string > array|


<a name="position"></a>
### Position

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**department**  <br>*optional*|[Department](#department)|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="positionentity"></a>
### PositionEntity

|Name|Schema|
|---|---|
|**children**  <br>*optional*|< [PositionEntity](#positionentity) > array|
|**departmentId**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**level**  <br>*optional*|integer (int32)|
|**name**  <br>*optional*|string|
|**parentId**  <br>*optional*|string|
|**path**  <br>*optional*|string|
|**positionId**  <br>*optional*|string|
|**properties**  <br>*optional*|object|
|**remark**  <br>*optional*|string|
|**roles**  <br>*optional*|< string > array|
|**sortIndex**  <br>*optional*|integer (int64)|


<a name="redirectview"></a>
### RedirectView

|Name|Schema|
|---|---|
|**applicationContext**  <br>*optional*|[ApplicationContext](#applicationcontext)|
|**attributesMap**  <br>*optional*|object|
|**beanName**  <br>*optional*|string|
|**contentType**  <br>*optional*|string|
|**exposePathVariables**  <br>*optional*|boolean|
|**hosts**  <br>*optional*|< string > array|
|**propagateQueryProperties**  <br>*optional*|boolean|
|**redirectView**  <br>*optional*|boolean|
|**requestContextAttribute**  <br>*optional*|string|
|**staticAttributes**  <br>*optional*|object|
|**url**  <br>*optional*|string|


<a name="relation"></a>
### Relation

|Name|Schema|
|---|---|
|**direction**  <br>*optional*|enum (POSITIVE, REVERSE, ALL)|
|**name**  <br>*optional*|string|
|**relation**  <br>*optional*|string|
|**target**  <br>*optional*|string|
|**targetObject**  <br>*optional*|object|
|**type**  <br>*optional*|string|


<a name="relationdefineentity"></a>
### RelationDefineEntity

|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**typeId**  <br>*optional*||string|


<a name="relationinfoentity"></a>
### RelationInfoEntity

|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**relationFrom**  <br>*optional*||string|
|**relationId**  <br>*optional*||string|
|**relationTo**  <br>*optional*||string|
|**relationTypeFrom**  <br>*optional*||string|
|**relationTypeTo**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="relations"></a>
### Relations

|Name|Schema|
|---|---|
|**all**  <br>*optional*|< [Relation](#relation) > array|


<a name="responsemessage"></a>
### ResponseMessage
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|object|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="91e04724f2ad858185d5fc280d46daa4"></a>
### ResponseMessage«Authentication»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[Authentication](#authentication)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="c2f4413fddae73a407b1566ae2880d25"></a>
### ResponseMessage«AuthorizationSettingEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[AuthorizationSettingEntity](#authorizationsettingentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="494d2e8ada457977fe25c668a34a06f7"></a>
### ResponseMessage«DepartmentEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[DepartmentEntity](#departmententity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="e9e4c971e48ff61d32412141df044f36"></a>
### ResponseMessage«DistrictEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[DistrictEntity](#districtentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="e7f4b98f55b7cb1bb5814471463d959a"></a>
### ResponseMessage«DynamicFormColumnBindEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[DynamicFormColumnBindEntity](#dynamicformcolumnbindentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="a2d83137608215d878bebe740d227f8d"></a>
### ResponseMessage«DynamicFormDeployLogEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[DynamicFormDeployLogEntity](#dynamicformdeploylogentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="3f6a79e1f3372ef93cbb9d8864461030"></a>
### ResponseMessage«DynamicFormEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[DynamicFormEntity](#dynamicformentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="dccd344201bca930cbb01c5576401ddd"></a>
### ResponseMessage«FileInfoEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[FileInfoEntity](#fileinfoentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="212938092e05225001462abfc2af0b7f"></a>
### ResponseMessage«List«AuthorizationSettingEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [AuthorizationSettingEntity](#authorizationsettingentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="27bd3061635415c4ea0c73c653f47acf"></a>
### ResponseMessage«List«DepartmentEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DepartmentEntity](#departmententity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="020e52a447243dd2c4d0bef080da4b24"></a>
### ResponseMessage«List«DistrictEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DistrictEntity](#districtentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="b5a7cbe033a2131fc198f225ddd71b9d"></a>
### ResponseMessage«List«DynamicDataSourceConfig»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DynamicDataSourceConfig](#dynamicdatasourceconfig) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="7db23ee003946511961f3a7df29c6d8d"></a>
### ResponseMessage«List«DynamicFormColumnEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DynamicFormColumnEntity](#dynamicformcolumnentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="19f5d621630c200f26659affa8d245be"></a>
### ResponseMessage«List«DynamicFormDeployLogEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DynamicFormDeployLogEntity](#dynamicformdeploylogentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="26fa949c2addeecdfcd02861128889bd"></a>
### ResponseMessage«List«DynamicFormEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [DynamicFormEntity](#dynamicformentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ec6dc31ad20662480c1d124b03ac7a8d"></a>
### ResponseMessage«List«FileInfoEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [FileInfoEntity](#fileinfoentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ebcb301625271fb0be42fdd8ac1f9cd7"></a>
### ResponseMessage«List«MenuEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [MenuEntity](#menuentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="04bd1f7c2172df55357d15dd7a4b020d"></a>
### ResponseMessage«List«OAuth2Client»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [OAuth2Client](#oauth2client) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="7c0de841c030a56e36a3592bab2f4b70"></a>
### ResponseMessage«List«OAuth2ServerConfigEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [OAuth2ServerConfigEntity](#oauth2serverconfigentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="19dfe8ccdff0ac64ffddf20e38f600c3"></a>
### ResponseMessage«List«OAuth2UserTokenEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [OAuth2UserTokenEntity](#oauth2usertokenentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="3dd66bd50330e0634288732801c6eae6"></a>
### ResponseMessage«List«OrganizationalEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [OrganizationalEntity](#organizationalentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="f416115c1aec36913d87bd83aa6b2323"></a>
### ResponseMessage«List«PermissionEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [PermissionEntity](#permissionentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="7d0d15c646ed164f964fb8d2f6b3000a"></a>
### ResponseMessage«List«PersonEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [PersonEntity](#personentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="4a3d2505235b212b6d947baba2efb5e6"></a>
### ResponseMessage«List«PositionEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [PositionEntity](#positionentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ee6962a89a88ef309187bb871e9cdfd1"></a>
### ResponseMessage«List«RelationDefineEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [RelationDefineEntity](#relationdefineentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="dbc09948d0a6db8c21cecb87af87fa6f"></a>
### ResponseMessage«List«RelationInfoEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [RelationInfoEntity](#relationinfoentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="6470682b8c8826c2502a362cccfb40a3"></a>
### ResponseMessage«List«RoleEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [RoleEntity](#roleentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="f93b73ff5f600449b044cf276a20c95d"></a>
### ResponseMessage«List«ScheduleJobEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [ScheduleJobEntity](#schedulejobentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="d6f39903f6ccd973fe4476e4bdd6b638"></a>
### ResponseMessage«List«ScriptEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [ScriptEntity](#scriptentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ccb3581f1a83df607e130bbc2cc8649a"></a>
### ResponseMessage«List«SqlExecuteResult»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [SqlExecuteResult](#sqlexecuteresult) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="9e1189b7efd061306fec6127a959452d"></a>
### ResponseMessage«List«TransactionInfo»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [TransactionInfo](#transactioninfo) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="7009b808a7062b09cd5057c748edf5ce"></a>
### ResponseMessage«List«UserEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [UserEntity](#userentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="1eddb0f64b7f488855f93d644b623abe"></a>
### ResponseMessage«List«UserMenuEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [UserMenuEntity](#usermenuentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="8e2573283f33b25a5c607100d6cc3f8a"></a>
### ResponseMessage«List«UserSettingEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [UserSettingEntity](#usersettingentity) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="3a9a2f2c4c0680c5729862f4845492b2"></a>
### ResponseMessage«List«UserToken»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< [UserToken](#usertoken) > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="fc10708f9a97feca7dc9e38bed038c18"></a>
### ResponseMessage«List«string»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< string > array|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="a6697cfc6af6e0903eb5ffcd96d3078b"></a>
### ResponseMessage«Map«string,List«ObjectMetadata»»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|< string, < [ObjectMetadata](#objectmetadata) > array > map|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="62b0ac1e9c72a1c12b2ba3dca9050555"></a>
### ResponseMessage«Map«string,object»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|object|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="70aebc08733114eb863389fdebbff05d"></a>
### ResponseMessage«MenuEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[MenuEntity](#menuentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ebb1050c759c13591fdd208d058d0332"></a>
### ResponseMessage«OAuth2Client»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[OAuth2Client](#oauth2client)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="f49c55e99fe094081dd3c91f972f307a"></a>
### ResponseMessage«OAuth2ServerConfigEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[OAuth2ServerConfigEntity](#oauth2serverconfigentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="9ce3adcac2f6b56f6a853c19d034f501"></a>
### ResponseMessage«OAuth2UserTokenEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[OAuth2UserTokenEntity](#oauth2usertokenentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="05d6cc19f6ee049e0ac5098efd85ec2d"></a>
### ResponseMessage«OrganizationalEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[OrganizationalEntity](#organizationalentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="ab7d3745d6ceba77fc00d0bdf50dbd14"></a>
### ResponseMessage«PagerResult«AuthorizationSettingEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«AuthorizationSettingEntity»](#f8441b82a42771685acc229c7164da92)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="2d642eb6e8bf8069ea7d8748f89a1953"></a>
### ResponseMessage«PagerResult«DepartmentEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«DepartmentEntity»](#0167b0879b1a2fbf522f91fb37d3f628)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="abaea98c9cec2051a3588b919068948f"></a>
### ResponseMessage«PagerResult«DistrictEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«DistrictEntity»](#7ae352fc158747f08dd5eb90855a89f8)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="af1a0c73ed9afec5c76ebf1dce361e01"></a>
### ResponseMessage«PagerResult«DynamicFormDeployLogEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«DynamicFormDeployLogEntity»](#27fe728492934f59e88d33a2b3766933)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="79912e82f1deb6279e26d7fd6a3b5046"></a>
### ResponseMessage«PagerResult«DynamicFormEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«DynamicFormEntity»](#e4260528def855a58a0656f691a7915f)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="514595c8dda5f56bb0f5c31d0b5c3214"></a>
### ResponseMessage«PagerResult«FileInfoEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«FileInfoEntity»](#9d35a78643baac21c0fe6f107f9d2240)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="988c76f931d9e2f2511502e7d7e19ce1"></a>
### ResponseMessage«PagerResult«MenuEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«MenuEntity»](#7e2ce4331019959450104bfb2dffd23f)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="9418f129377a4c78a87d34891784b4ad"></a>
### ResponseMessage«PagerResult«OAuth2ServerConfigEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«OAuth2ServerConfigEntity»](#ebda22c7bc1513232ab81083e253e208)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="652849cecf290786c83f3915b818f8c1"></a>
### ResponseMessage«PagerResult«OAuth2UserTokenEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«OAuth2UserTokenEntity»](#a6a076d035327679df47051bad4a58ab)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="1e34e66cd932a6e9a2a19ae61f935332"></a>
### ResponseMessage«PagerResult«OrganizationalEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«OrganizationalEntity»](#ca90e82f68dd6bae04544c264662a182)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="f0740da5a603024d54cffe67ebcfe2f3"></a>
### ResponseMessage«PagerResult«PermissionEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«PermissionEntity»](#8630f4cda224d8ff5faf619fac8c9875)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="35dd428b2aeda09b4672b75af069d2c1"></a>
### ResponseMessage«PagerResult«PersonEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«PersonEntity»](#8c2ab88d5455871f901a74e62b505b47)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="0b9846aedba34500c09ff8c883f89c41"></a>
### ResponseMessage«PagerResult«PositionEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«PositionEntity»](#6e02dbdccfce51084450a2d632d0fe45)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="858faa3bec7747a89f047157de5fa7b5"></a>
### ResponseMessage«PagerResult«RelationDefineEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«RelationDefineEntity»](#bd1d9065a052eddc01b75243abd873cd)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="662abf311f6756ce1515cfc1f3d6497b"></a>
### ResponseMessage«PagerResult«RelationInfoEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«RelationInfoEntity»](#720330473169ba94d7e5e1840dac11db)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="04b8a0105cc98da475754a7a0d118cac"></a>
### ResponseMessage«PagerResult«RoleEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«RoleEntity»](#6e67c47f04808732b2f0546672e9f4ca)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="42906958f8fba064d74cc15b287b285b"></a>
### ResponseMessage«PagerResult«ScheduleJobEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«ScheduleJobEntity»](#3c5582dff446edfec2b56a38e400f979)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="b526184b0542731e9ce046cd15c7430f"></a>
### ResponseMessage«PagerResult«ScriptEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«ScriptEntity»](#8600a8255df0072a9ebdcef867f5c524)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="022104f1b83fb14da490f0bad176c23f"></a>
### ResponseMessage«PagerResult«UserEntity»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«UserEntity»](#8c19b416cd9de9ffbed9082acff5fc80)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="b067bd9552e787aea006c9b1cd6fcd02"></a>
### ResponseMessage«PagerResult«object»»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PagerResult«object»](#87daa132c4ff15bc24c3702dd105f6c8)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="50819844bfd86a245c543cc0190b4828"></a>
### ResponseMessage«PermissionEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PermissionEntity](#permissionentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="10249428a4d55b979ef50cf7ac890aeb"></a>
### ResponseMessage«PersonAuthBindEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PersonAuthBindEntity](#personauthbindentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="c794f72feaad58a88d3da0cc427d1d9c"></a>
### ResponseMessage«PersonEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PersonEntity](#personentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="4c898cb865a7ac8d70a5f816c252d944"></a>
### ResponseMessage«PersonnelAuthorization»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PersonnelAuthorization](#personnelauthorization)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="81d3f00a16ad771d3c6fbdd99e002afb"></a>
### ResponseMessage«PositionEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[PositionEntity](#positionentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="07e4edac137972c7b8c957a922b992ee"></a>
### ResponseMessage«RelationDefineEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[RelationDefineEntity](#relationdefineentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="a8d04810db9cc799f48ca42652e0514e"></a>
### ResponseMessage«RelationInfoEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[RelationInfoEntity](#relationinfoentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="9de855e0a731771e1c13e47e25e30380"></a>
### ResponseMessage«RoleEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[RoleEntity](#roleentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="d803770b9be33fab88c050cc650ebacd"></a>
### ResponseMessage«ScheduleJobEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[ScheduleJobEntity](#schedulejobentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="75b3a1a20f80841af6d3065f6ad3b2f7"></a>
### ResponseMessage«ScriptEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[ScriptEntity](#scriptentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="26c05b8f050f76cd6252ff48bb3d92d3"></a>
### ResponseMessage«UserEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[UserEntity](#userentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="bb605f14ea851832f5ce7d794caaceca"></a>
### ResponseMessage«UserSettingEntity»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|[UserSettingEntity](#usersettingentity)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="6c061a07afa1c9738e33d1b5ec1728a9"></a>
### ResponseMessage«Void»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="bbdc11e8c14b5b13fda321a82dc3a3ac"></a>
### ResponseMessage«boolean»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据  <br>**Example** : `false`|boolean|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="d53a2c1e07a660f2c3f1b54e6a7c98bb"></a>
### ResponseMessage«int»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|integer (int32)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="f505e3d79e9444eeb3266210d702f335"></a>
### ResponseMessage«long»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|integer (int64)|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="4e3465260d0b339c0ae101c8a6821732"></a>
### ResponseMessage«object»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|object|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="7706c642a9473cc1b49b8f456cc26073"></a>
### ResponseMessage«string»
响应结果


|Name|Description|Schema|
|---|---|---|
|**message**  <br>*optional*|调用结果消息|string|
|**result**  <br>*optional*|成功时响应数据|string|
|**status**  <br>*required*|状态码|integer (int32)|
|**timestamp**  <br>*required*|时间戳|integer (int64)|


<a name="role"></a>
### Role

|Name|Schema|
|---|---|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|


<a name="roleentity"></a>
### RoleEntity

|Name|Description|Schema|
|---|---|---|
|**describe**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|


<a name="schedulejobentity"></a>
### ScheduleJobEntity

|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*||string|
|**language**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**parameters**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**quartzConfig**  <br>*optional*||string|
|**remark**  <br>*optional*||string|
|**script**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**tags**  <br>*optional*||string|
|**type**  <br>*optional*||string|


<a name="scriptentity"></a>
### ScriptEntity

|Name|Schema|
|---|---|
|**id**  <br>*optional*|string|
|**language**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**properties**  <br>*optional*|object|
|**remark**  <br>*optional*|string|
|**script**  <br>*optional*|string|
|**status**  <br>*optional*|integer (int64)|
|**tag**  <br>*optional*|string|
|**type**  <br>*optional*|string|


<a name="serializable"></a>
### Serializable
*Type* : object


<a name="sqlexecuteresult"></a>
### SqlExecuteResult

|Name|Schema|
|---|---|
|**result**  <br>*optional*|object|
|**sqlInfo**  <br>*optional*|[SqlInfo](#sqlinfo)|


<a name="sqlinfo"></a>
### SqlInfo

|Name|Schema|
|---|---|
|**datasourceId**  <br>*optional*|string|
|**sql**  <br>*optional*|string|
|**type**  <br>*optional*|string|


<a name="term"></a>
### Term

|Name|Schema|
|---|---|
|**column**  <br>*optional*|string|
|**termType**  <br>*optional*|string|
|**terms**  <br>*optional*|< [Term](#term) > array|
|**type**  <br>*optional*|enum (or, and)|
|**value**  <br>*optional*|object|


<a name="transactioninfo"></a>
### TransactionInfo

|Name|Schema|
|---|---|
|**createTime**  <br>*optional*|string (date-time)|
|**id**  <br>*optional*|string|
|**lastExecuteTime**  <br>*optional*|string (date-time)|
|**sqlHistory**  <br>*optional*|< [SqlInfo](#sqlinfo) > array|


<a name="6cb863976d93d76997d3a0a3d6c32f27"></a>
### TreeNode«string»

|Name|Schema|
|---|---|
|**allValue**  <br>*optional*|< string > array|
|**children**  <br>*optional*|< [TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27) > array|
|**level**  <br>*optional*|integer (int32)|
|**parent**  <br>*optional*|[TreeNode«string»](#6cb863976d93d76997d3a0a3d6c32f27)|
|**value**  <br>*optional*|string|


<a name="852541f5d496d0afc6b3900a123fca7e"></a>
### TreeSupportEntity«string»

|Name|Schema|
|---|---|
|**children**  <br>*optional*|< [TreeSupportEntity«string»](#852541f5d496d0afc6b3900a123fca7e) > array|
|**id**  <br>*optional*|string|
|**level**  <br>*optional*|integer (int32)|
|**parentId**  <br>*optional*|string|
|**path**  <br>*optional*|string|
|**properties**  <br>*optional*|object|


<a name="c85b38c7e7c2603ffdc8ca54e841860d"></a>
### UpdateParamEntity«Map«string,object»»

|Name|Schema|
|---|---|
|**data**  <br>*optional*|object|
|**excludes**  <br>*optional*|< string > array|
|**includes**  <br>*optional*|< string > array|
|**terms**  <br>*optional*|< [Term](#term) > array|


<a name="user"></a>
### User

|Name|Schema|
|---|---|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**type**  <br>*optional*|string|
|**username**  <br>*optional*|string|


<a name="userentity"></a>
### UserEntity

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||integer (int64)|
|**creatorId**  <br>*optional*||string|
|**id**  <br>*optional*||string|
|**name**  <br>*optional*||string|
|**password**  <br>*optional*||string|
|**properties**  <br>*optional*||object|
|**salt**  <br>*optional*||string|
|**status**  <br>*optional*|**Pattern** : `"^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"`|string (byte)|
|**username**  <br>*optional*||string|


<a name="usermenuentity"></a>
### UserMenuEntity

|Name|Schema|
|---|---|
|**children**  <br>*optional*|< [UserMenuEntity](#usermenuentity) > array|
|**describe**  <br>*optional*|string|
|**icon**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**level**  <br>*optional*|integer (int32)|
|**menuId**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**parentId**  <br>*optional*|string|
|**path**  <br>*optional*|string|
|**permissionId**  <br>*optional*|string|
|**properties**  <br>*optional*|object|
|**sortIndex**  <br>*optional*|integer (int64)|
|**url**  <br>*optional*|string|


<a name="usersettingentity"></a>
### UserSettingEntity

|Name|Schema|
|---|---|
|**createTime**  <br>*optional*|string (date-time)|
|**describe**  <br>*optional*|string|
|**id**  <br>*optional*|string|
|**key**  <br>*required*|string|
|**name**  <br>*optional*|string|
|**properties**  <br>*optional*|object|
|**setting**  <br>*required*|string|
|**settingId**  <br>*required*|string|
|**updateTime**  <br>*optional*|string (date-time)|
|**userId**  <br>*required*|string|


<a name="usertoken"></a>
### UserToken

|Name|Schema|
|---|---|
|**effective**  <br>*optional*|boolean|
|**expired**  <br>*optional*|boolean|
|**lastRequestTime**  <br>*optional*|integer (int64)|
|**maxInactiveInterval**  <br>*optional*|integer (int64)|
|**offline**  <br>*optional*|boolean|
|**requestTimes**  <br>*optional*|integer (int64)|
|**signInTime**  <br>*optional*|integer (int64)|
|**state**  <br>*optional*|enum (effective, deny, expired, offline)|
|**token**  <br>*optional*|string|
|**type**  <br>*optional*|string|
|**userId**  <br>*optional*|string|



