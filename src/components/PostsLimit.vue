<template>
  <div class="posts-limit">
    <label for="posts-limit" class="posts-limit__label">Posts limit</label>
    <input
      class="posts-limit__input"
      id="posts-limit"
      type="limit"
      placeholder="Limit"
      v-model="postsStore.postsLimit"
      @click="clearInput"
      @blur="returnInput"
      @keydown.enter="loadPostsByClick"
    />
    <button class="posts-limit__button" @click="loadPostsByClick">
      Load posts
    </button>
    <button class="posts-limit__button" @click="delPosts">Del posts</button>
  </div>
</template>
<script>
import {usePostsStore} from '../store/posts'

export default {
  setup() {
    const postsStore = usePostsStore()

    const loadPosts = () => {
      if (postsStore.postsLimit) {
        postsStore.getPosts(postsStore.postsLimit)
      }
    }

    setTimeout(() => {
      loadPosts()
    }, 300)

    const delPosts = () => {
      postsStore.delPosts()
    }

    const loadPostsByClick = () => {
      postsStore.toggleCanGet()
      loadPosts()
    }

    const clearInput = () => {
      postsStore.postsLimit = ''
    }

    const returnInput = () => {
      if (!postsStore.postsLimit) {
        postsStore.postsLimit = 5
      }
    }

    return {
      postsStore,
      loadPostsByClick,
      delPosts,
      clearInput,
      returnInput,
    }
  },
}
</script>

<style lang="scss">
.posts-limit {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: flex-end;
  color: #fff;
  background: #4f2c62;
  padding: 5px 0;
  min-width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  @media (max-width: 455px) {
    flex-direction: column;
    padding: 15px 0;
  }
  &__label {
    font-size: 18px;
    padding-right: 20px;
    font-weight: 500;
    @media (max-width: 455px) {
      margin-bottom: 12px;
      padding-right: 0;
      font-size: 24px;
    }
  }
  &__input {
    max-width: 50px;
    min-height: 22px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #4f2c62;
    padding-left: 5px;
    padding-top: 4px;
    background: #fff;
    border-radius: 5px;
    margin-right: 20px;
    @media (max-width: 455px) {
      margin-right: 0;
      margin-bottom: 12px;
      font-size: 18px;
      padding: 5px;
      text-align: center;
      padding-left: 0;
    }
    &::placeholder {
      font-size: 14px;
    }
  }
  &__button {
    margin-right: 5px;
    font-size: 18px;
    padding: 5px 10px;
    background: #c5557b;
    border-radius: 5px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    transition: background 400ms, color 400ms;
    @media (max-width: 455px) {
      margin-bottom: 12px;
      min-width: 200px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &:hover {
      background: #f0a36f;
      color: #4f2c62;
      cursor: pointer;
    }
  }
  &__message {
    color: #2e2e2e;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    padding-bottom: 20px;
  }
}
</style>