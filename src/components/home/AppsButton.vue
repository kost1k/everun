<script setup>
import IconApps from "@icons/IconApps.vue";
</script>

<template>
  <div class="apps-button">
    <IconApps class="apps-button__icon" />
    <div class="apps-button__soon">Coming soon</div>
  </div>
</template>

<style scoped lang="scss">
.apps-button {
  position: relative;

  &__icon {
    @include media-sm {
      max-width: 363px;
      width: 100%;
      height: auto;
    }
  }

  &__soon {
    position: absolute;
    top: -20px;
    right: -20px;
    padding: 8px 14px;
    border-radius: 6px;
    background-color: $bg-purple-light;
    font-size: 14px;
    font-weight: $medium;
    line-height: 18px;
    color: $purple;
    @include media-sm {
      top: calc(100% - 8px);
      left: 50%;
      right: initial;
      transform: translateX(-50%);
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
