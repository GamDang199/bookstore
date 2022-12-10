<script setup lang="ts"></script>

<template>
  <div class="news w-full h-[620px] my-20 relative">
    <div class="news-item absolute bottom-0 left-[18%] w-[28%] h-[75%] rounded-t-2xl bg-slate-100">
      <a-carousel class="w-full h-full" autoplay>
        <div v-for="index in 3" class="w-full h-full p-10 text-center">
          <div class="flex flex-col items-center">
            <h3 class="text-base font-semibold text-[#999999]">What people saying!</h3>
            <div class="w-[100px] h-[1px] bg-red-500 my-4"></div>
          </div>
          <div class="flex flex-col items-center font-semibold text-xl leading-10">
            "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an
            email after to books arrived to ask about the author."
          </div>
          <div class="py-10">
            JOEL M/<span class="text-[#999999]">NEW YORK</span>
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
.news {
  font-family: 'Sora', sans-serif;
  background-image: url('src/assets/images/bg2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.news-item {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.ant-carousel :deep(.slick-slider) {
  height: 100%;
}

.ant-carousel :deep(.slick-dots li) {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #dedede !important;
}

.ant-carousel :deep(.slick-dots li) button {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #dedede !important;
}

.ant-carousel :deep(.slick-dots li.slick-active) {
  width: 20px;
  background: #f4402f !important;
  border-radius: 20px;
}

.ant-carousel :deep(.slick-dots li.slick-active) button{
  width: 16px;
  background: #f4402f !important;
}
</style>
