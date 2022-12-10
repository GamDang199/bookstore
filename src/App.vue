<script setup lang="ts">
import { DeleteBook, CreateBook } from './components/book/components';
import { Header, Footer } from './layout';
const handleShowModal = () => {
  console.log(123);
};
</script>

<template>
  <Header />
  <div class="bg-[#f0f0f0]">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped></style>
