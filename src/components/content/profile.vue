<template>
  <article id="profile" class="region">
    <section class="avatar">
      <img src="https://avatars3.githubusercontent.com/u/4570441" />
    </section>
    <section class="detail">
      <article>
        <header class="name">Nightfeather</header>
        <section>
        </section>
      </article>
    </section>
  </article>
</template>

<script>
export default {
  name: 'content-profile'
}
</script>

<style lang="scss">
#profile {
  display: flex;
  justify-content: center;
  padding-top: 5vh !important;

  .avatar {
    width: 25vw;
    padding: 0 5vw 5vh 5vw;
    img {
      max-width: 15vw;
      border-radius: 5px;
    }
  }

  .detail {
    width: 30vw;
    text-align: left;
    .name {
      font-size: 40px;
      font-weight: 700;
    }
    ul {
      list-style: none;
      padding: 0;
      font-size: 30px;
    }
  }
}
</style>