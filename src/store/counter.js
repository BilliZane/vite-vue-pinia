import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++
  const doubleCount = computed(() => count.value * 2)
  const reset = () => (count.value = 0)

  return {
    count,
    increment,
    doubleCount,
    reset,
  }
})
