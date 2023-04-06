import { createStore } from 'vuex'
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { getStorage, ref as sRef, uploadString, getDownloadURL } from "firebase/storage"
import { db, firebaseapp } from './main'
import axios from 'axios'


export const store = createStore({
  state() {
    return {
      blogs: [],
      posts: [],
      currentEdit: null
    }
  },
  getters:{
  filtredPosts(state) {
      if(!state.currentEdit) {
        return state.posts
      }
      return state.posts.filter(post => post.id!=state.currentEdit)
  },
  blogs(state) {
    return state.blogs
  }
  },
  actions:{
    async initialize(context){
      // populate blog with cms entries
      try {
        const token = '1569d8f789d47354c5de458a9cf5378762efd38782dc89da6b3b73bcfd7436adef984256b00b7c9d4b0202e0121d9afb1973e3a3cf33f9d292be5b6264b1ba75ce4af18a9da312cd74e9904fbed013e58c7d03b6b85d11ffb44751b0176bdbc640d2edb7d30a0a48b3b5f71b7e670c0491a88a35d72db8be2ecea73e8d704150'
        const response = await axios.get(`https://strapi-cp-blog.onrender.com/api/articles`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        context.state.blogs = response.data.data
      } catch (error) {
        console.error(error)
      }
    },
  },
  mutations: {
    
  async addPost(state, post){
    if (post.id) {
      const index = state.posts.findIndex(x => x.id == post.id )
      if (index > -1){
        state.posts.splice(index, 1)  
        deleteDoc(doc(db, "Blogs", post.id))
      }
    }
    const uid = ref('')
    const storage = getStorage(firebaseapp)
    const auth = getAuth(firebaseapp)
      try {
          const docRef = await addDoc(collection(db, "Blogs"), {
            date: post.date, 
            userId: auth.currentUser.uid, 
            title: post.title, 
            content: post.content,
          })
          state.posts.push({
            id: docRef.id,
            date: post.date, 
            title: post.title, 
            content: post.content,
            video: post.video
          })
      uid.value = docRef.id
      if (!post.id) state.currentEdit = docRef.id
        
      } catch (e) {
      console.error("Error adding document: ", e);
      }

      let i = 1
      const videoDoc = {videos: []}
      if (post.video.videos ){
        post.video.videos.forEach(e => {
          const storageRef =sRef(storage, `videos/${post.title+(i++).toString()}.mp4`)
          uploadString(storageRef, e, 'data_url').then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              videoDoc.videos.push(downloadURL)
              updateDoc(doc(db, "Blogs", uid.value), {
                video: {videos: videoDoc.videos}
              })
            })
          })
        })
      }
  },
  deletePost(state, id){
    const index = state.posts.findIndex(x => x.id == id )
    if (index > -1){
      state.posts.splice(index, 1)
      deleteDoc(doc(db, "Blogs", id))
    }
  },
  setEdit(state, id){
    state.currentEdit = id
  },
  updateState(state, post){
    const auth = getAuth(firebaseapp)
    const index = state.posts.findIndex(x => x.id == post.id )
    if (index > -1){
      state.posts.splice(index, 1)
    }
    if (post.userId == auth.currentUser.uid) state.posts.push({
      id: post.id,
      date: post.date, 
      title: post.title, 
      content: post.content,
      video: post.video
    })
  },
  editDone(state, time){
    const index = state.posts.findIndex(x => x.id == state.currentEdit )
      if (index > -1){
        state.posts[index].time = time
        updateDoc(doc(db, "Blogs", state.currentEdit), {
          time: time
        })
      }
    state.currentEdit = null
  }
}
})

export default{ store }