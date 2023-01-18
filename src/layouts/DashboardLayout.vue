<script setup>
import DashboardHeader from "@components/layout/DashboardHeader.vue";
import DashboardSidebar from "@components/layout/DashboardSidebar.vue";
</script>

<template>
  <div class="dashboard-layout">
    <DashboardSidebar class="dashboard-layout__sidebar" />

    <div class="dashboard-layout__content">
      <DashboardHeader class="dashboard-layout__header" />

      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  display: flex;

  &__sidebar {
    position: sticky;
    top: 0;
    flex-shrink: 0;
    height: 100vh;
    padding: 40px;
    border-right: 1px solid $border-gray;
    overflow-y: auto;
    @include media-ml {
      padding: 20px;
    }
    @include media-sm {
      display: none;
    }
  }

  &__content {
    flex: 1 1 auto;
    padding: 40px;
    @include media-ml {
      padding: 20px;
    }
    @include media-sm {
      flex: none;
      width: 100%;
    }
  }

  &__header {
    margin-bottom: 40px;
    @include media-ml {
      margin-bottom: 20px;
    }
  }
}
</style>
