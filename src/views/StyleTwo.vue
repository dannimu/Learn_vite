<template>
    <div>
        子组件 StyleTwo

      案例：两个数组里面的对象合并
      {{merge}}
        <ul>
            <li>q</li>
            <li>e</li>
            <li>r</li>
            <li>t</li>
        </ul>
    </div>
</template>
<script setup>
import {ref,computed} from 'vue'
const data = [{
  "oddsName": "Green",
  "odds": 1.98,
  "oddsCode": "100011"
},{
  "oddsName": "Violet",
  "odds": 1.98,
  "oddsCode": "100011"
},{
  "oddsName": "Red",
  "odds": 1.98,
  "oddsCode": "100011"
}]


const data2 = [
  {
    title: "Green",
    active: 1,
    className: "green",
    bgColor: "rgb(92, 186, 71)",
  }, {
    title: "Violet",
    active: 2,
    className: "violet",
    bgColor: "rgb(152, 49, 233)",
  }, {
    title: "Red",
    active: 3,
    className: "red",
    bgColor: "rgb(251, 78, 78)",
  }
]

const merge = computed((item) => {
  const map = {}
    data.map(v => {
      map[v.oddsName] = v
    })
    data2.map(v => {
      Object.assign(v, map[v.title])
    })
    console.log(data2)
})
merge()

</script>