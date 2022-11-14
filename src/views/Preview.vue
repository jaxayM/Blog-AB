<template>
    <h2>{{title}}</h2>
    <p>{{ date }}</p>
    <p class="content">{{content}}</p>
    <div v-for="v in video.videos">
        <video @loadedmetadata="logDuration" controls ref="videoPlayer">
            <source :src="v" type="video/mp4" />
        </video>
    </div>
    <button @click="deletePost" :style="`color: ${Delete=='Confirm'? 'red': 'black'}`">{{Delete}}</button>
    <button @click="updatePost">Edit</button>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex' 
import { useRoute, useRouter } from 'vue-router'
import {ref, reactive } from 'vue' 

export default{
    components:{

    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const Delete = ref('Delete')
        const title = ref('Title')
        const date = ref('')
        const videoPlayer = ref(null)
        const time = ref(0)
        const content = ref('content')
        const video = reactive({videos:[]}) // reactive for array of videos
        const getPost = (id) => {
            const post = store.state.posts.filter((p)=>p.id && id && p.id==id)
            if (post[0]) {
                title.value = post[0].title
                date.value = post[0].date? post[0].date: ''
                content.value = post[0].content
                video.videos = post[0].video? post[0].video.videos: []
                time.value = post[0].time? post[0].time[0]: 0
            }
        }
        const deletePost = () => {
            if (Delete.value=='Confirm'){
                store.commit('deletePost', route.params.id)
                router.push('/feed')
            } else Delete.value = 'Confirm'
        }
        const updatePost = () => {
            router.push({path: '/new-blog', query: { id: route.params.id, title: title.value, content: content.value, video: video.videos }})
        }
        const logDuration = () => {
            videoPlayer.currentTime = time.value
        }
        onMounted(()=>{
            getPost(route.params.id)
    })
    return {
        title,
        date,
        content,
        video,
        Delete,
        getPost,
        updatePost,
        deletePost,
        logDuration
        }
    }
}
</script>
<style>
.content{
    white-space: pre-wrap;
    text-align: left;
    padding: 0 2em;
}
</style>