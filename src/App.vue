<template>
  <div id="app">
    <app-nav></app-nav>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Content from './components/content.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    'app-nav': Nav,
    'app-content': Content,
    'app-footer': Footer
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
  font-size: 20px;
  height: 100%;
}
</style>
