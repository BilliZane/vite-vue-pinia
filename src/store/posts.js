// Composition API

import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const canGet = ref(true)
  const postsLimit = ref(5)
  const currentPost = ref(null)
  const error = ref(null)
  const canEditPost = ref(false)

  const getPosts = async (limit) => {
    if (canGet.value) {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?&_limit=${limit}`
        )
        const data = await res.json()
        posts.value = data

        posts.value.forEach((post) => (post.like = false))
      } catch (err) {
        error.value = err.message
      }
      canGet.value = false
    }
  }

  const getCurrentPost = (id) => {
    currentPost.value = posts.value.filter((post) => post.id === id)
  }

  const delCurrentPost = (idx) => {
    posts.value.splice(idx, 1)
  }

  const delPosts = () => {
    posts.value = 0
    postsLimit.value = 5
  }

  const changeReaction = (id) => {
    const target = posts.value.find((post) => post.id === id)
    target.like = !target.like
  }

  const postsCount = computed(() => posts.value.length || 0)

  const toggleCanGet = () => {
    canGet.value = true
  }

  const cleanCurrentPost = () => {
    currentPost.value = null
  }

  const canEditPostToggle = () => {
    canEditPost.value = !canEditPost.value
  }

  return {
    posts,
    postsLimit,
    error,
    getPosts,
    currentPost,
    getCurrentPost,
    delCurrentPost,
    delPosts,
    changeReaction,
    postsCount,
    canGet,
    toggleCanGet,
    cleanCurrentPost,
    canEditPost,
    canEditPostToggle,
  }
})

// options API

// import { defineStore } from "pinia";

// export const usePostsStore = defineStore("posts", {
//   state: () => ({
//     posts: null,
//     error: null,
//   }),
//   actions: {
//     async getPosts() {
//       try {
//         const data = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?&_limit=5"
//         );
//         const posts = await data.json();
//         this.posts = posts;
//       } catch (err) {
//         this.error = err.message;
//         console.log(this.error);
//       }
//     },
//   },
//   getters: {
//     showPosts: (state) => state.posts,
//   },
// });
