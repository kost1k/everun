<script setup></script>

<template>
  <div class="profile-balance">
    <div class="profile-balance__item">
      <div class="profile-balance__title">Your $EVRN Balance</div>
      <div class="profile-balance__value">0</div>
    </div>

    <div class="profile-balance__item">
      <div class="profile-balance__title">Claimable $EVRN Rewards</div>
      <div class="profile-balance__value">0</div>
    </div>

    <div class="profile-balance__item">
      <div class="profile-balance__title">Value</div>
      <div class="profile-balance__value">0</div>
    </div>

    <div class="profile-balance__item">
      <div class="profile-balance__title">Total received $EVRN Rewards</div>
      <div class="profile-balance__value">0</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-balance {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) minmax(210px, 1fr);
  gap: 30px 20px;
  text-align: center;
  @include media-xs {
    grid-template-columns: 100%;
  }

  &__title {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    color: $gray3;
  }

  &__value {
    font-size: 30px;
    font-weight: $bold;
    line-height: 36px;
  }
}
</style>
