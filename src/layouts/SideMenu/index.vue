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
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="defaultActive"
    text-color="#fff"
    :collapse="isCollapse"
    @select="onSelect"
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
</template>

<style scoped>
.el-menu {
  width: 200px;
  min-height: 100%;
}
.el-menu--collapse {
  width: 64px;
}
.el-icon svg {
  fill: #fff;
}
.el-menu-item.is-active .el-icon svg {
  fill: #ffd04b;
}
</style>
