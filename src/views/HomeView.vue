<script setup>
import MainSection from "@components/home/MainSection.vue";
import AboutSection from "@components/home/AboutSection.vue";
import NftSection from "@components/home/NftSection.vue";
import TokenSection from "@components/home/TokenSection.vue";
import HowToSection from "@components/home/HowToSection.vue";
import MarketplaceSection from "@components/home/MarketplaceSection.vue";
import RoadmapSection from "@components/home/RoadmapSection.vue";
import PresaleCountdownSection from "@components/home/PresaleCountdownSection.vue";
// import PartnersSection from "@components/home/PartnersSection.vue";
import CommunicationSection from "@components/home/CommunicationSection.vue";
</script>

<template>
  <main class="content-wrapper">
    <MainSection />
    <AboutSection />
    <NftSection />
    <TokenSection />
    <HowToSection />
    <MarketplaceSection />
    <RoadmapSection />
    <PresaleCountdownSection />
    <!--    <PartnersSection />-->
    <CommunicationSection />
  </main>
</template>
