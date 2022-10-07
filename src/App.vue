<template>
  <div class="container">
    <div class="app-image">
      <img class="app-image__img" src="./assets/pinia.svg" alt="Pinia logo" />
    </div>
    <Nav />
    
    <router-view></router-view>
    
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  components: {Nav, Footer},
}
</script>

<style lang="scss">
.container {
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  border: solid 5px #bf3b5e;
  border-radius: 5px;
}

.app-image {
  display: flex;
  justify-content: center;
  &__img {
    max-width: 100px;
    padding: 10px 0 20px;
  }
}
</style>

