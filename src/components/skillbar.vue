<template>
  <div class="skillbar" :title="skillbar.desc">
    <div class="lengend">
      <p>{{ skillbar.name }}</p>
    </div>
    <div class="gauge" :data-progress="skillbar.progress">
    <div class="inner" :style="{ width: skillbar.progress }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skillbar',
  props: [ 'skillbar' ]
}
</script>

<style lang="scss" scoped>
.skillbar {

  display: flex;
  height: 2em;
  width: 50vw;
  margin: 5px 0px;

  * { height: 100%; }

  .lengend {
    position: relative;
    width: 20%;
    text-align: center;
    border-radius: 3px 0px 0px 3px;

    p {
      height: 1em;
      margin: 0;
      padding: 0.5em 0;
      color: #eee;
    }

  }
  .gauge  {
    position: relative;
    width: 80%;
    border-radius: 0px 3px 3px 0px;
    background-color: rgba(175,175,175,0.3);

    &::after {
      position: absolute;
      content: attr(data-progress);
      top: 0.5em;
      right: 0.2em;
    }

    .inner {
      height: 100%;
      width: 0%;
    }

  }

  &:nth-child(odd) {
    & > .lengend        { background-color: #34699a; }
    & > .gauge > .inner { background-color: #408ab4; }
  }

  &:nth-child(even) {
    & > .lengend        { background-color: #643579; }
    & > .gauge > .inner { background-color: #bb99cd; }
  }

}
</style>
