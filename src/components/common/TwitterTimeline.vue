<script setup>
import { onMounted } from "vue";

onMounted(() => {
  try {
    window.twttr.widgets.load();
  } catch (e) {
    console.error("Error", e);
  }
});
</script>

<template>
  <div class="twitter-timeline-wrapper">
    <a
      class="twitter-timeline"
      href="https://twitter.com/Everunio?ref_src=twsrc%5Etfw"
      >Tweets by Everunio</a
    >
  </div>
</template>

<style scoped lang="scss"></style>
