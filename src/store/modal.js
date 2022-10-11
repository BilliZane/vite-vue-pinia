import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const modalIsOpen = ref(true)

  const toggleModal = () => {
    modalIsOpen.value = !modalIsOpen.value
  }

  return {
    modalIsOpen,
    toggleModal,
  }
})
