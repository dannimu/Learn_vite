<template>
    <div>
        <div  class="context-api">
            <h2>props Api</h2>
            <div>{{meg}}</div>
            <div>{{obj}}-->{{obj.nums}}</div>
        </div>
        <div  class="context-api">
            <h2>Context Api 重点✨✨</h2>
            <!-- 非响应式对象，等同于$attrs -->
            {{context}}-->{{context.attrs}}++++
            {{context.attrs.class}}-->{{context.attrs.id}}
            <!-- 拿去插槽里面内容 通过context.slots拿取父组件插槽里面的内容，并展示到子组件-->
            <slot name="ppp"/>
            <!-- context （3）触发事件（方法，等同于$emit）  context.emit('事件名',变量) -->
            <div>
                <h2>重点✨✨</h2>
                {{counter}}
                <button @click="sendeParent">子组件向父组件拿值</button>
            </div>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
.context-api{
    border: 3px solid rgb(0, 255, 34);
}
</style>
<script>
import { toRefs ,ref} from 'vue';
export default {
    //先向父组件请求数据  props访问父组件时，写在setup()的外面
    props:{
        meg:String,
        obj:Object
    },
    setup(props,context) {
    // 1.props
        //toRefs()再向父组件拿回数据
        const {meg,obj} = toRefs(props)

    // 2.context
        // （1）非响应式对象，等同于$attrs   拿去父组件此标签的属性和值
        // console.log(context.attrs);
        // （2）拿去插槽里面内容  通过context.slots拿取父组件插槽里面的内容，并展示到子组件
        // console.log(context.slots);
        // （3）触发事件（方法，等同于$emit）  context.emit('事件名',变量)
        const counter = ref(10)
        function sendeParent() {
            //counter.value 为事件点击后的旧值
            console.log(counter.value);
            context.emit('injectCounter',counter)
        }
        // (4) 暴露公共函数   (一般使用不到)
        // console.log(context.expose);


        
        return{
            context,counter,sendeParent
        }
    }
}
</script>