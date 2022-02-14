---
id: sinoform-sdk-event-data
title: 数据结构
---


# 数据结构



## Event

事件信息

所有实现了com.sinosoft.sdk.event.Event接口的事件对象，包括：FlowEndEvent、FlowSendEvent

| 数据类型                  | 属性名称       | 描述                                                         |
| :------------------------ | :------------- | :----------------------------------------------------------- |
| [FormDesign](#FormDesign) | formDesign     | 表单设计信息                                                 |
| [FormValue](#FormValue)   | formValue      | 表单数据                                                     |
| JSONObject                | workFlowParam  | 工作流请求的参数 ([FlowSendEvent](#FlowSendEvent-workFlowParam-workFlowResult)、[FlowEndEvent](#FlowEndEvent-workFlowParam)) |
| JSONObject                | workFlowResult | 工作流请求的响应([FlowSendEvent](#FlowSendEvent-workFlowParam-workFlowResult)、[FlowEndEvent](#FlowEndEvent-workFlowResult)) |
| [FlowIdea](#FlowIdea)     | workFlowIdea   | 流程意见信息                                                 |
| String                    | userId         | 当前用户id                                                   |
| String                    | userName       | 当前用户名                                                   |


<h6 id="FlowConfig"></h6>

## FlowConfig

流程配置信息

| 数据类型                              | 属性名称  | 描述       |
| :------------------------------------ | :-------- | :--------- |
| String                                | id        | 主键Id     |
| String                                | todoUrl   | 待办URL    |
| String                                | flowName  | 流程名称   |
| List<[SelectedDept](#SelectedDept)\> | deptScope | 部门范围   |
| List<[FlowNode](#FlowNode)\>         | nodes     | 工作流节点 |
| List<[FlowLine](#FlowLine)\>         | lines     | 工作流路由 |

<h6 id="FlowIdea"></h6>

## FlowIdea

流程意见

| 数据类型      | 属性名称     | 描述                                       |
| :------------ | :----------- | :----------------------------------------- |
| String        | id           | 主键                                       |
| [User](#User) | user         | 用户信息                                   |
| String        | formValueId  | 业务主键Id                                 |
| String        | workItemId   | 待办事项id                                 |
| String        | wfleveName   | 节点名称id                                 |
| String        | wfleveId     | 节点id                                     |
| Integer       | type         | 意见类型：0表示临时意见，1表示正式意见     |
| Integer       | businessType | 意见业务类型：1表示流转意见，2表示退回意见 |
| String        | idea         | 意见节点配置：disabled                     |
| String        | signImgId    | 签名图片Id                                 |
| String        | signImgUrl   | 签名图片下载地址                           |
| String        | content      | 意见内容                                   |
| String        | createTime   | 创建时间                                   |

<h6 id="FlowLine"></h6>

## FlowLine

工作流路由信息

| 数据类型                                      | 属性名称             | 描述             |
| :-------------------------------------------- | :------------------- | :--------------- |
| String                                        | id                   | 主键             |
| String                                        | title                | 路由名称         |
| String                                        | sourceRef            | 源节点           |
| String                                        | sourceEdge           | 源节点连接位置   |
| String                                        | targetRef            | 目标节点         |
| String                                        | targetEdge           | 目标节点连接位置 |
| Double[][]                                    | path                 | 转折点坐标       |
| String                                        | relateRange          | 涉及范围         |
| String                                        | relateType           | 涉及部门类型     |
| String                                        | controlExpression    | 控制公式         |
| List<[ControlCondition](#ControlCondition)\> | controlCondition     | 控制条件         |
| List<String\>                                | participantCondition | 参与者条件       |
| String                                        | isNeedBack           | 是否需要返回     |
| String                                        | isBeginSign          | 是否为开始会签   |
| String                                        | isEndSign            | 是否为结束会签   |

<h6 id="FlowNode"></h6>

## FlowNode

流程节点信息

| 数据类型                              | 属性名称           | 描述                                      |
| :------------------------------------ | :----------------- | :---------------------------------------- |
| String                                | id                 | 主键                                      |
| String                                | type               | 节点类型 startevent \|endevent \|usertask |
| String                                | name               | 节点名称                                  |
| Double                                | x                  | 位置X坐标                                 |
| Double                                | y                  | 位置Y坐标                                 |
| Candidate                             | candidate          | 候选人设置                                |
| String                                | idea               | 见域设置，disabled \|required \|optional  |
| JSONObject                            | fieldsAuth         | 字段级权限                                |
| List<[NodeOper](#NodeOper)\>         | nodeOperation      | 按钮操作设置                              |
| String                                | doneType           | 字段流转规则                              |
| List<[SelectedDept](#SelectedDept)\> | selectedDepts      | 过滤部门                                  |
| String                                | isInnerflow        | 是否内部流程                              |
| String                                | innerflowRouteName | 内部流转环节名称                          |
| String                                | relateType         | 是否部门流转跨部门                        |

<h6 id="FormAttributes"></h6>

## FormAttributes

表单页面属性

| 数据类型 | 属性名称    | 描述         |
| :------- | :---------- | :----------- |
| String   | variant     | 输入框模式   |
| String   | dense       | 密集模式     |
| String   | layout      | 标签排列方式 |
| String   | labelLayout | 标签布局方式 |
| String   | labelWidth  | 标签宽度     |
| String   | printType   | 打印模式     |
| String   | idSeed      | 表单项个数   |

<h6 id="FormConfig"></h6>

## FormConfig

表单页面配置

| 数据类型                          | 属性名称 | 描述         |
| :-------------------------------- | :------- | :----------- |
| List<[FormItem](#FormItem)\>     | items    | 表单元素列表 |
| [FormAttributes](#FormAttributes) | form     | 表单属性     |

<h6 id="FormData"></h6>

## FormData

表单数据

| 数据类型       | 属性名称       | 描述                       |
| :------------- | :------------- | :------------------------- |
| String         | id             | 主键                       |
| String         | deptId         | 流程发起人所属部门         |
| String         | status         | 业务状态                   |
| String         | userId         | 流程发起人id               |
| List<String\> | deptIds        | 当前流程经办的部门id列表   |
| List<String\> | roleIds        | 当前流程经办的角色id列表   |
| List<String\> | userIds        | 当前流程经办的用户id列表   |
| List<String\> | deptInfo       | 当前流程经办的部门信息列表 |
| String         | deptName       | 流程发起人部门名称         |
| String         | userName       | 流程发起人用户名           |
| String         | createTime     | 流程发起时间               |
| String         | workflowid     | 工作流id                   |
| List<String\> | deptInfoName   | 当前流程经办的部门名称列表 |
| String         | workflowStatus | 工作流状态                 |

<h6 id="FormDesign"></h6>

## FormDesign

表单设计信息

| 数据类型                                  | 属性名称           | 描述                                            |
| :---------------------------------------- | :----------------- | :---------------------------------------------- |
| String                                    | id                 | 主键id                                          |
| String                                    | title              | 表单标题                                        |
| Boolean                                   | publishStatus      | 发布状态                                        |
| [FormConfig](#FormConfig)                 | formConfig         | 组件配置                                        |
| List<[FlowConfig](#FlowConfig)\>         | flowConfigs        | 流程配置                                        |
| List<[User](#User)\>                     | viewers            | 可查看该表单设计数据的人员信息                  |
| [NavigationPosition](#NavigationPosition) | navigationPosition | 资源导航信息                                    |
| String                                    | createUserId       | 表单创建用户的id                                |
| String                                    | createUserName     | 表单创建用户的用户名                            |
| String                                    | createDeptId       | 表单创建用户的所属部门id                        |
| String                                    | createDeptName     | 表单创建用户的所属部门名称                      |
| String                                    | createTime         | 创建时间                                        |
| String                                    | updateTime         | 修改时间                                        |
| String                                    | sysId              | 系统Id                                          |
| String                                    | tableName          | 来对应的数据库表名                              |
| String                                    | applicationId      | 归属哪个应用                                    |
| Integer                                   | formType           | 表单类型 1:表示带流程表单(默认),2表示非流程表单 |
| [FormPermission](#FormPermission)         | permission         | 非流程表单权限                                  |

<h6 id="FormItem"></h6>

## FormItem

表单元素

| 数据类型                      | 属性名称        | 描述       |
| :---------------------------- | :-------------- | :--------- |
| String                        | id              | 主键id     |
| String                        | fieldName       | 元素名称   |
| String                        | title           | 元素标题   |
| String                        | type            | 元素类型   |
| String                        | width           | 宽度       |
| List<[FormItem](#FormItem)\> | children        | 子元素列表 |
| String                        | tableName       | 表名       |
| boolean                       | layoutFormField | 布局       |
| Integer                       | layerIndex      | 层次       |

<h6 id="FormPermission"></h6>

## FormPermission

非流程表单权限信息

| 数据类型                                          | 属性名称   | 描述             |
| :------------------------------------------------ | :--------- | :--------------- |
| List<[FormPermissionItem](#FormPermissionItem)\> | submit     | 提交权限         |
| List<[FormPermissionItem](#FormPermissionItem)\> | manageSelf | 管理自己权限     |
| List<[FormPermissionItem](#FormPermissionItem)\> | manageAll  | 管理全部权限     |
| List<[FormPermissionItem](#FormPermissionItem)\> | view       | 查看全部数据权限 |

<h6 id="FormPermissionItem"></h6>

## FormPermissionItem

权限元素

| 数据类型 | 属性名称 | 描述                      |
| :------- | :------- | :------------------------ |
| String   | id       | id                        |
| String   | name     | 名称                      |
| String   | type     | 类型 user \| dept \| role |
| String   | deptId   | 部门id                    |

<h6 id="FormValue"></h6>

## FormValue

表单数据

| 数据类型              | 属性名称     | 描述   |
| :-------------------- | :----------- | :----- |
| String                | id           | 主键id |
| String                | formDesignId | 表单id |
| [FormData](#FormData) | data         | 数据   |

<h6 id="NavigationPosition"></h6>

## NavigationPosition

导航信息

| 数据类型 | 属性名称   | 描述                                 |
| :------- | :--------- | :----------------------------------- |
| String   | code       | 主键id                               |
| String   | reference  | 基准资源id                           |
| String   | position   | 相对偏移方向：before \|after \|child |
| String   | resourceId | 资源id                               |
| String   | ext        | 额外参数                             |
| String   | superId    | 父id                                 |

<h6 id="NodeOper"></h6>

## NodeOper

节点操作配置

| 数据类型 | 属性名称   | 描述           |
| :------- | :--------- | :------------- |
| String   | id         | 按钮id         |
| String   | name       | 按钮名称       |
| boolean  | enabled    | 是否可用       |
| boolean  | calculated | 是否是计算得出 |
| boolean  | hidden     | 是否隐藏       |

<h6 id="SelectedDept"></h6>

## SelectedDept

部门范围

| 数据类型 | 属性名称 | 描述     |
| :------- | :------- | :------- |
| String   | id       | 部门id   |
| String   | title    | 部门名称 |

<h6 id="User"></h6>

## User

用户信息

| 数据类型 | 属性名称 | 描述         |
| :------- | :------- | :----------- |
| String   | id       | 主键id       |
| String   | userName | 用户名       |
| String   | deptId   | 所属部门id   |
| String   | deptName | 所属部门名称 |

<h6 id="FlowSendEvent-workFlowParam-workFlowResult"></h6>

## FlowSendEvent - workFlowParam - workFlowResult

workFlowParam 参数与发送流程参数相同，[发送流程参数](./config-workflow#发送流程)中有详细的参数介绍。

~~~json
attr:业务属性
attr1:业务属性
attr2:业务属性
breakflag:是否弹出选择参与者的页面 1-是 0-否
covermode:意见是否赋盖 1-累加 2-赋盖
deptid:当前用户所在的部门Id
deptname:当前用户所在的部门名称
deptorder:应用于意见保存部门的顺序
deptvar:查询参与者业务传递的查询条件（目前应用于参与者为部门，涉及范围为其它）
disflag:是否变灰显示不符合条件的路由1-是 0-否，变灰的条件有：流转变量OUT和表达式
docid:业务主键ID 
endFlag:结束流转的标识，值为1/0。1表明流程结束，0表明未结束
endHqFlag:是否结束会签1-是 0-否
examinetag:办理类型
exception:会签同时办1/会签顺序办2/共同办4/单点同时办5/单点顺序办6
extendattr:扩展属性，业务提交的属性都通过此属性提交，格式为key1=value,key2=value2
filetypeid:流程的文件类型Id
filetypename:流程的文件类型名称
flag:提交工作流的标识，首次提交固定为selectoption，中间页面时直接用返回的值
flowtime:页面设置流程超时时间，以小时计
forcestart:是否强制启动流程1-是0-否
freeflag:是否为自由流程1-是0-否
idea:填写的意见内容
isforcepop:是否强制弹出参与者页面1-是0-否
isforceselectop:是否强制弹出选择路由的页面1-是0-否
ishasdata:是否在流转中 true-是 false-否
iskeepwrite:是否保持待办1-是0-否。他人替当前待办提交时，是否保留被替人的待办。
logId:当前待办对应的日志ID
nowDate:生成待办的时间
para:业务参数
recordid:业务主键ID
relatype:如果值为1时，recordid!=业务主键ID；如果值为0时，recordid=docid。
remindWriteVec:待办提醒人数据
[
{
id:主键ID,
title:标题
recordid:业务主键ID
docid:业务主键ID
filetypeid:流程文件类型ID
filetypename:流程文件类型名称
workflowid:流程ID
workflowname:流程名称
userid:用户ID
deptid:用户所在部门ID
organiseid:组织机构ID
receivetime:接收时间
signtime:签收时间
signtag:是否签收1-是0-否
preuserid:前一办理人用户ID
predeptid:前一办理人所在部门ID
preUserName:前一办理人用户名称
preDeptName:前一办理人所在部门名称
wfleveName:节点名称
preWfleveName:前一办理节点名称
userName:用户名称
deptName:部门名称
backup2:状态标识
accflag:是否待授权1-是 0-否
accinfo:待办授权信息
giveaccuser:授权人用户ID
accdeptid:被授权人所在部门ID
}
]
remindtype:提醒类型
selectdeptlist:指定参与部门deptid,deptId或者deptid|deptid
selectuserlist:指定参与者deptid*userid,deptid*userid或者deptid*userId|deptid*userId
sendsms:是否发送待办提醒1-是0-否
settime:待办超时间时间设置，以小时计
size:待办启动节点/待选路由/待选参与者的个数
startflag:启动工作流的方式1-手机启动（目前意义不大）
startwfleveId:指定启动节点ID
subend:是否结束子流程1-是0-否，业务强制结束子流程
subflag:业务状态标识，目前的结构为“状态码|状态中文名称”
subflowdeptlist:指定内部会签单位，格式为deptid,deptid
subflowlist:指定的外部会签单位，格式为deptid,deptid
superfiletype:主流程的文件类型Id
sysid:系统Id
tableandidname:业务表及主键table|id。目前已无太大意义。
title:标题
transferflag:暂时没有意义
userflag:是否允许待办授权1-是0-否
userid:用户ID
userlist:有两种作用：指定用户Id串，格式userid,userid；未选中的参与者生成已办。
username:用户名称
wfleveid:节点Id
wfoperateid:路由ID
wfoperatename:路由名称
workflowInfoId:待办对应的实例Id
workflowid:流程ID
workitemid:待办工作项ID
node:为选择启动节点、选择路由、选择参与者、生成待办的数据，不同的时机，数据格式有所不同。选择完数据后，按原格式返回。根据flag值不同，来明确是选择启动节点还是其它。
1.	选择启动节点（flag=selectoperate）
[
{
   wfleveId:节点ID,
   wfleveName:节点名称
}
]
2.	选择路由（flag=selectdept）
[
{
   id:路由ID,
   name:路由名称,
   memo:路由备注信息,
   method:,
   isMuch:是否允许多选”true”/”false”,
  isSelect:是否允许选择”true”/”false”,
  disabled:是否允许选择true/false,
  wfleveId:路由的源节点ID,
  nextWfelveId:路由的目标节点ID,
  fileTypeId:流程文件类型ID,
  nextWfleveType:目标节点类型,
  opCond:路由控制公式
}
]
3.	选择参与者(flag=flowinstance)
[
{
   id:路由ID,
   name:路由名称,
   flag:是否子流程flag=sub为子流程
   memo:路由备注信息,
   method:路由控制的标识,
wfleveId:路由的源节点ID,
   nextWfelveId:路由的目标节点ID,
   fileTypeId:流程文件类型ID,
   opCond:路由控制公式,
   type:参与者类型1-部门2-用户
   limit:[{type:”办理时限类型码值”,name”办理时限中文名称”,value:”办理时限时长”,selected:”是否默认选中true/false”}] wd工作日 d天数 h小时
   remind:[{name:”提醒方式中文名称显示用”,selected:”是否默认选中true/false”,type”提醒方式码值”}] 1.桌面2.短信3.邮件
   examinetag:[{name:”办理类型中文名称”,selected”是否默认选中true/false”,tip:”提示信息”,type”办理类型码值”} ]
nodes:[
{
  checked:”true/false”是否默认选中,
  deptName:部门全称,
  deptType:部门类型,
  fileTypeId:流程文件类型ID,
  flag:标识sub为子流程,
  id:部门ID,
  name:部门显示名称，用于选择页面显示用,
  nextWfleveId:后继节点Id,
  only:”true/false”单选/多选,
  selected:”true/false”是否允许选择,
  type:”dept/user”参与者类型为部门/用户,
  nodes:[{checked:”true/false”,id:”用户ID”,name:”用户姓名”,selected:”false/true是否允许选择”,status:”用户状态”}]
}
]
}
]
选择完参与者返回的数据格式：此处只描述有变化的数据格式，未变化的不做描述。
node:[ 
{
  limit:{type:”时限类型”,valu:”时限值”},
  remind:{remindType:[1,2,3],content:”提醒的内容”,isRemind:””},
  examinetag:办理类型code值
}
]
4.	生成待办/提示信息
[
  {
     curWfName:当前节点名称,
     nextWfName:后继节点名称,
opName:路由名称,
receiveName:接收人信息,
accInfo:待办授权信息,
stayTime:停留时长
  }
]
~~~

<h6 id="FlowEndEvent-workFlowParam"></h6>

## FlowEndEvent - workFlowParam

~~~
{
"workitemid":"待办工作项Id",
"flag":"终止方式的标识",
"idea":"终止时填写的意见",
"covermode":"意见的覆盖方式1-追加 2-覆盖",
"subflag":"业务状态场景码|业务状态场景中文名称"
}
参数说明：会签中的主办、协办是由业务区分，工作流对会签分支是同等对待的，没有主协办之分。
Flag标识值:
0	正常终止流程。(1)单流程实例（共同办），终止流程；(2)会签过程中，非最后一个会签分支，结束掉自己的分支；（3）会签过程中，最后一个会签分支，终止流程。
1	主办终止流程。一级会签主办分支，终止流程；非一级会签主办分支，结束该级会签，回到上级会签。
2	协办终止流程。非最后一个会签分支，结束自己的分支；最后一个会签分支，回到会签发起人处。
3	子流程终止流程。子流程是会签分支，非最后一个分支，结束掉自己的分支；子流程是最后一个会签分支，回到主流程；非会签分支子流程，则回到主流程。
4	主办终止流程。主办会签分支，结束掉本级会签，回到发起人会签处。
~~~

<h6 id="FlowEndEvent-workFlowResult"></h6>

## FlowEndEvent - workFlowResult

~~~
{
flag:1-成功 0-失败,
subflag:业务场景状态码|业务场景状态值。如果流程终止值为“end|办结”
read:[{已办sql}],
write:[{待办sql}]
}
~~~













##  

##  



