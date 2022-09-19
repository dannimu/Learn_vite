<template>
    <div class="life-api">
        <h2>setup() 生命周期钩子 API</h2>
        <div class="setup">
            1.setup()代替了beforeCreate，created两个生命周期钩子，
            所以setup()生命周期钩子中没有这两个 <br>
            2.如果在setup()中使用生命周期钩子，需要在钩子之前加“on”即可
        </div>
        <div>

        </div>
    </div>
</template>
<style lang="less" scoped>
.life-api{
    border: 3px solid rgb(0, 140, 255);
    .setup{
        text-align: left;
    }
}
</style>
<script>
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,} from 'vue'
export default {
    setup() {
    //函数中有一个参数，回调函数
        // //注册一个钩子，在组件被挂载之前被调用。
        // onBeforeMount(()=>{
        //     console.log('onBeforeMount');
        // })
        // //注册一个回调函数，在组件挂载完成后执行。
        // onMounted(()=>{
        //     console.log('onMounted');
        // })
        // //注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
        // onBeforeUpdate(()=>{
        //     console.log('onBeforeUpdate');
        // })
        // //注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
        // onUpdated(()=>{
        //     console.log('onUpdated');
        // })
    }
}
</script>