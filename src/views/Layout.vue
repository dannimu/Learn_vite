<template>
  <div class="layout">
    <learn class="learn" />
    <div class="practise">
      <div v-for="i in 200" :key="i" >{{i}}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.layout{
  .learn{
    text-align: center;
    max-width: 650px;
    float: left;
    overflow-y: auto;
  }
  .practise{
    width: calc(100% - 665px);
    float: right;
    overflow-y: auto;
  }
}
</style>
<script setup>
import Learn from '../components/Learn/Learn.vue'
</script>