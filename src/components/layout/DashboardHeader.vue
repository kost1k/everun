<script setup>
import MobileMenuBtn from "@components/common/MobileMenuBtn.vue";
import DashboardMobileMenu from "@components/layout/DashboardMobileMenu.vue";

import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import detectEthereumProvider from "@metamask/detect-provider";

const store = useStore();

const provider = ref(null);
const user = ref("");
const isMenuShown = ref(false);

const isAuth = computed(() => store.state.isAuth);

const authMetaMask = () => {
  if (provider.value) {
    provider.value
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        store.commit("setAuth");
        user.value = accounts[0];
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          alert("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
  } else {
    alert("Please install MetaMask!");
  }
};

onMounted(async () => {
  provider.value = await detectEthereumProvider();
});
</script>

<template>
  <header class="header">
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
      </div>

      <div class="header__btns">
        <button type="button" class="btn btn--green-light header__btn">
          Buy
        </button>
        <button
          type="button"
          class="btn btn--green header__btn header__btn--wallet"
          @click="authMetaMask"
          v-if="!isAuth"
        >
          Connect Wallet
        </button>
        <div class="header__user" v-else>{{ user }}</div>
      </div>

      <MobileMenuBtn
        class="header__menu-btn"
        :class="{ active: isMenuShown }"
        @click="isMenuShown = true"
      />

      <teleport to="body">
        <DashboardMobileMenu
          v-show="isMenuShown"
          @close="isMenuShown = false"
        />
      </teleport>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__inner {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @include media-sm {
      position: relative;
      justify-content: flex-start;
      padding-right: 50px;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      padding-right: 0;
    }
  }

  &__logo-wrapper {
    display: none;
    @include media-sm {
      display: block;
    }
  }

  &__logo {
    @include media-sm {
      width: 142px;
      height: auto;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 20px;
    @include media-sm {
      margin-left: auto;
    }
    @media screen and (max-width: 600px) {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  &__btn {
    min-width: 150px;
    font-size: 18px;
    @include media-xs {
      min-width: 80px;
    }

    &--wallet {
      min-width: 180px;
    }
  }

  &__user {
    width: 180px;
    font-size: 18px;
    font-weight: $semi-bold;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__menu-btn {
    @media screen and (max-width: 600px) {
      top: 0;
    }
  }
}
</style>
