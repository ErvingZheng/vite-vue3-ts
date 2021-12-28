<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../../store'

const store = useStore()

const isCollapse = computed(() => store.state.app.isCollapse)
</script>

<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>图标</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-menu {
  min-height: 100%;
}
</style>
