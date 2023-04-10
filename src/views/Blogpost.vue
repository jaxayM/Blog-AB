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
        const token = '2c96b6128b15cfe1fdd2ffaf46c2cc99c2a2840ae32e7b140093a522603937b329c4e0fcab22bad4263f5e1d7687efaf002c84eb50bd0d4b1fabef1403704a94bd827a00533dbf4563c109c916933918489ae741d86a8357b046ba6b4f94af2de659a926d70a0029eacd559e98dcaed21717d94aaae8e1a5fb51daf98d8dd1fc'
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