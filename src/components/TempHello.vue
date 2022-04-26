<script setup lang="ts">
import { shallowRef } from 'vue'
import { BuildingIcon } from './icons/index'
import ProjectItem from './ProjectItem.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import { useProjects } from '@/use/useProjects'
const { projects } = useProjects()
</script>

<template>
  <div hp-100 flex-center flex-col>
    <building-icon h-200px />
    <span text-2em color-white>建设中</span>
    <div flex-center mt-20px>
      <project-item v-for="p in projects" :key="p.path" :path="p.path" :title="p.name">
        <component :is="shallowRef(p.icon)" m-2px />
      </project-item>
    </div>
    <a href="https://github.com/Cheng-DX">
      <git-hub-icon w-20px h-20px mt-10px />
    </a>
  </div>
</template>
