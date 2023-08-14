import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../pages/AboutView.vue"),
            beforeEnter: (to, from) => {
                console.log("我是關於路由的守衛beforeEnter");
                return true;
            },
            children: [
                {
                    path: "author", //  /about/author
                    name: "aboutAuthor",
                    component: () => import("../pages/AboutViewAuthor.vue"),
                },
            ],
        },
        {
            path: "/introduce",
            name: "introduce",
            component: () => import("../pages/IntroduceView.vue"),
        },
        {
            path: "/prod/:id",
            name: "product",
            component: () => import("../pages/Product.vue"),
            props: true,
        },
    ],
});

router.beforeEach((to, from, next) => {
    console.log("我是beforeEach");
    next();
});

router.beforeResolve((to, from, next) => {
    console.log("我是beforeResolve");
    next();
});
export default router;
