<template>
  <router-link :to="$store.state.currentEdit?'/Blog-AB/edit-video':'/Blog-AB/new-blog'"><button>Create</button></router-link>
  <h1>Blogs</h1>
  <div class="bloglist">
    <post v-for="post in filteredPosts">
      <template v-slot:title>{{post.title}}</template>
      <template v-slot:description><router-link :to="`/Blog-AB/view-post/${post.id?post.id:''}`"><button>View</button></router-link></template>
    </post>
  </div>
</template>

<script>
import { collection, getDocs } from '@firebase/firestore'
import {ref, computed, onMounted, watchEffect} from 'vue'
import {useStore} from 'vuex'
import Post from '../components/Post.vue'
import { db, firebaseapp } from '../main'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { useRouter } from 'vue-router'

export default{
    components: {
        Post,
        
    },
    setup() {
      const loggedIn = ref(true)
      const auth = getAuth(firebaseapp)

      onAuthStateChanged(auth, (user)=>{
        if(user) {
          loggedIn.value = true
        } else {
          loggedIn.value = false
        }
      })

      const router = useRouter()
      watchEffect(()=>{
        if(!loggedIn.value){
          router.push('/Blog-AB/login')
        }
      })
      const store = useStore()
      const setHashtag = (evt) => {
          store.commit('setHashtag', evt.target.value)
      }
      onMounted(async ()=>{
            const querySnapshot = await getDocs(collection(db, "Blogs"));
            querySnapshot.forEach((doc) => {
            const data = doc.data()
            store.commit('updateState', {id: doc.id, date: data.date, title: data.title, content: data.content, video: data.video, userId: data.userId})
            })
        })
      return {
          filteredPosts: store.getters.filtredPosts,
          setHashtag,
          loggedIn,
          currentHashtag: computed(() => store.state.currentHashtag)
      }
      }
    }
</script>

<style>
a{
  float: right; 
  position: static;
  display: block;
}

.bloglist::-webkit-scrollbar-button {
  width: 50px;
}

.bloglist{
  display:flex; 
  overflow-x: scroll;
}
</style>