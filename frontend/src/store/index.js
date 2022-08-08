import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
    dialog: false,
    students: []
  },
  getters: {},
  mutations: {
    setStudent(state, payload) {
      state.student = payload;
    },
    setStudents(state, payload) {
      state.students = payload;
    },
    setDialog(state, payload) {
      state.dialog = payload;
    },
  },
  actions: {},
  modules: {},
});
