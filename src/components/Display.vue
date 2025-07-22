
<template>
<div class="display">
            <div class="prev">1+1</div>
            <div class="current">2</div>
</div>
</template>

<script>

</script>

<style>
.display{
    display: flex;
    flex-direction: column;  
    width: 100%;            
    height: 200px;
    padding: 20px;          
    overflow: hidden;       
}
.current {
    font-size: 60px;
    height: 80px;
    text-align: right;
    color: white;
}
.prev {
    height: 40px;
    font-size: 40px;
    opacity: 0.7;
    text-align: right;
    color: rgba(255, 255, 255, 0.7);
        
}
</style>