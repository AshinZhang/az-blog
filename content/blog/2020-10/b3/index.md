---
title: "Electron中使用Deeplink（二）"
date: "2020-10-15"
description: "Deeplink"
tags: Electron
---

通过之前的方法注册Deeplink协议，无论软件是否启动，都能够通过在浏览器中输入`myapp://`打开软件。但需求往往不会这么简单，大部分情况下需要根据URL中的参数做出不同的行为

比如软件中存在三个页面：首页、页面A、页面B，通常打开软件呈现出的是首页。现在有这样的需求：不论软件是否启动，在浏览器中输入`myapp://page=A`的时候，会自动跳转到页面A，同理`myapp://page=B`会跳转到页面B

### 参数解析模块

首先定义`getDeeplinkParams`方法来从URL中取得参数，定义`getDeeplinkParamsFromArgv`方法来从argv中取得参数（因为Windows中需要从argv中取得URL）。注意：argv是一个数组，不同的启动方式下，URL在数组中的位置可能不一样，最好的方式还是遍历argv来获取URL

```javascript
const getDeeplinkParams = url => {
  // 根据URI返回参数
  return params
}

const getDeeplinkParamsFromArgv = argv => {
  // 从argv中找到url
  const url = argv.find(item => /^myapp:\/\//.test(item))
  return getDeeplinkParams(url)
}
```

### 通过Deeplink传递参数 - MacOS

在MacOS下，通过Deeplink方式启动（打开）软件可以通过监听`open-url`方法获取到URL

- 软件已启动：通过IPC通信将参数传递给渲染进程

```javascript
app.on('open-url', (event, url) => {
  const params = getDeeplinkParams(url)
  window.webContents.send("deeplink-params", params)
})
```

- 软件未启动：将参数挂到app上，渲染进程通过remote的方式获取

```javascript
app.on('open-url', (event, url) => {
  app.deeplinkParams = getDeeplinkParams(url)
})
```

- 通用方法：`open-url`回调的执行在`ready`的回调之前

```javascript
app.on('open-url', (event, url) => {
  app.deeplinkParams = getDeeplinkParams(url)
  if (window) {
    window.webContents.send("deeplink-params", app.deeplinkParams)
  }
})
```

### 通过Deeplink传递参数 - Windows

在Windows下，软件是否启动获取参数的方法则有所不同，若软件已经启动，监听`second-instance`能够获得argv，若软件没有启动，则需要从`process.argv`获得URL。之前有看到在MacOS上使用Deeplink打开软件也会emit `second-instance`，因此需要加入判断操作系统

- 软件已启动：从argv中获取URL，然后通过IPC通信将参数传递给渲染进程

```javascript
app.on('second-instance', (event, argv) => {
  if (process.platform === 'win32') {
    app.deeplinkParams = getDeeplinkParamsFromArgv(argv)
    if (window) {
      window.webContents.send("deeplink-params", app.deeplinkParams)
    }
  }
})
```

- 软件未启动：通过`process.argv`中获取URL，然后将参数挂在app上，渲染进程通过remote的方式获取

```javascript
app.on('ready', () => {
  if (process.platform === 'win32') {
    app.deeplinkParams = getDeeplinkParamsFromArgv(process.argv)
  }
})
```

### 最后

1. Electron中的`app.setAsDefaultProtocolClient`必须要在软件启动后才能使用Deeplink
2. MacOS下实现安装注册Deeplink需要在`package.json`中添加`"protocol"`字段
3. Windows下实现安装注册Deeplink需要在`package.json`中添加`"nsis"`字段指定`.nsh`文件，并且在`.nsh`文件中注册Deeplink
4. MacOS下无论软件是否启动，都能通过`app.on('open-url')`来获取URL中的参数
5. Windows下需要通过argv来获取URL，若软件未启动需要`process.argv`，若软件已经启动需要`app.on('second-instance')`
6. 参数的获取是在主进程中的，若要在渲染进程中使用参数，若软件已经启动，可以通过IPC通信，若软件未启动，可以通过remote的方式