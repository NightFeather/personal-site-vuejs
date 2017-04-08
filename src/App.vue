<template>
  <div id="app">
    <app-content></app-content>
  </div>
</template>

<script>
import Content from './components/content.vue'

export default {
  name: 'app',
  components: {
    'app-content': Content
  }
}
</script>

<style>

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  height: 100%;
}
</style>
