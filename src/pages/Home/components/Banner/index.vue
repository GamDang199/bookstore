<script setup lang="ts"></script>

<template>
<div class="w-full h-[500px]">
  <a-carousel class="w-full h-full" autoplay>
    <div class="w-full h-full bg-[#f0f0f0]">
      <img src="src/assets/images/banner5.jpg" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="w-full h-full bg-[#f0f0f0]">
      <img src="src/assets/images/banner1.jpg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="w-full h-full bg-[#f0f0f0]">
      <img src="src/assets/images/banner2.jpg" alt="" class="w-full h-full object-cover" />
    </div>
  </a-carousel>
</div>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  background: #364d79;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
