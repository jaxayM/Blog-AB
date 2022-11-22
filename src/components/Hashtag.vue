<script>
  import { useStore } from 'vuex'

  export default{
    props: {
      hashtag: {
        type: String
      }
    },
      setup(props, ctx){
          const store = useStore()
          const setHashtag = () =>  {
          store.commit('setHashtag', props.hashtag)
        }
        
        return {
          setHashtag
        }
    }
}


  
</script>

<template>
  <div class="hashtag" @click="setHashtag">
    #{{hashtag}} 
  </div>
</template>

<style scoped>
  .hashtag {
    text-decoration: underline;
  }
  
  .hashtag:hover {
    color: cornflowerblue;
  }
</style>