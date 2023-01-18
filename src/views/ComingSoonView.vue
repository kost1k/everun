<script setup></script>

<template>
  <div class="coming-soon">
    <img
      class="coming-soon__img"
      src="@images/coming-soon.png"
      width="533"
      height="387"
    />
  </div>
</template>

<style scoped lang="scss">
.coming-soon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 0;

  &__img {
    @include media-sm {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
