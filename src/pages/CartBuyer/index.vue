<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { IDataSource } from '../../shared/components/DataTable/types';
import { DataTable } from '../../shared/components';
interface IProps {
  dataSource: IDataSource;
}

const dataSource = reactive<IDataSource>({
  loading: false,
  noDataText: 'Không có sản phẩm nào',
  pagination: {
    totalPage: 0,
    page: 1,
  },
  data: [{}, {}, {}, {}, {}],
  columns: [
    // {
    //   title: '',
    //   width: '5%',
    //   scopedSlots: 'checkbox',
    //   className: 'align-top',
    // },
    {
      title: 'Sản phẩm',
      width: '55%',
      scopedSlots: 'product',
      className: 'align-top',
    },
    {
      title: 'Đơn giá',
      width: '10%',
      scopedSlots: 'price',
      className: 'align-top',
    },
    {
      title: 'Số lượng',
      width: '5%',
      scopedSlots: 'amount',
      className: 'align-top',
    },
    {
      title: 'Số tiền',
      width: '10%',
      scopedSlots: 'totalPrice',
      className: 'align-top',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      scopedSlots: 'shopAction',
      className: 'align-top',
    },
  ],
});

const amount = ref<any>(0);

const rowSelection = ref({
  onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record: any, selected: boolean, selectedRows: any) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: boolean, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows);
  },
});

const handleLoadPage = (current: any) => {
  dataSource.pagination.page = current.page;
};

const deIncreaseBook = () => {
  if (amount.value >= 1) {
    amount.value -= 1;
  }
};

const increaseBook = () => {
  amount.value += 1;
};
</script>

<template>
  <div class="cart h-[669px]">
    <div class="container mx-auto !h-full">
      <div class="flex justify-end py-5 font-bold text-xl">Total price: 100.000đ</div>
      <DataTable :dataSource="dataSource" @table-change="handleLoadPage" :row-selection="rowSelection" class="overflow-y-scroll">
        <!-- <template #checkbox="{ record }">
          <div>
            <input type="radio" />
          </div>
        </template> -->
        <template #product>
          <div>
            <div class="w-[150px] h-[200px] rounded-md overflow-hidden shadow-2xl">
              <img src="src/assets/images/book/20.jpg" alt="" class="w-full h-full object-cover" />
            </div>
          </div>
        </template>
        <template #amount="{ record }">
          <div class="flex flex-row">
            <button
              @click="deIncreaseBook"
              class="border border-solid border-[#ababab] text-[#444444] font-medium text-xl px-[7px]"
            >
              -
            </button>
            <input
              type="text"
              v-model="amount"
              class="w-[50px] outline-0 border-0 border-y-[1px] border-solid border-[#ababab] text-center"
            />
            <button
              @click="increaseBook"
              class="border border-solid border-[#ababab] text-[#444444] font-medium"
            >
              +
            </button>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
.cart {
  font-family: 'Sora', sans-serif;
}
</style>
