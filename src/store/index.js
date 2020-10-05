import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    interviews: [],
  },
  mutations: {
    addInterview(state, interview) {
      console.log(`New interview : ${interview}`);
      state.interviews.push(interview);
    },
  },
  getters: {
    levelInterviews(state) {
      return state.interviews.sort((a, b) => b.level - a.level);
    },
  },
});
