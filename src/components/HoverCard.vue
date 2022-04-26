<script setup lang="ts">
import { ref, watch } from 'vue'
import type { CloneInfo } from '@/use/repo/types'

const props = defineProps<{
  x: number
  y: number
  cloneInfo: CloneInfo | undefined
}>()

let timer: number | undefined
const debouncedPosition = ref({ x: 0, y: 0 })

const show = ref(false)
const opacity = ref(0)

watch(props, () => {
  updatePosition()
}, { immediate: true })

function updatePosition() {
  clearTimeout(timer)
  opacity.value = 0
  timer = setTimeout(() => {
    debouncedPosition.value = {
      x: props.x,
      y: props.y,
    }
    opacity.value = 1
  }, 200)
}

</script>

<template>
  <div
    h-200px w-500px bg-white position-fixed top-20px :style="{
      top: `${debouncedPosition.y - 250}px`,
      left: `${debouncedPosition.x - 250}px`,
      opacity,
      transition: `opacity 300ms ease-in-out,
      top 1s ease-in-out,
      left 1s ease-in-out`,
    }"
  >
    <div v-for="item in cloneInfo?.clones" :key="item.timestamp">
      <strong>{{ item.count }}</strong>
      <span>{{ item.timestamp }}</span>
      <span>{{ item.uniques }}</span>
    </div>
  </div>
</template>

