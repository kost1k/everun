<script setup>
import IconToken from "@icons/IconToken.vue";
</script>

<template>
  <section id="how-to-play" class="section">
    <div class="container">
      <div class="how-to">
        <div class="how-to__row">
          <div class="how-to__img-wrapper">
            <img
              class="how-to__img"
              src="@images/how-to/how-to-1.png"
              alt=""
              width="561"
              height="420"
            />
          </div>

          <div class="how-to__info">
            <div class="how-to__title title">Walk & upgrade your Shoes</div>
            <div class="how-to__descr text">
              Gems gained by walking are used to upgrade your Everun® branded
              shoes. Speed, Stamina and Strength are key components to being
              successful on in game Battles of the Everun® Platform.
            </div>
          </div>
        </div>

        <div class="how-to__row">
          <div class="how-to__img-wrapper">
            <img
              class="how-to__img"
              src="@images/how-to/how-to-2.png"
              alt=""
              width="561"
              height="420"
            />
          </div>

          <div class="how-to__info">
            <div class="how-to__title title">Compete & gain tokens!</div>
            <div class="how-to__descr text">
              By as little as a click of a button Everun® will pair you with an
              adversary matched to your rank. The Platform is designed to allow
              players to benefit financially by using all in-game mechanics in a
              pro rata basis.
            </div>
          </div>
        </div>

        <div class="how-to__items-row">
          <div class="how-to__item">
            <IconToken class="how-to__item-icon" />
            <div class="how-to__item-title title">
              Move & Earn <span>tokens</span>
            </div>
            <div class="how-to__item-descr text">
              Move and Earn $EVRN, unbox new shoes and trade them on our
              marketplace. <br />
              As simple as it gets!
            </div>
          </div>

          <div class="how-to__item">
            <img
              class="how-to__item-icon"
              src="@images/how-to/how-to-point.png"
              width="155"
              height="116"
            />
            <div class="how-to__item-title title">Walk to earn gems</div>
            <div class="how-to__item-descr text">
              Just convert your everyday activity into gems which can then be
              converted to $EVRN or used to upgrade your shoes.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.how-to {
  &__row {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 80px;
    border: 2px solid $border-gray;
    border-radius: 30px;
    @include media-lg {
      padding: 60px;
    }
    @include media-ml {
      padding: 40px;
    }
    @include media-md {
      flex-direction: column;
      padding: 60px;
      text-align: center;
    }
    @include media-sm {
      padding: 30px;
    }

    & + & {
      flex-direction: row-reverse;
      margin-top: 60px;
      @include media-md {
        flex-direction: column;
        margin-top: 40px;
      }
      @include media-sm {
        margin-top: 20px;
      }
    }
  }

  &__img-wrapper {
    @include media-lg {
      flex: 0 0 45%;
    }
    @include media-md {
      max-width: 561px;
    }
  }

  &__img {
    @include media-lg {
      width: 100%;
      height: auto;
    }
  }

  &__descr {
    margin-top: 40px;
    @include media-md {
      margin-top: 20px;
    }
  }

  &__items-row {
    display: flex;
    gap: 60px;
    margin-top: 60px;
    @include media-md {
      flex-direction: column;
      gap: 40px;
      margin-top: 40px;
    }
    @include media-sm {
      gap: 20px;
      margin-top: 20px;
    }
  }

  &__item {
    flex: 1;
    padding: 80px;
    border: 2px solid $border-gray;
    border-radius: 30px;
    text-align: center;
    @include media-lg {
      padding: 60px;
    }
    @include media-ml {
      padding: 40px;
    }
    @include media-md {
      padding: 60px;
    }
    @include media-sm {
      padding: 30px;
    }
  }

  &__item-icon {
    height: 100px;
    width: auto;
  }

  &__item-title {
    margin-top: 30px;
    @include media-sm {
      margin-top: 20px;
    }

    span {
      color: $green;
    }
  }

  &__item-descr {
    margin-top: 40px;
    @include media-md {
      margin-top: 20px;
    }
  }
}
</style>
