<script setup lang="ts">
import { Button as AButton, Modal as AModal, Modal } from 'ant-design-vue';
import { ref } from 'vue';
import { createVNode } from 'vue';


const showConfirm = () => {
    Modal.confirm({
        title: () => 'Bạn có chắc muốn xoá',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      });
}
</script>

<template>
  
    <a-button @click="showConfirm" class="!rounded-[4px] !bg-red-500 text-white hover:!text-white">Delete</a-button>
</template>

<style scoped></style>
