<template>
  <div class="post">
    <div class="post__title">{{ id }}. {{ titleSnippet }}</div>
    <div class="post__body">{{ bodySnippet }}</div>
    <div class="post__buttons">
      <router-link
        class="post__button"
        :to="{name: 'PostDetails', params: {id: id}}"
        >Read
      </router-link>
      <i
        class="material-icons post__reaction"
        :class="like ? 'post__reaction--active' : ''"
        @click="changeReaction(id)"
        >favorite</i
      >
      <a class="material-icons post__reaction" @click="delPost(idx)"
        >delete_forever</a
      >
    </div>
  </div>
</template>
<script>
import {computed} from 'vue'
import {usePostsStore} from '../store/posts'
export default {
  props: ['id', 'idx', 'title', 'body', 'like'],
  setup(props) {
    const postsStore = usePostsStore()
    const delPost = (idx) => {
      postsStore.delCurrentPost(idx)
    }
    const titleSnippet = computed(() => props.title.substr(0, 50) + '...')
    const bodySnippet = computed(() => props.body.substr(0, 100) + '...')

    const changeReaction = (id) => {
      postsStore.changeReaction(id)
    }

    return {
      postsStore,
      delPost,
      titleSnippet,
      bodySnippet,
      changeReaction,
    }
  },
}
</script>

<style lang="scss" scoped>
.post {
  color: #fff;
  background: #bf3b5e;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);

  &__title {
    font-size: 22px;
    font-weight: 500;
    padding-bottom: 15px;
  }
  &__body {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__button {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    padding: 5px 10px;
    background: #4f2c62;
    border-radius: 5px;
    color: #fff;
    letter-spacing: 1px;
    transition: background 400ms, color 400ms;
    &:hover {
      background: #f0a36f;
      color: #4f2c62;
      cursor: pointer;
    }
  }
  &__reaction {
    font-size: 30px;
    margin-right: 10px;
    transition: color 400ms;
    &:hover {
      color: #f0a36f;
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__reaction--active {
    color: #f0a36f;
  }
}
</style>