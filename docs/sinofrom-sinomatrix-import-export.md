---
id: sinofrom-sinomatrix-import-export
title: 智能表单配置数据整体迁移
---

本文档详细描述了智能表单相关数据的整体迁移方案，总共包括以下 4 个部分：
- 智能表单的表单配置信息迁移
- 智能表单的表单数据表的表结构迁移
- 统一授权配置迁移
- 工作流配置迁移

## 智能表单 - 表单配置信息迁移

智能表单的配置信息存放在 mongodb 中，本数据迁移方案使用到 mongodump 与 mongorestore 工具，若没有安装此工具请自行到[官网](https://www.mongodb.com/try/download/database-tools)根据自己的操作系统版本进行下载。

### 导出

在需要导出数据的智能表单 `mongodb` 所在服务器上使用 `mongodump` 命令导出智能表单配置信息：

```shell
$ cd mongodump工具目录
$ ./mongodump --forceTableScan --db=form --excludeCollection=fs.chunks --excludeCollection=fs.files --excludeCollection=RemoteEventListener --excludeCollection=SequenceRecord --excludeCollection=SequenceStatusLog --excludeCollection=SequenceValue -o /root/sinoform-data
```

以上命令中 `--db=from` 表示导出的数据库为 form，若我们使用的数据库名不是 form 则根据实际情况进行更改。

以上命令中 `-o /root/sinoform-data` 指定了导出的数据存放位置为 `/root/sinoform-data`。

执行以上命令导出成功后，会生成一个目录 `/root/sinoform-data/form`， 我们可以将该目录打包：

```shell
$ cd /root/sinoform-data
$ tar zcvf form.tar.gz form
```

### 导入

将导出的 `form.tar.gz` 上传至需要导入数据的 mongodb 所在服务器的 `/root/sinoform-data` 目录中，执行以下命令进行导入：

```shell
# 解压
$ cd /root/sinoform-data
$ tar zxvf form.tar.gz
# 导入
$ cd mongorestore工具目录
$ ./mongorestore --db=form /root/sinoform-data/form
```

## 智能表单 - 数据表表结构迁移

### 导出

在浏览器地址框中输入智能表单数据表结构导出的接口 `http://智能表单ip:端口/apis/intellisense-form/formData/export-table` ，访问该接口可得到一个 `sinoform_create_table.sql` 文件，此文件即为当前智能表单使用的所有数据表表结构的建表语句。

### 导入示例（mysql）

创建智能表单数据库、用户及授权：

```shell
$ mysql -u root -p  # 输入密码登录root用户
# 创建数据库 FORM
mysql> CREATE DATABASE FORM DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
# 创建用户 form , 此处密码为 123456，根据需要进行修改
mysql> CREATE USER "form"@"%" IDENTIFIED BY "123456";
# 将数据库 FORM 的所有权限授权给 form 用户
mysql> GRANT ALL PRIVILEGES ON `FORM`.* TO 'form'@'%' WITH GRANT OPTION;
# 退出
mysql> exit;
```

将导出的 `sinoform_create_table.sql` 文件上传至需要导入数据的 mysql 所在服务器的 `/root/sinoform-data` 目录：

```shell
# mysql导入语法：
#   mysql -u [执行导入的数据库用户名] -p [导入的数据库名] < [导入文件的路径]
$ mysql -u form -p FORM < /root/sinoform-data/sinoform_create_table.sql
```

## 工作流配置迁移

### 导出表信息

需要导出`表结构`及`数据`的表：

|           表名           |           描述           |
| :----------------------: | :----------------------: |
|       FLOW_ACTION        |        动作配置表        |
|        FLOW_BOUND        |        涉及范围表        |
|       FLOW_BUTTON        |        按钮配置表        |
|   FLOW_BUTTON_RELATION   |      流程按钮关联表      |
|     FLOW_CONFIGITEM      |  权限标识表（手动维护）  |
|      FLOW_DECISION       |       （暂时不用）       |
|  FLOW_DEFINE_ATTRIBUTE   |      字段标识配置表      |
|   FLOW_DEFINE_BUSINESS   |        业务表配置        |
|   FLOW_DEFINE_RELATION   |      流程关联业务表      |
|        FLOW_EVENT        |        事件配置表        |
|    FLOW_EVENT_ACTION     |      事件动作关联表      |
|  FLOW_EVENTACTION_PARA   |      动作参数配置表      |
|      FLOW_FILETYPE       |        流程类型表        |
|    FLOW_FILETYPE_DEPT    |       （暂时不用）       |
|   FLOW_FILETYPE_SCOPE    |       （暂时不用）       |
|      FLOW_FLOWTYPE       |    流程类型流程关联表    |
|        FLOW_LIMIT        |  范围限制表（手动维护）  |
|   FLOW_NODEPURIEWROLE    |        权限角色表        |
|    FLOW_NODEPURIEWELE    |        权限内容表        |
|     FLOW_PAGECONTROL     |       （暂时不用）       |
|  FLOW_PAGECONTROL_TYPE   |       （暂时不用）       |
|   FLOW_PROCESSVARIABLE   |        流程变量表        |
|       FLOW_PURVIEW       | 管理员类型表（手动维护） |
|   FLOW_RUNTIMEVARIABLE   |      (运转时变量表)      |
|        FLOW_SCENE        |          场景表          |
|    FLOW_SEARCH_RIGHT     |       （暂时不用）       |
|   FLOW_STATUS_FLOWTYPE   |   （状态图流程类型表）   |
|     FLOW_STATUS_SYS      |     （状态图系统表）     |
|    FLOW_STATUS_WFLEVE    |     （状态图节点表）     |
|  FLOW_STATUS_WFOPERATE   |     （状态图路由表）     |
|   FLOW_STATUS_WORKFLOW   |     （状态图流程表）     |
|       FLOW_SUBIDEA       |   节点配置的意见类型表   |
|    FLOW_SUBIDEA_TYPE     |      意见类型配置表      |
|  FLOW_SUBIDEA_RELATION   |    流程意见类型关联表    |
|       FLOW_SUBSIGN       |   节点配置的签名类型表   |
|    FLOW_SUBSIGN_TYPE     |      签名类型配置表      |
|  FLOW_SUBSIGN_RELATION   |    流程签名类型关联表    |
|         FLOW_SYS         |        （系统表）        |
|     FLOW_SYS_CONFIG      |      （系统配置表）      |
|       FLOW_TARGET        |  涉及对象表（手动维护）  |
|    FLOW_TARGET_BOUND     |      范围限制对应表      |
| FLOW_USERPURVIEWRELATION |          权限表          |
|     FLOW_WAITURLURL      |          配置表          |
|       FLOW_WFLEVE        |          节点表          |
|      FLOW_WFOPERATE      |          路由表          |
|      FLOW_WORKFLOW       |          流程表          |
|   FLOWMANAGER_FLOWTYPE   |          分类表          |

仅需导出`表结构`的表：

|            表名            |                 描述                 |
| :------------------------: | :----------------------------------: |
|         FLOW_IDEA          |            （正式意见表）            |
|     FLOW_IDEASIGN_TEMP     |            （临时意见表）            |
|         FLOW_READ          |              （已办表）              |
|       FLOW_RACC_READ       |        （被授权人办理已办表）        |
|       FLOW_SCCREDIT        |            （待办授权表）            |
|    FLOW_SCCREDIT_BACKUP    |                                      |
|     FLOW_SCCREDIT_SORT     |          （待办授权分类表）          |
|         FLOW_SIGN          |              （签名表）              |
|        FLOW_SIGN_IN        |              （签收表）              |
|         FLOW_WFLOG         |                日志表                |
|     FLOW_WORKFLOWINFO      |                实例表                |
|     FLOW_WRITE_ACTION      |                                      |
|  FLOW_WORKFLOWINFO_BACKUP  |              实例备份表              |
| FLOW_WORKFLOWINFO_OVERTIEM |                                      |
|   FLOW_WORKFLOWINFO_SNAP   |              实例快照表              |
|         FLOW_WRITE         |                待办表                |
|     FLOW_WRITE_BACKUP      |              待办备份表              |
|    FLOW_WRITE_OVERTIME     | （待办过期提醒表原则上工作流不维护） |
|      TBL_BUSINESSLOCK      |              （加锁表）              |

### 导出示例（mysql）

登录 mysql 数据库所在服务器，执行以下命令导出数据：

```shell
# 导出工作流配置的表结构及配置数据
$ mysqldump -u root -p EPCLOUD --ignore-table=EPCLOUD.FLOW_IDEA --ignore-table=EPCLOUD.FLOW_IDEASIGN_TEMP --ignore-table=EPCLOUD.FLOW_READ --ignore-table=EPCLOUD.FLOW_RACC_READ --ignore-table=EPCLOUD.FLOW_SCCREDIT --ignore-table=EPCLOUD.FLOW_SCCREDIT_BACKUP --ignore-table=EPCLOUD.FLOW_SCCREDIT_SORT --ignore-table=EPCLOUD.FLOW_SIGN --ignore-table=EPCLOUD.FLOW_SIGN_IN --ignore-table=EPCLOUD.FLOW_WFLOG --ignore-table=EPCLOUD.FLOW_WORKFLOWINFO --ignore-table=EPCLOUD.FLOW_WRITE_ACTION --ignore-table=EPCLOUD.FLOW_WORKFLOWINFO_BACKUP --ignore-table=EPCLOUD.FLOW_WORKFLOWINFO_OVERTIME --ignore-table=EPCLOUD.FLOW_WORKFLOWINFO_SNAP --ignore-table=EPCLOUD.FLOW_WRITE --ignore-table=EPCLOUD.FLOW_WRITE_BACKUP --ignore-table=EPCLOUD.FLOW_WRITE_OVERTIME --ignore-table=EPCLOUD.TBL_BUSINESSLOCK > flow_config.sql
# 导出记录表（仅导出表结构）
$ mysqldump -d EPCLOUD --tables FLOW_IDEA  FLOW_IDEASIGN_TEMP FLOW_READ FLOW_RACC_READ FLOW_SCCREDIT FLOW_SCCREDIT_BACKUP FLOW_SCCREDIT_SORT FLOW_SIGN FLOW_SIGN_IN FLOW_WFLOG FLOW_WORKFLOWINFO FLOW_WRITE_ACTION FLOW_WORKFLOWINFO_BACKUP FLOW_WORKFLOWINFO_OVERTIME FLOW_WORKFLOWINFO_SNAP FLOW_WRITE FLOW_WRITE_BACKUP FLOW_WRITE_OVERTIME TBL_BUSINESSLOCK > flow_data.sql
```

### 导入示例（mysql）

创建工作流数据库、用户及授权：

```shell
$ mysql -u root -p  # 输入密码登录root用户
# 创建数据库 EPCLOUD
mysql> CREATE DATABASE EPCLOUD DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
# 创建用户 epcloud , 此处密码为 123456，根据需要进行修改
mysql> CREATE USER "epcloud"@"%" IDENTIFIED BY "123456";
# 将数据库 EPCLOUD 的所有权限授权给 epcloud 用户
mysql> GRANT ALL PRIVILEGES ON `EPCLOUD`.* TO 'epcloud'@'%' WITH GRANT OPTION;
# 退出
mysql> exit;
```

将示例中导出的 `flow_config.sql` 和 `flow_data.sql` 文件上传至需要导入数据的 mysql 所在服务器的 `/root/sinoform-data` 目录，执行以下命令导入：

```shell
$ mysql -u epcloud -p EPCLOUD < /root/sinoform-data/flow_data.sql
$ mysql -u epcloud -p EPCLOUD < /root/sinoform-data/flow_config.sql
```

## 统一授权配置迁移

### 导出表信息

需要导出`表结构`及`数据`的表：

|          表名          |            描述            |
| :--------------------: | :------------------------: |
|       audit_type       |      授权类型的字典表      |
|   dbsource_metadata    |        数据源配置表        |
|        sylg_map        |       数据字段定义表       |
|       sylg_tabl        |      需审计的表信息表      |
|     sylg_tabltype      |        表信息分类表        |
|      sys_ad_type       |         授权类型表         |
|     sys_audit_user     |     审计模块授权到人表     |
|  sys_authorized_audit  |          待审核表          |
|    sys_config_info     |         统一配置表         |
|    sys_ctrl_record     |  系统角色与资源关系配置表  |
|  sys_custom_usdr_data  |         数据级权限         |
|     sys_dept_field     |       部门属性扩展表       |
|     sys_dept_sub_p     |   系统授权打包部门关联表   |
|     sys_dictionary     |           字典表           |
|     sys_dptm_lvel      |         部门级别表         |
|    sys_element_con     |         资源元素表         |
|    sys_field_config    |   部门用户基础扩展字段表   |
|     sys_flow_dept      |         部门信息表         |
|   sys_flow_dept_ext    |       部门扩展信息表       |
|     sys_flow_role      |         业务角色表         |
|     sys_flow_user      |         用户信息表         |
|   sys_flow_user_ext    |       用户信息扩展表       |
|   sys_flow_user_temp   |       用户信息临时表       |
| sys_flow_user_temp_ext |     用户扩展信息临时表     |
|    sys_frole_sub_p     | 系统授权打包业务角色关联表 |
|     sys_group_info     |         群组信息表         |
|    sys_group_sub_p     |   系统授权打包群组关联表   |
|      sys_grup_key      |       群组类别管理表       |
|      sys_package       |         授权打包表         |
|   sys_process_audit    |        流程式审批表        |
|    sys_relement_re     |       公共资源元素表       |
|      sys_resource      |         资源配置表         |
|     sys_rlsy_dprb      |   系统角色授权部门业务表   |
|     sys_rlsy_grup      |   系统角色授权部门群组表   |
|     sys_rlsy_user      |    用户与系统角色关联表    |
|    sys_robject_ext     |       资源扩展信息表       |
|     sys_role_sub_p     | 系统授权打包系统角色关联表 |
|     sys_role_syst      |         系统角色表         |
|     sys_rtype_sub      |    资源类型与系统关系表    |
|    sys_sub_account     |      子系统用户管理表      |
|    sys_sub_manager     |       子系统管理员表       |
|    sys_sub_rd_info     |        子系统信息表        |
|    sys_sub_rd_type     |         系统类型表         |
|      sys_sub_user      |       系统授权到人表       |
|     sys_user_dprb      |       部门用户关联表       |
|     sys_user_field     |                            |
|     sys_user_frole     |                            |
|     sys_user_grup      |                            |
|     user_info_bind     |                            |

仅需导出`表结构`的表：

|        表名         |         描述         |
| :-----------------: | :------------------: |
|      auditlog       | 审计日志表（已废除） |
|   ca_bind_history   |    CA 绑定历史表     |
| init_dept_user_data |    导入数据记录表    |
|       message       |      系统消息表      |
|     sylg_event      |      审计事件表      |
|     sylg_result     |    日志信息查询表    |
|      sylg_temp      |    需清洗的日志表    |
|    sys_audit_log    |    请求记录日志表    |

### 导出示例 （mysql）

登录 mysql 数据库所在服务器，执行以下命令导出数据：

```shell
# 导出统一授权配置的表结构及配置数据
$ mysqldump -u root -p SINOEPUIAS --ignore-table=SINOEPUIAS.AUDITLOG --ignore-table=SINOEPUIAS.CA_BIND_HISTORY --ignore-table=SINOEPUIAS.INIT_DEPT_USER_DATA --ignore-table=SINOEPUIAS.MESSAGE --ignore-table=SINOEPUIAS.SYLG_EVENT --ignore-table=SINOEPUIAS.SYLG_RESULT --ignore-table=SINOEPUIAS.SYLG_TEMP --ignore-table=SINOEPUIAS.SYS_AUDIT_LOG > uias_config.sql

# 导出记录表（仅导出表结构）
$ mysqldump -d SINOEPUIAS --tables AUDITLOG CA_BIND_HISTORY INIT_DEPT_USER_DATA MESSAGE SYLG_EVENT SYLG_RESULT SYLG_TEMP SYS_AUDIT_LOG > uias_data.sql
```

### 导入示例（mysql）

创建统一授权数据库、用户及授权：

```shell
$ mysql -u root -p  # 输入密码登录root用户
# 创建数据库 SINOEPUIAS
mysql> CREATE DATABASE SINOEPUIAS DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
# 创建用户 sinoepuias , 此处密码为 123456，根据需要进行修改
mysql> CREATE USER "sinoepuias"@"%" IDENTIFIED BY "123456";
# 将数据库 SINOEPUIAS 的所有权限授权给 sinoepuias 用户
mysql> GRANT ALL PRIVILEGES ON `SINOEPUIAS`.* TO 'sinoepuias'@'%' WITH GRANT OPTION;
# 退出
mysql> exit;
```

将导出的 `uias_config.sql` 和 `uias_data.sql` 文件上传至需要导入数据的 mysql 所在服务器的 `/root/sinoform-data` 目录，执行以下命令导入：

```shell
$ mysql -u sinoepuias -p SINOEPUIAS < /root/sinoform-data/uias_config.sql
$ mysql -u sinoepuias -p SINOEPUIAS < /root/sinoform-data/uias_data.sql
```
