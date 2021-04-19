---
id: plugin-button
title: 新增流程按钮
---

## 新增流程按钮

### 流程按钮配置

| 配置项  | 类型            | 含义                                         | 是否必须配置 |
| ------- | --------------- | -------------------------------------------- | ------------ |
| id      | string          | 流程按钮标识，必须唯一                       | 是           |
| name    | string          | 流程按钮名称                                 | 是           |
| render  | React.ReactType | 流程按钮组件                                 | 是           |
| enabled | boolean         | 流程节点属性设置的节点操作中按钮默认是否启用 | 是           |
| hidden  | boolean         | 流程节点属性设置的节点操作中是否显示该按钮   | 是           |
| icon    | React.ReactNode | 流程按钮组件的图标                           | 是           |

### 注册流程按钮

```tsx
import appsetting from "@sinoform/app-setting";
const { flowConfig } = appsetting;

flowConfig.addButton({
  id: "xxx",
  name: "xxx",
  render: React.lazy(() => import("./xxx/xxx")),
  enabled: false | true,
  hidden: false | true,
  icon: "xxxx",
});
```

### 流程按钮开发（React 方式）

流程按钮组件接收以下属性：

| 属性名称            | 类型                       | 含义                                                                                                                 | 必传属性 |
| ------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| setting             | ButtonConfig               | 流程按钮的配置对象                                                                                                   | 是       |
| loadingBtnId        | string                     | 流程按钮配置中的唯一标识                                                                                             | 是       |
| setButtonLoading    | (btnId: string) => void    | 设置流程按钮为加载中的回调函数                                                                                       | 是       |
| cancelButtonLoading | (btnId: string) => void    | 取消流程按钮为加载中的回调函数                                                                                       | 是       |
| variant             | 'pc' \| 'mobile' \| 'more' | 流程按钮在应用中的显示模式。`pc`、`mobile`、`more`分别表示在 pc 端、移动端、移动端更多按钮中的显示模式，默认为`pc`。 | 否       |
| onBeginClick        | () => void                 | 点击流程按钮前的回调函数                                                                                             | 否       |

使用`@sinoform/comp-operation-button`库的`CompOperationButton`组件完成流程按钮的开发。

`CompOperationButton`组件接收以下属性：

| 属性名称           | 类型                       | 含义                                                                                                                 | 必传属性 |
| ------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| setting            | ButtonConfig               | 流程按钮的配置对象                                                                                                   | 是       |
| loadingBtnId       | string                     | 流程按钮配置中的唯一标识                                                                                             | 是       |
| onClick            | () => void                 | 点击流程按钮的确认执行流程操作的回调函数                                                                             | 是       |
| confirm            | boolean                    | 流程按钮操作是否需要执行二次确认,默认为否                                                                            | 否       |
| confirmMsg         | string                     | 二次确认的提示语                                                                                                     | 否       |
| variant            | 'pc' \| 'mobile' \| 'more' | 流程按钮在应用中的显示模式。`pc`、`mobile`、`more`分别表示在 pc 端、移动端、移动端更多按钮中的显示模式，默认为`pc`。 | 是       |
| beforeConfirmClick | () => void                 | 二次确认操作之前触发的回调函数                                                                                       | 否       |

办结按钮示例：

```tsx
import React from 'react';
import pcMessage from '@sinoui/message';
import appMessage from '@sinoform/comp-message';
import { useApp, useDetailPage } from '@sinoform/app-core';
import type { ButtonConfig } from '@sinoform/types';
import CompOperationButton from '@sinoform/comp-operation-button';
import toFlowSuccess from '@sinoform/helper-toFlow-success';
import { workflowFinish } from './apis';

interface Props {
  setting: ButtonConfig;
  loadingBtnId: string;
  setButtonLoading: (btnId: string) => void;
  cancelButtonLoading: () => void;
  variant?: 'pc' | 'mobile' | 'more';
  onBeginClick: () => void;
}

/**
 * 办结 按钮
 */
const EndButton: React.FunctionComponent<Props> = ({
  setting,
  loadingBtnId,
  setButtonLoading,
  cancelButtonLoading,
  variant = 'pc',
  onBeginClick,
}) => {
  const message = variant === 'pc' ? pcMessage : appMessage;
  const btnId = setting.id;
  const { currentUser, dispatchEvent } = useApp();
  const {
    formData: {
      flowIdea,
      formDesign: { id: formDesignId },
    },
    formState,
    workItemId,
  } = useDetailPage();

  /**
   * 点击办结按钮触发
   */
  const finishWorkFlow = async () => {
    // 如果传入了onBeginClick属性，需要在点击函数中触发
    if (onBeginClick) {
      onBeginClick();
    }
    if (flowIdea?.idea === 'required' && !flowIdea?.content) {
      message.error('请先填写意见');
      return;
    }
    // 保存表单数据
    const hide = message.loading('正在提交...', {
      key: 'finishWorkFlow',
      duration: 0,
    });
    setButtonLoading(btnId);
    try {
      await formState.submit();
      await workflowFinish({
        workItemId: workItemId ?? '',
        approvalStatus: '1', //  审核通过传1  审核不通过传0
        userId: currentUser.userId,
        userName: currentUser.userName,
        formDesignId,
      });
      hide();
      // 调用流程操作成功的处理函数
      toFlowSuccess(dispatchEvent, 'endSuccess');
      message.success('办结成功', { key: 'finishWorkFlow' });
    } catch (e) {
      if (e && e.message === '表单校验失败') {
        message.error('表单项未填写或数据格式有误', { key: 'finishWorkFlow' });
      } else {
        message.error('办结失败', { key: 'finishWorkFlow' });
      }
    } finally {
      cancelButtonLoading();
    }
  };

  // 确认提示框显示之前 触发
  const beforeConfirmClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (flowIdea?.idea === 'required' && !flowIdea?.content) {
      message.error('请先填写意见');
      event.preventDefault();
    }
  };
  return (
    <>
      <CompOperationButton
        onClick={finishWorkFlow}
        loadingBtnId={loadingBtnId}
        setting={setting}
        confirm
        beforeConfirmClick={beforeConfirmClick}
        variant={variant}
      />
    </>
  );
};

export default EndButton;
```
