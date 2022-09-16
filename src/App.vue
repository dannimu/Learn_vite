<script>
//vue3 引入子组件，子组件名后方必须加文件类型，例如：.vue  .js  等等
import LearnVite from './components/LearnVite.vue'
export default {
  components:{LearnVite}
}
</script>

<template>
  <div>
    <learn-vite />
  </div>
</template>