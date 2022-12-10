<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Rate, Review, DataTable, CreateBook, DeleteBook, EditBook } from '../../shared/components';
import type { IDataSource } from '../../shared/components/DataTable/types';
import { Button } from 'ant-design-vue';

interface IProps {
  dataSource: IDataSource;
}

const dataSource = reactive<IDataSource>({
  loading: false,
  noDataText: 'Không có sách nào',
  pagination: {
    totalPage: 0,
    page: 1,
  },
  data: [{}, {}, {}, {}, {}],
  columns: [
    {
      title: 'STT',
      width: '5%',
      scopedSlots: 'stt',
      className: 'align-top',
    },
    {
      title: 'Tên sách',
      width: '15%',
      scopedSlots: 'nameBook',
      className: 'align-top',
    },
    {
      title: 'Số lượng',
      width: '5%',
      scopedSlots: 'amount',
      className: 'align-top',
    },
    {
      title: 'Giá',
      width: '7%',
      scopedSlots: 'price',
      className: 'align-top',
    },
    {
      title: 'Mô tả',
      scopedSlots: 'note',
      className: 'align-top',
    },
    {
      title: 'Thao tác',
      width: '15%',
      dataIndex: 'action',
      scopedSlots: 'action',
      className: 'align-top',
    },
  ],
});

const visible = reactive<any>({
    createBookModal: false,
    deleteBookModal: false,
    editBookModal: false,
})


const handleShowCreateBookModal = () => {
    visible.createBookModal = true;
}

const handleHideCreateBookModal = () => {
    visible.createBookModal = false;
}

const handleLoadPage = (current: any) => {
  dataSource.pagination.page = current.page;
};

const handleHideDeleteBookModal = () => {
    visible.deleteBookModal = false;
}

const handleShowDeleteBookModal = () => {
    visible.deleteBookModal = true;
}

const handleHideEditBookModal = () => {
    visible.editBookModal = false;
}

const handleShowEditModal = () => {
    visible.editBookModal = true;
}
</script>

<template>
  <div class="manage-book w-full h-[669px] py-5">
    <div class="container mx-auto flex flex-row justify-center items-center py-5">
      <h3 class="w-[600px] px-5 text-2xl font-semibold">Quản lý sách</h3>
      <div class="w-full">
        <input type="text" class="border border-solid border-[#ababab] py-1.5 px-3 w-[450px] rounded-full mr-3"/>
        <Button class="!rounded-md !py-[5px] !font-medium">Tìm kiếm</Button>
      </div>
      <div>
        <Button type="primary" @click="handleShowCreateBookModal">Thêm sách</Button>
      </div>
    </div>
    <div class="container mx-auto">
      <DataTable
        :dataSource="dataSource"
        @table-change="handleLoadPage"
        class="overflow-y-scroll"
      >
        <template #action>
            <div class="flex flex-row gap-x-3 justify-center">
                <Button class="!bg-yellow-500 !text-white !rounded" @click="handleShowEditModal">Detail</Button>
                <Button type="danger" @click="handleShowDeleteBookModal">Delete</Button>
            </div>
        </template>
    </DataTable>
    </div>
  </div>
  <CreateBook :visible="visible.createBookModal" @hide-modal="handleHideCreateBookModal"/>
  <DeleteBook :visible="visible.deleteBookModal" @hide-modal="handleHideDeleteBookModal"/>
  <EditBook :visible="visible.editBookModal" @hide-modal="handleHideEditBookModal"/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap');
.manage-book {
  font-family: 'Sora', sans-serif;
}
</style>
