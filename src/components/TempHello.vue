<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'
import { BuildingIcon } from './icons/index'
import ProjectItem from './ProjectItem.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import HoverCard from './HoverCard.vue'
import { useProjects } from '@/use/useProjects'
import type { CloneInfo } from '@/use/repo/types'
import { useCloneInfo } from '@/use/repo/useRepoInfo'

const { projects } = useProjects()
const cloneInfo = ref<CloneInfo>()

let timer: number | undefined
function fetchRepoInfo(repo: string) {
  const token = ''
  clearTimeout(timer)
  timer = setTimeout(async () => {
    cloneInfo.value = await useCloneInfo(repo, token)
  }, 500)
}

const show = ref(false)
const { x, y } = useMouse()

</script>

<template>
  <div hp-100 flex-center flex-col>
    <building-icon h-200px />
    <span text-2em color-white>Projects</span>
    <div flex-center mt-20px>
      <project-item
        v-for="p in projects"
        :key="p.path"
        :path="p.path"
        :title="p.name"
      >
        <component :is="p.icon" m-2px @mouseenter="fetchRepoInfo(p.repo)" />
      </project-item>
    </div>
    <a href="https://github.com/Cheng-DX">
      <git-hub-icon w-20px h-20px mt-10px />
    </a>
  </div>
</template>
