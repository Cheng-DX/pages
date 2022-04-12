<script setup lang="ts">
import { ref } from 'vue'
import BuildingIcon from './icons/BuildingIcon.vue'
import HandleIcon from './icons/HandleIcon.vue'
import PixelIcon from './icons/PixelIcon.vue'
import ProjectItem from './ProjectItem.vue'

const projects = ref([
  {
    path: 'handle',
    icon: HandleIcon
  },
  {
    path: 'pixel-box',
    icon: PixelIcon
  }
])
</script>

<template>
  <div class="hello-root">
    <building-icon />
    <span class="content">建设中</span>
    <div class="projects">
      <project-item v-for="p in projects" :path="p.path">
        <component :is="p.icon" class="project-icon" />
      </project-item>
    </div>
  </div>
</template>

<style scoped>
.hello-root {
  background-color: #0dad52;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  color: #fff;
  font-size: 2em;
}
.projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.project-icon {
  width: 30px;
  height: 30px;
  margin-inline: 5px;
}
</style>
