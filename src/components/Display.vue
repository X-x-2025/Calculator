<script setup>
import { useCountStore } from '../store/counter.js'
// import { storeToRefs } from 'pinia'
const user = useCountStore()
// console.log('Prev:', user.prev);

// const element = document.querySelector('.prev');
// element.focus()

// @keydown="$emit('keyboard-input',$event.key)"
</script>
<template>
<div class="display">
            <div tabindex="0"  class="prev">{{ user.prev }}</div>
            <div class="current">{{ user.current }}</div>
</div>
</template>



<style>
.display{
    display: flex;
    flex-direction: column;  
    width: 100%;            
    height: 200px;
    padding: 20px;          
    overflow-x: auto;
    white-space: nowrap;
    text-overflow: ellipsis;       
}
.current {
    font-size: 60px;
    height: 80px;
    text-align: right;
    color: white;
}
.prev {
    height: 60px;
    font-size: 40px;
    opacity: 0.7;
    text-align: right;
    color: rgba(255, 255, 255, 0.7);   
}
</style>