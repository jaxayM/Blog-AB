<script>
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'
    import {ref, reactive, onMounted} from 'vue'
    import Video from '../components/Video.vue'
    export default{
        emits:['loaded'],
        components:{
            Video,
        },
        setup(){
            const store = useStore()
            const router = useRouter()
            const route = useRoute()
            const Title = ref('')
            const validTitle = ref('')
            const Content = ref('')
            const video = reactive({videos: []})
            const more = ref(0)
            const publish = (evt) => {
                evt.preventDefault()
                if (Title.value){
                    const now = new Date()
                    const date = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate()                
                    store.commit('addPost', {id: route.query.id? route.query.id: 0, date: date, title: Title.value, content: Content.value, video: video})
                    router.push('/edit-video')
                } else validTitle.value = 'Title field required'
                
            }
            const setVideo = (v) =>{
                if (video.videos){
                video.videos.push(v)
            
            }
        }

            onMounted(() => {
                if (route.query.title){
                    Title.value = route.query.title
                }
                if (route.query.content){
                    Content.value = route.query.content
                }
                if (route.query.video){
                    video.videos = route.query.video
                }
            })

            return {
                publish,
                Title,
                validTitle,
                Content,
                video,
                more,
                setVideo
            }

        }


    }

</script>

<template>
    <form>
        <div class="post">
        <h3>Post</h3>
            <label class="label" for="Title">Title</label>
            <input id="Title" v-model="Title" type="text" placeholder="Title (required)" required/>
            <label class="label" for="Content">Content</label>
            <textarea id="Content" v-model="Content" placeholder="Text"></textarea>
            <label class="label" for="">Video</label>
            <span>
                <Video :src="video.videos[0]" :show="true" @loaded="setVideo"/>
            </span>
            <span class="more" v-for="i in more">
                <Video :src="video.videos[i]" :show="true" @loaded="setVideo"/>
            </span>
            <button v-if="more" @click.prevent="more--">Less</button>  
            <button @click.prevent="more++">More</button>
            {{validTitle}}          
            <button @click="publish">Publish</button>
        </div>
    </form>

</template>
<style>
form
{
    display: inline-block;
}
.post
{
    display: flex;
    flex-direction: column;
    width: 500px;
}
.label
{
    text-align: left;
    padding-top: 10px;
}

.more{
    margin: 0;
}

button{
    width: 100px;
    margin: 10px;
}
#Content{
    height: 200px;
}
</style>
