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
  <div
    class="bg-[#FFF4F9] w-[400px] h-[320px] rounded-[32px] flex items-center p-6"
  >
    <div class="flex flex-col items-start gap-4 px-4">
      <div class="w-[70px] h-[70px]">
        <component :is="svgIcon" class="w-full h-full" />
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-Persian text-3xl font-bold">{{ title }}</h3>
        <p class="text-2xl font-light leading-8">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
