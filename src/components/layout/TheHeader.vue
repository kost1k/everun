<script setup>
import SocialLinks from "@components/common/SocialLinks.vue";
import MobileMenuBtn from "@components/common/MobileMenuBtn.vue";
import MobileMenu from "@components/layout/MobileMenu.vue";

import { ref } from "vue";

const isMenuShown = ref(false);

const menuList = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Token",
    link: "/#token",
  },
  {
    title: "How to play",
    link: "/#how-to-play",
  },
  {
    title: "Marketplace",
    link: "/#marketplace",
  },
  {
    title: "Roadmap",
    link: "/#roadmap",
  },
  {
    title: "Whitepaper",
    link: "/whitepaper",
  },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo-wrapper">
          <router-link to="/">
            <img
              class="header__logo"
              src="@assets/logo.svg"
              alt="EVERun logo"
              width="215"
              height="52"
            />
          </router-link>

          <img
            class="header__logo-bnb"
            src="@assets/pwrd-by-bnb.png"
            alt="Powered by BNB"
            width="142"
            height="30"
          />
        </div>

        <nav class="header__nav">
          <ul class="header-nav">
            <li v-for="(item, i) in menuList" :key="i" class="header-nav__item">
              <router-link
                :to="item.link"
                class="header-nav__link"
                :class="{
                  'header-nav__link--accent': item.title === 'Whitepaper',
                }"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="header__socials">
          <SocialLinks />
        </div>

        <div class="header__btns">
          <button type="button" class="btn btn--green-light header__btn">
            Buy
          </button>
          <router-link to="/dashboard" class="btn btn--gray header__btn"
            >Dashboard</router-link
          >
        </div>

        <MobileMenuBtn
          :class="{ active: isMenuShown }"
          @click="isMenuShown = true"
        />

        <teleport to="body">
          <MobileMenu
            :links="menuList"
            v-show="isMenuShown"
            @close="isMenuShown = false"
          />
        </teleport>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    @include media-lg {
      flex-wrap: wrap;
      row-gap: 30px;
      padding: 30px 0 0;
    }
    @include media-sm {
      position: relative;
      justify-content: center;
      padding-top: 20px;
    }
  }

  &__logo-wrapper {
    position: relative;
  }

  &__logo {
    @include media-sm {
      width: 142px;
      height: auto;
    }
  }

  &__logo-bnb {
    position: absolute;
    top: calc(100% + 20px);
    left: 10px;
    @include media-lg {
      position: static;
      margin-left: 30px;
    }
    @include media-sm {
      display: none;
    }
  }

  &__nav {
    @include media-lg {
      order: 1;
      width: calc(100% - 120px);
    }
    @include media-sm {
      display: none;
    }
  }

  &__socials {
    @include media-lg {
      order: 1;
    }
    @include media-sm {
      display: none;
    }
  }

  &__btns {
    display: flex;
    @include media-sm {
      display: none;
    }
  }

  &__btn {
    min-width: 150px;
    font-size: 18px;

    & + & {
      margin-left: 20px;
    }
  }
}

.header-nav {
  display: flex;

  &__item {
    font-size: 18px;
    line-height: 22px;

    & + & {
      margin-left: 30px;
      @include media-md {
        margin-left: 24px;
      }
    }
  }

  &__link {
    color: $gray2;

    &--accent {
      color: $orange;
    }
  }
}
</style>
