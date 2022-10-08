<template>
  <div class="post-details__wrap">
    <div
      class="post-details"
      v-for="post in postsStore.currentPost"
      :key="post.id"
    >
      <div class="post-details__title">{{ post.id }}. {{ post.title }}</div>
      <div class="post-details__body">{{ post.body }}</div>

      <div class="material-icons post-details__buttons">
        <router-link class="post-details__button" :to="{name: 'Posts'}"
          >arrow_back_ios_new
        </router-link>

        <i
          class="material-icons post-details__reaction"
          :class="{'post-details__reaction--active': postsStore.canEditPost}"
          @click="edit"
          >edit_document</i
        >

        <i
          class="material-icons post-details__reaction"
          :class="
            postsStore.currentPost[0].like
              ? 'post-details__reaction--active'
              : ''
          "
          @click="changeReaction(id)"
          >favorite</i
        >
        <a class="material-icons post-details__reaction" @click="delPost(idx)"
          >delete_forever</a
        >
      </div>
    </div>
    <EditPost v-if="postsStore.canEditPost" />
  </div>
</template>
<script>
import {usePostsStore} from '../store/posts'
import {useRouter} from 'vue-router'
import {onBeforeUnmount} from 'vue'
import EditPost from '../views/EditPost.vue'
export default {
  props: ['id'],
  components: {EditPost},
  setup(props) {
    const postsStore = usePostsStore()
    const router = useRouter()
    const getPost = () => postsStore.getCurrentPost(+props.id)

    const cleanCurrentPost = onBeforeUnmount(() => {
      postsStore.cleanCurrentPost()
    })

    getPost()

    const changeReaction = (id) => {
      postsStore.changeReaction(+id)
    }

    const edit = () => postsStore.canEditPostToggle()

    const delPost = (id) => {
      postsStore.delCurrentPost(id)
      postsStore.cleanCurrentPost()
      router.push({name: 'Posts'})
    }

    return {
      postsStore,
      router,
      getPost,
      cleanCurrentPost,
      changeReaction,
      edit,
      delPost,
    }
  },
}
</script>
<style lang="scss">
.post-details {
  color: #fff;
  background: #bf3b5e;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
  &__wrap {
    padding: 0 10px;
  }
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
    margin-right: 5px;
    padding: 5px;
    background: #4f2c62;
    border-radius: 50px;
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
    transition: color 400ms;
    margin-right: 3px;
    &:nth-child(3) {
      padding: 0;
      margin-right: 0;
    }
    &:nth-child(4) {
      font-size: 34px;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #f0a36f;
      cursor: pointer;
    }
  }
  &__reaction--active {
    color: #f0a36f;
  }
}
</style>