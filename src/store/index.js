import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogin: false,
        };
    },
    mutations: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
    },
});

export default store;
