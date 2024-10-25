<template>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>用户列表</span>
          <el-button type="primary" icon="CirclePlus" 
          @click="onAddItem"
          round>添加</el-button>
        </div>
      </template>
      
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="state" label="状态" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default="scope">
              <el-button type="success" size="small">修改</el-button>
              <el-button type="danger" size="small"
                @click.prevent="deleteRow(scope.$index)">
                删除
              </el-button>
            </template>
        </el-table-column>
        </el-table>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
  },
])
const now = new Date()

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
  })
}
</script>

<style>
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:10px;
}
.box-card{
  width: 100%;
  height: 100vh;
}
</style>
  