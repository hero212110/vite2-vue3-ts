import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    abc: 12345,
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});
