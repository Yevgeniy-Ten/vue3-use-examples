import {createRouter, createWebHistory} from "vue-router";
import Counter from "@/pages/Counter/Counter";
import Todos from "@/pages/Todos/Todos";

export const routes = [
    {
        path: "/counter",
        name: "Counter",
        component: Counter
    },
    {
        path: "/todos",
        name: "Todos",
        component: Todos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router