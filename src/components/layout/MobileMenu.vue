<script setup>
import IconClose from "@icons/IconClose.vue";
import SocialLinks from "@components/common/SocialLinks.vue";

defineProps({
  links: Array,
});
</script>

<template>
  <transition name="mobile-menu">
    <div class="mobile-menu">
      <div class="mobile-menu__container">
        <button
          class="mobile-menu__close"
          type="button"
          @click="$emit('close')"
        >
          <IconClose />
        </button>

        <ul class="mobile-menu__list">
          <li v-for="(item, i) in links" :key="i" class="mobile-menu__item">
            <router-link
              :to="item.link"
              class="mobile-menu__link"
              :class="{
                'mobile-menu__link--accent': item.title === 'Whitepaper',
              }"
              @click="$emit('close')"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>

        <div class="mobile-menu__btns">
          <button type="button" class="btn btn--green-light mobile-menu__btn">
            Buy
          </button>
          <router-link to="/dashboard" class="btn btn--gray mobile-menu__btn"
            >Dashboard</router-link
          >
        </div>

        <div class="mobile-menu__socials">
          <SocialLinks />
        </div>

        <img
          class="mobile-menu__logo-bnb"
          src="@assets/pwrd-by-bnb.png"
          alt="Powered by BNB"
          width="142"
          height="30"
        />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $white;
  z-index: 999;
  transition: transform 0.3s ease;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &__list {
    text-align: center;
  }

  &__item {
    font-size: 20px;
    font-weight: $bold;
    line-height: 24px;

    & + & {
      margin-top: 30px;
    }
  }

  &__link {
    color: $black;

    &--accent {
      color: $orange;
    }
  }

  &__btns {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  &__btn {
    width: 100%;
    font-size: 18px;

    & + & {
      margin-top: 20px;
    }
  }

  &__socials {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  &__logo-bnb {
    margin: 30px auto 0;
  }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transform: translateX(0);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(-100%);
}
</style>
