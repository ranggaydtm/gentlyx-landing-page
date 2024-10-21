<script setup></script>
<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <div class="flex flex-col flex-1 text-center lg:gap-6 gap-4">
      <div class="flex flex-col lg:w-full gap-2 px-10">
        <h1
          class="text-Raspberry font-extrabold text-[40px] lg:text-7xl leading-tight"
        >
          Referral Program
        </h1>
        <p class="lg:text-3xl text-[22px] font-medium">
          Spread the Word and Reap the Rewards
        </p>
      </div>
      <div class="lg:w-[800px] px-2">
        <p class="lg:text-[26px] text-xl font-light">
          Join Gentlyx's Referral Program and turn your network into a steady
          stream of earnings!
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:gap-[60px] lg:px-[51px] gap-6">
      <img src="@images/Referral.png" alt="Referral" class="hidden lg:block" />
      <img src="@images/Referral2.png" alt="Referral" class="block lg:hidden" />

      <div
        class="flex flex-col justify-center lg:text-start text-center gap-6 lg:w-[600px]"
      >
        <div class="gap-2">
          <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
            Boost Your Income
          </h2>
          <p class="lg:text-2xl text-xl">
            For the first year,
            <a class="font-bold">receive 10% of the earnings</a> from each
            creator you refer to Gentlyx
          </p>
        </div>
        <div class="gap-2">
          <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
            Grow Your Network
          </h2>
          <p class="lg:text-2xl text-xl">
            Earn
            <a class="font-bold">an additional 2.5%</a> from the earnings of
            creators referred by your referres
          </p>
        </div>
        <div class="gap-2">
          <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
            Easy to Share
          </h2>
          <p class="lg:text-2xl text-xl">
            Use your unique referral link to invite friends and fellow creators
            effortlessly
          </p>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:w-[800px] px-1 text-center">
      <p class="text-[26px] font-light">
        It’s a win-win! Share the Gentlyx experience, help others thrive, and
        watch your earnings grow. Ready to start spreading the love and earning
        more?
      </p>
    </div>

    <button
      class="bg-Lavender text-white text-[21px] font-semibold rounded-full px-[42px] py-[17px]"
    >
      GET STARTED
    </button>
  </div>
</template>
