import { type Component, ref } from 'vue'
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
  icon: Component
}
export function useProjects() {
  const projects = ref<Project[]>([
    {
      path: 'handle',
      name: '汉兜',
      icon: HandleIcon,
    },
    {
      path: 'pixel-box',
      name: '像素盒子',
      icon: PixelIcon,
    },
    {
      path: 'formula-editor',
      name: '公式编辑器',
      icon: FormulaIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/config',
      name: '配置文件',
      icon: ConfigIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/js-practice',
      name: 'JavaScript But TypeScript',
      icon: TypeScriptIcon,
    },
    {
      path: 'https://github.com/Cheng-DX/my-vue-echarts',
      name: 'Vue ECharts',
      icon: VueEChartsIcon,
    },
  ])
  return {
    projects,
  }
}
