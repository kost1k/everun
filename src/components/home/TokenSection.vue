<script setup>
import IconToken from "@icons/IconToken.vue";
</script>

<template>
  <section id="token" class="section">
    <div class="container">
      <div class="token">
        <div class="token__icon-row">
          <div class="token__icon-wrapper">
            <IconToken class="token__icon" />
          </div>
        </div>

        <div class="token__title">$EVRN</div>
        <div class="token__descr text">
          $EVRN is a Token used for operating in the EVRN platform. EVRN is
          short for Everun and can be either bought on a cryptocurrency exchange
          or earned by using Everun®.
        </div>
        <div class="token__btn-row">
          <button type="button" class="btn btn--orange token__btn">Buy</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.token {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  &__icon-row {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 110px;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:before {
      top: 0;
      right: calc(50% + 120px);
      width: 136px;
      height: 136px;
      background-image: url("data:image/svg+xml,%3Csvg width='136' height='136' viewBox='0 0 136 136' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M67.4422 101.628C76.2225 101.732 85.0356 98.4344 91.735 91.7349C104.929 78.5412 104.929 57.15 91.735 43.9562C83.8837 36.1049 73.1294 32.9257 62.9271 34.4188L86.5971 58.0888C92.2919 63.7836 92.2845 73.024 86.5807 78.7279C81.3824 83.9262 73.2466 84.393 67.5344 80.1241L67.4422 101.628ZM58.2088 100.233C52.9917 98.686 48.0747 95.8532 43.9564 91.7349C30.7626 78.5412 30.7626 57.15 43.9564 43.9562C46.6563 41.2563 49.6995 39.1089 52.9454 37.514L80.0586 64.6272C82.1481 66.7166 82.1454 70.107 80.0526 72.1998C77.9598 74.2926 74.5695 74.2953 72.48 72.2058L58.3894 58.1152L58.2365 93.7745L58.2088 100.233Z' fill='black' fill-opacity='0.1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.7007 96.9907C54.797 113.087 80.8944 113.087 96.9907 96.9907C113.087 80.8944 113.087 54.7971 96.9907 38.7007C80.8944 22.6044 54.797 22.6044 38.7007 38.7007C22.6044 54.7971 22.6044 80.8944 38.7007 96.9907ZM33.9228 101.769C52.6579 120.504 83.0335 120.504 101.769 101.769C120.504 83.0335 120.504 52.658 101.769 33.9229C83.0335 15.1878 52.6579 15.1878 33.9228 33.9229C15.1878 52.658 15.1878 83.0335 33.9228 101.769Z' fill='black' fill-opacity='0.1'/%3E%3C/svg%3E");
      @include media-sm {
        right: calc(50% + 80px);
        width: 85px;
        height: 85px;
      }
    }

    &:after {
      bottom: 10px;
      left: calc(50% + 170px);
      width: 112px;
      height: 112px;
      background-image: url("data:image/svg+xml,%3Csvg width='112' height='112' viewBox='0 0 112 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M82.6174 56.3282C82.7021 49.1904 80.0213 42.026 74.5751 36.5797C63.8494 25.854 46.4597 25.854 35.734 36.5797C29.3515 42.9622 26.767 51.7045 27.9806 59.9982L47.2222 40.7565C51.8518 36.127 59.3637 36.133 64.0005 40.7698C68.2264 44.9957 68.6059 51.6096 65.1356 56.2533L82.6174 56.3282ZM81.4838 63.8344C80.2259 68.0756 77.923 72.0728 74.5751 75.4208C63.8494 86.1464 46.4597 86.1464 35.734 75.4208C33.539 73.2258 31.7932 70.7517 30.4967 68.1128L52.5376 46.0719C54.2362 44.3733 56.9923 44.3754 58.6936 46.0767C60.3949 47.778 60.3971 50.5342 58.6985 52.2328L47.2437 63.6876L76.2325 63.8119L81.4838 63.8344Z' fill='black' fill-opacity='0.1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78.8474 79.6931C91.9327 66.6077 91.9327 45.3923 78.8474 32.3069C65.7621 19.2216 44.5466 19.2216 31.4613 32.3069C18.376 45.3923 18.376 66.6077 31.4613 79.6931C44.5466 92.7784 65.7621 92.7784 78.8474 79.6931ZM82.7315 83.5772C97.9619 68.3467 97.9619 43.6533 82.7315 28.4228C67.501 13.1924 42.8076 13.1924 27.5772 28.4228C12.3467 43.6533 12.3467 68.3467 27.5772 83.5772C42.8076 98.8076 67.501 98.8076 82.7315 83.5772Z' fill='black' fill-opacity='0.1'/%3E%3C/svg%3E");
      @include media-sm {
        left: calc(50% + 110px);
        width: 71px;
        height: 71px;
      }
    }
  }

  &__icon-wrapper {
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 428px;
      height: 28px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:before {
      bottom: 5px;
      right: calc(100% + 70px);
      background-image: url("data:image/svg+xml,%3Csvg width='428' height='28' viewBox='0 0 428 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M413.062 28H398L411.975 14L398 0H413.062L427.037 14L413.062 28Z' fill='%2389C527'/%3E%3Cpath d='M386.062 28H91L104.975 14L91 0H386.062L400.037 14L386.062 28Z' fill='url(%23paint0_linear_102_3015)'/%3E%3Crect y='10' width='400' height='9' fill='white'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_102_3015' x1='91.1665' y1='14' x2='398.741' y2='14' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2389C527' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389C527'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
      @include media-sm {
        right: calc(100% + 40px);
      }
    }

    &:after {
      bottom: calc(100% + 40px);
      left: calc(100% + 60px);
      background-image: url("data:image/svg+xml,%3Csvg width='428' height='28' viewBox='0 0 428 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.9755 -1.31673e-06L29.0371 0L15.0617 14L29.0371 28L13.9755 28L7.17958e-05 14L13.9755 -1.31673e-06Z' fill='%2389C527'/%3E%3Cpath d='M40.9755 -2.57951e-05L336.037 0L322.062 14L336.037 28L40.9755 28L27.0001 14L40.9755 -2.57951e-05Z' fill='url(%23paint0_linear_102_3019)'/%3E%3Crect x='427.037' y='18' width='400' height='9' transform='rotate(-180 427.037 18)' fill='white'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_102_3019' x1='335.871' y1='14' x2='28.2964' y2='14' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2389C527' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389C527'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
      @include media-sm {
        left: calc(100% - 15px);
      }
    }
  }

  &__icon {
    @include media-sm {
      width: 100px;
      height: 100px;
    }
  }

  &__title {
    margin-top: 40px;
    font-size: 40px;
    font-weight: $bold;
    line-height: 48px;
  }

  &__descr {
    margin-top: 40px;
    @include media-sm {
      margin-top: 30px;
    }
  }

  &__btn-row {
    margin-top: 40px;
    @include media-sm {
      margin-top: 30px;
    }
  }

  &__btn {
    width: 160px;
    @include media-sm {
      width: 100%;
    }
  }
}
</style>
