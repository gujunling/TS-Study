;(function () {
  /**
   * 属性封装
   *
   * TS 可以在属性前添加权限修饰符
   *
   *        - public（默认值），可以在类、子类和对象中访问(修改)，即可以被任意访问(修改)
   *        - protected ，受保护的，只可以在当前类及当前类的子类中访问(修改)
   *        - private ，私有属性，只能在类的内部进行访问(修改),可以在类中添加方法来使得私有属性可以被外部访问（修改）
   *
   *
   */
  class Person {
    // private _name: string
    // private _age: number
    // constructor( name: string,  age: number) {
    //   this._name = name
    //   this._age = age
    // }

    //简化版： 直接将属性定义在构造函数中，可以替换上面的先定义属性，再在构造函数中重新赋值
    constructor(private _name: string, private _age: number) {}

    // 方式一：
    // // 用来获取name属性的方法
    // getName() {
    //   return this.name
    // }
    // // 用来设置name属性的方法
    // setName(value: string) {
    //   this.name = value
    // }
    // // 用来获取age属性的方法
    // getAge() {
    //   return this.age
    // }
    // // 设置age属性的方法
    // setAge(age: number) {
    //   if (age < 0 || age > 200) {
    //     return
    //   } else {
    //     this.age = age
    //   }
    // }

    //方式二： TS 中设置 getter方法的方式
    get name() {
      return this._name
    }
    get age() {
      return this._age
    }
    set name(value: string) {
      this._name = value
    }
    set age(value: number) {
      if (value < 0 || value > 200) {
        return
      } else {
        this._age = value
      }
    }
  }
  const pp = new Person('小伙子', 20)
  console.log(pp)

  // 现在属性是在对象中设置的，属性可以随意的被更改,会导致对象中的数据非常不安全（例如：年龄被设置为负数等）
  // pp.name = '哈哈哈哈'
  // pp.age = 10

  // 方式一中的方法的调用
  // pp.setName('哈哈哈哈')
  // pp.setAge(293)

  // 方式二中的方法调用
  pp.name = '哈哈哈哈'
  pp.age = 66
  console.log(pp)
})()
