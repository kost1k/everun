<script setup>
import AppLoader from "@components/AppLoader.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

import { RouterView, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

const route = useRoute();
const layout = computed(() =>
  route.meta.layout === "dashboard" ? DashboardLayout : DefaultLayout
);
const isLoaded = ref(true);

onMounted(async () => {
  setTimeout(() => {
    isLoaded.value = false;
  }, 1200);
});
</script>

<template>
  <transition>
    <AppLoader v-if="isLoaded" />
  </transition>

  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss">
@import "@/assets/base.css";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
