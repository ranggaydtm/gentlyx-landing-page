<script setup>
import WhyGentlyx from "./hero/WhyGentlyx.vue";
import ReferralProgram from "./hero/ReferralProgram.vue";
import TakeControl from "./hero/TakeControl.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center py-10">
    <img src="@images/Privacy.png" alt="Privacy" />
    <div class="lg:mt-10 lg:mb-[102px] mb-[97px] mx-auto">
      <button
        class="bg-Lavender text-white lg:text-[29px] text-2xl font-semibold rounded-full lg:px-[59px] lg:py-[23px] px-10 py-[17px]"
      >
        GET STARTED
      </button>
    </div>

    <div
      class="rounded-[70px] lg:px-[50px] lg:py-[62px] px-[24px] py-[35px] flex flex-col lg:gap-[140px] gap-[80px] bg-white w-full lg:max-w-[1312px] box-content"
    >
      <!-- Why Gentlyx -->
      <WhyGentlyx />

      <!-- Referral -->
      <ReferralProgram />

      <!-- Take Control -->
      <TakeControl />

      <div
        class="flex flex-col justify-center items-center lg:gap-[60px] gap-[42px] max-w-[1400px]"
      >
        <div class="flex flex-col gap-10">
          <img src="@images/Ready.png" alt="Ready To" />
          <button
            class="bg-Lavender text-white text-xl font-semibold rounded-full py-[17px]"
          >
            JOIN NOW
          </button>
        </div>
        <img src="@images/Frame.png" alt="Frame Footer" />
      </div>
    </div>
  </div>
</template>

<style></style>
