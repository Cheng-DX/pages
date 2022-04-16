<script setup lang="ts">
import { ref } from 'vue'
import BuildingIcon from './icons/BuildingIcon.vue'
import HandleIcon from './icons/HandleIcon.vue'
import PixelIcon from './icons/PixelIcon.vue'
import FormulaIcon from './icons/FormulaIcon.vue'
import ProjectItem from './ProjectItem.vue'
import GitHubIcon from './icons/GitHubIcon.vue'

const projects = ref([
  {
    path: 'handle',
    name: '汉兜',
    icon: HandleIcon
  },
  {
    path: 'pixel-box',
    name: '像素盒子',
    icon: PixelIcon
  },
  {
    path: 'formula-editor',
    name: '公式编辑器',
    icon: FormulaIcon
  }
])
</script>

<template>
  <div class="hello-root">
    <building-icon />
    <span class="content">建设中</span>
    <div class="projects">
      <project-item v-for="p in projects" :path="p.path" :title="p.name">
        <component :is="p.icon" class="project-icon" />
      </project-item>
    </div>
    <a href="https://github.com/Cheng-DX">
      <git-hub-icon class="github-icon" />
    </a>
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
.github-icon {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
