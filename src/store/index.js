import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            topicsList: [],
        };
    },
    getters: {},
    mutations: {
        addTopicToList(state, topicData) {
            state.topicsList.push(topicData);
        },
    },
    actions: {},
    modules: {},
});

export default store;
