import Vue from 'vue';
import App from '@/landing/Land.vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

Vue.config.productionTip = false;

console.log(App);
new Vue({
  Vuetify,
  el: '#app',
  components: { App },
  template: '<App/>',
  render: (h) => h(App)
});
