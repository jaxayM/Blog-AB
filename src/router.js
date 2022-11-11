import {createRouter, createWebHistory} from 'vue-router'
import Create from './views/Create.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Edit from './views/Edit.vue'
import Preview from './views/Preview.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/feed", component: Dashboard, name: "feed" },
    { path: "/home/", component: Home },
    { path: "/login/", component: Login , name: "login"},
    { path: "/register/", component: Register },
    { path: "/new-blog", component: Create },
    { path: "/edit-video", component: Edit },
    { path: "/view-post/", component: Preview },
    { path: "/view-post/:id", component: Preview },
  ]
  
export const router = createRouter({
history: createWebHistory(),
routes
})  
