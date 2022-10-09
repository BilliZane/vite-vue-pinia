<template>
  <main class="posts">
    <h1 class="posts__title">Posts: {{ postsStore.postsCount }}</h1>

    <PostsLimit />

    <Loader v-if="!postsStore.posts.length && postsStore.canGet" />

    <div class="posts__body" v-else>
      <SinglePost
        v-for="(post, idx) in postsStore.posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :like="post.like"
        :idx="idx"
      />
    </div>

    <PostsMessage v-if="!postsStore.posts.length" />
  </main>
</template>
<script>
import {usePostsStore} from '../store/posts'

import PostsLimit from '../components/PostsLimit.vue'
import SinglePost from '../components/SinglePost.vue'
import Loader from '../components/Loader.vue'
import PostsMessage from '../components/PostsMessage.vue'

export default {
  components: {PostsLimit, SinglePost, Loader, PostsMessage},
  setup() {
    const postsStore = usePostsStore()

    return {
      postsStore,
    }
  },
}
</script>

<style lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  &__title {
    color: #4f2c62;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>