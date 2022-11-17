import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue"
import Login from "../components/Login.vue";

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/app",
        component: Home,
    }

]

const router = createRouter({
    history: createWebHistory(),   
    routes,

})

export default router;