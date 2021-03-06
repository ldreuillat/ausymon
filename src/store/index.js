import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    interviews: [],
  },
  mutations: {
    addInterview(state, interview) {
      state.interviews.push(interview);
    },
    updateInterviews(state, interviews) {
      state.interviews = interviews;
    },
  },
  getters: {
    levelInterviews(state) {
      return state.interviews.sort((a, b) => b.level - a.level);
    },
    nbInterviews(state) {
      return state.interviews.length;
    },
  },
  actions: {
    getInterviews({ commit }) {
      axios.get(`${process.env.VUE_APP_REST_URL}/interviews`)
        .then((result) => commit('updateInterviews', result.data))
        .catch(console.error);
    },
    addNewInterview({ commit }, interview) {
      return axios.post(`${process.env.VUE_APP_REST_URL}/newinterview`, interview)
        .then(() => commit('addInterview', interview));
    },
  },
});
