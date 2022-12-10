<script setup lang="ts">
import { category } from './type';
import { BookCartItem } from '../../shared/components';
</script>

<template>
  <div class="bg-white">
    <div class="book w-full h-[180px] bg-[#e6e6e6]">
      <h3 class="text-[50px] container mx-auto flex items-center w-full h-full px-16 font-semibold">
        Activity Books
      </h3>
    </div>
    <div class="container mx-auto my-16 flex flex-row">
      <div class="w-[300px] h-[600px] rounded-xl border border-solid border-[#e6e6e6] mr-3">
        <div
          class="border-0 border-b border-solid border-[#e6e6e6] py-5 px-7 flex items-center font-semibold text-2xl"
        >
          Genre
        </div>
        <div class="py-5 px-5 flex flex-col gap-y-3">
          <div v-for="(cate, index) in category" :key="index" class="">
            <label
              class="customCheckbox px-5 text-[15px] font-medium text-[#444444] cursor-pointer hover:text-[#f4402f]"
            >
              <input type="radio" :id="cate.value" name="cate" />
              <span class="checkmark"></span>
              <span class="label px-3">{{ cate.label }}</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-3 gap-4 h-[600px] overflow-y-scroll">
        <div v-for="index in 9" :key="index" class="border-0 border-b border-solid border-[#999999]">
          <BookCartItem />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
.book {
  font-family: 'Sora', sans-serif;
}
.customCheckbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.label {
  line-height: 1;
  margin-top: 2px;
}

.checkmark {
  border: 1px solid #444444;
  position: relative;
  border-radius: 2px;
  margin-right: 8px;
  width: 15px;
  height: 15px;
  z-index: 1;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
  left: 5px;
  top: -3px;
  width: 5px;
  height: 12px;
  border: 5px solid #fff;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  z-index: 3;
}

.checkmark::before {
  content: '';
  position: absolute;
  display: none;
  width: 5px;
  height: 7px;
  background: #fff;
  z-index: 2;
  top: -1px;
  right: -2px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked ~ .checkmark{
  background-color: #000;
}

input[type="radio"]:checked ~ .checkmark:after{
  display: block;
}

input:checked  .checkmark::before{
  display: block;
}
</style>
