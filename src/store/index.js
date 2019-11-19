import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  getters: {
    // getSortage:function (state) {
    //   if(!state.token){
    //     state.token =JSON.parse(localStorage.getItem(key))
    //   }
    //   return state.token
    // }
  },
  mutations: {
    changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
          }
  },
  actions: {},
  modules: {}
});
