const countingBModule = {
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
};

export default countingBModule;
