<script setup></script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about">
        <div class="about__title title">
          Our game connects real-life sports activities with online gaming and
          earning crypto
        </div>
        <div class="about__descr text">
          Everun® is creating a bridge between real-life sports and blockchain
          technology, our community can benefit from our advanced in-game
          mechanics and earn $EVRN!
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  &__descr {
    margin-top: 40px;
    @include media-sm {
      margin-top: 30px;
    }
  }
}
</style>
