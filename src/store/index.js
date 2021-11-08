import { createStore } from "vuex";

export default createStore({
  state: {
    news: [],
  },
  mutations: {
    SET_NEW(state, payload) {
      state.news = payload;
    },
  },
  actions: {
    getSingleNew({ commit }, payload) {
      commit("SET_NEW", payload);
    },
  },

  getters: {
    singleNews(state) {
      return state.news;
    },
  },
});
