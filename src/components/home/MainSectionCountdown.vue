<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";

import { useStore } from "vuex";

const store = useStore();
const startDate = store.state.presaleDate;
</script>

<template>
  <div class="main-countdown">
    <div class="main-countdown__title">Presale Start</div>
    <vue-countdown :time="startDate" v-slot="{ days, hours, minutes }">
      <div class="main-countdown__row">
        <div class="main-countdown__col">
          <div class="main-countdown__number">{{ days }}</div>
          <div class="main-countdown__text">day</div>
        </div>

        <div class="main-countdown__col">
          <div class="main-countdown__number">{{ hours }}</div>
          <div class="main-countdown__text">hours</div>
        </div>

        <div class="main-countdown__col">
          <div class="main-countdown__number">{{ minutes }}</div>
          <div class="main-countdown__text">minutes</div>
        </div>
      </div>
    </vue-countdown>
    <img
      class="main-countdown__decor"
      src="@images/main-countdown-clock.png"
      width="84"
      height="88"
    />
  </div>
</template>

<style scoped lang="scss">
.main-countdown {
  position: relative;
  padding: 14px 18px;
  border: 2px solid $border-gray;
  border-radius: 10px;
  @include media-sm {
    padding: 10px;
    background-color: $bg-gray;
  }

  &__title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: $medium;
    line-height: 17px;
    color: $gray3;
    text-align: center;
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__number {
    font-size: 20px;
    font-weight: $bold;
    line-height: 24px;
    @include media-sm {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__text {
    font-size: 14px;
    font-weight: $medium;
    line-height: 17px;
    color: #bdbdbd;
    @include media-sm {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__decor {
    position: absolute;
    top: -49px;
    right: -43px;
    @include media-sm {
      top: -45px;
      right: 85px;
      width: 65px;
      height: auto;
    }
  }
}
</style>
