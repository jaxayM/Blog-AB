<script setup>

import { collection, onSnapshot } from "@firebase/firestore"
import { onMounted, ref } from "vue"
import { db } from "../main"

    const emit = defineEmits(['sendRegistration'])

        const posts = ref([])
        onMounted(()=>{
            // onSnapshot(collection(db, 'Blogs'), (querySnapshot) =>{
            //     const blogs = []
            //     querySnapshot.forEach((doc)=>{
            //         const blog = doc.data()
            //         posts.push(blog)
            //     })
            //     posts.value = blogs
            // })
        })
    
    const src = ref()
    const profile = ref()
    const username = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const number = ref()
    const submitProfile = (evt)=>{
        evt.preventDefault()
        profile.value = {'image': src.value, 'username': username.value, 'firstname': firstname.value, 'lastname': lastname.value, 'number': number.value}
        emit("sendRegistration", profile.value)
    }  
            
        
    const setPhoto = (evt)=>{
        let file = evt.target.files[0]
        let reader = new FileReader()
                
        reader.readAsDataURL( file )
        reader.addEventListener('load', function(){
            src.value = reader.result         
        })
    }


</script>

<template>
    <div>
    <form class="container">
        <p>Profile photo</p>
        <img :src="src" alt="" v-show="src" width="250" height="250" class="photo">
        <input class="photo" type="file" accept="image/*" @change="setPhoto($event)"/>
        <label for="user" class="username">Username</label>
        <input type="text" v-model="username" class="username"/>
        <label for="first" class="firstname">Firstname</label>
        <input type="text" v-model="firstname" class="firstname"/>
        <label for="last" class="lastname">Lastname</label>
        <input type="text" v-model="lastname" class="lastname"/>
        <label for="number">Phone Number</label>
        <input type="number" v-model="number" class="phone"/>
        <p><button @click="submitProfile">Submit</button></p>
    </form>
    </div>
</template>
<style>
.container{
    display: inline-flex;
    flex-direction: column;
}

.photo{
    max-width: 100%;
    height: auto;
}

.phone::-webkit-outer-spin-button,
.phone::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>