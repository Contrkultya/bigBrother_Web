import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyDOZxvEjrGF2CC5d99aPETZXKGLgRHaKAg",
  authDomain: "bigbrother-ab109.firebaseapp.com",
  databaseURL: "https://bigbrother-ab109.firebaseio.com",
  projectId: "bigbrother-ab109",
  storageBucket: "bigbrother-ab109.appspot.com",
  messagingSenderId: "1035886727228",
  appId: "1:1035886727228:web:d3d47ad9cf9e93fa1f3339",
  measurementId: "G-TT4YRW34QR"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: (h) => h(App)
}).$mount('#app');
