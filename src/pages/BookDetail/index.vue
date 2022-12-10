<script setup lang="ts">
import { ref } from 'vue';
import { Rate, Review } from '../../shared/components';

const TYPE_ACTION = {
    DESCRIPTION: 'description',
    REVIEW: 'review',
}

const typeActive = ref<string>(TYPE_ACTION.DESCRIPTION);
const amount = ref<number>(0);

const decrease = () => {
  if (amount.value >= 1) {
    amount.value -= 1;
    return;
  }
};

const increase = () => {
  amount.value += 1;
};

const changeType = (type: string) => {
    if(typeActive.value != type) {
        typeActive.value = type;
    }
}
</script>

<template>
  <div class="book-detail bg-white mt-3 py-5 border-0 border-t border-solid border-[#e6e6e6]">
    <div class="container mx-auto h-[615px] overflow-y-scroll px-36">
      <div class="flex flex-row gap-x-7">
        <div class="rounded-2xl border border-[#e6e6e6] border-solid p-7 w-[520px]">
          <img src="src/assets/images/book/29.jpg" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="rounded-2xl border border-[#e6e6e6] border-solid p-7 flex-1">
          <h2 class="font-bold text-3xl">The Girl and the Last Sleepover</h2>
          <div class="flex flex-row gap-x-5 border-0 border-b border-solid border-[#e6e6e6] pb-5">
            <div class="pr-10 border-0 border-r border-solid border-[#e6e8e6] font-medium">
              Auhtor: <span class="cursor-pointer hover:text-[#f4402f]">Suzanne Casey</span>
            </div>
            <div class="pr-10 border-0 border-r border-solid border-[#e6e8e6] font-medium">
              <Rate />
            </div>
            <div class="pr-10 border-0 border-r border-solid border-[#e6e8e6] font-medium">SKU: INT280</div>
          </div>
          <div class="text-2xl text-[#f4402f] font-semibold py-5">$125.00-$450.00</div>
          <div class="text-[#999999] text-base py-5">
            Nihil quo dolorum debitis velit qui et inventore. Delectus aut occaecati sunt mollitia illo. Odio
            velit mollitia ipsam explicabo nisi quisquam dolore non. Rem omnis consectetur et ea.
          </div>

          <div>Select Format: <span>Paperback</span></div>
          <div class="flex flex-row gap-x-3 items-center py-3">
            <button
              class="border-1 border-solid border-[#e6e6e6] hover:border-[#F65D4E] outline-0 rounded px-3 py-1"
            >
              AUDIO
            </button>
            <button
              class="border-1 border-solid border-[#e6e6e6] hover:border-[#F65D4E] outline-0 rounded px-3 py-1"
            >
              EBOOK
            </button>
            <button
              class="border-1 border-solid border-[#e6e6e6] hover:border-[#F65D4E] outline-0 rounded px-3 py-1"
            >
              HARDCOVER
            </button>
            <button
              class="border-1 border-solid border-[#e6e6e6] hover:border-[#F65D4E] outline-0 rounded px-3 py-1"
            >
              PAPERBACK
            </button>
            <div class="border-0 cursor-pointer hover:text-[#f65d4e]"><u>Clear</u></div>
          </div>
          <div
            class="text-2xl text-[#f4402f] font-semibold py-5 border-0 border-b border-[#e6e6e6] border-solid"
          >
            $125.00
          </div>

          <div class="text-xs py-3 text-[#999999]">Quantity</div>
          <div class="flex flex-row gap-x-5">
            <div class="flex flex-row rounded-full border border-solid border-[#e6e6e6] w-[180px] py-3">
              <div class="flex-1 flex justify-center items-center cursor-pointer" @click="decrease">
                <i class="fa-sharp fa-solid fa-minus"></i>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  v-model="amount"
                  name=""
                  id=""
                  class="border-0 outline-none w-[100px] text-center"
                />
              </div>
              <div class="flex-1 flex justify-center items-center cursor-pointer" @click="increase">
                <i class="fa-sharp fa-solid fa-plus"></i>
              </div>
            </div>
            <div
              class="text-xl text-white font-semibold bg-[#f65d4e] w-[200px] py-3 flex flex-row justify-center items-center rounded-full"
            >
              <span class="px-2"><i class="fa-solid fa-cart-shopping"></i></span>
              Add to cart
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        <Review />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap');
.book-detail {
  font-family: 'Sora', sans-serif;
}
</style>
