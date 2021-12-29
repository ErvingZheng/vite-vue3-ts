<script setup lang="ts">
import SvgIcon from '../../components/SvgIcon/index.vue'
</script>

<template>
  <div style="display: flex">
    <div class="svg__wrapper">
      <svg-icon class="svg-icon" name="bug" />
    </div>
    <div class="svg__wrapper">
      <svg-icon class="svg-icon" name="example" />
    </div>
    <div class="svg__wrapper">
      <svg-icon class="svg-icon" name="component" />
    </div>
  </div>
</template>

<style scoped>
.svg__wrapper + .svg__wrapper {
  margin-left: 24px;
}
.svg-icon {
  width: 64px;
  height: 64px;
}
</style>
