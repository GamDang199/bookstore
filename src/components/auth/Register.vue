<script setup lang="ts">
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
import { size } from 'lodash';
import { useRouter } from 'vue-router';
import {userService} from '../../service';
import {successNotify, errorNotify} from '../../shared';
export interface IUser {
  username: string;
  password: string;
  email: string;
  phone: string;
  imageUrl: string;
  role: string;
  address: string;
}

const routers = useRouter();
const isShowIcon = ref(true);
const typePassword = ref('password');

const infoRegister = reactive<IUser>({
  username: '',
  password: '',
  email: '',
  phone: '',
  imageUrl: '',
  role: 'ADMIN',
  address: '',
});

const erRegister = reactive<any>({
  erUsername: '',
  erPassword: '',
  erEmail: '',
  erRegexEmail: '',
  erPhoneNumber: '',
  erRegexPhone: '',
  erAddress: '',
});

const handleShowIconPassword = () => {
  isShowIcon.value = !isShowIcon.value;
  if (isShowIcon.value) {
    typePassword.value = 'password';
  } else {
    typePassword.value = 'text';
  }
};

const handleValidateUsername = () => {
  if (infoRegister.username === null || infoRegister.username === '') {
    erRegister.erUsername = 'Không được để trống trường này';
  } else {
    erRegister.erUsername = '';
  }
};

const handleValidatePassword = () => {
  if (infoRegister.password === null || infoRegister.password === '') {
    erRegister.erPassword = 'Không được để trống trường này';
  } else {
    erRegister.erPassword = '';
  }
};

const handleValidateEmail = () => {
  if (infoRegister.email === null || infoRegister.email === '') {
    erRegister.erEmail = 'Không được để trống trường này';
    erRegister.erRegexEmail = '';
    return;
  }

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(infoRegister.email)) {
    erRegister.erEmail = '';
    erRegister.erRegexEmail = 'Email không đúng định dạng';
    return;
  }
  erRegister.erEmail = '';
  erRegister.erRegexEmail = '';
};

const handleValidatePhoneNumber = () => {
  if (infoRegister.phone === null || infoRegister.phone === '') {
    erRegister.erPhoneNumber = 'Không được để trống trường này';
    erRegister.erRegexPhone = '';
    return;
  }

  const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!regexPhone.test(infoRegister.phone)) {
    erRegister.erPhoneNumber = '';
    erRegister.erRegexPhone = 'Số điện thoại không đúng định dạng';
    return;
  }
  
    erRegister.erPhoneNumber = '';
  
};

const handleValidateAddress = () => {
  if (infoRegister.address === null || infoRegister.address === '') {
    erRegister.erAddress = 'Không được để trống trường này';
  } else {
    erRegister.erAddress = '';
  }
};

const submit = async() => {
  try {
    const res = await userService.signup(infoRegister);
    if(res.status === 200) {
      successNotify("Tạo tài khoản thành công");
      routers.push({ name: 'Login'});
    }
  } catch (error) {
    errorNotify("Create account failed!");
  }
  
  
}
</script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <form class="w-[900px] bg-[#9e9c9b] rounded-[3px]" @submit.prevent>
      <h1 class="text-center">Đăng ký</h1>
      <div class="flex justify-between mt-9 shrink-0">
        <label for="username" class="mr-5 text-[24px] font-normal w-[300px]">Username</label>
        <input
          id="username"
          v-model="infoRegister.username"
          type="text"
          class="w-full outline-none border-none px-4 py-[14px] rounded-[2px]"
          @blur="handleValidateUsername()"
        />
      </div>
      <div
        v-if="size(erRegister.erUsername) && !infoRegister.username"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erUsername }}
      </div>

      <div class="flex justify-between mt-9 shrink-0 relative">
        <label for="password" class="mr-5 text-[24px] font-normal w-[300px]">Password</label>
        <input
          id="password"
          v-model="infoRegister.password"
          :type="typePassword"
          @blur="handleValidatePassword()"
          class="w-full outline-none border-none px-4 py-[14px] rounded-[2px]"
        />
        <span @click="handleShowIconPassword" class="absolute top-3 right-3"
          ><i v-if="isShowIcon" class="fa-regular fa-eye-slash"></i> <i v-else class="fa-regular fa-eye"></i
        ></span>
      </div>
      <div
        v-if="size(erRegister.erPassword) && !infoRegister.password"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erPassword }}
      </div>

      <div class="flex justify-between mt-9 shrink-0">
        <label for="email" class="mr-5 text-[24px] font-normal w-[300px]">Email</label>
        <input
          id="email"
          type="text"
          v-model="infoRegister.email"
          @blur="handleValidateEmail()"
          class="w-full outline-none border-none px-4 py-[14px] rounded-[2px]"
        />
      </div>
      <div
        v-if="size(erRegister.erEmail) && !infoRegister.email"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
       {{ erRegister.erEmail }}
      </div>
      <div
        v-else-if="size(erRegister.erRegexEmail) || !infoRegister.email"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erRegexEmail }}
      </div>

      <div class="flex justify-between mt-9 shrink-0">
        <label for="phone" class="mr-5 text-[24px] font-normal w-[300px]">Phone Number</label>
        <input
          id="phone"
          type="text"
          v-model="infoRegister.phone"
          @blur="handleValidatePhoneNumber()"
          class="w-full outline-none border-none px-4 py-[14px] rounded-[2px]"
        />
      </div>
      <div
        v-if="size(erRegister.erPhoneNumber) && !infoRegister.phone"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erPhoneNumber }}
      </div>
      <div
        v-else-if="size(erRegister.erRegexPhone) || !infoRegister.phone"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erRegexPhone }}
      </div>

      <div class="flex justify-between mt-9 shrink-0">
        <label for="address" class="mr-5 text-[24px] font-normal w-[300px]">Address</label>
        <input
          id="address"
          type="text"
          v-model="infoRegister.address"
          @blur="handleValidateAddress()"
          class="w-full outline-none border-none px-4 py-[14px] rounded-[2px]"
        />
      </div>
      <div
        v-if="size(erRegister.erAddress) && !infoRegister.address"
        class="text-red-600 text-lg mt-2 mb-7 pl-[240px]"
      >
        {{ erRegister.erAddress }}
      </div>

      <div class="flex justify-center items-center my-9">
        <button class="px-5 py-3 rounded-md bg-blue-800 text-white border-none text-2xl font-semibold" @click="submit">
          Đăng ký
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
