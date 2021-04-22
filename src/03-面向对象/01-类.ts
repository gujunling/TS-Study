/**
 * 类：使用 class 关键字来定义一个类
 *
 *  对象中主要包含了两个部分
 *         1.属性
 *         2.方法
 */

class Person {
  /**
   * 定义实例属性
   *
   * 直接定义的属性是实例属性，需要通过对象的实例去访问，可以对其进行读写操作
   */
  name: string = '小学生'
  age: number = 22

  /**
   * 定义静态属性
   *
   * 在属性前使用static关键字可以定义类属性（静态属性）
   *
   * 使用static开头的属性是静态属性（类属性），可以直接通过类来访问
   *    例如：  Person.gender
   *
   */
  static gender: string = '男'

  /**
   *
   * readonly 表示只读属性，无法修改
   */

  readonly price: number = 100

  // 定义方法
  sayHello() {
    console.log('hello 哈哈哈哈哈')
  }
  test(): void {
    console.log('测试方法')
  }
  // 静态方法，如果方法以static 开头，则该方法就是静态方法，可以通过类来直接调用
  static test2() {
    console.log('静态方法2222222')
  }
}
const pp = new Person()
console.log(pp)
console.log(Person.gender)

console.log(pp.price)
// pp.price = 200;  //此时会报错，因为price是person实例对象的只读属性

// 方法调用
pp.sayHello()
pp.test()
Person.test2()
