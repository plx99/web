<template>
  <div id="app">
    <Home /> <!-- 将 Home.vue 直接嵌套到 App.vue -->
  </div>
</template>

<script >
import Home from './views/Home.vue' // 确保路径正确

export default {
  components: {
    Home
  }
}
</script>

<style>
</style>
