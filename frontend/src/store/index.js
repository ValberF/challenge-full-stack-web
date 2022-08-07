import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
  },
  getters: {},
  mutations: {
    setStudent(state, payload) {
      state.student = payload;
    },
  },
  actions: {},
  modules: {},
});
