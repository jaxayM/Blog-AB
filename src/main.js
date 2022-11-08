import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",
  authDomain: "blog-ab-e3f50.firebaseapp.com",
  projectId: "blog-ab-e3f50",
  storageBucket: "blog-ab-e3f50.appspot.com",
  messagingSenderId: "206927976177",
  appId: "1:206927976177:web:d05793bbee8c4e62e9bb50"
};

initializeApp(firebaseConfig);

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
