import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const canGet = ref(true)
  const postsLimit = ref(5)
  const currentPost = ref(null)
  const error = ref(null)
  const canEditPost = ref(false)
  const currentIdx = ref(null)

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

  const delCurrentPostByIdx = (idx) => {
    posts.value.splice(idx, 1)
  }

  const delCurrentPostById = (id) => {
    const idx = posts.value.findIndex((post) => post.id === id)
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
    delCurrentPostByIdx,
    delCurrentPostById,
    delPosts,
    changeReaction,
    postsCount,
    canGet,
    toggleCanGet,
    cleanCurrentPost,
    canEditPost,
    canEditPostToggle,
    currentIdx,
  }
})
