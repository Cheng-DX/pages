import { type Component, shallowRef } from 'vue'
import {
  ConfigIcon,
  FormulaIcon,
  HandleIcon,
  PixelIcon,
  TypeScriptIcon,
  VueEChartsIcon,
} from '../components/icons'

interface Project {
  path: string
  name: string
  repo: string
  icon: Component
}
export function useProjects() {
  const projects = shallowRef<Project[]>([
    {
      path: 'handle',
      repo: 'handle',
      name: '汉兜',
      icon: HandleIcon,
    },
    {
      path: 'pixel-box',
      repo: 'pixel-box',
      name: '像素盒子',
      icon: PixelIcon,
    },
    {
      path: 'formula-editor',
      repo: 'formula-editor',
      name: '公式编辑器',
      icon: FormulaIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/config',
      repo: 'config',
      name: '配置文件',
      icon: ConfigIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/js-practice',
      repo: 'js-practice',
      name: 'JavaScript But TypeScript',
      icon: TypeScriptIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/my-vue-echarts',
      repo: 'my-vue-echarts',
      name: 'Vue ECharts',
      icon: VueEChartsIcon,
    },
  ])
  return {
    projects,
  }
}
