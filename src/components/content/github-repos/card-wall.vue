<template>
<ul class="card-wall">
  <github-card v-for="repo in repos" v-bind:repo="repo">
  </github-card>
</ul>
</template>

<script>
import GitHubCard from './card.vue'

export default {
  name: 'github-card-wall',
  props: ['repos'],
  components: { 'github-card': GitHubCard }
}
</script>

<style lang="scss">
.card-wall {
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-flow: row wrap;
  align-items: stretch;

  line-height: 1.2em;
}
</style>
