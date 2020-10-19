---
id: sinomatrix-sequence-table
title: sinomatrix智能表单的序号模块表设计说明
---



## 序号组件在表单中的应用

序号的生成是由维度值和序号类型来决定的。维度值的生成可参考前端文档



## 序号表设计

1. 序号类型表（SequenceType）

   | 字段名 | 字段         |
   | ------ | ------------ |
   | id     | 类型id       |
   | title  | 序号类型标题 |

2. 序号当前值表（SequenceValue）

   | 字段名         | 字段       |
   | -------------- | ---------- |
   | id             | 主键id     |
   | sequenceTypeId | 序号类型id |
   | dimension      | 维度       |
   | currentValue   | 当前值     |

3. 序号使用记录表（SequenceRecord）

   | 字段名         | 字段           |
   | -------------- | -------------- |
   | id             | 主键id         |
   | sequenceTypeId | 序号类型id     |
   | dimension      | 维度           |
   | value          | 序号值         |
   | status         | 状态           |
   | formValueId    | 绑定的业务主键 |
   | userId         | 创建用户id     |
   | userName       | 创建用户名     |
   | deptId         | 创建部门id     |
   | deptName       | 创建部门名称   |

4. 序号状态更改表

   | 字段名           | 字段           |
   | ---------------- | -------------- |
   | id               | 主键           |
   | sequenceRecordId | 序号使用记录id |
   | status           | 更改状态值     |
   | createTime       | 变更时间       |



