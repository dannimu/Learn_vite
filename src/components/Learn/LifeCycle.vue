<template>
    <div class="life-cycle">
        <h2>生命周期</h2>
        {{counter}}
        <button @click="counter++">改变counter</button>
    </div>
</template>
<style lang="less" scoped>
.life-cycle{
    border: 3px solid rgb(162, 255, 0);  
}
</style>
<script>
export default {
    data() {
        return {
            counter:0,
        }
    },
    // //1. 在页面展示之前被执行
    // beforeCreate(){
    //     console.log('----beforeCreate');
    // },
    // //2. 在页面展示之前被执行
    // created(){
    //     console.log('==== created');
    // },
    // //3. 在页面展示之前被执行
    // beforeMount(){
    //     console.log('////  beforeMount');
    // },
    // //4. 在页面展示之前被执行 
    // mounted(){
    //     console.log('.....mounted');
    // },
    // // 5.当页面上的数据发生改变时被执行
    // beforeUpdate(){
    //     console.log(',,,,,   beforeUpdate');
    // },
    // // 6.当页面上的数据发生改变时被执行
    // updated(){
    //     console.log('*****   updated');
    // },
    // // 7.销毁
    // beforeUnmount() {
    //     console.log('beforeUnmount');
    // },
    // // 8.销毁
    // unmounted() { 
    //     console.log('unmountedw');
    // },
}
</script>