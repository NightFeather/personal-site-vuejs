<template>
<ul class="card-wall">
  <li v-for="repo in repos">
    <card v-bind:repo="repo">
    </card>
  </li>
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

  line-height: 1.2em;
}
</style>
