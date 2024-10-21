<script setup>
import Cards from "@components/contents/Cards.vue";
import IconSupport from "@images/IconSupport.svg";
import IconProtect from "@images/IconProtect.svg";
import IconSparkles from "@images/IconSparkles.svg";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <div
      class="flex flex-col flex-1 items-center justify-center text-center lg:gap-6 gap-4"
    >
      <div class="flex flex-col lg:gap-4 gap-2 lg:w-full w-[312px]">
        <h1 class="text-Raspberry font-extrabold lg:text-7xl text-[40px]">
          Why Gentlyx?
        </h1>
        <p class="lg:text-3xl text-[22px] font-medium">
          It's Freedom, Fun, and Full Control
        </p>
      </div>
      <div class="lg:w-[800px] px-6">
        <p class="lg:text-2xl text-xl font-light">
          Forget the limitations of other platforms.
          <a class="text-Persian"
            >Gentlyx gives you the freedom to explore, create, and connect
            without boundaries</a
          >
        </p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:gap-6 gap-4">
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
</template>
