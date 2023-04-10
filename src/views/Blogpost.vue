<template>
    <div>
      <h1>{{ post.Title }}</h1>
      <p>{{ post.Description }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      post: {}
    }
  },
    computed: {
    // add getter blog into computed with object spread operator
    ...mapGetters(['blogs'])
    },
    // async created(){
    //     await this.$store.dispatch('initialize')   
    // },
  watch: {
    '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Blog AB'
        },
         immediate: true
      }
    },
  async created() {
    try {
      if (!this.blogs.length) {
        const token = 'd59f01f4c841641e56a5062ee033015ba8da9d186803a662205d3229ad39f506f9af69ed480788bf825c6cad84108e4843c06002dc1bb341f90075eefdcd4c24636a5ad141fa409b7e59918722c2f8ee21a2134fd59863688911c4b9c2207b8a81159c6d78a8b2815bc82e4a5f0c742b0af52f6926933c4fd61a024ae6c9092b'
        const response = await axios.get(`https://strapi-cp-blog.onrender.com/api/articles/${this.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
      this.post = response.data.data.attributes
      } else {
        this.post = this.blogs.filter(i=>i.id===this.id)[0].attributes
      }
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<style scoped>
p{
  color: rgba(0, 0, 0, 0.84);
  text-rendering: optimizeLegibility;
  margin: 40px 10%;
  font-family: "Lora";
  font-size: 21px;
  letter-spacing: -0.03px;
  line-height: 1.58;
  white-space: pre-wrap;
  text-align: left;
}
</style>