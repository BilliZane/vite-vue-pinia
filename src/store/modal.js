import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const modalIsActive = ref(false)

  const toDeleteYes = () => {
    modalIsActive.value = false
  }
  
  const toDeleteNo = () => {
    modalIsActive.value = false
  }

  return {
    modalIsActive,
    toDeleteYes,
    toDeleteNo,
  }
})
