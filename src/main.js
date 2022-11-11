import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth'

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
const app = createApp(App)


const auth = getAuth(firebaseapp)
const isAuthenticated = auth.currentUser

app.use(store)
app.use(router)
app.mount('#app')

router.beforeEach((to, from, next) => {
  if (to.name !== 'feed' && !isAuthenticated) next({ name: 'login' })
  else next()
})