<template>
  <div>
    <learn-vite />
    <!-- 爷爷组件（learn.vue）直接向孙子组件（OtherContent.vue）传值  事件，通过响应式对象的方式-->
    <button @click="obj.nums='爷爷组件直接向孙子组件传值，点击事件'">爷爷组件（learn.vue）按钮</button>
    <!-- 生命周期 -->
    <life-cycle />
    <combined-api />
    <watch-api />
    <computed-api />
    <life-api />
    <context-api :meg="meg" :obj="obj" class="box" id="aaa">
      <template v-slot:ppp>
        <div>
          通过context.slots拿取父组件插槽里面的内容，并展示到子组件
        </div>
      </template>
    </context-api>
  </div>
</template>
<script>
//vue3 引入子组件，子组件名后方必须加文件类型，例如：.vue  .js  等等
import LearnVite from './LearnVite.vue'
import LifeCycle from './LifeCycle.vue'
import CombinedApi from './CombinedApi.vue'
import WatchApi from './WatchApi.vue'
import ComputedApi from './ComputedApi.vue'
import LifeApi from './LifeApi.vue'
import ContextApi from './ContextApi.vue'
export default {
  data() {
    return {
      meg:'爷爷组件（learn.vue）直接向孙子组件（OtherContent.vue）传值',
      //事件，通过响应式对象的方式
      obj:{
        nums:'事件：以对象的形式传值'
      }
    } 
  },
  components:{
    LearnVite,
    LifeCycle,
    CombinedApi,
    WatchApi,
    ComputedApi,
    LifeApi,
    ContextApi,
  },
  // provide 爷爷组件（learn.vue）发出
  //此种方式只能传固定的值
  // provide:{
  //   meg:'爷爷组件（learn.vue）直接向孙子组件（OtherContent.vue）传值'
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