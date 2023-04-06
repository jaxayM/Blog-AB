// import {createRouter, createWebHistory, createMemoryHistory} from 'vue-router'
import Create from './views/Create.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Edit from './views/Edit.vue'
import Preview from './views/Preview.vue'
import Blogpost from './views/Blogpost.vue'

const baseURL = ''
export const routes = [
    { path: `${baseURL}/`, component: Home },
    { path: `${baseURL}/feed`, component: Dashboard, name: "feed"},
    { path: `${baseURL}/home/`, component: Home },
    { path: `${baseURL}/login/`, component: Login },
    { path: `${baseURL}/register/`, component: Register },
    { path: `${baseURL}/new-blog`, component: Create },
    { path: `${baseURL}/edit-video`, component: Edit, name: "edit" },
    { path: `${baseURL}/view-post/`, component: Preview },
    { path: `${baseURL}/view-post/:id`, component: Preview, name: "viewpost" },
    {
      path: `${baseURL}/:slug`,
      name: 'blogpost',
      component: Blogpost,
      props: route => ({ id: parseInt( route.params.slug.split('-')[0] ) }),
      beforeEnter: (to, from, next) => {
        to.meta.title = to.params.slug.charAt(2).toUpperCase() + to.params.slug.slice(3).replace(/-+/g, ' ')
        if (to.params.slug.includes(' ')){
          const slug = to.params.slug.replace(' ', '-')
          next({ name: to.name, params: { slug } })
        } else next()
      }
    }
  ]
  
// export const router = createRouter({
//   history: createWebHistory(),
// routes
// })  
