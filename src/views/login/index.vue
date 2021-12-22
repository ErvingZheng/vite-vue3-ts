<script setup lang="ts">
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const form = ref({
  user: '',
  password: '',
})
</script>

<template>
  <div class="form-wrapper">
    <el-form class="login-form">
      <el-form-item>
        <el-input
          v-model="form.user"
          :prefix-icon="User"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          :prefix-icon="Lock"
          type="password"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.form-wrapper {
  position: relative;
  height: 100%;
}
.login-form {
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%);
  width: 400px;
}
</style>
