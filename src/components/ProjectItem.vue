<script setup lang="ts">
import { computed } from 'vue'

const basePath = 'https://cheng-dx.github.io/'
const props = defineProps<{
  path: string
}>()

const finalPath = computed(() =>
  props.path.startsWith('http') ? props.path : `${basePath}${props.path}`,
)
</script>

<template>
  <a :href="finalPath" flex-center ml-1>
    <slot />
  </a>
</template>
