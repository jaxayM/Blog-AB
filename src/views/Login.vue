<template>
    <h1>Login to your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signIn">Submit</button></p>
    <p style="text-decoration: none">Don't have an account? <router-link to="/Blog-AB/register">Sign up!</router-link></p>
    {{errMsg}}
  </template>
  <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

    const email = ref('')
    const password = ref('')
    const router = useRouter()
    const errMsg = ref()
    const signIn = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            router.push('/Blog-AB/feed')
        })
        .catch((error) => {
            
            switch (error.code) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
                break
            case 'auth/user-not-found':
                errMsg.value = 'No account with that email was found'
                break
            case 'auth/wrong-password':
                errMsg.value = 'Incorrect password'
                break
            default:
                errMsg.value = 'Email or password was incorrect'
                break
            }
      })
  }
  </script>