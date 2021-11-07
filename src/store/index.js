import { createStore } from "vuex";

export default createStore({
  state: {
    news: [],
  },
  mutations: {
    SET_NEW(state, payload) {
      state.news = payload;
      console.log(state.news);
    },
  },
  actions: {
    getSingleNew({ commit }, payload) {
      commit("SET_NEW", payload);
    },
  },

  modules: {},
});
