<script setup lang="ts">
import { Button, Modal } from 'ant-design-vue';
import { ref, toRefs } from 'vue';
import { successNotify} from '../../';
interface IProps {
  visible: boolean;
}
const props = defineProps<IProps>();
const { visible } = toRefs(props);

const emits = defineEmits(['hideModal']);
const loading = ref<boolean>(false);

const handleCancel = () => {
  emits('hideModal');
};

const handleDelete = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    successNotify('Delete successfully?')
    emits('hideModal');
  }, 1000);
};
</script>

<template>
  <Modal v-model:visible="visible" width="600px" :closable="false" @cancel="handleCancel" :footer="false">
    <div class="text-xl font-medium py-3">Bạn có chắc muốn xoá</div>
    <div class="flex flex-row justify-end items-center gap-x-5">
      <Button :loading="loading" @click="handleDelete" class="!bg-red-600 !text-white !rounded">Có</Button>
      <Button @click="handleCancel" class="!bg-blue-900 !text-white !rounded">Không</Button>
    </div>
  </Modal>
</template>

<style scoped></style>
