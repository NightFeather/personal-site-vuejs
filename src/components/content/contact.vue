<template>
  <article id="contact" class="region">
    <header>找我嗎</header>
    <section>
      <ul class="contact-list" >
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'content-contact'
  }
</script>

<style lang='scss'>
  #contact {
    background-color: #55a;
    .contact-list {
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: violet;
        }
      }
    }
  }
</style>