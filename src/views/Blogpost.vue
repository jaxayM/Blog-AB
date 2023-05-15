<template>
    <div>
      <h1>{{ post.Title }}</h1>
      <p>{{ post.Description }}</p>
      <img
        v-if="post.Cover"
        id="banner"
        class="banner"
        :src="post.Cover.data.attributes.url"
        :alt="post.Cover.data.attributes.name"
        uk-img
      />

      <div class="section">
        <div class="container-small">
          <div class="mk"
            v-if="post.Content"
            v-html="HtmlContent">  
          </div>
          <p v-if="post.publishedAt">
            {{
              moment(post.publishedAt).format("MMM Do YY")
            }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import { marked } from 'marked'
import moment from "moment"
import axios from 'axios'
import { mapGetters } from 'vuex'
import { useHead } from '@vueuse/head'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      moment: moment,
      post: {}
    }
  },
  setup() {
    useHead({
      title: this.post.Title,
      meta:[
        { 
          name: 'description',
          content: this.post.Description
        }
      ]
    })
    },
    computed: {
    // add getter blog into computed with object spread operator
      ...mapGetters(['blogs']),
      HtmlContent(){
        return marked.parse(this.post.Content);
      },
    },
    // async created(){
    //     await this.$store.dispatch('initialize')   
    // },
  watch: {
    '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Jaxaym Blog | My Blog for personal finance education'
        },
         immediate: true
      }
    },
  async created() {
    try {
      if (!this.blogs.length) {
        const token = '2d6411a1af7c604a9f91e25913b16cda4a0eed3b796f065cfb65cdeedd4a13208c50a6c5a0efab809cadb3b529bde461188e69a6e74bacb52a6f21c3c6a6552136a19132e6c95475a3dcae61f36e818e732c301818b3737fc0dccfc345419d60736f2d02657996b313854ced2f726697d4b2cf137add42878cffa32ae3f1ee15'
        const response = await axios.get(`https://strapi-cp-blog.onrender.com/api/articles/${this.id}?populate=*`, {
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
.mk, p{
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
#banner, .mk > p > img {
  max-height: 600px;
  max-width: 100%;
  height: auto;
}
</style>