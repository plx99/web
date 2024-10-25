<template>
    <div class="demo-collapse">
        <el-button type="primary" @click="addCollapse" style="margin-bottom: 20px">
            添加区域
        </el-button>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item
                v-for="(item, index) in collapseItems"
                :key="item.id"
                :title="`区域 ${index + 1}`"
                :name="String(index)"
            >
                <div class="room-manager">
                <el-button type="primary" @click="addRoom" style="margin-bottom: 20px">
                    添加房间
                </el-button>
                <el-row :gutter="20">
                    <el-col
                    v-for="(room, index) in rooms"
                    :key="room.id"
                    :xs="24"
                    :sm="12"
                    :md="8"
                    :lg="6"
                    >
                    <el-card class="box-card" >
                        <div slot="header" class="clearfix">
                        <span>房间号 {{ index + 1 }}</span>
                        <span style="float: right;">状态</span>
                        </div>
                        <div class="room-content">
                        <el-form :model="room" label-width="80px">
                            <el-form-item label="位置">
                            <el-input v-model="room.position" placeholder="请输入房间位置" />
                            </el-form-item>
                            <el-form-item label="面积">
                            <el-input
                                type="number"
                                v-model.number="room.area"
                                placeholder="请输入面积 (平方米)"
                            />
                            </el-form-item>
                            <el-form-item label="户型">
                            <el-input
                                type="number"
                                v-model="room.layout"
                                placeholder="请输入房间户型"
                            />
                            </el-form-item>
                        </el-form>
                        </div>
            
                        <div class="room-footer">
                            <el-button type="success">编辑</el-button>
                            <el-button type="danger" @click="removeRoom(index)" >
                            删除
                            </el-button>
                        </div>
                    </el-card>
                    </el-col>
                </el-row>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  // 定义初始区域和房间数据
    const collapseItems = ref([
    {
        id: Date.now(),
        position: '',
    }
    ]);
  // 定义初始房间数据
  const rooms = ref([
    {
      id: Date.now(),
      position: '',
      area: null,
      layout: '',
    },
  ]);
  
  // 添加房间
  const addRoom = () => {
    if (rooms.value.length >= 10) {
      ElMessage.warning('最多只能添加10个房间');
      return;
    }
    rooms.value.push({
      id: Date.now() + Math.random(),
      position: '',
      area: null,
      layout: '',
    });
  };
  
  // 删除房间
  const removeRoom = (index) => {
    rooms.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  .room-manager {
    padding: 20px;
  }
  
  .box-card {
    margin-bottom: 20px;
    background: linear-gradient(to bottom, #94ecc3, #FFFFFF);
  }
  
  .room-content {
    padding: 10px 0;
  }

  .room-footer{
    display: flex;
    justify-content: center;
  }
  </style>
  