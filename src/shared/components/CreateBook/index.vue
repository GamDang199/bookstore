<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { onMounted, watch } from '@vue/runtime-core';
import { size } from 'lodash';
import {
  Button,
  Input,
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
  note: string;
}

interface IProps {
  visible: boolean;
}

const props = defineProps<IProps>();

const { visible } = toRefs(props);

const emits = defineEmits(['hideModal']);
const confirmLoading = ref<boolean>(false);
const book = reactive<IBook>({
  title: '',
  author: '',
  type: '',
  pageAmount: 0,
  dateRelease: '',
  images: [],
  note: '',
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
    emits('hideModal');
    resetData();
    confirmLoading.value = false;
  }, 1000);
};

const handleValidate = (type: string) => {
  switch (type) {
    case 'title':
      console.log(size(book.title));
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
  book.title = '';
  book.author = '';
  book.type = '';
  book.pageAmount = 0;
  book.dateRelease = '';
  book.images = [];
  book.note = '';

  erBook.erTitle = false;
  erBook.erAuthor = false;
  erBook.erType = false;
  erBook.erDateRelease = false;
};
</script>

<template>
  <!-- <a-button @click="showModal">Create Book</a-button> -->

  <a-modal
    v-model:visible="visible"
    wrapClassName="newStyle"
    width="600px"
    :closable="false"
    :confirm-loading="confirmLoading"
    @cancel="handleCancel"
  >
    <div class="flex flex-row justify-start items-center relative border-0 border-b border-solid border-[#ababab] pb-3">
      <div class="text-xl font-medium">Thêm sách mới</div>
      <div class="absolute right-3 text-xl cursor-pointer hover:text-[#f4402f]" @click="handleCancel">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex justify-start items-center mt-5">
        <label for="title" class="w-[150px]">Tiêu đề</label>
        <input
          type="text"
          id="title"
          v-model="book.title"
          @blur="handleValidate('title')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erTitle && !book.title" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        Bạn không được để trống trường này
      </div>

      <div v-if="erBook.erTitle"></div>
      <div class="flex justify-start items-center mt-5">
        <label for="author" class="w-[150px]">Tác giả</label>
        <input
          type="text"
          id="author"
          v-model="book.author"
          @blur="handleValidate('author')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erAuthor && !book.author" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        Bạn không được để trống trường này
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="type" class="w-[150px]">Thể loại</label>
        <input
          type="text"
          id="type"
          v-model="book.type"
          @blur="handleValidate('type')"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div v-if="erBook.erType && !book.type" class="text-red-700 text-sm text-ellipsis ml-[120px]">
        Bạn không được để trống trường này
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="pageAMount" class="w-[150px]">Số trang</label>
        <input
          type="text"
          id="pageAmount"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
          v-model="book.pageAmount"
        />
      </div>

      <div class="flex justify-start items-center mt-5">
        <label for="dateRelease" class="w-[150px]">Ngày phát hành</label>
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
        <label for="note" class="w-[150px]">Ghi chú</label>
        <textarea
          type="text"
          id="note"
          v-model="book.note"
          class="w-full border-solid border-[1px] border-gray-400 focus:outline-none focus:border-[#5e5e5e] py-1 px-3"
        />
      </div>
      <div class="flex justify-start items-center mt-5">
        <label for="image" class="w-[150px]">Ảnh bìa</label>
        <input type="file" :value="book.images" />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end items-center gap-5">
        <Button class="!bg-blue-600 !border-none !outline-none text-base !rounded !text-white">Save</Button>
        <Button class="!bg-red-600 !border-none !outline-none text-base !rounded !text-white" @click="handleCancel">
          Cancel
        </Button>
      </div>
    </template>
  </a-modal>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap');
.newStyle {
  font-family: 'Sora', sans-serif;
}
</style>
