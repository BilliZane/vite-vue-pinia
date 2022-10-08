<template>
  <div class="caption">Change the text in fields below:</div>
  <div class="edit-post">
    <input class="edit-post__title" v-model="postsStore.currentPost[0].title" />
    <textarea
      class="edit-post__body"
      v-model="postsStore.currentPost[0].body"
    ></textarea>
  </div>
</template>
<script>
import {onBeforeUnmount} from 'vue'
import {usePostsStore} from '../store/posts'
export default {
  setup() {
    const postsStore = usePostsStore()

    onBeforeUnmount(() => {
      if (postsStore.canEditPost) {
        postsStore.canEditPostToggle(false)
      }
    })

    return {
      postsStore,
    }
  },
}
</script>
<style lang="scss" scoped>
.edit-post {
  color: #fff;
  background: #bf3b5e;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 7px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;

  &__title {
    font-size: 22px;
    font-weight: 500;
    padding-bottom: 5px;
    background: transparent;
    max-width: 100%;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  }
  &__body {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
    background: transparent;
    min-height: 300px;
    max-width: 100%;
  }
}
.caption {
  color: #2e2e2e;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  padding-bottom: 20px;
}
</style>