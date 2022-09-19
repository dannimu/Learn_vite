<template>
    <div class="watch-api">
        <h2>watch API</h2>
        <div>
            {{counter}}-----{{user}}======={{user.name}}
            <button @click="changeCounter">改变counter</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.watch-api{
    border:3px solid rgb(11, 216, 11);
}
</style>
<script>
import {ref,reactive,watch,watchEffect} from 'vue'
export default {
    setup(){
        const counter = ref(0)
        const user = reactive({
            name:'张三',
            age:18,
        })
        function changeCounter() {
            counter.value++
            user.name= '用方法改变对象中属性的值'
        } 

    // 1. watch  只能侦听变量
        //watch(侦听的响应式引用,回调函数) 直接侦听变量
        watch(counter,(newval,oldval)=>{
            console.log('-----',newval);  
            console.log(oldval);
        })
        //无法侦听到对象中属性的值变化
        // watch(user,(newval,oldval)=>{
        //     console.log('-----',newval);   //可以侦听到无法侦听到对象中属性的新值
        //     console.log(oldval); //无法侦听到无法侦听到对象中属性的旧值
        // })

    // 2. watchEffect(回调函数) 侦听对象中属性值的变化
        //不需要指定监听的属性，组件在初始化的时候会执行一次回调函数，自动收集依赖
        watchEffect (()=>{
            // console.log('=====',user.name);  //显示当前响应式值
        })

    // 3.watch 和 watchEffect 的区别：
        // 1.watch
        // 只能监听指定的属性
        // 2.watchEffect 
        // 不需要指定监听的属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行。
        return{
            counter,user,changeCounter,
        }
    }
}
</script>