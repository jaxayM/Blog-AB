import { createStore } from 'vuex'
import { reactive, computed } from 'vue'


export const store = createStore({
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'Learning Vue.js',
          content: 'Learn Vue using this guide.',
          video: reactive({videos:[]})
        },{
          id: 2,
          title: 'Learning Vuex',
          content: 'This is a post',
          video: ""},{
          id: 3,
          title: 'Learning Vue-router',
          content: 'This is a post',
          video: ""},{
          id: 4,
          title: 'Vue Composition API',
          content: 'This is a post',
          video: ""},{
          id: 5,
          title: 'Firebase guide',
          content: 'This is a post',
          video: ""}
        
      ],
      currentEdit: null
    }
  },
  getters:{
  filtredPosts(state) {
    return computed(()=> {
      if(!state.currentEdit) {
        return state.posts
      }
      return state.posts.filter(post => post.id!=currentEdit)
    })
  },
  },
  mutations: {
    
  addPost(state, post){
    let idmax = 0
    if (post.id) {
      const index = state.posts.findIndex(x => x.id == post.id )
      if (index > -1){
        state.posts.splice(index, 1)
      }
    }
    state.posts.forEach((x) => {if (x.id>idmax) {idmax=x.id}})
    state.posts.push({
      id: post.id? post.id : idmax+1,
      date: post.date, 
      title: post.title, 
      content: post.content,
      video: post.video
    })
    state.currentEdit = post.id? post.id : idmax+1
  },
  deletePost(state, id){
    const index = state.posts.findIndex(x => x.id == id )
    if (index > -1){
      state.posts.splice(index, 1)
    }
  },
  editDone(state, time){
    const index = state.posts.findIndex(x => x.id == state.currentEdit )
      if (index > -1){
        state.posts[index].time = time
      }
    state.currentEdit = null
  }
}
})

export default{ store }