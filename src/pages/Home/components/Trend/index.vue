<script setup lang="ts">
import { TitleHome } from '../../shared/components';
import { Rate } from '../../../../shared/components';

</script>

<template>
  <div>
    <TitleHome title="What's In Trend" />

    <div class="flex flex-row gap-x-5">
      <div v-for="index in 3" :key="index" class="flex flex-row p-[30px] rounded-[15px] bg-[#fef5f5]">
        <div class="max-w-[240px] h-[336px] rounded-[15px] overflow-hidden mr-[30px]">
          <img src="src/assets/images/book/28.jpg" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col justify-center w-[280px] pr-3">
          <h3 class="text-[20px] overflow-hidden font-bold cursor-pointer hover:text-[#f4402f]">
            House of Sky and Breath
          </h3>
          <Rate />

          <div class="text-[#999999] hover:text-[#f4402f] font-medium cursor-pointer text-xs py-3">Emesto Wade</div>
          <div class="mb-8 text-[#ababab] text-base font-normal">Cupiditate voluptatem earum iure nam laudantium. Saepe dolorem ea occaecati eius.</div>
          <div class="text-2xl font-semibold text-[#f4402f]">$439.83</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
