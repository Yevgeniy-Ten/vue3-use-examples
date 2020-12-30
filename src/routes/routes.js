import {createRouter, createWebHistory} from "vue-router";
import Counter from "@/pages/Counter/Counter";
import Todos from "@/pages/Todos/Todos";
import UserInfo from "@/components/UserInfo/UserInfo";
import Users from "@/pages/Users/Users";
import Home from "@/pages/Home/Home";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/users",
        name: "Users",
        component: Users
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter
    },
    {
        path: "/todos",
        name: "Todos",
        component: Todos
    },
    {
        path: "/users/:id",
        name: "User",
        component: UserInfo

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router