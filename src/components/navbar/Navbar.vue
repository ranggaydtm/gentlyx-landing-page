<script setup>
import IconBurger from "@images/IconBurger.svg";
import IconX from "@images/IconX.svg";
import { computed, ref } from "vue";

const navbarOpen = ref(false);

const menus = computed(() => [
  {
    id: 1,
    label: "Benefits",
    route: "/",
  },
  {
    id: 2,
    label: "Why Gently",
    route: "/why-gently",
  },
]);

const toggleNavbar = () => (navbarOpen.value = !navbarOpen.value);
</script>

<template>
  <div
    class="min-h-screen bg-white w-full flex flex-col justify-between duration-200 fixed lg:hidden"
    :class="navbarOpen ? '-translate-x-0 fixed' : '-translate-x-full'"
  >
    <div class="flex flex-col gap-6">
      <div class="flex justify-between px-6 items-center">
        <img src="@images/Logo-gently.png" alt="Logo Gentlyx" />
        <IconX @click="toggleNavbar" />
      </div>

      <div v-for="menu in menus" :key="menu.id" class="px-6 border-b py-4">
        <p class="text-Persian text-base font-semibold tracking-wider">
          {{ menu.label }}
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-end gap-2 px-4">
      <a href="#">
        <p class="text-Raspberry text-base font-semibold py-[14px]">I'M USER</p>
      </a>
      <button
        type="button"
        class="text-Raspberry text-base font-semibold bg-transparent border border-Raspberry focus:outline-none rounded-full w-full py-[14px]"
        href="#"
      >
        LOG IN
      </button>
      <button
        type="button"
        class="text-white text-base font-semibold bg-Persian focus:outline-none rounded-full w-full py-[14px]"
      >
        BECOME A CREATOR
      </button>
    </div>
  </div>

  <div
    class="flex items-center justify-center lg:w-[1400px] lg:mx-auto pt-[33px] w-full"
  >
    <div
      class="flex flex-row items-center justify-between lg:gap-[767px] w-full px-4"
    >
      <a href="#">
        <img src="@images/Logo-gently.png" alt="Logo Gentlyx" />
      </a>
      <div class="hidden lg:flex flex-row items-center gap-[18px]">
        <div class="px-4 py-3">
          <a href="#">
            <p class="text-Raspberry text-base font-semibold">I'M USER</p>
          </a>
        </div>
        <div class="flex flex-row gap-3">
          <button
            type="button"
            class="text-Raspberry text-base font-semibold bg-transparent border border-Raspberry focus:outline-none rounded-full px-5 py-2"
            href="#"
          >
            LOG IN
          </button>
          <button
            type="button"
            class="text-white text-base font-semibold bg-Persian focus:outline-none rounded-full px-5 py-2"
          >
            BECOME A CREATOR
          </button>
        </div>
      </div>
      <div class="lg:hidden">
        <IconBurger @click="toggleNavbar" />
      </div>
    </div>
  </div>
</template>
