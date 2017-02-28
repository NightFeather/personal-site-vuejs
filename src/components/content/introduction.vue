<template>
  <article id="intro" class="region">
    <header>關於我</header>
    <section>
      <pre>{{ this.content }}</pre>
    </section>
  </article>
</template>

<script>
import SelfIntro from '@/data/self-intro.txt'

export default {
  name: 'content-intro',
  data: function () {
    return {
      'content': SelfIntro
    }
  }
}
</script>

<style lang='scss'>
  #intro { background-color: #a55; }
</style>
