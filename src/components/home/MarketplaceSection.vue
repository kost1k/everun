<script setup></script>

<template>
  <section id="marketplace" class="section">
    <div class="container">
      <div class="marketplace">
        <div class="marketplace__title title">
          Buy & Sell items on marketplace
        </div>
        <div class="marketplace__descr text">
          Buy some really cool Everun® Shoes or boxes to get started <br />
          Or sell something you don’t need anymore!
        </div>

        <div class="marketplace__row">
          <div class="marketplace__item">
            <img
              class="marketplace__img"
              src="@images/marketplace/marketplace-mock-1.png"
              alt=""
              width="325"
              height="657"
            />
          </div>

          <div class="marketplace__item">
            <img
              class="marketplace__img"
              src="@images/marketplace/marketplace-mock-2.png"
              alt=""
              width="325"
              height="657"
            />
          </div>

          <div class="marketplace__item">
            <img
              class="marketplace__img"
              src="@images/marketplace/marketplace-mock-3.png"
              alt=""
              width="325"
              height="657"
            />
          </div>
        </div>

        <div class="marketplace__row">
          <div class="marketplace__item-one">
            <img
              class="marketplace__img"
              src="@images/marketplace/marketplace-mock-4.png"
              alt=""
              width="811"
              height="657"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.marketplace {
  text-align: center;

  &__descr {
    margin-top: 40px;
    margin-bottom: 80px;
    @include media-sm {
      margin-top: 30px;
      margin-bottom: 40px;
    }
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5.715%;

    & + & {
      margin-top: 150px;
      @include media-md {
        margin-top: 15%;
      }
    }
  }

  &__item {
    flex: 1;
    max-width: 325px;
    min-width: 120px;

    &:nth-child(odd) {
      margin-top: 8.5%;
    }
  }

  &__item-one {
    max-width: 811px;
    min-width: 400px;
  }

  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
