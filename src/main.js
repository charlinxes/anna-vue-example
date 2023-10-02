import "normalize.css";
import "./assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "dayjs";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
