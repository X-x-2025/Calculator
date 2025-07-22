<template>
<div class="buttons">
            <button class="del type" data-type="del">del</button>
            <button class="is0 type" data-type="is0">AC</button>
            <button class="cheng type"data-type="cheng">*</button>
            <button @click="getNumber(1)">1</button>
            <button @click="getNumber(2)">2</button>
            <button @click="getNumber(3)">3</button>
            <button class="chu type" data-type="chu">/</button>
            <button @click="getNumber(4)">4</button>
            <button @click="getNumber(5)">5</button>
            <button @click="getNumber(6)">6</button>
            <button class="jia type" data-type="jia">+</button>
            <button @click="getNumber(7)">8</button>
            <button @click="getNumber(8)">8</button>
            <button @click="getNumber(9)">9</button>
            <button @click="" class="jian type" data-type="jian">-</button>
            <button @click="getNumber(0)">0</button>
            <button>.</button>
            <button class="equal"data-type="equal">=</button>
        </div>
</template>

<script>
export default {
    name: 'Button',
    data(){
        return{
            num:0,
        }
    },
    methods:{ 
        getNumber(numb){
            this.num = numb;
            console.log(this.num);
        }
    }
}
// const number = new Vue({
//    el:'.buttons button',
//    methods:{
//     getNumber(numb){
//         num =  numb
//         console.log(num);
        

//     }

//    }
// })
</script>

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