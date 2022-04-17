<script setup lang="ts">
import { ref } from 'vue'

import {
  BuildingIcon,
  HandleIcon,
  PixelIcon,
  FormulaIcon,
  ConfigIcon,
  TypeScriptIcon,
  VueEChartsIcon
} from './icons/index'

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
  },
  {
    path: 'https://github.com/Cheng-DX/config',
    name: '配置文件',
    icon: ConfigIcon
  },
  {
    path: 'https://github.com/Cheng-DX/js-practice',
    name: 'JavaScript But TypeScript',
    icon: TypeScriptIcon
  },
  {
    path: 'https://github.com/Cheng-DX/my-vue-echarts',
    name: 'Vue ECharts',
    icon: VueEChartsIcon
  }
])
</script>

<template>
  <div hp-100 flex-center flex-col>
    <building-icon h-200px />
    <span text-2em color-white>建设中</span>
    <div flex-center mt-20px>
      <project-item v-for="p in projects" :path="p.path" :title="p.name">
        <component :is="p.icon" m-2px />
      </project-item>
    </div>
    <a href="https://github.com/Cheng-DX">
      <git-hub-icon w-20px h-20px mt-10px />
    </a>
  </div>
</template>
