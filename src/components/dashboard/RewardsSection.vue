<script setup></script>

<template>
  <div class="rewards">
    <div class="rewards__item">
      <img
        class="rewards__icon rewards__icon--rewards"
        src="@images/rewards/rewards-1.png"
        width="58"
        height="75"
      />
      <div class="rewards__content">
        <div class="rewards__title">Total $EVRN Rewards</div>
        <div class="rewards__value">0</div>
      </div>
    </div>

    <div class="rewards__item">
      <img
        class="rewards__icon rewards__icon--staked"
        src="@images/rewards/rewards-2.png"
        width="69"
        height="78"
      />
      <div class="rewards__content">
        <div class="rewards__title">Total $EVRN staked</div>
        <div class="rewards__value">0</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rewards {
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
    display: flex;
    align-items: center;
    padding: 40px;
    border: 2px solid $border-gray;
    border-radius: 20px;
    @include media-ml {
      padding: 30px;
    }
  }

  &__icon {
    @include media-xs {
      height: auto;
      &--rewards {
        width: 44px;
      }

      &--staked {
        width: 50px;
      }
    }
  }

  &__content {
    margin-left: 30px;
    @include media-sm {
      margin-left: 20px;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 18px;
    color: $gray3;
  }

  &__value {
    font-size: 40px;
    font-weight: $bold;
    line-height: 48px;
    @include media-xs {
      font-size: 24px;
      line-height: 29px;
    }
  }
}
</style>
