<template>
  <router-link :to="$store.state.currentEdit?'/edit-video':'/new-blog'"><button>Create</button></router-link>
  <h1>Blogs</h1>
  <div class="bloglist">
    <post v-for="post in filteredPosts">
      <template v-slot:title>{{post.title}}</template>
      <template v-slot:description><router-link :to="`/view-post/${post.id?post.id:''}`"><button>View</button></router-link></template>
    </post>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import Post from '../components/Post.vue'

export default{
    components: {
        Post,
        
    },
    setup() {
      const store = useStore()
      const setHashtag = (evt) => {
          store.commit('setHashtag', evt.target.value)
      }
      return {
          filteredPosts: store.getters.filtredPosts,
          setHashtag,
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
  /* color: ; */
  /* display: ; */
}

.bloglist{
  display:flex; 
  overflow-x: scroll;
}
</style>