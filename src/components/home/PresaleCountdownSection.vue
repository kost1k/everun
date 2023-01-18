<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";

import { useStore } from "vuex";

const store = useStore();
const startDate = store.state.presaleDate;
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="presale-countdown">
        <div class="presale-countdown__img-wrapper">
          <img
            class="presale-countdown__img"
            src="@images/presale-timer.png"
            alt=""
            width="346"
            height="377"
          />
        </div>

        <div class="presale-countdown__content">
          <div class="presale-countdown__title">Presale Start</div>

          <vue-countdown :time="startDate" v-slot="{ days, hours, minutes }">
            <div class="presale-countdown__row">
              <div class="presale-countdown__col">
                <div class="presale-countdown__number">{{ days }}</div>
                <div class="presale-countdown__text">day</div>
              </div>

              <div class="presale-countdown__col">
                <div class="presale-countdown__number">{{ hours }}</div>
                <div class="presale-countdown__text">hours</div>
              </div>

              <div class="presale-countdown__col">
                <div class="presale-countdown__number">{{ minutes }}</div>
                <div class="presale-countdown__text">minutes</div>
              </div>
            </div>
          </vue-countdown>

          <div class="presale-countdown__btn-row">
            <a class="btn btn--green presale-countdown__btn" href="#">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.presale-countdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 180px;
  background-color: #111111;
  background-image: url("data:image/svg+xml,%3Csvg width='722' height='445' viewBox='0 0 722 445' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.08' d='M374.504 589H0L347.496 241L0 -107H374.504L722 241L374.504 589Z' fill='white'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center right 50px;
  border-radius: 30px;
  @include media-lg {
    padding: 0 160px;
  }
  @include media-ml {
    padding: 0 60px 0 160px;
  }
  @include media-md {
    flex-direction: column;
    padding: 60px;
    background-image: url("data:image/svg+xml,%3Csvg width='900' height='868' viewBox='0 0 900 868' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.08' d='M466.833 868H0L433.167 434L0 0H466.833L900 434L466.833 868Z' fill='white'/%3E%3C/svg%3E");
  }
  @include media-sm {
    padding: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='502' height='484' viewBox='0 0 900 868' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.08' d='M466.833 868H0L433.167 434L0 0H466.833L900 434L466.833 868Z' fill='white'/%3E%3C/svg%3E");
    background-position: center right -20px;
  }

  &__img-wrapper {
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:before {
      bottom: -10px;
      right: calc(100% - 5px);
      width: 138px;
      height: 150px;
      background-image: url("@images/presale-decor-left.png");
      @include media-md {
        width: 107px;
        height: 116px;
      }
      @include media-sm {
        bottom: 0;
        width: 54px;
        height: 58px;
      }
    }

    &:after {
      top: -15px;
      left: calc(100% - 35px);
      width: 177px;
      height: 150px;
      background-image: url("@images/presale-decor-right.png");
      @include media-md {
        width: 99px;
        height: 116px;
      }
      @include media-sm {
        top: -10px;
        left: calc(100% - 15px);
        width: 49px;
        height: 58px;
      }
    }
  }

  &__img {
    @include media-md {
      width: 267px;
      height: auto;
    }
    @include media-sm {
      width: 134px;
      height: auto;
    }
  }

  &__content {
    padding: 60px 0;
    text-align: center;
    @include media-md {
      width: 100%;
      margin-top: 50px;
      padding: 0;
    }
    @include media-sm {
      margin-top: 30px;
    }
  }

  &__title {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: $bold;
    line-height: 44px;
    color: $white;
    @include media-sm {
      margin-bottom: 20px;
    }
  }

  &__row {
    display: flex;
    justify-content: center;
    gap: 60px;
    @include media-sm {
      gap: 20px;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__number {
    font-size: 96px;
    font-weight: $bold;
    line-height: 96px;
    background: linear-gradient(247.95deg, #36d6ff -14.49%, #ffffff 81.86%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    @include media-sm {
      font-size: 48px;
      line-height: 58px;
    }
  }

  &__text {
    margin-top: 5px;
    font-size: 24px;
    font-weight: $medium;
    line-height: 30px;
    color: $gray3;
    @include media-sm {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__btn-row {
    margin-top: 40px;
    @include media-sm {
      margin-top: 30px;
    }
  }

  &__btn {
    width: 160px;
    @include media-sm {
      width: 100%;
    }
  }
}
</style>
