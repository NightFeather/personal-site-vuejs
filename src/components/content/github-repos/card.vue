<template>
<li class="card" v-bind:style="{ 'background-image': 'url(' + repo.image + ')' }">
  <div class="content">
    <a target="_blank" :href="repo.link" :title="repo.name">
      <div class="title"><span>{{repo.name | truncate(28)}}</span></div>
    </a>
    <div v-if="repo.fork" class="fork">
      <span>forked from: <a :href="repo.parent.link">{{ repo.parent.name }}</a></span>
    </div>
    <div class="desc"><p>{{repo.desc}}</p></div>
    <div class="topics" v-if="repo.topics">
      <ul>
        <li class="topic" v-for="topic in repo.topics">
          <a :href="'https://github.com/search?q=topic:' + topic + '&type=Repositories'">{{topic}}</a>
        </li>
      </ul>
    </div>
    <div class="updated_at">
      <span>Last Push: {{repo.updated_at | xmlTime}}</span>
    </div>
  </div>
</li>
</template>

<script>
import StringHelper from '@/mixins/string-helper.js'
export default {
  name: 'github-card',
  props: ['repo'],
  mixins: [ StringHelper ]
}
</script>

<style lang='scss'>
.card {
  position: relative;
  margin: 5px;
  width: 15em;
  box-sizing: padding-box;

  display: flex;
  flex-flow: column;
  align-items: stretch;

  border-radius: 2px;
  box-shadow: 2px 2px 6px black;

  background-color: #eee;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  font-size: 0.8em;
  text-align: left;

  p { margin: 0; padding: 0; }

  .content {
    display: flex;
    flex-flow: column;
    align-items: stretch;

    flex: 1;
    padding: 0.3em 0.5em;

    background-color: rgba(240,240,240,0.9);
    background-clip: border-box;

    overflow: hidden;

    & > * { flex: 0; }

    .title {
      color: black;
      font-size: 1.1em;
      line-height: 1.3em;
      align-self: flex-start;
    }
    .fork {
      line-height: 1em;
      font-size: 0.6em;
      &:before {
        content: '\21B3 ';
      }
    }
    .desc {
      flex: 1;
      min-height: 6em;
      font-size: 0.85em;
      line-height: 1.1em;
      padding: 5px 0;
    }
    .topics {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 0.85em;

        .topic {
          margin: 0 3px;
          padding: 3px;
          border-radius: 3px;
          line-height: 1em;

          background-color: rgba(50,100,200,0.5);
          border: solid 1px rgb(50,100,200);
        }
      }
    }
    .updated_at {
      font-size: 0.7em;
    }
  }
}
</style>
