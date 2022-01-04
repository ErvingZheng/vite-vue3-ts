<script setup lang="ts">
import { computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useStore } from '@/store'

const store = useStore()

const isCollapse = computed(() => store.state.app.isCollapse)

const toggleCollapse = (): void => {
  store.dispatch('app/toggleCollapse')
}
</script>

<template>
  <el-header>
    <div class="header__content">
      <div @click="toggleCollapse">
        <expand class="side-menu__btn" v-if="isCollapse" />
        <fold class="side-menu__btn" v-else />
      </div>
    </div>
  </el-header>
</template>

<style scoped>
.el-header {
  border-bottom: 1px solid var(--el-border-color-base);
}
.header__content {
  height: 100%;
  display: flex;
  align-items: center;
}
.side-menu__btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
