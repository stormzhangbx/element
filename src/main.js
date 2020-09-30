import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.less'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'b5c5341c287e46e99c13bd6a24cdd5bb',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4',
  uiVersion: '1.0.11'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
