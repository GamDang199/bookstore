<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <div class="container mx-auto flex flex-row items-center justify-between gap-x-5 py-5 mt-5">
      <h1 class="w-[450px] text-4xl font-semibold">{{ props.title }}</h1>
      <div class="w-full bg-[#dbdbdb] h-[1px]"></div>
      <div
        class="rounded-[32px] text-white font-bold text-[15px] w-[160px] bg-[#F65D4E] flex justify-center items-center py-3.5 px-5 hover:bg-[#f4402f]"
      >
        View All <span class="pl-2"><i class="fa-solid fa-chevron-right"></i></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
