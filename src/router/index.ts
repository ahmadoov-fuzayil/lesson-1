
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";const routes: RouteRecordRaw[] = [
    {   name: "user",
        path: "/user",
        component: () => import('../pages/user.vue'),
    },    {
        name: "foto",
        path: "/foto",
        component: () => import('../pages/foto.vue'),    }
];const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,});
export default router;