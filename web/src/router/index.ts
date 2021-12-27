import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";
import store from "../store";

const PUBLIC_ROUTES = ["login", "register"];

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        name: "login",
        path: "/login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login.vue"),
    },
    {
        name: "register",
        path: "/register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/register.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (
        store.getters["auth/isUserLoggedIn"] ||
        PUBLIC_ROUTES.includes(to.name as any)
    ) {
        next();
    }

    next({ name: "login" });
});

export default router;
