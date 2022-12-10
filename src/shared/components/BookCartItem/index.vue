<script setup lang="ts">
import { useRouter } from 'vue-router';
import Rate from '../Rate/index.vue';
const ICON = [
  { name: 'fa-regular fa-heart' },
  { name: 'fa-regular fa-eye' },
  { name: 'fa fa-shopping-cart' },
];

const router = useRouter();

const showBookDetail = () => {
  router.push({name: 'BookDetail'})
}
</script>

<template>
  <div class="w-[300px] px-5 border-0 border-r border-solid border-[#dbdbdb]" @click="showBookDetail">
    <div class="cart-img w-full h-[360px] rounded-2xl overflow-hidden relative">
      <img src="src/assets/images/book/1.jpg" alt="" class="w-full h-full object-cover" />
      <div class="cart-icon absolute right-2 bottom-1 z-30 flex flex-col opacity-0">
        <button
          v-for="(item, index) in ICON"
          class="hover:bg-[#f4402f] rounded-[50%] px-[10px] py-[7px] border-0 my-1"
          :key="index"
        >
          <i :class="item.name"></i>
        </button>
      </div>
    </div>
    <div class="py-5 px-2.5">
      <h4 class="text-xl font-bold cursor-pointer hover:text-[#f4402f]">The Book of Five Rings</h4>

      <Rate />
      
      <div class="cursor-pointer hover:text-[#f4402f] py-2">Georgia Ramirez</div>
      <div class="text-2xl font-semibold text-[#f4402f]">$439.83</div>
    </div>
  </div>
</template>

<style scoped>
.cart-icon{
  transition: opacity .5s ease-in-out;
}

.cart-img:hover .cart-icon {
  opacity: 1;
}
</style>
