<template>
  <footer class="footer">
    <div class="footer__text">© Copyright {{ currentYear }}</div>
  </footer>
</template>
<script>
export default {
  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear,
    }
  },
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4f2c62;
  min-height: 60px;
  &__text {
    color: #fff;
    font-size: 14px;
    letter-spacing: 2px;
  }
}
</style>