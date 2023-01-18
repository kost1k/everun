<script setup>
import AppsButton from "@components/home/AppsButton.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__copyright">
          Everun® - All rights reserved <br />
          contact@everun.io
        </div>

        <AppsButton class="footer__apps" />

        <div class="footer__links">
          <router-link class="footer__link" to="/#roadmap">Roadmap</router-link>
          <a class="footer__link" href="mailto:contact@everun.io">Support</a>
          <router-link class="footer__link" to="/whitepaper"
            >Whitepaper</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 150px;
  padding: 40px 0 50px;
  border-top: 1px solid $border-gray;
  @include media-ml {
    padding: 50px 0;
  }
  @include media-sm {
    margin-top: 80px;
    padding: 30px 0 50px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include media-ml {
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 60px;
    }
    @include media-sm {
      flex-direction: column;
      text-align: center;
      row-gap: 40px;
    }
  }

  &__copyright {
    flex: 1;
    font-size: 18px;
    line-height: 30px;
    color: $gray3;
    @include media-ml {
      flex: none;
      width: 35%;
    }
    @include media-sm {
      width: 100%;
    }
  }

  &__links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    @include media-ml {
      flex: none;
      width: 65%;
    }
    @include media-sm {
      width: 100%;
      flex-direction: column;
      gap: 20px;
    }
  }

  &__link {
    font-size: 18px;
    line-height: 30px;
    color: $gray3;
  }

  &__apps {
    @include media-ml {
      order: 1;
    }
  }
}
</style>
