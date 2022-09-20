<template>
    <div class="setup-api">
        <h2>vue3 单文件组件 script setup</h2>
        <div>{{name}}</div>
        <div>
            {{num}}--->{{count}}
            <button @click="changeCount">改变count</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.setup-api{
    border: 3px solid rgb(0, 166, 255);
}
</style>
<script setup>
// 1.vue3 引入组件不需要 components:{}注册
import {ref} from 'vue'
// 2.vue3 定义变量在模版中使用，不需要return{}暴露出去，可以直接在页面显示
const name = '2. vue3 定义变量在模版中使用，不需要return{}暴露出去，可以直接在页面显示'
// 3.vue3 定义响应式变量，还是需要从vue中引入ref
const num = ref(10)
const count = ref('3. vue3 定义响应式变量，还是需要从vue中引入ref')
function changeCount() {
    num.value++
    count.value ='1. vue3 引入组件不需要 components:{}注册'
}
</script>