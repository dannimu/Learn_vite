<template>
    <div class="other-content">
        <!-- 组件 -->
       <div class="components">
            <div>组件 {{num}}</div>
            <button @click="sendParent">递交数据给父组件</button>
       </div>
       <!-- 插槽 -->
       <div class="components">
           <div>
               <!-- 默认内容只会在没有提供内容的时候被渲染 -->
               <slot name="aaa">默认内容</slot>
               <slot name="bbb"/>
               <slot name="ccc"/>
           </div>
       </div>
       <!-- provide与inject 爷爷组件（app.vue）直接向孙子组件（OtherContent.vue）传值 -->
       <div class="components focus">
           <h2>重点✨</h2>
           <div>{{meg}}</div>
           <div>{{obj.nums}}</div>
       </div>
    </div>
</template>
<style lang="less" scoped>
.other-content{
    margin-top: 10px;
    border-top: 10px yellow solid;
    .components{
        border: 3px solid rgb(0, 174, 255);
    }
    .focus{
        background-color: rgba(170, 106, 22, 0.97);
    }
}
</style>
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
    },
    //inject 孙子组件（OtherContent.vue）接收
    inject:['meg','obj']
}
</script>