// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './page/index.vue'
import router from './router'
import api from './api/index'

Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
    template: '<Index/>'
})
