import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from 'vuexfire';
import firebase from 'firebase/app';
import 'firebase/database';


const db = firebase.initializeApp({
  apiKey: "AIzaSyDOZxvEjrGF2CC5d99aPETZXKGLgRHaKAg",
  authDomain: "bigbrother-ab109.firebaseapp.com",
  databaseURL: "https://bigbrother-ab109.firebaseio.com",
  projectId: "bigbrother-ab109",
  storageBucket: "bigbrother-ab109.appspot.com",
  messagingSenderId: "1035886727228",
  appId: "1:1035886727228:web:d3d47ad9cf9e93fa1f3339",
  measurementId: "G-TT4YRW34QR"
}, "bb-web").database();

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    logz: [],
  },
  getters: {
    user(state){
      return state.user
    },
    logs: state => {
      return state.logz;
    }
  },
  mutations: {
    ...vuexfireMutations,
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },

  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        commit("SET_USER", null);
      }
    },
    bindTodosRef: firebaseAction(context => {
      return context.bindFirebaseRef('logz',  db.ref('logs'));
    }),
  }
});
