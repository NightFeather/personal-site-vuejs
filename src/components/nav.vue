<template>
	<div id="nav">
    <div id='title'>
      喵
    </div>
    <div class="link-list">
      <ul>
        <li><div><a href="#intro">Intro</a></div></li>
        <li><div><a href="#ability">Ability</a></div></li>
        <li><div><a href="#contact">Contact</a></div></li>
      </ul>
    </div>
    <div class='spacing'></div>
	</div>
</template>

<script>
export default {
  name: 'app-nav'
}
</script>

<style lang="scss">
  #nav {
    position: fixed;
    background-color: #222;
    height: 5vh;
    width: 100%;
    font-size: 2vh;
    z-index: 1;

    * {
      display: inline-block;
      vertical-align: middle;
    }

    #title {
      font-size: 1.5em;
      color: #aaa;
      width: 10%;
      min-width: 150px;
    }

    .link-list {
      list-style: none;
      width: 60%;
      height: 100%;

      ul {
        margin: 0px auto;
        padding: 0px;

        li {
          background-color: #555;
          width: 10em;

          a {
            line-height: 2.5em;
            width: 100%;
            color: #bbb;
            text-decoration: none;
          }
        }
      }
    }

    .spacing { width: 10%; }
  }
</style>
