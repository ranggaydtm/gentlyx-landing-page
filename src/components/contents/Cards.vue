<script setup>
import { defineProps } from "vue";

defineProps({
  svgIcon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-[#FFF4F9] rounded-[32px] px-6 py-[28px] lg:px-10 lg:py-6">
    <div
      class="flex flex-col lg:text-start lg:items-start lg:justify-center items-center text-center lg:w-[308px] lg:h-[320px] gap-6"
    >
      <component :is="svgIcon" class="" />
      <div class="flex flex-col justify-start gap-2">
        <h3 class="text-Persian lg:text-[32px] text-[28px] font-bold">
          {{ title }}
        </h3>
        <p class="text-[26px] font-light leading-8">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
