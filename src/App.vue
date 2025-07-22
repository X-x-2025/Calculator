
<template>
<div class="body">
  <div class="App">
    <Display></Display>
    <Button></Button>
  </div>
</div>


</template>

<script>
import Button from './components/Button.vue'
import Display from './components/Display.vue'
export default {
    components:{
        Button,
        Display
    }
}


</script>


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
