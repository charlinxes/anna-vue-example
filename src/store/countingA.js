import countingBModule from "./countingB.js";

const countingAModule = {
    namespaced: true,
    state() {
        return {
            count: 0,
        };
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
        decrement(state) {
            state.count = state.count - 1;
        },
    },
    modules: {
        countingBModule,
    },
};

export default countingAModule;
