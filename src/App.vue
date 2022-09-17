<script>
//vue3 引入子组件，子组件名后方必须加文件类型，例如：.vue  .js  等等
import LearnVite from './components/LearnVite.vue'
import LifeCycle from './components/LifeCycle.vue'
export default {
  data() {
    return {
      meg:'爷爷组件（app.vue）直接向孙子组件（OtherContent.vue）传值',
      //事件，通过响应式对象的方式
      obj:{
        nums:'事件：以对象的形式传值'
      }
    } 
  },
  components:{
    LearnVite,
    LifeCycle,
  },
  // provide 爷爷组件（app.vue）发出
  //此种方式只能传固定的值
  // provide:{
  //   meg:'爷爷组件（app.vue）直接向孙子组件（OtherContent.vue）传值'
  // },
  //如果想去访问组件实例的属性 此种方式可以传变量的值  需要以对象的形式传值
  provide(){
    return{
      meg:this.meg,
      obj:this.obj,  //事件，通过响应式对象的方式
    }  
  }
}
</script>
<template>
  <div>
    <learn-vite />
    <!-- 爷爷组件（app.vue）直接向孙子组件（OtherContent.vue）传值  事件，通过响应式对象的方式-->
    <button @click="obj.nums='爷爷组件直接向孙子组件传值，点击事件'">爷爷组件（app.vue）按钮</button>
    <!-- 生命周期 -->
    <life-cycle/>
  </div>
</template>