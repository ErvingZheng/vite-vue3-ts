<script setup lang="ts">
import SideMenu from './SideMenu/index.vue'
import MainContainer from './MainContainer/index.vue'
import NavBar from './NavBar/index.vue'
</script>

<template>
  <el-container>
    <side-menu></side-menu>
    <el-container direction="vertical">
      <nav-bar></nav-bar>
      <main-container></main-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100%;
}
</style>
