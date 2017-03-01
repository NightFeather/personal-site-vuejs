<template>
  <article id="greeting" class="region">
    <section class="avatar">
      <img src="https://avatars3.githubusercontent.com/u/4570441" />
    </section>
    <section class="detail">
      <article>
        <section>
          <ul>
            <li>你好</li>
            <li>我是 Nightfeather</li>
          </ul>
        </section>
      </article>
    </section>
  </article>
</template>

<script>
export default {
  name: 'content-greeting'
}
</script>

<style lang="scss">
#greeting {
  display: flex;
  justify-content: center;
  align-items: center;

  .avatar {
    width: 25vw;
    img {
      max-width: 15vw;
      border-radius: 5px;
    }
  }

  .detail {
    width: 40vw;
    text-align: left;
    ul {
      list-style: none;
      padding: 0;
    }
  }
}
</style>
