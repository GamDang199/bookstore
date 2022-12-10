<script setup lang="ts">
import { TitleHome, CartType2 } from '../../shared/components';
</script>

<template>
  <div>
    <TitleHome title="Deals Of The Week" />
    <div>
      <div class="container mx-auto flex flex-row h-[650px]">
        <div class="deal-left w-[65%] h-full rounded-2xl overflow-hidden flex justify-center items-center">
          <div class="img">
            <img src="src/assets/images/deals/img1.png" alt="img" />
          </div>
        </div>

        <div class="px-10 flex w-[36%] pt-5 flex-col justify-between items-center gap-y-5">
          <div v-for="index in 3" :key="index" class="w-full h-full border-0 border-b border-solid border-[#dbdbdb]">
            <CartType2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.deal-left {
  background: url('../../../../assets/images/deals/bg1.jpg') no-repeat;
  background-size: cover;
  background-color: aquamarine;
}

.deal-left:hover .img {
  animation-name: example;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
}

@keyframes example {
  0% {
    transform: translateX(15px);
  }
  10% {
    transform: translateX(-15px);
  }
  20% {
    transform: translateX(15px);
  }
  30% {
    transform: translateX(-15px);
  }
  40% {
    transform: translateX(15px);
  }
  50% {
    transform: translateX(-15px);
  }

  60% {
    transform: translateX(15px);
  }
  70% {
    transform: translateX(-15px);
  }

  80% {
    transform: translateX(15px);
  }
  90% {
    transform: translateX(-15px);
  }

  100% {
    transform: translateX(15px);
  }
}
</style>
