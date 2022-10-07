<template>
  <div class="counter">
    <div class="counter__wrap">
      <div class="counter__item">
        Counter:
        <span class="counter__item-weight">{{ counterStore.count }}</span>
      </div>
      <div class="counter__item">
        Double Counter:
        <span class="counter__item-weight">{{ counterStore.doubleCount }}</span>
      </div>
      <div class="counter__buttons">
        <button class="counter__button" @click="addOne">Increment</button>
        <button class="counter__button" @click="reset">Reset counter</button>
      </div>
    </div>
  </div>
</template>
<script>
import {useCounterStore} from '../store/counter'
export default {
  setup() {
    const counterStore = useCounterStore()
    const addOne = () => counterStore.increment()
    const reset = () => counterStore.reset()

    return {
      counterStore,
      addOne,
      reset,
    }
  },
}
</script>

<style lang="scss">
.counter {
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  &__item {
    padding-bottom: 5px;
    font-weight: 600;
  }
  &__item-weight {
    font-weight: 400;
  }
  &__wrap {
    background: #bf3b5e;
    border-radius: 5px;
    max-width: max-content;
    padding: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
  &__buttons {
    padding-top: 10px;
  }
  &__button {
    font-size: 18px;
    margin-right: 10px;
    padding: 5px 10px;
    background: #4f2c62;
    border-radius: 5px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    transition: background 400ms;
    &:hover {
      background: #c5557b;
      cursor: pointer;
    }
  }
}
</style>