<script setup></script>

<template>
  <div class="profile-nft">
    <div class="profile-nft__item"></div>
    <div class="profile-nft__item"></div>
    <div class="profile-nft__item"></div>
  </div>
</template>

<style scoped lang="scss">
.profile-nft {
  display: flex;
  justify-content: center;
  gap: 12px;
  @include media-xs {
    justify-content: flex-start;
    gap: 20px;
    overflow-x: auto;
  }

  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 155px;
    background-color: $black;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 50px;
    color: $white;
    @include media-xs {
      flex-shrink: 0;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $white;
      border-radius: 2px;
    }

    &:before {
      width: 34px;
      height: 4px;
    }

    &:after {
      width: 4px;
      height: 34px;
    }
  }
}
</style>
