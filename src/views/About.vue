<template>
  <div class="about">
    <div class="about__wrap">
      <h1 class="about__title">About Page</h1>
      <p class="about__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        asperiores natus totam repellat, obcaecati nobis odio iste nisi, odit
        ipsam eveniet placeat modi praesentium quo amet in pariatur maiores
        unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        asperiores natus totam repellat, obcaecati nobis odio iste nisi, odit
        ipsam eveniet placeat modi praesentium quo amet in pariatur maiores
        unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        asperiores natus totam repellat, obcaecati nobis odio iste nisi, odit
        ipsam eveniet placeat modi praesentium quo amet in pariatur maiores
        unde? Lorem ipsum dolor sit amet consectetur
      </p>
      <p class="about__body">
        Adipisicing elit. Earum asperiores natus totam repellat, obcaecati nobis
        odio iste nisi, odit ipsam eveniet placeat modi praesentium quo amet in
        pariatur maiores unde? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum asperiores natus totam repellat, obcaecati nobis
        odio iste nisi, odit ipsam eveniet placeat modi praesentium quo amet in
        pariatur maiores unde?
      </p>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.about {
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;

  &__wrap {
    background: #bf3b5e;
    padding: 0 10px;
    border-radius: 7px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
    padding-bottom: 10px;
  }

  &__title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 30px 0;
  }
  &__body {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
    text-align: justify;
    text-indent: 30px;
  }
}
</style>