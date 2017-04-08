<template>
<ul class="card-wall">
  <li class="card" v-for="item in items" v-bind:repo="repo">
    <div>
    </div>
  </li>
</ul>
</template>

<script>
import Card from './card.vue'

export default {
  name: 'card-wall',
  props: ['items'],
  components: { Card }
}
</script>

<style lang="scss">
.card-wall {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;

}
</style>
