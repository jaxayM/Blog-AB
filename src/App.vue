<template>
    <nav>
      <router-link to="/home"> Home </router-link>
      <router-link to="/feed"> Feed </router-link>
      <span v-if="loggedIn">
        <button class="logout" @click="logOut">Logout</button>
        <button v-if="!verified" class="logout pop" @click="verify">Verify</button>
        <p v-else class="pop">Verified!</p>
      </span>
      <router-link v-if="!loggedIn" to="/register"> Register </router-link>
      <router-link v-if="!loggedIn" to="/login"> Login </router-link>
    </nav>
    <router-view />
</template>

<script setup>
import {ref} from 'vue'
import { getAuth, signOut, onAuthStateChanged, sendEmailVerification } from '@firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const loggedIn = ref(true)
const verified = ref(false)
const auth = getAuth()

onAuthStateChanged(auth, (user)=>{
  if(user) {
    loggedIn.value = true
    if (user.emailVerified) verified.value = true
    else verified.value = false 
  } else {
    loggedIn.value = false
  }
})

const verify = ()=>{
  sendEmailVerification(auth.currentUser)
}
const logOut = ()=>{
  signOut(auth)
  router.push('/')
}

</script>

<style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
    box-sizing: border-box;
  }

  nav {
    display: flex;
    height: 50px;
    width: 95vw;
    position: absolute;
    top: 0;
    padding: 10px;
  }

  span{
    margin: 0;
  }

  .logout{
    float: right; 
    position: static;
    display: block;
    margin: 2px auto;
  }
  .pop{
    color: rgb(90, 210, 90);
    right: 10px; 
    position: absolute;
  }
</style>