---
id: sinoform-sdk-use-case
title: 用例
---

# 用例

## 流程流转事件获取下一办理人信息

我们可以通过 FlowSendEvent 事件对象中携带的 workFlowResult 参数获取下一办理人信息。

```java
package com.sinosoft.plugin.sinosoftplugin;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.sinosoft.sdk.annotation.RemoteEventSubscribe;
import com.sinosoft.sdk.event.FlowSendEvent;
import com.sinosoft.sdk.model.User;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class FlowSubscriber {

  @RemoteEventSubscribe
  public void getUserInfo(FlowSendEvent event) {
    log.info("Hello event : " + event.toString());
    JSONArray remindWriteVec = event.getWorkFlowResult().getJSONArray("remindWriteVec");
    List<User> userList = remindWriteVec.stream()
        .map(o -> (JSONObject) o)
        .map(jsonObject -> {
          User user = new User();
          user.setId(jsonObject.getString("userid"));
          user.setUserName(jsonObject.getString("userName"));
          return user;
        })
        .collect(Collectors.toList());
    userList.forEach(user -> {
      System.out.println(user.getUserName());
      System.out.println(user.getId());
    });
  }
}
```

