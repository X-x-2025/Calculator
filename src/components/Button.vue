<script setup >

</script>

<template>
<div class="buttons">
    
    <button  @click="$emit('input', 'AC')" class="is0 type">AC</button>
    <button  @click="$emit('input', 'DEL')" class="del type">DEL</button>
    <button  @click="$emit('input', '÷')" class="chu type">÷</button>
    <button  @click="$emit('input', '7')">7</button>
    <button  @click="$emit('input', '8')">8</button>
    <button  @click="$emit('input', '9')">9</button>
    <button  @click="$emit('input', '×')" class="cheng type">×</button>
    <button  @click="$emit('input', '4')">4</button>
    <button  @click="$emit('input', '5')">5</button>
    <button  @click="$emit('input', '6')">6</button>
    <button  @click="$emit('input', '-')" class="jian type">-</button>
    <button  @click="$emit('input', '1')">1</button>
    <button  @click="$emit('input', '2')">2</button>
    <button  @click="$emit('input', '3')">3</button>
    <button  @click="$emit('input', '+')" class="jia type">+</button>
    <button  @click="$emit('input', '0')">0</button>
    <button  @click="$emit('input', '.')">.</button>
    <button  @click="$emit('input', '=')" class="equal">=</button>
</div>
</template> 

<style>
.buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.buttons button {
    width: 80px;
    height: 80px;
    font-size: 40px;
    border-radius: 50%;
    background-color: #333;
    color: #fff;
    border: none; 
    margin: 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; 
    line-height: 1;
   
}
.buttons button:active{
    filter: brightness(240%);
}
.buttons .del{
    width: 210px;
    height: 80px;
    line-height: 1;
    
}
.buttons .equal {
    width: 210px;
    height: 80px;
    background-color: orange;
    line-height: 1;

}
.buttons .type{
    background-color:rgb(185, 185, 7);
}
</style>