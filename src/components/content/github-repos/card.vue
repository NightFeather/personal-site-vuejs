<template>
<li class="card">
    <div class="content">
      <a target="_blank" :href="repo.link" :title="repo.name">
        <div class="title">{{repo.name | truncate(28)}}</div>
      </a>
      <div class="desc">{{repo.desc}}</div>
      <div class="updated_at">Last Modified: {{repo.updated_at}}</div>
    </div>
</li>
</template>

<script>
import StringHelper from '@/mixins/string-helper.js'
export default {
  name: 'card',
  props: ['repo'],
  mixins: [ StringHelper ]
}
</script>

<style lang='scss'>
.card {
  margin: 5px;
  padding: 0.3em;
  width: 15em;
  box-sizing: border-box;

  background-color: #eee;
  border-radius: 2px;
  box-shadow: 2px 2px 6px black;

  font-size: 0.8em;
  text-align: left;

  .content {
    .title {
      color: black;
      font-size: 1.1em;
    }
    .desc {
      min-height: 6em;
      font-size: 0.85em;
    }
    .updated_at {
      font-size: 0.7em;
    }
  }
}
</style>
