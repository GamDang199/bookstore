<script setup lang="ts">
import { BookCartItem } from '../../../../shared/components';
import { TitleHome } from '../../shared/components';
</script>

<template>
  
  <TitleHome title="Bestselling books"/>
  <div class="py-7 flex flex-row justify-center items-center border-0 border-y border-solid border-[#dbdbdb]">
    <div v-for="index in 5" :key="index">
      <BookCartItem />
    </div>
  </div>
</template>

<style scoped></style>
