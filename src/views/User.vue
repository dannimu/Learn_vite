<template>
    <div>user22222</div>
</template>

<!-- 
// vue2 获取动态路由的当前参数
<script>
export default {
    mounted(){
        //$router表示当前活跃的路由对象
        console.log(this.$route.params.id);
    }
}
</script>
-->

<script setup>
// vue3 获取动态路由的当前参数
import {useRoute} from 'vue-router'
// useRoute()是一个函数
    console.log(useRoute().params.id);
</script>
