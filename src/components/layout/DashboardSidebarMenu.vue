<script setup>
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
  <nav class="dashboard-nav">
    <ul class="dashboard-nav__list">
      <li v-for="(item, i) in menuList" :key="i" class="dashboard-nav__item">
        <router-link :to="item.link" class="dashboard-nav__link">
          <component :is="item.icon" />
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.dashboard-nav {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
}
</style>
