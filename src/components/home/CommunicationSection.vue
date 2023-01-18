<script setup>
import IconTelegramColor from "@icons/IconTelegramColor.vue";
import IconTwitterColor from "@icons/IconTwitterColor.vue";
import IconWhitepaper from "@icons/IconWhitepaper.vue";
</script>

<template>
  <section class="section section-communication">
    <div class="container">
      <div class="communication">
        <div class="communication__title title">Stay in touch with EVERun</div>

        <ul class="communication__list">
          <li class="communication__item">
            <a
              class="communication__link"
              href="https://t.me/Everunio"
              target="_blank"
            >
              <IconTelegramColor />
              <span class="communication__name">Telegram Community</span>
            </a>
          </li>

          <li class="communication__item">
            <a
              class="communication__link"
              href="https://twitter.com/Everunio"
              target="_blank"
            >
              <IconTwitterColor />
              <span class="communication__name">Twitter Feed</span>
            </a>
          </li>

          <li class="communication__item">
            <router-link class="communication__link" to="/whitepaper">
              <IconWhitepaper />
              <span class="communication__name">Whitepaper</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-partners {
  margin-top: 130px;
}

.communication {
  &__title {
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-top: 60px;
    @include media-md {
      grid-template-columns: 1fr;
      grid-gap: 20px;
      margin-top: 40px;
    }
  }

  &__item {
    position: relative;
    min-height: 120px;
    border: 2px solid $border-gray;
    border-radius: 20px;

    &:after {
      content: "";
      position: absolute;
      top: calc(50% - 7px);
      right: 30px;
      width: 9px;
      height: 14px;
      background-image: url("data:image/svg+xml,%3Csvg width='9' height='14' viewBox='0 0 9 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 13L7 7L1 0.999999' stroke='black' stroke-opacity='0.2' stroke-width='2'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 30px;
    color: $black;
  }

  &__name {
    margin-left: 20px;
    font-size: 20px;
    font-weight: $bold;
    line-height: 30px;
  }
}
</style>
