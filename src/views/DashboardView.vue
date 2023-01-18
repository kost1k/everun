<script setup>
import TwitterTimeline from "@components/common/TwitterTimeline.vue";
import RewardsSection from "@components/dashboard/RewardsSection.vue";
import ProfileSection from "@components/dashboard/ProfileSection.vue";
import StatisticsSection from "@components/dashboard/StatisticsSection.vue";
</script>

<template>
  <div class="dashboard-content">
    <div class="dashboard-content__main">
      <RewardsSection />
      <ProfileSection />
      <StatisticsSection />
    </div>

    <div class="dashboard-content__aside">
      <TwitterTimeline />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-content {
  display: flex;
  gap: 40px;
  @include media-lg {
    flex-direction: column;
    gap: 20px;
  }

  &__main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include media-lg {
      flex: none;
      gap: 20px;
    }
  }

  &__aside {
    flex: 0 1 480px;
    min-width: 300px;
    padding: 20px;
    border: 2px solid $border-gray;
    border-radius: 20px;
    @include media-lg {
      flex: none;
      min-width: auto;
      padding: 40px;
    }
    @include media-ml {
      padding: 20px;
    }
  }
}
</style>
