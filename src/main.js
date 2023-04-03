// import { ref, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {routes} from './router'
import {store} from './store'
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { ViteSSG } from 'vite-ssg'

const firebaseConfig = {
  apiKey: "AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",
  authDomain: "blog-ab-e3f50.firebaseapp.com",
  projectId: "blog-ab-e3f50",
  storageBucket: "blog-ab-e3f50.appspot.com",
  messagingSenderId: "206927976177",
  appId: "1:206927976177:web:d05793bbee8c4e62e9bb50"
};

const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseapp)
export { db, firebaseapp }
// const app = createApp(App)

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes, base: "Blog-AB" },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    app.use(store)
    if (import.meta.env.SSR)
      {initialState.store = store.state}
    else
      {store.replaceState(initialState.store)}
    router.beforeEach((to, from, next) => {
      // perform the (user-implemented) store action to fill the store's state
      if (!store.getters.ready)
        {store.dispatch('initialize')}
      next()
    })
  },
)

// app.use(store)
// app.use(router)
// app.mount('#app')
