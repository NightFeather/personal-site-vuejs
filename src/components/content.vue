<template>
	<div id="content" >
    <div class="spacing"></div>
    <content-intro></content-intro>
    <content-ability></content-ability>
    <content-contact></content-contact>
	</div>
</template>

<script>
import Intro from './content/introduction.vue'
import Ability from './content/abilities.vue'
import Contact from './content/contact.vue'

export default {
  name: 'app-content',
  components: {
    'content-intro': Intro,
    'content-ability': Ability,
    'content-contact': Contact
  }
}
</script>

<style lang="scss">
	#content {

    z-index: 10;

    .spacing { height: 5vh;}

    .reigion {
      position: relative;
      width: 100%;
      min-height: 400px;
      padding: 1.5vh 0px 3.5vh 0px;
      font-size: 20px;

      header { font-size: 2.5em; }
      section {
        font-size: 1.5em;
        min-height: 80%;
      }
    }
  }
</style>
