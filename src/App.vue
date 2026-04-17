<script setup lang="ts">
import SiteHeader from "./components/Site-Header.vue";
import SiteFooter from "./components/Site-Footer.vue";
import HeroSection from "./components/Hero-Section.vue";
import ServicesSection from "./components/Services-Section.vue";
import AboutSection from "./components/About-Section.vue";
import BookingSection from "./components/Booking-Section.vue";
import ContactSection from "./components/Contact-Section.vue";
</script>

<template>
  <Site-Header />
  <main>
    <Hero-Section />
    <Services-Section />
    <About-Section />
    <Booking-Section />
    <Contact-Section />
  </main>
  <Site-Footer />
</template>
