---
title: Electron中relaunch和quitAndInstall
date: "2020-08-11"
description: "记录在relaunch和quitAndInstall中踩的一个坑"
tags: 前端, Electron
---

在Electron中，当检测到有版本更新时，会自动下载更新包，并在应用退出时进行更新。这意味着应用的每次更新都需要重新启动。重新启动应用的方式有两种`app.relaunch`和`autoUpdater.quitAndInstall`

### app.relaunch()

在官方文档中介绍到`relaunch`在调用之后需要再调用`exit`或者`quit`才能重启应用

```javascript
const { app } = require('electron')

app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
app.exit(0)
```

如果在Electron中使用`keytar`来对用户信息和设备信息等进行保存，以用于自动登录，那么使用`relaunch`的方式重启应用可能会导致`keytar.getPassword`的获取失败，无法实现重启后自动登录

### autoUpdater.quitAndInstall()

在官方文档中写到，`quitAndInstall`只能在`update-downloaded`执行之后再进行调用，也就是说，这个方法只能用于应用更新的情景下

同时，文档中说`quitAndInstall`会首先关闭应用程序窗口，并在所有窗口都关闭后自动调用`app.quit()`，但实际测试的效果来看并没有自动调用，如果出现这种情况，可以在`quitAndInstall`调用之后，显式地调用`app.quit()`或者`app.exit()`

```javascript
const { app, autoUpdater } = require('electron')

autoUpdater.quitAndInstall()
app.exit(0)
```

