
<script setup>
import Button from './components/Button.vue'
import Display from './components/Display.vue'
import { useCountStore } from './store/counter.js'
const user = useCountStore()
const getNumber = (value) => {
  // const reg = /^[0-9]/
  // const reg1 = /\+/
 let str = ''
 let sum = 0

 
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
    user.current = equalFn(str) + ' '
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


const equalFn = (str) => {
  if(str.includes('+')) {
    addFn(str)
  }else if(str.includes('-')){
    subtractFn(str)
  }else if(str.includes('×')){
   return chengFn(str)
  }else if(str.includes('÷')){
    chuFn(str)
  }
}

// 加法函数
const addFn = (str) => {
  if(str==''){ 
    return 
  } else{
    str.replace(/(\d+)(\+)(\d+)/,($_,$1,$2,$3) => {
      sum = $1 + $3
      return sum
    })
  } 
}

// 减法函数
const subtractFn = (str) => {
  if(str==''){ 
    return 
  } else{
    str.replace(/(\d+)(\-)(\d+)/,($_,$1,$2,$3) => {
      sum = $1 - $3
      return sum
    })
  } 
}

// 乘法函数
const chengFn = (str) => {
  if(str==''){ 
    return 
  } else{
    str.replace(/(\d+)(\×)(\d+)/,($_,$1,$2,$3) => {
     
      return $1 * $3
    })
  } 
}

// 除法函数
const chuFn = (str) => {
  if(str==''){ 
    return 
  } else{
    str.replace(/(\d+)(\÷)(\d+)/,($_,$1,$2,$3) => {
      sum = $1 / $3
      return sum
    })
  } 
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
