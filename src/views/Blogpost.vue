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
        const token = '1569d8f789d47354c5de458a9cf5378762efd38782dc89da6b3b73bcfd7436adef984256b00b7c9d4b0202e0121d9afb1973e3a3cf33f9d292be5b6264b1ba75ce4af18a9da312cd74e9904fbed013e58c7d03b6b85d11ffb44751b0176bdbc640d2edb7d30a0a48b3b5f71b7e670c0491a88a35d72db8be2ecea73e8d704150'
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