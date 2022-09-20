<template>
  <div>
    <learn-vite />
    <!-- 爷爷组件（learn.vue）直接向孙子组件（Vue2Content.vue）传值  事件，通过响应式对象的方式-->
    <button @click="obj.nums='vue2 爷爷组件直接向孙子组件传值，点击事件'">vue2 爷爷组件（learn.vue）按钮</button>
    <button @click="name='vue3 爷爷组件向孙子组件传值'">vue3 爷爷组件（learn.vue）按钮</button>
    <!-- 生命周期 -->
    <life-cycle />
    <combined-api />
    <watch-api />
    <computed-api />
    <life-api />
    <context-api :meg="meg" :obj="obj" class="box" id="aaa" @injectCounter="injectCounter">
      <template v-slot:ppp>
        <div>
          通过context.slots拿取父组件插槽里面的内容，并展示到子组件
        </div>
      </template>
    </context-api>
    <setup-api />
  </div>
</template>
<script>
//vue3 引入子组件，子组件名后方必须加文件类型，例如：.vue  .js  等等
import {ref,provide, reactive} from 'vue'
import LearnVite from './LearnVite.vue'
import LifeCycle from './LifeCycle.vue'
import CombinedApi from './CombinedApi.vue'
import WatchApi from './WatchApi.vue'
import ComputedApi from './ComputedApi.vue'
import LifeApi from './LifeApi.vue'
import ContextApi from './ContextApi.vue'
import SetupApi from './SetupApi.vue'
export default {
  data() {
    return {
      meg:'爷爷组件（learn.vue）直接向孙子组件（Vue2Content.vue）传值',
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
    SetupApi,
  },
  // provide 爷爷组件（learn.vue）发出
  //此种方式只能传固定的值
  // provide:{
  //   meg:'爷爷组件（learn.vue）直接向孙子组件（Vue2Content.vue）传值'
  // },
  //vue2 如果想去访问组件实例的属性 此种方式可以传变量的值  需要以对象的形式传值
  provide(){
    return{
      meg:this.meg,
      obj:this.obj,  //事件，通过响应式对象的方式
    }  
  },

    // 1. vue2写法 子组件向父组件拿值 injectCounter(value)事件
    // methods:{
    //   injectCounter(value){
    //     value++
    //   }
    // },
  setup() {

    // 2. vue3写法 子组件向父组件拿值 injectCounter(value)事件
    function injectCounter(value) {
      value.value++
    }

    //vue3 爷爷组件（learn.vue）直接向孙子组件（ProvideApi.vue）传值
    //定义name 的变量 
    const name = ref('vue3 爷爷组件（learn.vue）直接向孙子组件（ProvideApi.vue）传值,爷爷组件用provide（）')
    //定义objects对象
    const gaveSunzi = reactive({
      事件:'vue3 以对象的形式传值',
      with:100,
      height:50,
      bg:'pink'
    })

    //provide('name',需要传的变量)    'name'是provide的属性，必须按要求这样写
    provide('name',name)
    //传对象给孙子组件    gaveSunziname 为孙子组件 inject('gaveSunzibianliang')接收名
    provide('gaveSunziname',gaveSunzi)
    return{
      injectCounter,name
    }
  },
}
</script>