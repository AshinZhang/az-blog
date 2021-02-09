---
title: VS Code的一些配置
date: "2020-08-07"
description: "VS Code中的插件推荐和自定义补全的方法"
tags: VSCode
---

### 插件

1. VIM：编辑
2. Auto Rename Tag：标签首尾同时编辑
3. ESLint：代码检查
4. GitHistory：使用Git必备
5. GitLens：使用Git必备
6. One Dark Pro：主题
7. vscode-icons：左侧图标美化

### 自定义补全

打开VS Code按下`command+shift+P`后输入`configure User Snippets`，选择文件类型如`javascriptreact`，然后编辑`javascriptreact.json`文件，内容如下

```json
{
	"": {
		"prefix": "imr",
		"body": [
			"import React from 'react';",
			"",
			"const $1 = props => {",
			"  return (",
			"    <>",
			"    </>",
			"  );",
			"}",
			"",
			"export default $1;"
		],
		"description": "Gen JSX File"
	}
}
```

保存之后，在`.jsx`文件中输入`imr`即可自动补全内容