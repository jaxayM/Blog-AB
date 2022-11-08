<script>
import Hashtag from './Hashtag.vue'
import { useStore } from 'vuex' 
  
export default{
  components: {Hashtag},

  props: {
    post: {
      type: Object
    }
  },
  setup(props){
      const store = useStore()
      const like = () => {
      store.commit('incrementLike', props.post)
    }
    
    return {
      like
    }
  }
}


  
</script>

<template>
  <div>
    <div class =like>
      <button @click="like">
        Like
      </button>
      <div>
        {{post.likes}}
      </div>
  </div>
  <hashtag
     v-for="tag in post.hashtags"
     :hashtag="tag"
  />
  </div>
</template>

<style scoped>
  .like {
    display: flex;
    justify-content: center;
    margin: 10px;
  }
</style>