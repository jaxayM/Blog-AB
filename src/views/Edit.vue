<template>
    <form>
        <h1>Publish blog confirmation</h1>
        <video v-show="video.videos.length" @loadedmetadata="logDuration" controls ref="videoPlayer">
            <source :src="video.videos[0]" type="video/mp4" />
        </video>
        <h2 v-show="!video.videos.length">No video, please confirm posting!</h2>
        <p>Full lenght: {{ duration }}</p> 
        <span v-show="video.videos.length">
        <p>Start time: 
        <input type="text" name="start" v-model="start"/></p>
        <p>End time: 
        <input type="text" name="end" v-model="end"/></p>
        </span>
        {{error}}          
        <button @click.prevent="editPost">Confirm</button>
    </form>
</template>

<script>
    export default{
        emits:['onloadedmetadata'],
        components:{
        },
        data(){
            return{
                start: 0,
                end: 0,
                duration: 0,
                error: '',
                vid: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }
        },
        computed:{
            
            video () {
            const id = this.$store.state.currentEdit
            const post = this.$store.state.posts.filter((p)=>p.id && id && p.id==id)
            if (post[0]) return {
                videos : post[0].video.videos
                }
            return {videos: ['']}
            }
        }
        ,
        methods:{
            logDuration() {
                this.duration = this.$refs.videoPlayer.duration
                this.end = this.duration 
            },
            editPost(){
                if (this.start>this.end){
                    this.error = 'Check time and duration!'+this.duration
                } else if(this.end>this.duration) {
                    this.error = 'Check time and duration!'+this.duration    
                } else{
                    this.$store.commit('editDone', [this.start, this.end])
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style></style>
