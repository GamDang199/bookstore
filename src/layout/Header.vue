<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Logo } from '../icons';

const router = useRouter();
const handleShowCart = () => {
  router.push({ name: 'CartBuyer' });
};
</script>

<template>
  <header>
    <div class="bg-[#3b2525] py-2">
      <div class="container mx-auto flex justify-between text-white font-medium">
        <div>
          <span class="pr-3">Find a Book Store</span>
          <i class="fa-solid fa-phone text-[#cc570e]"></i>
          <span class="pl-5">+ 0342135660</span>
        </div>
        <div class="flex gap-x-3 pt-1">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
    <div class="border-0 border-solid border-b border-[#c2c2c2] py-5">
      <div class="container mx-auto px-[100px] flex justify-between">
        <div class="flex items-center justify-center">
          <Logo />
        </div>

        <input
          type="text"
          class="w-[600px] rounded-[30px] bg-[#c6c6c6] border-none py-3 px-5 focus:outline-none"
          placeholder="Search..."
        />

        <div class="text-2xl flex gap-x-14 pt-3 text-[#cc570e]">
          <span @click="handleShowCart" class="cursor-pointer hover:text-[#993f15]"
            ><i class="fa-solid fa-cart-shopping"></i
          ></span>
          <span class="cursor-pointer hover:text-[#993f15]"><i class="fa-solid fa-user"></i></span>
        </div>
      </div>
    </div>
    <div class="flex justify-center item-center gap-x-16 font-extrabold text-lg py-5">
      <router-link to="/" class="text-black hover:text-[#e35f1e]">Home</router-link>
      <router-link to="/book" class="text-black hover:text-[#e35f1e]">Book</router-link>
      <router-link to="/author" class="text-black hover:text-[#e35f1e]">Authors</router-link>
      <router-link to="/blog" class="text-black hover:text-[#e35f1e]">Blog</router-link>
      <router-link to="/manage-book" class="text-black hover:text-[#e35f1e]">Manage Book</router-link>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
header {
  font-family: 'Sora', sans-serif;
}
</style>
