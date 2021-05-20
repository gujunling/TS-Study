;(function () {
  /**
   *
   * 泛型
   *  在定义函数或者接口或者类的时候，不能预先确定要使用的数据的类型（返回值、参数、属性的类型），而是在使用的时候才能确定数据的类型，此时可以使用泛型
   */

  function fn<T>(a: T): T {
    return a
  }
  // 方式一：利用TS的类型的自动推断
  let result1 = fn(11)

  // 方式二：手动指定泛型
  let result2 = fn<string>('哈哈哈哈')

  console.log(result1)
  console.log(result2)

  // --------------------------同时指定多个泛型------------------------

  function fn2<T, K>(a: T, b: K): T {
    return a
  }

  let result3 = fn2<number, string>(10, '哈哈哈')
  console.log(result3)

  // ---------------指定限定在一定范围内的泛型（T extends test ：表示泛型 T 必须是 test 的实现类或者是子类）---------------

  interface test {
    length: number
  }

  function fn3<T extends test>(a: T): number {
    return a.length
  }
  let result4 = fn3('123')
  console.log(result4)

  // ----------------------------------在类中使用泛型-------------------------------
  class MyTest<T> {
    name: T
    constructor(name: T) {
      this.name = name
    }
  }
  const mt = new MyTest<string>('哈哈哈')
  console.log(mt)
})()
