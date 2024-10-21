<script setup>
import Bitcoin from "@images/Bitcoin.svg";
import Migration from "@images/Migration.svg";
import Content from "@images/Content.svg";
import Chart from "@images/Chart.svg";
import Payments from "@images/Payments.svg";
import Sparkles from "@images/Sparkles.svg";
import Masks from "@images/Masks.svg";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center lg:gap-[100px] gap-[80px]"
  >
    <div class="flex flex-col flex-1 text-center lg:gap-6 gap-4">
      <div class="flex flex-col gap-2">
        <h1
          class="text-Raspberry font-extrabold lg:text-7xl text-[40px] leading-[47px] tracking-wide"
        >
          Take Control of Your Content
        </h1>
        <p class="lg:text-3xl text-2xl mx-16 font-medium">
          Everything You Need to Grow and Earn
        </p>
      </div>
      <div class="lg:w-[900px] lg:mx-[135px] lg:px-0 px-10">
        <p class="lg:text-[26px] text-xl font-light">
          From content management to earnings, Gentlyx puts creators in control
          with powerful tools and features designed to boost your creativity and
          your wallet
        </p>
      </div>
    </div>

    <!-- endless -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-[60px]">
      <div class="flex flex-col lg:gap-8 lg:w-[530px]">
        <div class="flex flex-col justify-center items-center">
          <Bitcoin />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] mx-10 leading-tight"
              >
                Endless Earning Opportunities
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Monetize your content, Your Way
              </p>
            </div>
            <p class="lg:text-[26px] text-xl font-light">
              Gentlyx lets you monetize your passion with flexible options.
              Create subscription tiers, fulfill requests, and design games, all
              while controlling your earnings and interactions. More choices,
              more ways to profit
            </p>
            <button
              class="bg-Lavender text-white text-[21px] font-semibold rounded-full px-[42px] py-[17px] mx-auto hidden lg:block"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div class="">
        <img src="@images/Endless.png" alt="Endless" class="flex-1" />
      </div>
      <button
        class="bg-Lavender text-white text-xl font-semibold rounded-full px-[39px] py-[17px] mx-auto lg:hidden"
      >
        START EARNING
      </button>
    </div>

    <!-- smart content -->
    <div
      class="flex flex-col-reverse items-center lg:flex-row lg:gap-[60px] gap-8"
    >
      <img src="@images/Smart.png" alt="Smart" />
      <div class="flex flex-col items-center lg:w-[530px]">
        <Migration />
        <div class="flex flex-col text-center gap-6">
          <div class="flex flex-col gap-4">
            <h2
              class="text-Persian font-bold lg:text-[44px] text-[28px] lg:mx-[71px] mx-10 leading-tight"
            >
              Smart Content Migration
            </h2>
            <p class="lg:text-2xl text-[22px] font-medium px-8">
              Moving your content to Gently is a breeze
            </p>
          </div>
          <p class="lg:text-[26px] text-xl lg:px-0 px-10 font-light">
            Easily transfer your content to Gentlyx in just a few clicks. It's
            fast. smooth, and nothing gets left behind. Ready to get started?
          </p>
        </div>
      </div>
    </div>

    <!-- Content Manager -->
    <div class="flex flex-col lg:flex-row lg:gap-[60px] gap-8 lg:px-[61px]">
      <div class="flex flex-col items-center lg:w-[530px]">
        <Content />
        <div class="flex flex-col text-center gap-6">
          <div class="flex flex-col gap-4">
            <h2
              class="text-Persian font-bold lg:text-[44px] text-[28px] lg:mx-[71px] lg:px-0 px-16 leading-tight"
            >
              Content Manager & Planner
            </h2>
            <p class="lg:text-2xl text-[22px] font-medium">
              Schedule it, plan it, and let the creativity flow
            </p>
          </div>
          <p class="lg:text-[26px] text-xl font-light">
            Organize your posts, create schedules, and plan ahead with our
            easy-to-use content manager. Avoid last-minute stress—your content
            will be ready to engage your audience at the perfect time. You’ve
            got this!
          </p>
        </div>
      </div>

      <img src="@images/Content.png" alt="Content Manager" />
    </div>

    <!-- Detailed -->
    <div
      class="flex flex-col-reverse items-center lg:flex-row lg:h-[620px] lg:gap-[60px] gap-8"
    >
      <img src="@images/Detailed.png" alt="Detailed" />

      <div class="flex flex-col items-center lg:w-[530px]">
        <Chart />
        <div class="flex flex-col text-center gap-6">
          <div class="flex flex-col gap-4">
            <h2
              class="text-Persian font-bold lg:text-[44px] text-[28px] px-10 text-balance leading-tight"
            >
              Detailed Stats & Analytics
            </h2>
            <p
              class="lg:text-2xl text-[22px] lg:px-[71px] font-medium px-10 leading-tight"
            >
              Know how it works. Get smart with your strategy
            </p>
          </div>
          <p class="lg:text-[26px] text-xl font-light text-balance">
            Analyze your content performance with detailed insights and
            analytics. Get a clear view of what works and where to improve,
            along with custom tips to boost engagement and earnings. Your
            success is just a click away!
          </p>
        </div>
      </div>
    </div>

    <!-- Easy Payments -->
    <div class="flex flex-col lg:flex-row lg:gap-[60px] gap-8">
      <div class="flex flex-col items-center lg:gap-8 lg:w-[530px]">
        <div class="flex flex-col items-center">
          <Payments />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight text-balance"
              >
                Easy Payments & Transparency
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium px-10">
                Getting paid has never been this easy
              </p>
            </div>
            <p class="lg:text-[26px] text-xl font-light lg:px-1 text-balance">
              Gentlyх provides clear payments in fiat or crypto. Track your
              earnings, view detailed breakdowns, and know when and how you'll
              get paid. No more confusing payout structures —everything is
              crystal clear!
            </p>
          </div>
        </div>
        <button
          class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-4 lg:block hidden"
        >
          START EARNING
        </button>
      </div>
      <img src="@images/Easy.png" alt="Payments" class="lg:my-[90px]" />
      <button
        class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-4 mx-auto lg:hidden"
      >
        START EARNING
      </button>
    </div>

    <!-- Personal AI -->
    <div
      class="flex flex-col-reverse items-center lg:flex-row lg:gap-[60px] gap-8"
    >
      <img src="@images/Personal.png" alt="Personal" />

      <div class="flex flex-col items-center lg:w-[530px]">
        <Sparkles />
        <div class="flex flex-col text-center gap-6">
          <div class="flex flex-col gap-4">
            <h2
              class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
            >
              Personal AI Assistant
            </h2>
            <p class="lg:text-2xl text-[22px] font-medium px-10">
              Need a break? Let AI do the chatting
            </p>
          </div>
          <p class="lg:text-[26px] text-xl font-light px-4 lg:px-0">
            AI assistant automates responses, manages conversations, and handles
            requests, keeping things personal. Whether you're online or offline,
            you're always connected and boosting sales. And it never gets tired!
          </p>
        </div>
      </div>
    </div>

    <!-- AR Masks -->
    <div
      class="flex flex-col items-center lg:flex-row lg:h-[600px] lg:gap-[60px] gap-8"
    >
      <div class="flex flex-col items-center lg:w-[530px]">
        <Masks />
        <div class="flex flex-col text-center gap-6">
          <div class="flex flex-col gap-4">
            <h2
              class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
            >
              AR Masks & Deepfake
            </h2>
            <p class="lg:text-2xl text-[22px] font-medium px-10 leading-tight">
              Want to keep your identity under wraps? We've got you covered
            </p>
          </div>
          <p class="lg:text-[26px] text-xl font-light">
            AR masks and deepfake tech let you easily control your appearance.
            Go fully anonymous or add some mystery, hiding your identity while
            creatively connecting with your fans.
          </p>
        </div>
      </div>
      <img src="@images/Masks.png" alt="Masks" />
    </div>

    <!-- tutup tke content -->
  </div>
</template>
