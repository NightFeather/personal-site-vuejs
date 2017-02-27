<template>
  <div class="skillbar">
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

  width: 50vw;
  height: 2em;
  margin: 5px 0px;

  * { height: 100%; }

  .lengend {
    width: 20%;
    text-align: center;
    border-radius: 3px 0px 0px 3px;

    p {
      height: 1em;
      margin: 0;
      padding: 0.5em 0;
    }
  }
  .gauge  {
    position: relative;
    width: 80%;
    border-radius: 0px 3px 3px 0px;
    background-color: rgba(250,250,250,0.3);

    &::after {
      position: absolute;
      content: attr(data-progress);
      top: 0.5em;
      right: 0.2em;
    }

    .inner {
      height: 100%;
    }
  }

  &:nth-child(4n+0) > .lengend {background-color: #2e94b9; }
  &:nth-child(4n+1) > .lengend {background-color: #fffdc1; }
  &:nth-child(4n+2) > .lengend {background-color: #f0b775; }
  &:nth-child(4n+3) > .lengend {background-color: #fd5959; }

  &:nth-child(4n+0) > .gauge > .inner  {background-color: #0189ba; }
  &:nth-child(4n+1) > .gauge > .inner  {background-color: #f9f58b; }
  &:nth-child(4n+2) > .gauge > .inner  {background-color: #eca451; }
  &:nth-child(4n+3) > .gauge > .inner  {background-color: #fb3a3a; }
}
</style>
