---
title: electron主进程和渲染进程间的相互通信
date: "2020-08-05"
description: "electron中主进程向渲染进程通信和渲染进程向主进程通信"
tags: 前端, Electron
---

在electron中，主进程和渲染进程间的相互通信的方式之一是通过ipc模块来实现，本文将对`ipcMain`和`ipcRenderer`来实现主进程和渲染进程间的通信方式进行总结

### 主进程  To 渲染进程

构建electron应用时，需要在主进程中`new BrowserWindow()`，通过将这个实例挂到`app`上，则可以在其他文件中使用该实例上的方法

```javascript
const { app, BrowserWindow } = require('electron')

const createMainWindow = () => {
  const window = new BrowserWindow({})
  // ...
  return window
}

app.on('ready', () => {
  const window = createMainWindow()
  app.mainWindow = window
})
```

在主进程中的另外一个文件，可以使用`webContents`来向渲染进程发送消息

```javascript
const { app } = require('electron')

app.mainWindow.webContents.send('main-process-msg', 'HelloWorld')
```

在渲染进程中通过`ipcRenderer`来监听主进程发送过来的消息

```javascript
const { ipcRenderer } = require('electron')

ipcRenderer.on('main-process-msg', (event, arg) => {
  console.log(event)
  console.log(arg)
})
```

### 渲染进程 To 主进程

渲染进程向主进程的通信相对简单一些，在主进程中使用`ipcMain`来监听渲染进程发送过来的消息

```javascript
const { ipcMain } = require('electron')

ipcMain.on('renderer-process-msg', (event, arg) => {
  console.log(event)
  console.log(arg)
})
```

在渲染进程中使用`ipcRenderer`来向主进程发送消息即可

```javascript
const { ipcRenderer } = require('electron')

ipcRenderer.send('renderer-process-msg', 'HelloWorld')
```

