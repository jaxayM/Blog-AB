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
        const token = '2d6411a1af7c604a9f91e25913b16cda4a0eed3b796f065cfb65cdeedd4a13208c50a6c5a0efab809cadb3b529bde461188e69a6e74bacb52a6f21c3c6a6552136a19132e6c95475a3dcae61f36e818e732c301818b3737fc0dccfc345419d60736f2d02657996b313854ced2f726697d4b2cf137add42878cffa32ae3f1ee15'
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