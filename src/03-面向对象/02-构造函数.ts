class Student {
  name: string
  age: number

  play() {
    // 在实例方法中，this就表示当前调用方法的实例对象

    console.log('就是玩儿')
  }

  // constructor被称为构造函数
  // 构造函数在对象创建时调用

  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前调用方法的实例对象
    // 在构造函数中当前对象就是当前新创建的那个对象
    // 可以通过this向新创建的对象中添加属性
    console.log(this)
    this.name = name
    this.age = age
  }
}

const stu = new Student('小伙子', 26)
const stu2 = new Student('小姑娘', 18)

console.log(stu)
console.log(stu2)
stu.play()
