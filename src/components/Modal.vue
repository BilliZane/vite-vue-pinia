sentiment_dissatisfied


<template>
  <div class="modal">
    <div class="modal__wrap">
      <div class="modal__title">Do you really want to delete this post?</div>
      <div class="modal__buttons">
        <button
          class="material-icons modal__button modal__button--color-1"
          @click="yes"
        >
          check_circle
        </button>
        <button
          class="material-icons modal__button modal__button--color-2"
          @click="no"
        >
          cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {useRouter, useRoute} from 'vue-router'
import {useModalStore} from '../store/modal'
import {usePostsStore} from '../store/posts'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const modalStore = useModalStore()
    const postsStore = usePostsStore()

    const yes = () => {
      if (!route.params.id) {
        postsStore.delCurrentPostByIdx(+postsStore.currentIdx)
        modalStore.toggleModal()
      } else {
        postsStore.delCurrentPostById(+route.params.id)
        modalStore.toggleModal()
        router.push({name: 'Posts'})
      }
    }
    const no = () => {
      modalStore.toggleModal()
    }

    return {
      router,
      route,
      modalStore,
      postsStore,
      yes,
      no,
      scrollY,
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
  background: rgba(0, 0, 0, 0.7);
  overflow-y: hidden;
  &__wrap {
    min-width: 280px;
    max-width: 300px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #bf3b5e;
    border-radius: 5px;
    padding: 10px;

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  }
  &__title {
    color: #fff;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    padding-bottom: 10px;
    text-align: center;
  }
  &__buttons {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  &__button {
    font-size: 40px;
    font-weight: 500;
    margin-right: 3px;
    border-radius: 50px;
    padding: 0;
    color: #fff;
    transition: background 400ms, color 400ms;
    &:hover {
      background: #fff;
      color: #fff;
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0;
    }
    &--color-1:hover {
      color: #ff1744;
    }
    &--color-2:hover {
      color: #2e7d32;
    }
  }
}
</style>