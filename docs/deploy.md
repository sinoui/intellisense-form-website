---
id: deploy
title: 集成部署
---

## 前端部署

智能表单的前端分成两个子应用，分别是：

- `/intellisense-form` - 对应 form-apply-app 模块
- `/intellisense-form-manager` - 对应 form-manager 模块

### 在业务系统各种使用 jquery.load 集成智能表单应用

在使用 jquery 开发的业务系统中，点击资源菜单， 仍然使用\$('#contaienrId').load()加载智能表单应用资源。只是在集成的业务系统中，我们需要将原有 load 方法做完善，支持通过匹配路由来加载对应的 React 组件。具体操作如下：

如果检测到加载的资源 url 是有 react 项目中的固定路由开头，则表示加载 react 项目资源，按如下代码特殊处理：

```ts
// ....
// 需要采用兼容ie浏览器的写法
if (urlstr.indexOf('/intellisense-form/') === 0) {
  var searchObj = qs.formatSearch(window.location.search);
  searchObj.url = urlstr;
  var originUrl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    qs.queryParams(searchObj, true);
  history.pushState(
    history.state,
    urlTitle, // 路由名称
    originUrl,
  );
  $('#contaienrId').load(urlstr); // contaienrId为dom元素的id属性值
}
//....
```

这样处理后，点击菜单，如果检测路由 path 以"/intellisense-form/"开头，浏览器地址栏 url 会在原来的 基础上拼上&url=/intellisense-form/draftList/`${formId}`这样的字符串。同时 react 项目使用 MemoryRouter 做路由管理，通过使用 qs 对`window.location.search`做解析来确定加载哪一个路由。

如果希望刷新后还是进入原来的页面，需要在业务系统页面加载完成时做如下操作：

```tsx
$(function() {
  const params = qs.formatSearch(window.location.search);
  const initUrl = params.url;
  if (initUrl) {
    $('#contaienrId').load(initUrl);
  }
});
```

业务系统处理时，需要自定义 qs.js 来解析 url。qs.js 需要在项目入口 html 页面引入。具体代码如下：

```javascript
var qs = {
  formatSearch: function(se) {
    // 将search字符串格式化为json对象
    if (typeof se !== 'undefined' && typeof se !== 'object' && se !== '') {
      se = se.substr(1);
      var arr = se.split('&'),
        obj = {},
        newarr = [];
      $.each(arr, function(i, v) {
        newarr = v.split('=');
        if (typeof obj[newarr[0]] === 'undefined') {
          obj[newarr[0]] = newarr[1];
        }
      });
      return obj;
    }

    return {};
  },
  queryParams: function(data, isPrefix) {
    // 将json对象序列化为search字符串 isPrefix表示在开始位置是否增加？
    isPrefix = isPrefix ? isPrefix : false;
    var prefix = isPrefix ? '?' : '';
    var _result = [];
    for (var key in data) {
      var value = data[key];
      // 去掉为空的参数
      if (['', undefined, null].indexOf(value) !== -1) {
        continue;
      }
      if (value.constructor === Array) {
        for (var i = 0; i < value.length; i++) {
          _result.push(key + '[]=' + value[i]);
        }
      } else {
        _result.push(key + '=' + value);
      }
    }

    return _result.length ? prefix + _result.join('&') : '';
  },
};
```

### 在业务系统中的统一待办模块打开待办详情

点击统一待办数据时,需要先判断数据中的待办 url 是否以"/intellisense-form/"开始,若是,则再该 url 之后拼接 id 和 workItemId 参数。具体代码如下：

```javascript
if (data[i].url.indexOf('/intellisense-form/') === 0) {
  data[i].url =
    data[i].url + '?id=' + data[i].id + '&workItemId=' + data[i].workItemId;
}
...
```

如果详情页面是有 iframe 窗口形式打开，则流程发送成功之后，需要自定关闭 iframe 窗口。我们是以 window.postMessage()方法向业务系统发送消息,业务系统监听到该消息后认为流程发送成功,
继而调用关闭窗口的方法关闭详情弹窗。具体代码如下：

```javascript
window.addEventListener(
  'message',
  function(event) {
    var data = event.data;
    if (data && JSON.parse(data).type === 'sendSuccess') {
      // 根据各业务系统使用弹窗方式 关闭弹窗
    }
  },
  false,
);
```

### 在业务系统中集成智能表单管理

第一步：在统一授权管理系统的统一资源管理中新增资源内容为"/intellisense-form-manager/",资源名称为"智能表单管理"的资源。
第二步：在业务系统中点击菜单，加载对应菜单资源的代码中。需要判断该菜单资源内容是否为"/intellisense-form-manager/"。若是,则以浏览器新页签的形式打开智能表单管理应用。具体代码如下：

```javascript
if (data[i].url.indexOf('/intellisense-form-manager/') === 0) {
  var menuHref =
    window.location.protocol + '//' + window.location.host + data[i].url;
  var menuHtml =
    '<a href="' + menuHref + '" target="_blank">' + data[i].name + '</a>';
}
```

## 后端部署

TODO

## 在 Nginx 中部署的示例

分别将两个模块的打包文件部署在 nginx 的 html 中，如下所示：

```
NGINX_HOME
|__ html
  |__ intellisense-form
  |__ intellisense-form-manager
```

相对应的 Nginx 配置如下：

```nginx
upstream mainapp {
  # 填写主应用的服务器地址
  server 1.1.1.1:8888;
}

upstream intellisenseform {
  # 填写智能表单服务器地址
  server 10.10.10.10:8888;
}

server {
  location ^~ /intellisense-form {
    index index.html index.htm;
    try_files $uri $uri/ /intellisense-form/index.html;
    add_header Cache-Control no-store;
  }

  location ^~ /intellisense-form-manager {
    index index.html index.htm;
    try_files $uri $uri/ /intellisense-form-manager/index.html;
    add_header Cache-Control no-store;
  }

  location ^~ /apis/intellisense-form {
    proxy_pass http://intellisenseform;
    add_header Cache-Control no-store;
  }

  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css|md|pdf)$ {
    expires 365d;
  }

  location / {
    proxy_pass http://mainapp;
  }
}
```

```javascript
if (data[i].url.indexOf('/intellisense-form-manager/') === 0) {
  var menuHref =
    window.location.protocol + '//' + window.location.host + data[i].url;
  var menuHtml =
    '<a href="' + menuHref + '" target="_blank">' + data[i].name + '</a>';
}
```
