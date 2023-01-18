<script setup>
import SocialLinks from "@components/common/SocialLinks.vue";
import DashboardSidebarMenu from "@components/layout/DashboardSidebarMenu.vue";
</script>

<template>
  <div class="dashboard-sidebar">
    <div class="dashboard-sidebar__logo-wrapper">
      <router-link to="/">
        <img
          class="dashboard-sidebar__logo"
          src="@assets/logo.svg"
          alt="EVERun logo"
          width="215"
          height="52"
        />
      </router-link>
    </div>

    <DashboardSidebarMenu class="dashboard-sidebar__menu" />

    <div class="dashboard-sidebar__socials">
      <SocialLinks />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-sidebar {
  display: flex;
  flex-direction: column;

  &__logo-wrapper {
    margin-bottom: 40px;
  }

  &__menu {
    min-width: 250px;
  }

  &__socials {
    margin-top: auto;
    padding-left: 20px;
  }
}
</style>
