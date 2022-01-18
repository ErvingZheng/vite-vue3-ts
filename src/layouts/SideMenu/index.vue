<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const route = useRoute()
const defaultActive: string = route.path
const store = useStore()
const isCollapse = computed(() => store.state.app.isCollapse)

const onSelect = (index: string): void => {
  router.push({ path: index })
}
</script>

<template>
  <el-aside :width="isCollapse ? 'auto' : '200px'">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :default-active="defaultActive"
      text-color="#fff"
      :collapse="isCollapse"
      @select="onSelect"
      :collapse-transition="false"
    >
      <el-menu-item index="/dashboard">
        <el-icon><svg-icon name="dashboard" /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/icon">
        <el-icon><svg-icon name="component" /></el-icon>
        <span>图标</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-menu {
  min-height: 100%;
}
.el-icon svg {
  fill: #fff;
}
.el-menu-item.is-active .el-icon svg {
  fill: #ffd04b;
}
</style>
