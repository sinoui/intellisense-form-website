---
id: extend-interface
title: 对外扩展接口
---



## 资源发布接口[sendResourceUrl]

资源发布接口，是表单设计完以后，将相应的菜单，业务角色，参与者，以及三者的关联数据，发送到该接口，应用场景，一般是发送到业务系统，业务系统经过处理，转换为符合自己的业务数据

### 请求

* 请求方式：post请求
* 请求参数：?para=<JSON数据>，其中JSON数据为utf-8编码后的数据。URLEncoder.encode(JSON数据, "utf-8")

+ 参数描述：

  ```
  {
    "time": "2020-05-09 15:55:42",
    "title": "表单名称A",
    "applyDeptId": "18043",
    "applyDeptName": "系统管理部",
    "applyUserId": "1",
    "applyUserName": "admin",
    "workId": "5eb661f3b0fe7b36b4e75de8",
    "position": {
      "code": "7dfd943c3bbe48a2b4f4df0bd8a84435",
      "order": "before",
      "resourceId": "4028d00e717bd7e10171ee04e3600426"
    },
    "rlsyConfig": [
      {
        "authorized": {
          "deptId": [],
          "roleId": ["4028d00e6ec42073016ec46896840014"],
          "user": []
        },
        "resourceCode": ["77bb56a8160b436da976f9648a3fd212"],
        "rlsyCode": "d86d922eaa574dca81455de55917bc8a",
        "rlsyName": "表单名称A起草角色",
        "type": "create"
      },
      {
        "authorized": {
          "deptRole": [{
            "roleId": "roleid1",
            "deptIds": ["deptid1", "deptid2"]
          }, {
            "roleId": "roleid2",
            "deptIds": ["deptid4", "deptid3"]
          }, {
            "roleId": "roleid3",
            "deptIds": ["deptid1", "deptid2"]
          }, {
            "roleId": "roleid4",
            "deptIds": ["deptid4", "deptid3"]
          }],
          "deptId": [
            "4028d00e717bd7e10171b608abaf02da",
            "4028d00e717bd7e10171f21b8fc1043d"
          ],
          "roleId": ["4028d00e6ec42073016ec46896840014"],
          "user": [
            {
              "deptId": "18043",
              "userId": "4028d0136b7919e7016b791f50c10004"
            },
            {
              "deptId": "4028d00e717bd7e10171b608abaf02da",
              "userId": "4028d00e717bd7e10171b61371c7030c"
            },
            {
              "deptId": "4028d00e717bd7e10171b608abaf02da",
              "userId": "4028d00e717bd7e10171b6131ae60309"
            }
          ]
        },
        "resourceCode": [
          "285de478fb274f3c932194bc04ad3aeb",
          "ee6c312d99924601bc5a863c0c45a51c"
        ],
        "rlsyCode": "c46e63a15ec940c0ad1cd95409c9eaf0",
        "rlsyName": "表单名称A办理角色",
        "type": "processor"
      },
      {
        "authorized": {
          "deptId": [
            "4028d00e717bd7e10171b608abaf02da",
            "4028d00e717bd7e10171f21b8fc1043d"
          ],
          "roleId": ["4028d00e6ec42073016ec46896840014"],
          "user": [
            {
              "deptId": "18043",
              "userId": "4028d0136b7919e7016b791f50c10004"
            },
            {
              "deptId": "4028d00e717bd7e10171b608abaf02da",
              "userId": "4028d00e717bd7e10171b61371c7030c"
            },
            {
              "deptId": "4028d00e717bd7e10171b608abaf02da",
              "userId": "4028d00e717bd7e10171b6131ae60309"
            }
          ]
        },
        "resourceCode": ["0d40bbfe56ef41c2bb820eac2337df30"],
        "rlsyCode": "53b4ff4017a7410eab3f795c5895cbab",
        "rlsyName": "表单名称A查看角色",
        "type": "view"
      }
    ]
  }
  ```

  其中`deptRole`指部门范围内的业务角色。注意与同级别的`roleId`的区别。`roleId`是指没有部门限定范围的业务角色，而`deptRole`值的是部门范围内的业务角色。二者有可能同时出现。在集成处理时，需多加注意。

  重要参数说明：

  - `title` - 表单标题，同时也是表单一级栏目标题
  - `workId` - 表单 id
  - `position` - 表单一级栏目在导航中的位置
    - `resourceId` - 相对的资源 id
    - `order` - 相对于`resourceId`的位置，`before`表示之前，`after`表示之后
  - `rlsyConfig` - 各个子菜单的授权信息
### 响应

JSON 数据如下：

```json
{ "status": "1", "msg": "接口响应成功", "resourceId": "123" }
```

重要属性说明：

- `status` - 表示接口响应结果，`1`表示成功，`0`表示失败
- `resourceId` - 资源 id

### 项目组集成要点

业务平台需要接收 5 个参数，即：

- 一级栏目名称
- 链接
- 相对定位的栏目 id
- 定位位置：`before` 表示之前，`after`表示之后
- 授权人员

需要从请求参数中获取以上参数：

| 太极平台参数      | 对应的请求参数                                               |
| ----------------- | ------------------------------------------------------------ |
| 一级栏目名称      | `title`                                                      |
| 链接              | `http://<智能表单应用的ip>/intellisense-form/${workId}/home?subtitle=<副标题>&logo=<logo链接>` |
| 相对定位的栏目 id | `position.resourceId`                                        |
| 定位位置          | `position.order`                                             |
| 授权人员          | 需要从 `rlsyConfig` 参数中获取到授权人员。详情见获取授权人员章节。 |

链接中的参数说明：

- `<副标题>` 对应着副标题，如“xxx综合管理系统”
- `logo` 参数指定logo链接，如`http://10.10.10.10:8888/logo.png`，也可以是`/logo.png`（如果不指定ip，则需要在代理服务器上处理logo请求。）

> 特别注意：`logo`参数需要经过`encodeURIComponent(logo)`编码。

## 获取资源列表[getSendResourceUrl]



###  请求

* 请求方式： get请求
* 请求参数：
  * subId - 业务系统id

### 响应



```json
{
  "status": "1",
  "resourceInfo": [
    {
      "resourceId": "4028d00e717bd7e10171fe94621a0508",
      "resourcePid": "0",
      "resourceName": "高级+++++++++++"
    }
  ]
}
```

* 重要参数说明：

- `resourceId` - 资源的 id
- `resourcePid` - 父级资源 id
- `resourceName` - 资源名称



##  通过用户id获取用户角色 [getFlowRolesById]

### 请求

* 请求方式：get请求
* 请求参数
  * uid - 用户的id
  * subId - 系统id

### 响应

* json格式

```json
{
    "status": "1",
    "msg": null,
    "rolesInfo": [
        {
        "rolesId": "4028d00e6ec42073016ec46922390016",
        "rolesName": "处员"
        }
    ]
}
```
  * 重要属性说明
    * status - 响应状态 0成功，其他失败
    * msg - 信息
    * roleInfo - 角色集合
      * rolesId - 角色id
      * rolesName - 角色名称



##  根据用户的id获取用户所在部门 [getAllDeptByUserId]

由于用户可能存在一人多岗的情况，此处获取的部门信息可能有多个

### 请求

* 请求方式：get请求
* 请求参数：userId - 用户id

### 响应

* json格式返回值
 ```json
  {

   "status": "1",

   "deptInfo": [

  	 {

 		"deptid": "18043",

  		 "deptname": "系统管理部"

  	 ｝

  ｝
 ```
* 重要属性说明

  * deptid - 部门id
  * deptname - 部门名称

## 通过部门id 获取祖先部门 [getAllSuperDeptById]

获取部门id的祖先部门，可能存在多个，返回的数据不包括查询部门id自身

### 请求

* 请求方式：get请求
* 请求参数：deptId - 部门id



### 响应

* 响应数据
```json
  {

  ​    "status": "1",

  ​    "deptInfo": [

  ​        {

  ​            "deptid": "4028d00e6ec96438016ec976fee20000",

  ​            "treeId": "00030003",

  ​            "deptname": "金融保险部"

  ​       ｝

     ]

  }
```
* 重要属性说明

  - deptid - 部门id
  - treeId - 组织树ID , 智能表单使用该值的长度来区分祖先的先后。如果没有组织树ID可以通过1，11，111 来表示顺序，长度越大越在下面。
  - deptname - 部门名称



## 通过用户id，获取用户基本信息 [**getUserInfoByIdUrl**]

通过id，获取用户的基本信息

### 请求

* 请求方式：get请求

* 请求参数：

    * uid - 用户的id   

### 响应

* 响应数据：
```json
  {

  ​    "status": "1",

  ​    "userInfo": [

  ​        {

  ​            "uid": "1",

  ​            "userName": "admin",

  ​            "userFullName": "admin"

  ​      ｝

     ]

  ｝
```
​    重要属性说明

- userName - 用户登录名
- userFullName - 用户真实姓名



## 通过部门id，获取部门基本信息[getDeptInfoBydeptId]

通过部门id，获取部门基本信息

### 请求

* 请求方式：get请求
* 请求参数 deptId - 部门id

### 响应

* 响应数据
```json
  {

  ​    "status": "1",

  ​    "msg": "接口响应成功",

  ​    "deptInfo": [

  ​        {

  ​            "deptid": "18043",

  ​            "deptname": "系统管理部",

  ​      ｝

     ]

  }
```


* 重要属性说明

  - deptid - 部门id
  - deptname - 部门名称



##  获取部门或者部门用户树[getDeptAndUserInfoUrl]



### 请求

* 请求方式：post请求
* 请求参数：?para=<JSON数据>，其中JSON数据为utf-8编码后的数据。URLEncoder.encode(JSON数据, "utf-8")
* 参数说明：
  * type - dept/user  dept是表示要查询部门信息，user表示查询的是用户信息
  * pdeptId - 父级的id
  * name - 查询的关键字

### 响应

* 响应数据
```json
  {"status": "1",
  	"msg": "接口响应成功",
  	"deptUserTree": [
  		{
  			"uuid": "4028d00e730339c201738df7ab920057",
  			"uupid": "0",
  			"name": "龙煤集团",
  			"type": "dept"
  		}

   	]

  }
```
* 重要参数说明

  uuid - 数据的id

  uupid - 父级id

  name - 名称

  type - 对应的节点数据类型



## 新增资源列表[/resource/saveResource]

### 请求

* 请求方法：post请求
* 请求参数：?para=<JSON数据>，其中JSON数据为utf-8编码后的数据。URLEncoder.encode(JSON数据, "utf-8")
* 参数说明：
  * name - 资源名称
  * superId - 父资源的id
  * subId - 业务系统id
  * resourceId - 相对资源的id
  * order - 相对资源的位置，值[child|before|after]，分别为子代，前置，后置
  * author - 操作人的id
  * url - 资源的点击链接
  * ext - 额外属性

### 响应

* 响应数据

  ~~~
  {
  	"status": "1",
  	"resourceId":"3ui2lk3j522"
  	"msg":"成功"
  }
  ~~~

* 参数说明

  * status - 1=正常；0=系统资源不存在 -1=调用接口异常
  * resourceId - 资源ID
  * msg - 异常信息



## 修改资源接口[/resource/updateResource]

### 请求

* 请求方法：post请求
* 请求参数：?para=<JSON数据>，其中JSON数据为utf-8编码后的数据。URLEncoder.encode(JSON数据, "utf-8")
* 参数说明：
  * resourceName - 资源名称
  * content - 资源内容
  * fromUrl - 表单url
  * resourceId - 资源ID
  * ext - 表单扩展

### 响应

* 响应数据

  ~~~
  {
  	"status": "1",
  	"resourceId":"3ui2lk3j522"
  	"msg":"成功"
  }
  ~~~

*  参数说明

  * status - 1=正常；0=系统资源不存在 -1=调用接口异常
  * resourceId - 资源ID
  * msg - 异常信息

## 排序资源接口[/resource/sortResource]

### 请求

* 请求方法：post请求
* 请求参数：?para=<JSON数据>，其中JSON数据为utf-8编码后的数据。URLEncoder.encode(JSON数据, "utf-8")
* 参数说明：
  * resourcId - 参考资源的id
  * order - 相对资源的位置，值[child|before|after]，分别为子代，前置，后置
  * author - 操作人员id
  * id - 排序资源的ID

### 响应

* 响应数据

  ~~~
  {
  	"status": "1",
  	"resourceId":"3ui2lk3j522"
  	"msg":"成功"
  }
  ~~~

*  参数说明

  * status - 1=正常；0=系统资源不存在 -1=调用接口异常
  * resourceId - 资源ID
  * msg - 异常信息