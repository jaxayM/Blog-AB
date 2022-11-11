import { createStore } from 'vuex'
import { ref, reactive, computed } from 'vue'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from './main'


export const store = createStore({
  state() {
    return {
      posts: [],
      currentEdit: null
    }
  },
  getters:{
  filtredPosts(state) {
    return computed(()=> {
      if(!state.currentEdit) {
        return state.posts
      }
      return state.posts.filter(post => post.id!=state.currentEdit)
    })
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
      try {
          const docRef = await addDoc(collection(db, "Blogs"), {
            date: post.date, 
            title: post.title, 
            content: post.content,
            video: post.video
          })
      uid.value = docRef.id
      } catch (e) {
      console.error("Error adding document: ", e);
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
    const index = state.posts.findIndex(x => x.id == post.id )
    if (index > -1){
      state.posts.splice(index, 1)
    }
    state.posts.push({
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