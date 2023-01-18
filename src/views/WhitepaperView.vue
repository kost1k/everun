<script setup>
import VuePdfEmbed from "vue-pdf-embed";
import pdfSource from "@assets/Everun_Whitepaper.pdf";
</script>

<template>
  <div class="whitepaper">
    <div class="container">
      <div class="whitepaper__row">
        <a class="btn btn--green" :href="pdfSource" target="_blank"
          >Show source pdf</a
        >
      </div>
      <vue-pdf-embed :source="pdfSource" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.whitepaper {
  margin-top: 60px;

  &__row {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>
