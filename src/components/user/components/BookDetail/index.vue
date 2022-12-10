<script setup lang="ts">
import { reactive, ref } from '@vue/reactivity';
import { Button as AButton, Modal as AModal } from 'ant-design-vue';

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
    images: []
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
        visible.value= false;
        confirmLoading.value = false;
    }, 1000)
}
</script>

<template>
 Book Detail
</template>

<style scoped>

</style>
