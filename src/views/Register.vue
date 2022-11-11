<template>
    <h1>Create an Account</h1>
    <form v-if="!forward">
    <p><input type="text" autocomplete="email" placeholder="Email" v-model="email" /></p>
    <p><input type="password" autocomplete="current-password" placeholder="Password" v-model="password" /></p>
    </form>
    <Profile @send-registration="register" v-show="forward"/>
    <p><button v-if="forward" @click="forward=false">Back</button>
    <button v-else @click="forward=true">Register</button></p>
  </template>
  <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
    import Profile from '../components/Profile.vue'
    import { getStorage, ref as sRef, uploadString, getDownloadURL } from "firebase/storage";

    const forward = ref(false)
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const register = (profile) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
          if (profile.image){
            const storage = getStorage()
            const storageRef =sRef(storage, `images/${user.user.uid}.jpg`)
            uploadString(storageRef, profile.image, 'data_url').then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                user.photoURL = downloadURL
              })
            })
          }
          user.displayName = profile.username
          user.phoneNumber = profile.number
          const verificationPrams = {}
          router.push('/feed')
          sendEmailVerification (user)
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })

  }
  </script>