<script setup>
import IconExternalLink from "@icons/IconExternalLink.vue";
</script>

<template>
  <div class="statistics">
    <div class="statistics__box">
      <div class="statistics__table">
        <div class="statistics__item">
          <div class="statistics__title">Total Supply</div>
          <div class="statistics__value">100 000 000</div>
        </div>

        <div class="statistics__item">
          <div class="statistics__title">Burned so far</div>
          <div class="statistics__value">15 000 000</div>
        </div>

        <div class="statistics__item">
          <div class="statistics__title">Circulating supply</div>
          <div class="statistics__value">100 000 000</div>
        </div>

        <div class="statistics__item">
          <div class="statistics__title">MarketCap</div>
          <div class="statistics__value">$0</div>
        </div>

        <div class="statistics__item">
          <div class="statistics__title">Estimated 24H Trading VOLUME</div>
          <div class="statistics__value">$0</div>
        </div>

        <div class="statistics__item">
          <div class="statistics__title">LP value</div>
          <div class="statistics__value">$0</div>
        </div>
      </div>

      <div class="statistics-holders statistics__holders">
        <div class="statistics__title">Holders</div>
        <div class="statistics__value">1</div>

        <a href="#" class="statistics-holders__link">
          <IconExternalLink />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.statistics {
  &__box {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
    padding: 40px;
    border: 2px solid $border-gray;
    border-radius: 20px;
    @include media-ml {
      flex-direction: column;
      padding: 30px;
    }
  }

  &__table {
    flex: 1 1 calc(100% - 215px);
    min-width: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 10px;
    text-align: center;
    @include media-ml {
      flex: none;
      min-width: auto;
      width: 100%;
    }
    @include media-xs {
      grid-template-columns: 100%;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    color: $gray3;
  }

  &__value {
    font-size: 18px;
    font-weight: $bold;
    line-height: 22px;
  }

  &__holders {
    flex: 1 1 185px;
    min-width: 185px;
    @include media-ml {
      flex: none;
      width: 100%;
    }
  }
}

.statistics-holders {
  position: relative;
  padding: 14px 16px;
  background-color: $bg-gray;
  border-radius: 10px;

  &__link {
    position: absolute;
    top: 6px;
    right: 6px;
  }
}
</style>
