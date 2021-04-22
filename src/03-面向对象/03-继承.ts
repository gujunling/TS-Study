// 为了避免变量命名重复等问题，采用立即执行函数来定义（作用域不相同）
;(function () {
  class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    test() {
      console.log('Person类中的方法')
    }
  }
  class Male extends Person {
    test() {
      console.log('Male类中的方法')
    }
  }
  class Female extends Person {
    // 子类中添加父类中不存在的新的属性
    price: number

    constructor(name: string, age: number, price: number) {
      // 如果在子类中写了构造函数，则在子类的构造函数中必须对父类的构造函数进行调用
      super(name, age)
      this.price = price
    }

    // 重写 Person父类中的test 方法
    test() {
      // 在类的方法中 super就表示当前类的父类
      super.test()
      console.log(`${this.name}--类中的test方法被调用了`);
      // console.log('Female类中的方法')
    }
  }
  const m = new Male('小子', 20)
  console.log(m)
  m.test()

  const fm = new Female('小女孩', 16, 1200)
  console.log(fm)
  fm.test()
})()
