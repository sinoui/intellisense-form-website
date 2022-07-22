---
id: guide-rely-forms
title: 表单之间的交互
---

表单之间的交互主要使用场景包含以下几个方面：

1. 获取指定表单的数据作为当前表单的默认值
2. 根据指定表单的数据对当前表单进行校验
3. 当前表单在办结节点，办结之前先往另一个表单保存一条数据

## 获取指定表单数据作为默认值

需求场景：

有住房登记单和住房补贴申请两个业务，在申请住房补贴时需要将当前登录人最新一条已办结的住房登记单中的部分信息带入住房补贴申请单。

```ts title="getLatestEndFormData.ts"
import field from "@sinoform/helper-condition-api";
/**
 * 获取当前登录人起草的最新办结的一条数据
 *
 * @param formId 表单id
 * @param currentUser 当前登录人
 * @returns 返回当前登录人起草的最新办结的一条数据
 */
export default async function getLatestEndFormData(
  formId: string,
  currentUser: UserInfo
) {
  // 创建人等于当前登录人且状态为已办结
  const queryCriteriaItems = field.and(
    field("userId").equal(currentUser.userId),
    field("status").equal("已办结")
  );
  //倒序排序
  const sort = "endTime,desc";
  const result = await http.get<any>("/apis/intellisense-form/formData/list", {
    params: {
      queryCriteriaItems: JSON.stringify(queryCriteriaItems),
      sort,
      size: 1,
      page: 0,
      formDesignId: formId,
      userId: currentUser.userId,
      deptId: currentUser.deptId,
    },
  });

  return result?.content?.[0];
}
```

```tsx
import appSetting from "@sinoform/app-setting";
import getLatestEndFormData from "./getLatestEndFormData";

// 住房登记表单id
const ZFDJ_FORMID = "61c99ea3c9327f1d0cb7ef26";
//住房补贴表单id
const ZFBT_FORMID = "78afwefafe1c99ea3c9327f1d";

// 从远程获取值
appSetting.defaultFormValueAsync(ZFBT_FORMID, async (currentUser) => {
  // 获取当前登录人创建且最新办结的住房登记单的数据
  const data = await getLatestEndFormData(ZFDJ_FORMID, currentUser);

  //将相关数据写入对应位置
  return {
    houseId: data.houseId,
    houseName: data.houseName,
    houseYears: data.houseYears,
    houseAddress: data.houseAddress,
  };
});
```

## 根据指定的表单数据对当前表单进行校验

需求场景：在申请安装数据库时，校验安装数据库的数量不能大于数据库的采购数量。

首先定义一个方法获取最新一条办结的当前年份本部门的数据库采购申请单的数据。

```ts title="getLatestEndFormData.ts"
import field from "@sinoform/helper-condition-api";

export default async function getLatestEndFormData(
  formId: string,
  currentUser: UserInfo
) {
  // 创建部门等于当前登录人部门，创建年度为当前年并且数据已办结
  const queryCriteriaItems = field.and(
    field("deptId").equal(currentUser.deptId),
    field("status").equal("已办结"),
    field("formNd").equal(new Date().getYear())
  );
  //倒序排序
  const sort = "endTime,desc";
  const result = await http.get<any>("/apis/intellisense-form/formData/list", {
    params: {
      queryCriteriaItems: JSON.stringify(queryCriteriaItems),
      sort,
      size: 1,
      page: 0,
      formDesignId: formId,
      userId: currentUser.userId,
      deptId: currentUser.deptId,
    },
  });

  return result?.content?.[0];
}
```

然后调用上述方法获取数据，与当前表单中的数据库安装数量对比进行表单校验。

```ts title="index.ts"
import appSetting from "@sinoform/app-setting";
import getLatestEndFormData from "./getLatestEndFormData";

// 数据库采购申请单id
const formA = "form_id_1";

// 数据库安装申请单
const formB = "form_id_2";

AppSetting.formValidateAsync(formB, {
  // 通过异步方法校验安装数量（installDbCount）是否符合标准
  installDbCount: async (value, values, currentUser) => {
    const data = await getLatestEndFormData(formA, currentUser);
    if (value > data.dbCount) {
      return "安装数量不能大于采购数量";
    }

    return undefined;
  },
});
```

:::warning 注意
以上两个示例中表单数据均是获取流程表单列表数据，如果我们需要获取无流程表单列表数据，可以使用下面的方式：

```ts
/**
 * 获取指定用户最新创建的无流程表单数据
 *
 * @param formId 表单id
 * @param userId 用户id
 * @param deptId 用户所属部门id
 * @param roleIds 用户角色id
 * @returns 返回指定用户最新创建的表单数据
 */
export default async function getLatestCreateNoFlowData(
  formId: string,
  userId: string,
  deptId: string,
  roleIds: string[]
) {
  // 查询条件可以自定义
  const queryCriteriaItems = [
    {
      id: "userId",
      operator: "equal",
      value: userId,
    },
  ];
  const sort = "createTime,desc";
  const result = await http.get<any>(
    "/apis/intellisense-form/formNotWorkflowData/list",
    {
      params: {
        queryCriteriaItems: JSON.stringify(queryCriteriaItems),
        sort,
        size: 1,
        page: 0,
        formDesignId: formId,
        userId,
        deptId,
        roleIds,
      },
    }
  );

  return result?.content?.[0];
}
```

:::

## 办结时向指定表单保存数据

需求场景：图书管理系统，`借阅申请`流程办结时，需要往`借阅记录`表中保存一条数据。

```ts title="index.ts"
import appSetting from "@sinoform/app-setting";
import { saveNoFlowFormData } from "@sinoform/app-core"; // 表单内部封装的建议的保存无流程表单数据的方法

//借阅申请表单设计id
const JYSQ_FORMID = "form-id-1";
//借阅记录表单设计id
const JYJL_FORMID = "form-id-2";

appSetting.hooks.detailPage.tap("监听表单", (detailPageContext) => {
  const {
    formState,
    formData: {
      formDesign: { id },
    },
    hooks,
    currentUser,
  } = detailPageContext;
  // 如果表单id是借阅申请表单设计id,则添加按钮前置事件监听
  if (id === JYSQ_FORMID) {
    hooks.beforeButtonClick.tapPromise("按钮监听", async (buttonId) => {
      // 获取当前表单数据
      const { values } = formState;
      // 如果点击办结按钮，则需要往借阅记录表中保存一条数据
      if (buttonId == "end") {
        // 梳理要保存的表单数据
        const formValues = {
          bookId: values.bookId,
          bookName: values.bookName,
          jyr: values.jyr,
          jyrq: values.jyrq,
        };
        await saveNoFlowFormData(JYJL_FORMID, currentUser, formValues);
      }
    });
  }
});
```
