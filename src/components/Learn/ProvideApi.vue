<template>
    <div class="provide-api">
        <h2>vue3 访问组件的provide和inject API</h2>
        <h2>vue3 爷爷组件（learn.vue）直接向孙子组件（ProvideApi.vue）传值</h2>
        <div>{{name}}</div>
        <div>{{acceptGrandpa}}---->{{acceptGrandpa.height}}</div>
    </div>
</template>
<style lang="less" scoped>
.provide-api{
    border: 3px solid rgb(0, 183, 255);
}
</style>
<script>
import {inject} from 'vue'
export default {
    setup(props) {
        //vue3 爷爷组件（learn.vue）直接向孙子组件（ProvideApi.vue）传值  孙子组件用inject（）接收
        const name = inject('name')  
        // inject('属性名字')   此属性名字为爷爷组件provide('gaveSunzibianliang',gaveSunzi) 的属性
        const acceptGrandpa = inject('gaveSunziname')
        return{
            name,acceptGrandpa
        }
    }
}
</script>