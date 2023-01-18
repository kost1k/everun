<script setup>
import IconClose from "@icons/IconClose.vue";
import SocialLinks from "@components/common/SocialLinks.vue";

import IconDashboard from "@icons/menu/IconDashboard.vue";
import IconStaking from "@icons/menu/IconStaking.vue";
import IconSwap from "@icons/menu/IconSwap.vue";
import IconMarketplace from "@icons/menu/IconMarketplace.vue";
import IconChart from "@icons/menu/IconChart.vue";
import IconWebsite from "@icons/menu/IconWebsite.vue";

const menuList = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Staking",
    link: "/staking",
    icon: IconStaking,
  },
  {
    title: "Swap",
    link: "/swap",
    icon: IconSwap,
  },
  {
    title: "Marketplace",
    link: "/marketplace",
    icon: IconMarketplace,
  },
  {
    title: "Chart",
    link: "/chart",
    icon: IconChart,
  },
  {
    title: "Website",
    link: "/",
    icon: IconWebsite,
  },
];
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
          <li v-for="(item, i) in menuList" :key="i" class="mobile-menu__item">
            <router-link
              :to="item.link"
              class="mobile-menu__link"
              :class="{
                'mobile-menu__link--accent': item.title === 'Whitepaper',
              }"
              @click="$emit('close')"
            >
              <component :is="item.icon" />
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <div class="mobile-menu__socials">
          <SocialLinks />
        </div>
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 250px;
    @include media-xs {
      max-width: 240px;
    }
  }

  &__item {
    font-size: 18px;
    font-weight: $semi-bold;
    line-height: 22px;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    color: $gray2;
    transition: all 0.3s;

    &.router-link-active {
      color: $green;
      background-color: $bg-green-light;
    }

    &:hover:not(.router-link-active) {
      background-color: $bg-gray;
    }

    svg {
      margin-right: 16px;
    }
  }

  &__socials {
    margin-top: 30px;
    padding-left: 20px;
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
