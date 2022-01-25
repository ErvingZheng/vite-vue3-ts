<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'

const content = ref<string>('')
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <!-- https://www.tiny.cloud/docs/integrations/vue/ -->
        <editor
          v-model="content"
          api-key="ybvztfk7cbl6q8wx418yx07rvql33mg69dy7361ll7hd219z"
          :init="{
            height: 600,
            menubar: false,
            plugins: ['paste wordcount'],
            toolbar: 'undo redo | fontsizeselect | bold',
            fontsize_formats: '12px 14px',
            content_style: 'body { font-size:14px }',
            resize: false,
          }"
        />
      </el-col>
      <el-col :span="12">
        {{ content }}
      </el-col>
    </el-row>
  </div>
</template>
