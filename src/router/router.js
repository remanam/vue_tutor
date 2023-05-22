import MainPage from "@/pages/MainPage"
import PostsPage from "@/pages/PostsPage"
import AboutPage from "@/pages/AboutPage"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL),
    }
)

export default router;