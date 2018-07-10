import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faEdit, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome icon library
library.add(faStar, faStarRegular, faEdit, faTrash, faCheckCircle, faCircleRegular)
Vue.component('fa-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
