<script setup></script>

<template>
  <button class="mobile-menu-btn" type="button" @click="$emit('click')">
    <span class="mobile-menu-btn__line"></span>
  </button>
</template>

<style scoped lang="scss">
.mobile-menu-btn {
  $this: &;

  display: none;
  position: absolute;
  top: 20px;
  right: 0;
  width: 24px;
  height: 24px;
  border: none;
  @include media-sm {
    display: block;
  }

  &.active {
    #{$this}__line {
      transform: translateX(10px);
      opacity: 0;

      &:before,
      &:after {
        transform: translateX(10px);
        opacity: 0;
      }
    }
  }

  &__line {
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 8px);
    width: 16px;
    height: 2px;
    background-color: $black;
    border-radius: 1px;
    transition: transform 0.3s, opacity 0.5s;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: $black;
      border-radius: 1px;
      transition: transform 0.3s, opacity 0.4s;
    }

    &:before {
      bottom: calc(100% + 5px);
      left: 4px;
    }

    &:after {
      top: calc(100% + 5px);
      left: -4px;
    }
  }
}
</style>
