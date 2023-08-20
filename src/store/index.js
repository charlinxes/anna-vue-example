import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogin: false,
            flightCache: null,
        };
    },
    mutations: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
        saveFlightCache(state, res) {
            state.flightCache = res;
        },
        clearFlightCache(state) {
            state.flightCache = null;
        },
    },
});

export default store;
