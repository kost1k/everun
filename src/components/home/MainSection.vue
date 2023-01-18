<script setup>
import MainCountown from "@components/home/MainSectionCountdown.vue";
import AppsButton from "@components/home/AppsButton.vue";
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="main">
        <div class="main__mock main-mock">
          <img
            class="main-mock__img"
            src="@images/main-app-mock.png"
            alt=""
            width="325"
            height="656"
          />
          <img
            class="main-mock__img-decor main-mock__img-decor--left"
            src="@images/main-app-left-card.png"
            alt=""
            width="210"
            height="235"
          />
          <img
            class="main-mock__img-decor main-mock__img-decor--right"
            src="@images/main-app-right-card.png"
            alt=""
            width="210"
            height="235"
          />
        </div>

        <div class="main__info">
          <div class="main__title">
            Connecting healthy&nbsp;lifestyle, games & crypto
          </div>

          <div class="main__descr text">
            Encouraging a healthy lifestyle, powered by Crypto and
            Blockchain&nbsp;technology
          </div>

          <div class="main__row">
            <div class="main__btns">
              <button type="button" class="btn btn--green main__btn">
                Buy
              </button>
              <router-link
                to="/whitepaper"
                class="btn btn--orange-light main__btn"
                >Whitepaper</router-link
              >
            </div>

            <AppsButton class="main__apps" />
          </div>

          <MainCountown class="main__countdown" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-between;
  @include media-lg {
    flex-direction: column;
    align-items: center;
  }

  &__mock {
    padding-left: 55px;
    @include media-lg {
      padding-left: 0;
    }
    @include media-md {
      width: 33.506%;
      min-width: 160px;
    }
  }

  &__info {
    position: relative;
    max-width: 790px;
    margin-top: 30px;
  }

  &__title {
    font-size: 96px;
    font-weight: $bold;
    line-height: 120px;
    @include media-md {
      font-size: 80px;
      line-height: 100px;
    }
    @include media-sm {
      font-size: 32px;
      line-height: 40px;
      text-align: center;
    }
  }

  &__descr {
    margin-top: 40px;
    @include media-sm {
      margin-top: 30px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    @include media-sm {
      flex-direction: column;
      margin-top: 30px;
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__btns {
    display: flex;
    gap: 20px;
    @include media-sm {
      width: 100%;
    }
  }

  &__btn {
    @include media-sm {
      width: 50%;
      min-width: 120px;
    }
  }

  &__apps {
    margin-right: 20px;
    @include media-sm {
      margin-right: 0;
      margin-top: 20px;
    }
  }

  &__countdown {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 206px;
    @include media-md {
      top: -5px;
      right: 30px;
    }
    @include media-sm {
      top: initial;
      bottom: calc(100% + 55px);
      right: initial;
      left: 10px;
      width: 125px;
    }
  }
}

.main-mock {
  position: relative;

  &__img {
    @include media-md {
      width: 100%;
      height: auto;
    }
  }

  &__img-decor {
    position: absolute;
    @include media-md {
      width: 65%;
      height: auto;
    }

    &--left {
      right: calc(100% - 98px);
      bottom: 110px;
      @include media-lg {
        right: calc(100% + 40px);
        bottom: 310px;
      }
      @include media-md {
        right: calc(100% + 5%);
        bottom: 46.552%;
      }
    }

    &--right {
      left: calc(100% - 44px);
      top: 135px;
      @include media-lg {
        left: calc(100% + 40px);
        top: 260px;
      }
      @include media-md {
        left: calc(100% + 5%);
        top: 39%;
      }
    }
  }
}
</style>
