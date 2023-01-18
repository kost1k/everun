<script setup>
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide } from "vue3-carousel";

import Nft1 from "@images/nft/nft-1.png";
import Nft2 from "@images/nft/nft-2.png";
import Nft3 from "@images/nft/nft-3.png";
import Nft4 from "@images/nft/nft-4.png";
import Nft5 from "@images/nft/nft-5.png";

const slides = [
  {
    src: Nft1,
  },
  {
    src: Nft2,
  },
  {
    src: Nft3,
  },
  {
    src: Nft4,
  },
  {
    src: Nft5,
  },
];

const breakpoints = {
  480: {
    itemsToShow: 1.75,
  },
  768: {
    itemsToShow: 2.25,
  },
  1024: {
    itemsToShow: 3.5,
  },
  1400: {
    itemsToShow: 3.75,
  },
  1921: {
    itemsToShow: 5,
  },
};
</script>

<template>
  <section class="section">
    <div class="nft-row">
      <Carousel
        :itemsToShow="1.5"
        :breakpoints="breakpoints"
        :wrapAround="true"
        :transition="500"
        :autoplay="2500"
      >
        <Slide v-for="(slide, index) in slides" :key="index">
          <img
            class="carousel__item"
            :src="slide.src"
            width="432"
            height="503"
          />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
.nft-row {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

.carousel {
  &__slide {
    padding: 25px;

    & > .carousel__item {
      transform: scale(1);
      opacity: 0.5;
      transition: 0.5s;
    }

    &--visible > .carousel__item {
      opacity: 0.8;
      transform: rotateY(0);
    }

    &--next > .carousel__item {
      transform: scale(0.9) translate(-40px);
    }

    &--prev > .carousel__item {
      transform: scale(0.9) translate(40px);
    }

    &--active > .carousel__item {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  &__item {
    max-width: 432px;
    width: 100%;
    height: auto;
    pointer-events: none;
  }
}
</style>
