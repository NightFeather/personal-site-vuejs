<template>
<ul class="card-wall">
  <card v-for="repo in repos" v-bind:repo="repo">
  </card>
</ul>
</template>

<script>
import Card from './card.vue'

export default {
  name: 'card-wall',
  props: ['repos'],
  components: { Card }
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
