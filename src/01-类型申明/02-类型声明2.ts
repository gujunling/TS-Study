// 因为在默认状态下，typescript 将 DOM typings 作为全局的运行环境，此时的ts文件的全局执行上下文不是window，全局环境下就极有可能随时出现命名问题，所以typescript会提示错误。
export {} //将其作为模块使用，避免出现不必要的错误。加上这个语句在编译成JS时会使用严格模式，并认为该JS是作为模块来引入的

// --------------------- 字面量 ----------------------------
// 直接使用字面量进行类型声明
let a:10
a = 10

// a = 11  //此时此行代码编译时会报错，因为通过字面量声明的变量值只能是声明是书写的那个值，不能更改

// 可以使用 | 来连接多个类型 (联合类型)
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string

c = true
c = '哈哈哈'

// ---------------------- any -------------------------------
// any表示的是任意类型，可以任意赋值，一个变量设置类型为any后相当于对该类型关闭了类型检测
// 使用TS时，不建议使用any类型，因为any类型的变量和JS中的变量没有任何区别
// 声明变量时如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）

let d: any
d = 10
d = true
d = 'hahaha'
d = '234455'

let e
e = true
e = 'dfg'
e = 123

// --------------------------- unknown----------------------
// unknown 实际上就是一个类型安全的any
// unknown类型的变量不能直接赋值给其他变量

let f: unknown
f = 10
f = true
f = 'hahhaa'

let s: string

// d 的类型为 any ，它可以赋值给任意变量
s = d

// s = f  //此行代码编译时会报错

// 可以使用下面方式,
// 方式一先检查类型,再赋值
if (typeof f === 'string') {
  s = f //此时在编译就不会报错
}

// 方式二：类型断言，可以用来告诉解析器变量的实际类型
/**
 * 类型断言语法：
 *  方式一：变量 as 类型
 *  方式二： <类型>变量
 */
s = f as string //类型断言方式一，此时在编译也不会报错
s = <string>f //类型断言方式二，此时在编译也不会报错

// ------------------------- void --------------------------

// 此时TS会自动推断，并设置函数的返回值类型为 true | 123
function fn(num: number) {
  if (num > 0) {
    return true
  } else {
    return 123
  }
}

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn2(): void {
  // return 123  //此时在编译时会报错，void类型的函数不能设置返回值，（可以 return null 或者 return undefined）
  // return null
  // return undefined
}

// -------------------- never   ----------------------------
// never 没有值，表示永远不会返回结果

function fn3(): never {
  // return null   //此时返回值设置为 null 或者 undefined 在编译的时候也会报错
  throw new Error('出错了')
}
