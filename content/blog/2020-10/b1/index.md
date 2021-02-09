---
title: "报错node-gyp Error: gyp failed with exit code: 1的解决方法"
date: "2020-10-12"
description: "npm下载包时出现gyp相关错误，需要重新下载xcode来解决"
tags: 前端
---

1. 查看`xcode-select`路径，在命令行执行

```xcode-select --print-path```

此时输出的结果应该是 `/Library/Developer/CommandLineTools`

2. 删除`xcode-select` ，在命令行执行

```sudo rm -r -f /Library/Developer/CommandLineTools```

3. 重新下载`xcode-select`，在命令行执行

```xcode-select --install```

如果没有没有遇到问题，说明已经下载成功

若遇到问题`安装失败不能安装该软件 因为当前无法从软件更新服务器获得`

登录`https://developer.apple.com/download/more/`，然后下载`Command Line Tools for Xcode 12`（根据macOS版本选择）

4. 测试`xcode-select`，在命令行执行`gcc -v`测试

