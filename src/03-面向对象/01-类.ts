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
  // 可选属性: ?,只需要在属性名的后面添加一个 ? 即可
  age?: number = 22

  /**
   * 定义静态属性
   *
   * 在属性前使用static关键字可以定义类属性（静态属性）
   *
   * 使用static开头的属性是静态属性（类属性），可以直接通过类来访问（类名.静态属性的方式来访问和修改）
   *    例如：  Person.gender
   *
   */
  static gender: string = '男'

  /**
   *
   * readonly 修饰的属性成员 ，表示其是只读属性，无法修改
   *
   * 判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。
   *
   * 作为变量使用的话用 const，若作为属性则使用 readonly。
   *
   * 在类的构造函数中，是可以对只读的属性成员的数据进行修改的。类的普通方法中是不可以对只读的属性成员的数据进行修改的
   *
   * 如果构造函数中没有任何的参数（构造函数中不对参数进行初始化），类中的属性成员也已经使用 readonly 进行修饰了，那么外部也是不能对这个用 readonly 修饰的属性值进行修改的。
   *
   * 类中的构造函数中的某个参数，一旦使用readonly 进行修饰后，那么该参数就是参数属性，类中就有了一个只读的该参数名的属性成员（例如，下面的propName属性），
   * 外部可以进行访问，但也是无法修改类中的该属性的属性值的
   *
   */

  readonly price: number = 100

  constructor(name: string, readonly propName: string = 'test 测试') {
    this.name = name
  }

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
const pp = new Person('哈哈哈哈哈，name啊')
// pp.propName='哈哈哈哈'  //此时会报错，因为propName属性是被readonly修饰的，是无法被修改的
console.log(pp)
console.log(Person.gender)

console.log(pp.price)
// pp.price = 200;  //此时会报错，因为price是person实例对象的只读属性

// 方法调用
pp.sayHello()
pp.test()
Person.test2()
