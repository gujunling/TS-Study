// 因为在默认状态下，typescript 将 DOM typings 作为全局的运行环境，此时的ts文件的全局执行上下文不是window，全局环境下就极有可能随时出现命名问题，所以typescript会提示错误。
export {} //将其作为模块使用，避免出现不必要的错误。加上这个语句在编译成JS时会使用严格模式，并认为该JS是作为模块来引入的

// --------------------- number ------------------------------------------
// 声明一个变量 a ，同时指定它的类型为 number
let a: number

// a 的类型设置为了 number ，在以后的使用过程中 a 的值只能是number类型的数字
a = 10
a = 555
// a = "jajja";  //此行代码会报错，因为 变量 a 的类型为 number ，不能赋值为字符串

let a1: number = 10 // 十进制
let a2: number = 0b1010 // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制

let infinityNumber: number
infinityNumber = Infinity
// Infinity:无穷大
// -Infinity  :负无穷大

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// ----------------------string-----------------------------------------

// 声明一个变量  b ，同时指定它的类型为 string 字符串

let b: string

b = '哈哈哈'

// b = 123; //此行代码会报错，因为 变量 b 的类型为 string ，不能赋值为 number 类型

// ----------------------------string类型和number类型拼接使用-------------------------------------------------

let str: string = '拥有你的我比国王富有'
let num: number = 6666666666666666
console.log(str + num)


//-----------------------------undefined 和null---------------------------------------------------

let und:undefined = undefined
let nll:null = null

console.log(und);
console.log(nll);

// 在非严格模式下，undefined 和 null 都可以作为其他类型的子类型，可以把 undefined 和 null 赋值给其他类型的变量
// let num2:number = undefined


// ----------------------------声明时赋值,TS会自动推断类型------------------------------------------------
// 声明完变量就直接赋值
let c: boolean = true

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let d = true

// d = 123;

// ---------------------------------函数中形参的声明----------------------------------------------

// 参数类型必须符合函数定义的参数的类型和个数，传参时类型不能不对应，参数个数也必须是函数规定的个数，不能多不能少

// JS中的函数是不考虑参数的类型和个数的,但TS的函数中形参的类型和个数是限定的
function sum(a: number, b: number): number {
  return a + b
  // return a + "hhh";
}
console.log(sum(123, 456))
// console.log(sum(123, "456"));
// console.log(sum(123,456,789));
// console.log(sum(123));
