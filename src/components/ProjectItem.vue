<script setup lang="ts">
import { computed } from 'vue'

const basePath = 'https://cheng-dx.github.io/'
const props = defineProps<{
  path: string
}>()

const finalPath = computed(() => {
  const path = props.path
  return path.startsWith('http') ? path : `${basePath}${path}`
})
</script>

<template>
  <a :href="finalPath">
    <slot />
  </a>
</template>
