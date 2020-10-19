---
id: sinomatrix-sequence-interface
title: 智能表单序号接口
---





## 序号类型保存（/apis/intellisense-form/sequenceType）

序号类型保存

### 请求

* 请求方法： post请求

* 请求参数：

  ```
  {
  	"title":"序号类型名称"
  }
  ```

### 响应

JSON格式数据如下：

```
{
    "id":"3479jke32323",
    "title":"序号类型名称"
}
```



##  序号类型更新（/apis/intellisense-form/sequenceType）

序号类型更新

### 请求

* 请求方法：put方法

* 请求参数：

  ```
  {
      "id":"3479jke32323",
      "title":"序号类型名称"
  }
  ```

### 响应

JSON格式数据如下：

```
{
    "id":"3479jke32323",
    "title":"序号类型名称"
}
```



##  生成序号值（/apis/intellisense-form/sequenceRecord/apply）

根据序号类型id值和维度 两个参数，来生成序号值。 大致逻辑：根据两个参数 从序号当前值表查询是否存在，如果不存在，则新建序号当前值为0；如果存在，则把当前值获取到后+1.。然后在序号使用记录表里插入新值记录，同时生成日志文件。再把当前新值更新到序号当前值表。

### 请求

* 请求方式：get请求

* 请求参数 

  *  sequenceTypeId 序号类型id
  *  dimension 纬度值
  

### 响应

JSON数据如下

```
{
	"id": "5f87bc892196bc200c77e44e",
    "value": 6,
    "status": "申请占用"
}
```



## 更改序号值状态（/apis/intellisense-form/sequenceRecord/{sequenceRecordId}/status）

序号值状态变化逻辑

申请占用：在打开草稿页面。业务数据未保存的时候

占用：业务数据保存以后。

回收：当业务数据或者草稿删除

废弃：该号无法再使用

### 请求

* 请求方式 ：put请求

* 请求参数：

  * sequenceRecordId  序号使用记录id

  * 请求体

    ```
    {
        "formValueId":"123123",
        "status":"占用",
        "userId":"1",
        "userName":"admin",
        "deptId":"18706",
        "deptName":"系统管理部"
    }
    ```

* 响应

  ```
  {
      "id": "5f87bc892196bc200c77e44e",
      "status": "占用",
      "formValueId": "123123",
      "userId": "1",
      "userName": "admin",
      "deptId": "18706",
      "deptName": "系统管理部"
  }
  ```

  

