<template>
  <nav class="nav">
    <router-link
      v-for="(route, idx) in routes"
      class="nav__item"
      :to="{name: route}"
      :key="idx"
      >{{ route }}</router-link
    >
  </nav>
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    const routes = ref(['Posts', 'Counter', 'About'])

    return {
      routes,
    }
  },
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin-bottom: 20px;
  background: #bf3b5e;
  color: #fff;

  &__item {
    margin-right: 10px;
    font-weight: 600;
    border-bottom: solid 1px transparent;
    transition: color 400ms, border 400ms;
    &:hover {
      color: #f0e76f;
    }
    &:last-child {
      margin: 0;
    }
  }
  .router-link-active {
    border-bottom: solid 1px #fff;
    padding-bottom: 2px;
  }
}
</style>