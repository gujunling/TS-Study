;(function () {
  /**
   * 定义一个接口
   *
   * 接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法。
   *
   * 接口主要负责定义一个类的结构，用来定义一个类中应该包含哪些属性和方法，而不需要考虑实际值，同时接口也可以当成类型声明去使用
   *
   * 接口可以在定义类的时候去限制类的结构，对象只有包含接口中定义的所有属性和方法时才能匹配接口。
   *
   * 同时，可以让一个类去实现接口，实现接口的类中要实现接口中的所有属性和方法。
   *
   * 接口是可以重复定义的（接口名可以重复），在调用实现接口时需要将所有接口（调用的所有的同一个名字的接口）中的属性和方法全部都实现
   *
   *
   */

  interface Person {
    name: string
    age: number
    sayHello(): void
  }
  interface Person {
    gender: string
  }
  // ----------------------在对象中直接声明为接口类型(此时的额对象中必须实现接口中定义的所有的属性和方法)----------------------
  const obj: Person = {
    name: '哈哈哈哈',
    age: 26,
    gender: '男',
    sayHello() {
      console.log('小胖子')
    }
  }
  console.log(obj)

  // ----------------------在方法中的形参中使用接口来限定形参类型-------------------------
  function fn(pp: Person) {
    pp.sayHello()
  }
  fn({
    name: '小伙子',
    age: 20,
    gender: '男',
    sayHello() {
      console.log('哈哈', `${this.name}`)
    }
  })

  // ----------------------------通过接口的实现类来实现调用接口------------------------------------
  class Student implements Person {
    name: string
    age: number
    gender: string
    constructor(name: string, age: number, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHello() {
      console.log('实现类中的sayHello方法')
      return 123
    }
  }
  const stu = new Student('小明', 20, '女')
  console.log(stu)
  // stu.sayHello()
  console.log(stu.sayHello())
})()
