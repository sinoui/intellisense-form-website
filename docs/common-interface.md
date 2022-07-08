---
id: common-interface
title: 常用接口
---

## 获取当前用户登录数据接口[/apis/intellisense-form/common/userInfo]

### 请求

- 请求方法：get 请求
- 请求参数：无
- 请求头：需要在 cookie 中有 SSOID 属于的登录令牌

### 响应

- json 格式

```json
{
	"userId":"用户id",
	"userName":"用户昵称",
	"deptId":"部门id",
	"deptName":"部门名称",
	"roleIds":["角色1id","角色2id",...],
	"deptInfo":["一级部门id","二级部门id"],  //假设deptId是三级部门
	"deptInfoName":["一级部门名称","二级部门名称"]
}
```

- 重要属性说明
  - userId- 用户 id
  - userName - 用户昵称
  - deptId - 部门 id
  - deptName - 部门名称
  - roleIds - 角色 id 集合
  - deptInfo - 排序好的父部门 id
  - deptInfoName - 排序好的父部门名称
