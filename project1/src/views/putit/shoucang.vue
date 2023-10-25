<template>
    <div class="mmm">
        <h5 class="mb-2">我的收藏</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          
          <el-menu-item index="1" @click="$router.push('/tiezi')"> 
            <el-icon><icon-menu /></el-icon>
            <span>收藏帖子</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('/user')">
            <el-icon><document /></el-icon>
            <span>收藏用户</span>
          </el-menu-item>
        </el-menu>
    </div>
    <router-view/>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>

  <style scoped>
.mmm{
    position: fixed;
    left: 0;
    top:10%
}
  </style>
  