import { createStore } from "vuex";
import countingAModule from "./countingA.js";

const store = createStore({
    state() {
        return {
            listData: [],
            shopData: [],
        };
    },
    getters: {},
    mutations: {
        setListData(state, payload) {
            state.listData = payload;
        },
        addShopData(state, payload) {
            state.shopData.push(payload);
        },
    },
    actions: {
        sendRequest({ commit }) {
            sendHttpRequest()
                .then((res) => {
                    commit("setListData", res.body);
                })
                .catch((error) => {});
        },
    },
    modules: {
        countingAModule,
    },
});

export default store;
