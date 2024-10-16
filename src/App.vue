<script setup>
import LandingPage from "@pages/LandingPage.vue";
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "@components/footer/Footer.vue";
</script>

<template>
  <div class="bg-gradient-to-br from-white to-[#ffcde2] overflow-hidden">
    <Navbar />
    <LandingPage />
    <Footer />
  </div>
</template>

<style scoped></style>
