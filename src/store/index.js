import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isAuth: false,
      presaleDate: new Date(Date.UTC(2023, 0, 20, 10, 0, 0)) - new Date(),
    };
  },
  mutations: {
    setAuth(state) {
      state.isAuth = true;
    },
  },
});
