<template>
  <div>
    <el-amap
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      :events="events"
      class="amap-demo"
      :amap-manager="amapManager"
    ></el-amap>
    <div class="toolbox">
      <button @click="add()">add marker</button>
    </div>
  </div>
</template>

<script>
// import { AMapManager as amapManager } from 'vue-amap'

import VueAMap from 'vue-amap'
const amapManager = new VueAMap.AMapManager()

export default {
  data () {
    return {
      center: [121.59996, 31.197646],
      zoom: 12,
      amapManager,
      events: {
        init (o) {
          console.log(111)
          // const marker = new AMap.Marker({
          //   position: [121.59996, 31.197646]
          // })
          // marker.setMap(o)

          AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
            const marker = new SimpleMarker({
              iconLabel: 'A',
              iconStyle: 'red',
              map: o,
              position: o.getCenter()
            })
          })
        }
      }
    }
  },
  methods: {
    add () {
      const o = amapManager.getMap()
      const marker = new AMap.Marker({
        position: [121.59996, 31.197646]
      })
      marker.setMap(o)
    }
  }
}
</script>

<style scoped>
  /*.amap-wrapper {*/
  /*  width: 500px;*/
  /*  height: 500px;*/
  /*}*/

  /*.amap-box {*/
  /*  width: 500px;*/
  /*  height: 500px;*/
  /*}*/

  .amap-demo {
    height: 300px;
  }
</style>
