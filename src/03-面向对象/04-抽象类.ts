;(function () {
  /**
   * 抽象类: 以 abstract 开头的类是抽象类
   * 抽象类和其他类的区别并不大，只是说抽象类不能实例化，不能用来创建对象
   *
   * 抽象类就是专门用来被继承的类
   *
   *  */
  abstract class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayByebye() {
      console.log(`${this.name}说拜拜`)
    }
    /**
     * 定义一个抽象方法
     *
     *   抽象方法使用  abstract  开头，并且没有方法体
     *
     *   抽象方法只能定义在抽象类中，子类必须对父类的抽象方法进行重写，
     *
     *    抽象类中可以没有抽象方法，但是有抽象方法的一定是抽象类
     *
     */
    abstract sayHello(): void
  }
  class Student extends Person {
    sayByebye() {
      console.log(`${this.name}不说拜拜`)
    }
    sayHello() {
      console.log('小学生，你好啊')
    }
  }
  // const pp = new Person('一个人', 26)
  // console.log(pp)

  const stu = new Student('小学生', 6)
  console.log(stu)
})()
