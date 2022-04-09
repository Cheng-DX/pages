<script setup lang="ts">
import BuildingIcon from './icons/BuildingIcon.vue'
import HandleIcon from './icons/HandleIcon.vue'
</script>

<template>
  <div class="hello-root">
    <building-icon />
    <span class="content">还在建设中</span>
    <a href="https://cheng-dx.github.io/handle/" class="link">
      <handle-icon style="margin-top: 20px" />
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
.link {
  color: #fff;
  font-size: 1em;
  text-decoration: none;
}
</style>
