<template>
    <div>
        <h2>组件</h2>
        <div>{{num}}</div>
        <button @click="sendParent">递交数据给父组件</button>
    </div>
</template>
<script>
export default {
    props:{
        num:{
            type:String,
            // default 设置变量默认值
            default:'1233',
        }
    },
    methods:{
        //在子组件中，通过$emit来触发事件   父组件传到子组件
        sendParent(){
            this.$emit('sendParent',this.num)
        }
    }
}
</script>