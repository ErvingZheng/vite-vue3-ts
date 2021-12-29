<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
