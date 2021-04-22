export {}
console.log('哈哈哈哈')

let a: number
a = 123
console.log(a)

// 验证不允许隐式的any类型
function fn(a: number, b: number) {
  return a + b
}

// 验证不允许不明确类型的this
function fn2(this: Window) {
  alert(this)
}

// 验证 严格的检查空值（此时可能在获取元素的时候获取不到，下面再为其添加点击事件的话就可能会报错）
let box1 = document.getElementById('box1')

// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

box1?.addEventListener('click', function () {
  alert('hello')
})
