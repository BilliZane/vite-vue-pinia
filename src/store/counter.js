// Composition API

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

// Options API

// import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
// });
