<script setup lang="ts">
const basePath = 'https://cheng-dx.github.io/'
defineProps<{
  path: string
}>()
</script>

<template>
  <a :href="basePath + path">
    <slot />
  </a>
</template>
