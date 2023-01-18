<script setup>
import IconTelegram from "@icons/IconTelegram.vue";
import IconTwitter from "@icons/IconTwitter.vue";
</script>

<template>
  <ul class="socials">
    <li class="socials__item">
      <a href="https://t.me/Everunio" target="_blank" class="socials__link">
        <IconTelegram />
      </a>
    </li>

    <li class="socials__item">
      <a
        href="https://twitter.com/Everunio"
        target="_blank"
        class="socials__link"
      >
        <IconTwitter />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.socials {
  display: flex;

  &__item {
    & + & {
      margin-left: 20px;
    }
  }
}
</style>
