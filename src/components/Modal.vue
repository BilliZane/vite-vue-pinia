<template>
  <div class="modal">
    <div class="modal__message">
      <div class="modal__message-text">Do you really want to delete?</div>
      <div class="modal__message-buttons">
        <div class="modal__message-button" @click="del">Yes</div>
        <div class="modal__message-button" @click="notDel">No</div>
      </div>
    </div>
    <div class="modal__background"></div>
  </div>
</template>
<script>
import {onBeforeMount} from 'vue'
import {usePostsStore} from '../store/posts.js'
import {useModalStore} from '../store/modal.js'

export default {
  setup() {
    const modalStore = useModalStore()
    const postsStore = usePostsStore()

    const del = () => {
      postsStore.canDeletePost = true
      modalStore.modalIsActive = false
    }
    const notDel = () => {
      postsStore.canDeletePost = false
      modalStore.modalIsActive = false
    }

    onBeforeMount(() => {
      // postsStore.canDeletePost = true
      postsStore.delCurrentPost(postsStore.currentPost)
    })

    return {
      modalStore,
      postsStore,
      del,
      notDel,
    }
  },
}
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;

  &__message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    max-width: 250px;
    max-height: 350px;

    color: #fff;
    background: #bf3b5e;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  }
  &__message-text {
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 15px;
  }
  &__message-buttons {
    display: flex;
    justify-content: center;
  }
  &__message-button {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    padding: 8px 15px;
    background: #4f2c62;
    border-radius: 10px;
    color: #fff;
    letter-spacing: 1px;
    transition: background 400ms, color 400ms;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background: #f0a36f;
      color: #4f2c62;
      cursor: pointer;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>