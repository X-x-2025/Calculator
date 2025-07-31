
<script setup>
import Button from './components/Button.vue'
import Display from './components/Display.vue'
import { useCountStore } from './store/counter.js'
const user = useCountStore()
const getNumber = (value) => {
  // const reg = /^[0-9]/
  // const reg1 = /\+/
 let str = ''


 
//  user.prev = str
//  console.log(str);

  if(value == 'AC'){
    cleraFn(str)
  }else if(value == 'DEL'){
    user.prev = user.prev.slice(0, -1)
  }else if(['+', '-', '×', '÷'].includes(value)) {
    const newstr = user.prev + value 
  if (/[+\-×÷]{2}$/.test(newstr)) return
    user.prev = newstr
  }else if(value == '='){
    user.current = equalFn() + ' '
  }else{
    str = user.prev + value
    user.prev = str
  }
  // user.prev += value
  // return user.prev
}





// 删除函数
// const deleteFn = () => {
//   if(str === ''){
//     return
//   }else{
// //  str = user.prev + value
// //   user.prev = str 
//   user.prev = user.prev.split(0,-1)
//   }
// }
// 归零函数


const cleraFn = (str) => {
  str = ''
  user.prev = ''
  user.current = ''
}


const equalFn = () => {
  const expression = user.prev
  if(expression.includes('+')) {
    return addFn()  
  }else if(expression.includes('-')){
    return subtractFn()
  }else if(expression.includes('×')){
   return chengFn()
  }else if(expression.includes('÷')){
    return chuFn()
  }
}

// 加法函数
const addFn = () => {
  if(user.prev == '') return ''
  return user.prev.replace(/(\d+)\+(\d+)/, (_, $1, $2) => {
    return Number($1) + Number($2)
  })
}

// 减法函数
const subtractFn = () => {
  if(user.prev == '') return ''
  return user.prev.replace(/(\d+)-(\d+)/, (_, $1, $2) => {
    return Number($1) - Number($2)
  })
}

// 乘法函数
const chengFn = () => {
  if(user.prev == '') return ''
  return user.prev.replace(/(\d+)×(\d+)/, (_, $1, $2) => {
    return Number($1) * Number($2)
  })
}

// 除法函数
const chuFn = () => {
  if(user.prev == '') return ''
  return user.prev.replace(/(\d+)÷(\d+)/, (_, $1, $2) => {
    return Number($1) / Number($2)
  })
}


</script>
<template>
<div class="body">
  <div class="App">
    <Display></Display>
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
