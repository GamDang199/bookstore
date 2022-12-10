<script setup lang="ts">
import { Rate } from '../../../../../shared/components';
</script>

<template>
  <div class="flex flex-row w-full items-center">
    <div class="h-[180px] rounded-xl overflow-hidden">
      <img src="src/assets/images/deals/34.jpg" alt="img" class="w-full h-full object-cover" />
    </div>
    <div class="px-5">
      <h4 class="text-xl font-bold cursor-pointer hover:text-[#f4402f]">The Book of Five Rings</h4>

      <Rate />

      <div class="cursor-pointer hover:text-[#f4402f] py-2">Georgia Ramirez</div>
      <div class="text-2xl font-semibold text-[#f4402f]">$439.83</div>
    </div>
  </div>
</template>

<style scoped></style>
