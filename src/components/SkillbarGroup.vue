<template>
  <article class="skillbar-group" :class="skillgroup.category" >
    <header class="group-title" >{{ skillgroup.category | capitalize }}</header>
    <section>
      <skillbar v-for=" skillbar in skillgroup.entries " v-bind:skillbar="skillbar" ></skillbar>
    </section>
  </article>
</template>

<script>
  import StringHelper from '@/mixins/string-helper.js'
  import Skillbar from './Skillbar'

  export default {
    name: 'skillbar-group',
    mixins: [ StringHelper ],
    props: ['skillgroup'],
    components: {
      Skillbar
    }
  }
</script>

<style lang='scss' scoped>
  .skillbar-group {
    font-size: 15px;
    margin: 10px 0;
    text-align: left;
  }
</style>