<script setup>
import Cards from "@components/contents/Cards.vue";
import IconSupport from "@images/IconSupport.svg";
import IconProtect from "@images/IconProtect.svg";
import IconSparkles from "@images/IconSparkles.svg";
import Bitcoin from "@images/Bitcoin.svg";
import Migration from "@images/Migration.svg";
import Content from "@images/Content.svg";
import Chart from "@images/Chart.svg";
import Payments from "@images/Payments.svg";
import Sparkles from "@images/Sparkles.svg";
import Masks from "@images/Masks.svg";
</script>

<template>
  <div class="flex flex-col items-center justify-center py-10">
    <img src="@images/Privacy.png" alt="Privacy" />
    <div class="my-10">
      <button
        class="bg-Lavender text-white lg:text-[29px] text-2xl font-semibold rounded-full lg:px-[59px] lg:py-[23px] px-[40px] py-[17px]"
      >
        GET STARTED
      </button>
    </div>

    <div
      class="rounded-[70px] lg:px-[50px] lg:py-[62px] px-[24px] py-[35px] flex flex-col lg:gap-[140px] gap-[80px] bg-white w-full lg:max-w-[1401px]"
    >
      <!-- Why Gentlyx -->
      <div class="flex flex-col items-center justify-center">
        <div class="text-center space-y-4 mb-6">
          <h1 class="text-Raspberry font-extrabold lg:text-7xl text-[40px]">
            Why Gentlyx?
          </h1>
          <p class="lg:text-3xl text-[22px] font-medium">
            It's Freedom, Fun, and Full Control
          </p>
        </div>
        <div class="w-full text-center">
          <p class="lg:text-2xl text-xl font-light">
            Forget the limitations of other platforms.
            <a class="text-Persian"
              >Gentlyx gives you the freedom to explore, create, and connect
              without boundaries</a
            >
          </p>
        </div>
        <div
          class="flex lg:flex-row flex-col items-center justify-center mt-10 px-10 lg:space-x-6 space-y-4"
        >
          <Cards
            :svgIcon="IconSupport"
            title="24/7 Support"
            description="Help is always available when you need it"
          />
          <Cards
            :svgIcon="IconProtect"
            title="Safety & Protection"
            description="State-of-the-art privacy tools and data encryption"
          />
          <Cards
            :svgIcon="IconSparkles"
            title="Interactive Tools"
            description="A wide variety of tools to monetize your creativity"
          />
        </div>
      </div>

      <!-- Referral -->
      <div class="flex flex-col justify-center items-center gap-8">
        <div class="flex flex-col flex-1 text-center lg:gap-6">
          <div class="flex flex-col lg:gap-2">
            <h1
              class="text-Raspberry font-extrabold text-[40px] lg:text-7xl leading-tight"
            >
              Referral Program
            </h1>
            <p class="lg:text-3xl text-[22px] font-medium">
              Spread the Word and Reap the Rewards
            </p>
          </div>
          <div class="max-w-[800px]">
            <p
              class="lg:text-[26px] text-xl font-light overflow-hidden text-clip"
            >
              Join Gentlyx's Referral Program and turn your network into a
              steady stream of earnings!
            </p>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row items-center justify-start lg:space-x-16"
        >
          <img
            src="@images/Referral.png"
            alt="Referral"
            class="hidden lg:block"
          />
          <img
            src="@images/Referral2.png"
            alt="Referral"
            class="block lg:hidden"
          />

          <div class="flex flex-col items-center justify-center text-center">
            <div class="space-y-2">
              <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
                Boost Your Income
              </h2>
              <p class="lg:text-2xl text-xl">
                For the first year,
                <a class="font-bold">receive 10% of the earnings</a> from each
                creator you refer to Gentlyx
              </p>
            </div>
            <div class="space-y-2 my-6">
              <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
                Grow Your Network
              </h2>
              <p class="lg:text-2xl text-xl">
                Earn
                <a class="font-bold">an additional 2.5%</a> from the earnings of
                creators referred by your referres
              </p>
            </div>
            <div class="space-y-2">
              <h2 class="text-Persian lg:text-4xl text-[28px] font-bold">
                Easy to Share
              </h2>
              <p class="lg:text-2xl text-xl">
                Use your unique referral link to invite friends and fellow
                creators effortlessly
              </p>
            </div>
          </div>
        </div>
        <button
          class="bg-Lavender text-white text-xl font-semibold rounded-full px-[42px] py-[17px]"
        >
          GET STARTED
        </button>
      </div>

      <!-- Take Control -->
      <div class="flex flex-col gap-20">
        <div
          class="flex flex-col flex-1 text-center gap-4 lg:gap-6 max-w-[1171px]"
        >
          <div class="flex flex-col gap-2">
            <h1
              class="text-Raspberry font-extrabold lg:text-7xl text-[40px] leading-tight"
            >
              Take Control of Your Content
            </h1>
            <p class="lg:text-3xl text-2xl font-medium">
              Everything You Need to Grow and Earn
            </p>
          </div>
          <div class="">
            <p class="lg:text-[26px] text-xl font-light">
              From content management to earnings, Gentlyx puts creators in
              control with powerful tools and features designed to boost your
              creativity and your wallet
            </p>
          </div>
        </div>
      </div>

      <!-- Endless Earning -->
      <div
        class="flex flex-col lg:flex-row gap-8 lg:gap-[60px] justify-center items-center"
      >
        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Bitcoin />
          <div class="flex flex-col gap-6 text-center">
            <div class="flex flex-col gap-4">
              <h2 class="text-Persian font-bold lg:text-4xl text-[28px]">
                Endless Earning Opportunities
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Monetize your content, Your Way
              </p>
            </div>
            <p class="lg:text-2xl text-xl font-light">
              Gentlyx lets you monetize your passion with flexible options.
              Create subscription tiers, fulfill requests, and design games, all
              while controlling your earnings and interactions. More choices,
              more ways to profit
            </p>
            <button
              class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-3 hidden lg:block"
            >
              GET STARTED
            </button>
          </div>
        </div>

        <img src="@images/Endless.png" alt="Endless" class="flex-1" />

        <button
          class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-3 lg:hidden"
        >
          START EARNING
        </button>
      </div>

      <!-- Smart Content -->
      <div
        class="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <img src="@images/Smart.png" alt="Smart" />
        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Migration />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2 class="text-Persian font-bold lg:text-4xl text-[28px]">
                Smart Content Migration
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Moving your content to Gently is a breeze
              </p>
            </div>
            <p class="lg:text-2xl text-xl font-light">
              Easily transfer your content to Gentlyx in just a few clicks. It's
              fast. smooth, and nothing gets left behind. Ready to get started?
            </p>
          </div>
        </div>
      </div>

      <!-- Content Manager -->
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Content />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
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

      <!-- Detailed Stats -->
      <div
        class="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <img src="@images/Detailed.png" alt="Detailed" />

        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Chart />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
              >
                Detailed Stats & Analytics
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Know how it works. Get smart with your strategy
              </p>
            </div>
            <p class="lg:text-[26px] text-xl font-light">
              Analyze your content performance with detailed insights and
              analytics. Get a clear view of what works and where to improve,
              along with custom tips to boost engagement and earnings. Your
              success is just a click away!
            </p>
          </div>
        </div>
      </div>

      <!-- Easy Payments -->
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <div class="flex flex-col flex-1 items-center lg:gap-8 max-w-[530px]">
          <Payments />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
              >
                Easy Payments & Transparency
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Getting paid has never been this easy
              </p>
            </div>
            <p class="lg:text-[26px] text-xl font-light">
              Gentlyх provides clear payments in fiat or crypto. Track your
              earnings, view detailed breakdowns, and know when and how you'll
              get paid. No more confusing payout structures —everything is
              crystal clear!
            </p>
          </div>
          <button
            class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-4 lg:block hidden"
          >
            START EARNING
          </button>
        </div>
        <img src="@images/Easy.png" alt="Payments" class="" />
        <button
          class="bg-Lavender text-white text-xl font-semibold rounded-full px-6 py-4 lg:hidden block"
        >
          START EARNING
        </button>
      </div>

      <!-- Personal AI -->
      <div
        class="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <img src="@images/Personal.png" alt="Personal" />

        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Sparkles />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
              >
                Personal AI Assistant
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
                Need a break? Let AI do the chatting
              </p>
            </div>
            <p class="lg:text-[26px] text-xl font-light">
              AI assistant automates responses, manages conversations, and
              handles requests, keeping things personal. Whether you're online
              or offline, you're always connected and boosting sales. And it
              never gets tired!
            </p>
          </div>
        </div>
      </div>

      <!-- AR Masks -->
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px]"
      >
        <div class="flex flex-col flex-1 items-center max-w-[530px]">
          <Masks />
          <div class="flex flex-col text-center gap-6">
            <div class="flex flex-col gap-4">
              <h2
                class="text-Persian font-bold lg:text-[44px] text-[28px] leading-tight"
              >
                AR Masks & Deepfake
              </h2>
              <p class="lg:text-2xl text-[22px] font-medium">
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

      <div
        class="flex flex-col justify-center items-center lg:gap-[60px] gap-[42px] max-w-[1312px]"
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
