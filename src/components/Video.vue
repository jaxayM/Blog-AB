<template>
    <video :src="src" id="video-preview" controls v-show="file||!!src" ref="refer"></video>
    <input type="file" accept="video/*" v-show="show" @change="handleFileUpload( $event )"/>
</template>

<script>
import { ref } from 'vue'
    export default{
        emits: ["loaded", 'onloadedmetadata'],
        props:[
            'show', 'src', 'refer'
        ],
        setup(props, context) {
            const file = ref()
            const handleFileUpload = (evt) => {
                file.value = evt.target.files[0]
                previewVideo()
            }
            const previewVideo = () =>{
                let video = document.getElementById('video-preview')
                let reader = new FileReader()
                
                reader.readAsDataURL( file.value )
                reader.addEventListener('load', function(){
                    video.src = reader.result                
                    context.emit("loaded", video.src)
                })   
            }
            return {
                file,
                handleFileUpload,
                previewVideo
            }
        }
    }
</script>