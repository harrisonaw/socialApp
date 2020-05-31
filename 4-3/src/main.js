import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AlertComp from './components/AlertComp.vue'

import firebase from 'firebase'


Vue.config.productionTip = false

Vue.component('v-snackbar', AlertComp)


new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App),
}).$mount('#app')
