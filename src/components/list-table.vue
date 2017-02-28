<template>
<ul class="table">
  <li class="row header">
    <span class="column left">{{ header.left }}</span>
    <span class="column right">{{ header.right }}</span>
  </li>
  <li class="row item" v-for=" item in items "> 
    <a :href="item.left.href" class="column left">{{ item.left.name }}</a>
    <span class="column right">{{ item.right }}</span>
  </li>
</ul>
</template>

<script>
export default {
  name: 'list-table',
  props: ['header', 'items']
}
</script>

<style lang="scss">
.table {
  padding: 0;
  list-style: none;
  .row {
    display: flex;
    justify-content: center;
    margin: 10px 0px;

    &.header { border-bottom: solid 1px black; }

  }

  .column {
    text-align: center;
    &.left { width: 57%;}
    &.right { width: 37%; }
  }

}
</style>
