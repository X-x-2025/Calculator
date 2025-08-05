
<script setup>
import Button from './components/Button.vue'
import Display from './components/Display.vue'
import { useCountStore } from './store/counter.js'

// const element = document.querySelector('Display');
// element.focus()
const user = useCountStore()
// 键盘
// const keyboardInput = (keyvalue) => {
//   console.log(keyvalue);
//   const list = {
//     'Esc':'AC',
//     'Backspace':'DEL',
//     '*':'×',
//     '/':'÷',
//     '+':'+',
//     "-":'-'
//   }
  
//    if(keyvalue == list[keyvalue]){
//     clearFn()
//   }else if(keyvalue == 'DEL'){
//     user.prev = user.prev.slice(0, -1)
//   }else if(['+', '-', '×', '÷'].includes(list[keyvalue])) {
//     const newstr = user.prev + list[keyvalue] 
//   if (/[+\-×÷]{2}$/.test(newstr)) return
//     user.prev = newstr
//   }else if(keyvalue == '='){
//     user.current = equalFn(user.prev) + ' '
//   }else{
//     str = user.prev + keyvalue
//     user.prev = str
//   }
// }
// 键盘
// const getKeyboardData = (data) => {
//   if(data == 'esc'){
//     clearFn(str)
//   }else if(data == 'backspace'){
//     user.prev = user.prev.slice(0, -1)
//   }else if(['+', '-', '×', '÷'].includes(data)) {
//     const newstr = user.prev + data 
//   if (/[+\-×÷]{2}$/.test(newstr)) return
//     user.prev = newstr
//   }else if(value == '='){
//     user.current = equalFn(user.prev) + ' '
//   }else{
//     str = user.prev + data
//     user.prev = str
//   }


// }
// 按钮
const getNumber = (value) => {
  // const reg = /^[0-9]/
  // const reg1 = /\+/
 let str = ''

//  user.prev = str
//  console.log(str);

  if(value == 'AC'){
    clearFn(str)
  }else if(value == 'DEL'){
    user.prev = user.prev.slice(0, -1)
  }else if(['+', '-', '×', '÷'].includes(value)) {
    const newstr = user.prev + value 
  if (/[+\-×÷]{2}$/.test(newstr)) return
    user.prev = newstr
  }else if(value == '='){
    user.current = equalFn(user.prev) + ' '
  }else if(value == 'Enter'){
    user.current = equalFn(user.prev) + ' '
  }else if(value == 'Backspace'){
    user.prev = user.prev.slice(0, -1)
  }else if(value == 'Shift'){
    user.prev.replace(/Shift/g,'')
  }else if(value == 'Escape'){
    clearFn(str)
  }else if(value == '/'){
    user.prev = user.prev + '÷'
  }else if(value == '*'){
    user.prev = user.prev + '×'
  }

  else{
    str = user.prev + value
    user.prev = str
  }
  // user.prev += value
  // return user.prev
}





// 删除函数
// const deleteFn = () => {
//   if(str == ''){
//     return
//   }else{
// //  str = user.prev + value
// //   user.prev = str 
//   user.prev = user.prev.split(0,-1)
//   }
// }


// 归零函数
const clearFn = (str) => {
  user.prev = ''
  user.current = ''
}

const equalFn = (str1) => {
       // 将中缀表达式装换为后缀表达式
        // 定义运算优先级
        const grade = {
            '+':1,
            '-':1,
            '×':2,
            '÷':2
        }
        const arr = str1.split('')
        console.log(arr);
        // 拼接数字和小数点
        for(let i = 0;i < arr.length;i++){
            // if(newarr[i].includes([0,1,2,3,4,5,6,7,8,9,'.']) && newarr[i+1].includes([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'])){
            //     newarr.splice(i,1,newarr[i]+newarr[i+1])
            //     newarr.splice(i+1,1)
            //     // i--
            // }
            // console.log(newarr);

           if(/[\d.]/.test(arr[i]) && /[\d.]/.test(arr[i+1])){
                arr.splice(i,1,arr[i]+arr[i+1])
                arr.splice(i+1,1)
                // 继续判断索引为i的数字，再次执行循环体，判断是否有多个数字
                i--
            }
            console.log(arr);
            
        }
        console.log(arr);
        const endarr = []
        const oparr = []
        console.log(arr);

        
        arr.map((a,index) => {
            // 如果a是数字
            if(/\d+/.test(a)){
                endarr.push(a)
            }
            // 如果a是符号
            else if(a in grade){
                // 如果符号a的优先级大于栈顶符号的优先级，则入栈，栈空也入栈
                    if(grade[a] > grade[oparr[oparr.length-1]] || oparr.length == 0){
                        oparr.push(a)
                        // console.log(oparr);
                    }else if(grade[a] < grade[oparr[oparr.length-1]]){
                        // 按顺序出栈
                        for(let j=oparr.length-1;j>=0;j--){
                            endarr.push(oparr[j])
                        }
                        // 清空栈
                        oparr.splice(0,oparr.length)
                        // 入栈
                        oparr.push(a)
                        console.log(endarr);
                    }else if(grade[a] = grade[oparr[oparr.length-1]]){
                        endarr.push(oparr[oparr.length-1])
                        oparr.splice(oparr.length-1,1)
                        oparr.push(a)

                    }
        }
         if (index === arr.length - 1) {
                // 按顺序出栈
                for (let q = oparr.length - 1; q >= 0; q--) {
                    endarr.push(oparr[q])
                }
            }
            console.log(endarr);
})
        console.log(endarr);
        console.log(oparr);


        // 运算后缀表达式
        // let sum = 0
        const totalarr = []
        // 修改后统一处理方式
        endarr.map((c,index) => {
            if(/\d+/.test(c)){
                totalarr.push(Number(c))
            } else {
                // 按序取出栈顶两个的元素，后取出的做被运算数
                const b = totalarr.pop()
                const a = totalarr.pop()
                // 运算后入栈
                switch(c) {
                    case '+': totalarr.push(a + b); break;
                    case '-': totalarr.push(a - b); break; 
                    case '×': totalarr.push(a * b); break;
                    case '÷': totalarr.push(a / b); break;
                }
            }
        })

        // if(index == endarr.length -1){
        //     sum = totalarr[0] +totalarr[1]
        // }
        const sum = totalarr.pop();
        console.log('计算结果：', sum);

    
    console.log(sum);

  return sum
//   const expression = user.prev
//   const arr = expression.split()
//  return expression.replace(/^(\d+)([+\-×÷])(\d+)((?:[+\-×÷]\d+)*)$/g,(_,$partA,$partB,$partC,$partD) => {
//       for(;$partD == '';){
//            if($partB == '+'){
//             $partD = Number($partA) + Number($partC) + $partD
//                 return $partD
//            }
//            else if($partB == '-'){
//             $partD = Number($partA) - Number($partC) + $partD
//                 return $partD
//            } 
//            else if ($partB == '×') {
//             $partD = Number($partA) * Number($partC) + $partD
//                 return $partD
//            }
//            else if ($partB == '÷') {
//             $partD = Number($partA) / Number($partC) + $partD
//                 return $partD
//            }
//           }
//             })
          
  // 只能二元运算
  // if(expression.includes('+')) {
  //   return addFn()  
  // }else if(expression.includes('-')){
  //   return subtractFn()
  // }else if(expression.includes('×')){ 
  //  return chengFn()
  // }else if(expression.includes('÷')){
  //   return chuFn()
  // }
}

// 加法函数
// const addFn = () => {
//   if(user.prev == '') return ''
//   return user.prev.replace(/(\d+)\+(\d+)/, (_, $1, $2) => {
//     return Number($1) + Number($2)
//   })
// }

// 减法函数
// const subtractFn = () => {
//   if(user.prev == '') return ''
//   return user.prev.replace(/(\d+)-(\d+)/, (_, $1, $2) => {
//     return Number($1) - Number($2)
//   })
// }

// 乘法函数
// const chengFn = () => {
//   if(user.prev == '') return ''
//   return user.prev.replace(/(\d+)×(\d+)/, (_, $1, $2) => {
//     return Number($1) * Number($2)
//   })
// }

// 除法函数
// const chuFn = () => {
//   if(user.prev == '') return ''
//   return user.prev.replace(/(\d+)÷(\d+)/, (_, $1, $2) => {
//     return Number($1) / Number($2)
//   })
// }


</script>
<template>
<div class="body">
  <div class="App">
    <Display
    @keyboard-input="keyboardInput"
    @keydown="getNumber($event.key)"

    
    ></Display>
    <Button
     @input="getNumber"
    ></Button>
    
    
    <!-- <Display ref="display" /> -->
    <!-- <Button @input="char => $refs.display.handleInput(char)" > -->
  </div>
</div>


</template>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.body {
    display: flex;
    justify-content: center;
     align-items: center;
    height: 100vh;
} 
.App {
    height: 700px;
    width: 500px;
    background-color: black;
    border-radius: 50px;
}
</style>
