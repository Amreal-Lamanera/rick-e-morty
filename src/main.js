import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// const myEvent = new CustomEvent('search', {
//   detail: {
//     input: 'Gianni',
//     age: 32,
//     gender: 'fluid'
//   }
// });

// document.body.addEventListener('search', (e) => {
//   console.log(e);
//   const detail = e.detail;
//   const { age, gender, input } = detail;
//   console.log(age, gender, input);
// })

// document.body.addEventListener('click', () => {
//   document.body.dispatchEvent(myEvent) //dispatchEvent = spedisci evento
// })