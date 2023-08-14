import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
// import TopicView from "../pages/TopicView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/topic/:id",
            name: "topic",
            component: () => import("../pages/TopicView.vue"),
            // component: TopicView,
        },
    ],
});

export default router;
