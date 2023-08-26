import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import HomeView from "../pages/HomeView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
            children: [
                {
                    path: "/about/author",
                    name: "aboutAuthor",
                    component: () =>
                        import("../pages/AboutView/AboutViewAuthor.vue"),
                },
                {
                    path: "/about/context",
                    name: "aboutContext",
                    component: () =>
                        import("../pages/AboutView/AboutViewContext.vue"),
                },
            ],
        },
        {
            path: "/personal",
            name: "personal",
            component: () => import("../pages/PersonalView.vue"),
            beforeEnter: (to, from, next) => {
                if (store.state.isLogin) {
                    next();
                } else {
                    next({ name: "login" });
                    window.alert("請先登入");
                }
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../pages/LoginView.vue"),
        },
        {
            path: "/setting",
            name: "setting",
            component: () => import("../pages/SettingView.vue"),
        },
        {
            path: "/product",
            name: "product",
            component: () => import("../pages/ProductView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: () => import("../pages/NotFound.vue"),
        },
    ],
});

export default router;
