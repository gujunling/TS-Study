;(() => {

  //函数重载：函数的名字相同，函数的参数和个数不同

  // 需求：设计一个add函数，它可以接受两个string类型的参数进行拼接，也可以接受两个number类型的参数进行相加

  // 函数重载声明
  function add(x: string, y: string): string
  function add(x: number, y: number): number

  //函数声明(注意，这样写的时候在严格模式下会报错，要同时关闭严格模式和strictNullChecks)
  function add(x: string | number, y: string | number): string | number {
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y //字符串的拼接
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y //数字相加
    }
  }
  console.log(add('qweeggegeg', '哈哈哈'))
  console.log(add(10, 20))
  console.log(add(30,30));
  // 此时传入的数据是非法的数据，如果需要在ts编译时期就报错，则需要进行函数的重载声明
  // console.log(add(10,"jjj"));
  // console.log(add("aaa",123));
})()
