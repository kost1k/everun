<script setup>
import ProfileSectionBalance from "./ProfileSectionBalance.vue";
import ProfileSectionNft from "./ProfileSectionNft.vue";
</script>

<template>
  <div class="profile">
    <div class="profile__item">
      <div class="profile__title">Your Balance</div>

      <ProfileSectionBalance />
    </div>

    <div class="profile__item">
      <div class="profile__title">My NFTs</div>

      <ProfileSectionNft />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 40px;
  @include media-lg {
    grid-gap: 20px;
  }
  @include media-ml {
    grid-template-columns: 100%;
  }

  &__item {
    padding: 40px;
    border: 2px solid $border-gray;
    border-radius: 20px;
    @include media-ml {
      padding: 30px;
    }
  }

  &__title {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid $border-gray;
    font-size: 24px;
    font-weight: $bold;
    line-height: 29px;
    text-align: center;
  }
}
</style>
