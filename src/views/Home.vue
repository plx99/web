<template>
  <el-container class="layout-container-demo" >
    <el-aside width="200px">
      <el-scrollbar>
        <div class="mb-2 logo">公寓管理平台</div>

        <el-menu :default-openeds="['1', '6']"
        
        :router="true"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>权限管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">管理员权限</el-menu-item>
              <el-menu-item index="/Per/User"><el-icon><House /></el-icon>普通用户权限</el-menu-item>
              <el-menu-item index="/login">登录页面</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting /></el-icon>房源管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">区域管理</el-menu-item>
              <el-menu-item index="2-2">楼栋管理</el-menu-item>
              <el-menu-item index="2-3">楼层管理</el-menu-item>
              <el-menu-item index="/house/Room">房间管理</el-menu-item>
              <el-menu-item index="2-5">房型管理</el-menu-item>
              <el-menu-item index="2-6">资产管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>租客管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">管理1</el-menu-item>
              <el-menu-item index="3-2">管理2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>合约管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">管理1</el-menu-item>
              <el-menu-item index="4-2">管理2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <el-icon><setting /></el-icon>设备管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">管理1</el-menu-item>
              <el-menu-item index="5-2">管理2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="6">
            <template #title>
              <el-icon><setting /></el-icon>财务管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">管理1</el-menu-item>
              <el-menu-item index="6-2">管理2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container >
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main class="el-main">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import router from '@/router';


const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>

.logo{
  height: 60px;
  color: black;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
}
.layout-container-demo{
  height: 100%;
}

.layout-container-demo .el-menu-item-group{
  background-color: var(--el-color-primary-light-7) ;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  box-shadow: var(--el-box-shadow-light);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background-color: var(--el-color-primary-light-7) ;
}
.layout-container-demo .el-menu {
  border-right: none;
  background-color: var(--el-color-primary-light-7) ;
}
.layout-container-demo .el-main {
  padding: 0;
  margin: 10px 0px;
  box-shadow: var(--el-box-shadow-light);
  border-radius: 20px;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
