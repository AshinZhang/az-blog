---
title: "TypeScript"
date: "2020-11-03"
description: "Elastic APM"
tags: 前端
---

### 类型

```typescript
// 变量
const a: number = 1
const b: boolean | string = false

// 数组
const arr: Array<number> = [1, 2, 3]

// 元组
const tuple: [number, string] = [0, 'a']
// tuple.push(2)  // 不报错
// console.log(tuple)  // [0, 'a', 2]
// tuple[2]  // 报错

// 函数
const add = (x: number, y: number): number => x + y

// 对象
const obj: {x: number, y: string} = {x: 1, y: 'a'}

// symbol
const s1: symbol = Symbol()
const s2 = Symbol()
console.log(s1 === s2) // false

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
const noReturn = (): void => {}

// never
const err = () => {
  throw new Error('error')
}
const loop = () => {
  while(true) {
    
  }
}
```

```typescript
// 数字枚举 - 通过值和索引来寻找，反向映射
enum Num {
  Mon,
  Tue,
  Wes,
}

// 字符串枚举 - 没有反向映射
enum Str {
  A: 'a',
  B: 'b',
}

// 枚举成员
enum C {
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 后面的成员需要赋初始值值
  d = Math.random(),
  e = '123'.length,
}

const enum A {
  A,
  B,
}
```

