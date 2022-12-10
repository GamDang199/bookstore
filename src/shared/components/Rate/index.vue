<script setup lang="ts"></script>

<template>
  <div class="flex flex-row gap-x-2">
    <div v-for="index in 5" :key="index">
      <span><i class="fa-solid fa-star text-[#fa8c17]"></i></span>
    </div>
    <span class="font-semibold">5</span>
  </div>
</template>

<style scoped></style>
