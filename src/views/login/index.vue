<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'

const formRef = ref<InstanceType<typeof ElForm>>()
const form = reactive({
  user: 'admin',
  password: 'admin',
})
const rules = reactive({
  user: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

const router = useRouter()

const login = (): void => {
  // https://v3.cn.vuejs.org/guide/typescript-support.html#%E4%B8%BA%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B
  formRef.value?.validate((valid) => {
    if (!valid) return
    router.push({ path: '/dashboard' })
  })
}
</script>

<template>
  <div class="form-wrapper">
    <el-form ref="formRef" :model="form" :rules="rules" class="login-form">
      <el-form-item prop="user">
        <el-input
          v-model="form.user"
          :prefix-icon="User"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          :prefix-icon="Lock"
          type="password"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="login"
          >登录</el-button
        >
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
