<script setup lang="ts">
import { reactive, ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { size } from 'lodash';
import {
  Button as AButton,
  Modal as AModal,
  DatePicker as ADatePicker,
  Space as ASpace,
} from 'ant-design-vue';

export interface IBook {
  title: string;
  author: string;
  type: string;
  pageAmount: number;
  dateRelease: any;
  images: string[];
}

const visible = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);
const book = reactive<IBook>({
  title: '',
  author: '',
  type: '',
  pageAmount: 0,
  dateRelease: '',
  images: [],
});

const erBook = reactive<any>({
  erTitle: false,
  erAuthor: false,
  erType: false,
  erDateRelease: false,
});

onMounted(() => {
  console.log(book);
});

watch(book, (val) => {
  console.log(val);
});

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  visible.value = true;
};

const handleCancel = () => {
  confirmLoading.value = true;

  setTimeout(() => {
    visible.value = false;
    confirmLoading.value = false;
  }, 1000);
};

const handleValidate = (type: string) => {

  switch (type) {
    case 'title':console.log(size(book.title));
      if (size(book.title) || !book.title) {
        erBook.erTitle = true;
      } else {
        erBook.erTitle = false;
      }
      break;
    case 'author':
      if (size(book.author) || !book.author) {
        erBook.erAuthor = true;
      } else {
        erBook.erAuthor = false;
      }
      break;
    case 'type':
      if (size(book.type) || !book.type) {
        erBook.erType = true;
      } else {
        erBook.erType = false;
      }
      break;
    // case 'pageAmount':
    //   if (book.pageAmount) {
    //     erBook.erPageAmount = true;
    //   } else {
    //     erBook.erPageAmount = false;
    //   }
    //   break;
    case 'dateRelease':
      if (size(book.dateRelease) || !book.dateRelease) {
        erBook.erDateRelease = true;
      } else {
        erBook.erDateRelease = false;
      }
      break;
    default:
      break;
  }
};

const resetData = () => {
  
}
</script>

<template>
  <a-button @click="showModal">Create Book</a-button>

  <a-modal
    v-model:visible="visible"
    @ok="handleOk"
    width="600px"
    title="Th??m s??ch m???i"
    :confirm-loading="confirmLoading"
  >
    <div class="flex flex-col">
      <div class="flex justify-start items-center mt-5">
        <label for="title" class="w-[150px]">Ti??u ?????</label>
        <input
          type="text"
          id="title"
          v-model="book.title"
          @blur="handleValidate('title')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erTitle && !book.title" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        B???n kh??ng ???????c ????? tr???ng tr?????ng n??y
      </div>

      <div v-if="erBook.erTitle"></div>
      <div class="flex justify-start items-center mt-5">
        <label for="author" class="w-[150px]">T??c gi???</label>
        <input
          type="text"
          id="author"
          v-model="book.author"
          @blur="handleValidate('author')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erAuthor && !book.author" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        B???n kh??ng ???????c ????? tr???ng tr?????ng n??y
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="type" class="w-[150px]">Th??? lo???i</label>
        <input
          type="text"
          id="type"
          v-model="book.type"
          @blur="handleValidate('type')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erType && !book.type" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        B???n kh??ng ???????c ????? tr???ng tr?????ng n??y
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="pageAMount" class="w-[150px]">S??? trang</label>
        <input
          type="text"
          id="pageAmount"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
          v-model="book.pageAmount"
        />
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="dateRelease" class="w-[150px]">Ng??y ph??t h??nh</label>
        <a-space direction="vertical" id="dateRelease">
          <a-date-picker v-model="book.dateRelease" @blur="handleValidate('dateRelease')" />
        </a-space>
        <!-- <input
          type="text"
          id="status"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        /> -->
      </div>
      <div class="flex justify-start items-center mt-5">
        <label for="note" class="w-[150px]">Ghi ch??</label>
        <textarea
          type="text"
          id="note"
          v-model="book.note"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div class="flex justify-start items-center mt-5">
        <label for="image" class="w-[150px]">???nh b??a</label>
        <input type="file" :value="book.images" />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end items-center gap-5">
        <button class="bg-blue-600 border-none outline-none px-4 py-2 text-base rounded">Save</button>
        <button class="bg-red-600 border-none outline-none px-4 py-2 text-base rounded" @click="handleCancel">
          Cancel
        </button>
      </div>
    </template>
  </a-modal>
</template>

<style scoped></style>
