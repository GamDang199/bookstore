<script setup lang="ts">
import { reactive, ref } from 'vue';
import { size } from 'lodash';

export interface IUser {
  username: string;
  password: string;
}
const isShowIcon = ref(true);
const typePassword = ref('password');
const infoLogin = reactive<IUser>({
  username: '',
  password: '',
});

const handleShowIconPassword = () => {
  isShowIcon.value = !isShowIcon.value;
  if (isShowIcon.value) {
    typePassword.value = 'password';
  } else {
    typePassword.value = 'text';
  }
};

const errorLogin = reactive<any>({
  erUsername: null,
  erPassword: null,
});

const handleValidateUsername = () => {
  if (infoLogin.username === null || infoLogin.username === '') {
    errorLogin.erUsername = 'Không được để trống trường này';
  } else {
    errorLogin.erUsername = '';
  }
};

const handleValidatePassword = () => {
  if (infoLogin.password === null || infoLogin.password === '') {
    errorLogin.erPassword = 'Không được để trống trường này';
  } else {
    errorLogin.erPassword = '';
  }
};

const login = (e: any) => {
  console.log(infoLogin);
};
</script>

<template>
  <div class="flex justify-center items-center w-[100vw] h-[100vh]">
    <form class="w-[750px] h-[400px] bg-slate-400 rounded-[3px]" @submit.prevent="login()">
      <h1 class="text-center">Đăng nhập</h1>
      <div class="flex justify-between mt-5 shrink-0">
        <label for="username" class="mr-5 text-[24px] font-normal w-[100px]">Username</label>
        <input
          id="username"
          type="text"
          v-model="infoLogin.username"
          class="w-full outline-none border-none px-4 py-3 rounded-[2px]"
          @blur="handleValidateUsername()"
        />
      </div>
      <div
        v-if="size(errorLogin.erUsername) && !infoLogin.username"
        class="text-red-600 text-lg mt-2 mb-7 pl-[120px]"
      >
        {{ errorLogin.erUsername }}
      </div>

      <div class="flex justify-between mt-5 shrink-0 relative">
        <label for="password" class="mr-5 text-[24px] font-normal w-[100px]">Password</label>
        <input
          id="password"
          :type="typePassword"
          v-model="infoLogin.password"
          class="w-full outline-none border-none px-4 py-3 rounded-[2px]"
          @blur="handleValidatePassword()"
        />
        <span @click="handleShowIconPassword" class="absolute top-3 right-3"
          ><i v-if="isShowIcon" class="fa-regular fa-eye-slash"></i> <i v-else class="fa-regular fa-eye"></i
        ></span>
      </div>
      <div
        v-if="size(errorLogin.erPassword) && !infoLogin.password"
        class="text-red-600 text-lg mt-2 mb-7 pl-[120px]"
      >
        {{ errorLogin.erPassword }}
      </div>

      <div class="flex justify-center items-center mt-9">
        <button
          class="px-5 py-3 rounded-md bg-blue-800 text-white border-none text-2xl font-semibold"
          @click="login()"
        >
          Đăng nhập
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

input:focus {
  border: 1px solid grey;
}
</style>
