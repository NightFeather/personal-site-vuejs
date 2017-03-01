<template>
	<div id="content" >
    <content-greeting></content-greeting>
    <content-intro></content-intro>
    <content-ability></content-ability>
    <content-github-repos></content-github-repos>
    <content-contact></content-contact>
	</div>
</template>

<script>
import Greeting from './content/greeting.vue'
import Intro from './content/intro.vue'
import Ability from './content/abilities.vue'
import GitHubRepos from './content/github-repos.vue'
import Contact from './content/contact.vue'

export default {
  name: 'app-content',
  components: {
    'content-greeting': Greeting,
    'content-intro': Intro,
    'content-ability': Ability,
    'content-github-repos': GitHubRepos,
    'content-contact': Contact
  }
}
</script>

<style lang="scss">
	#content {

    z-index: 10;

    .spacing { height: 5vh;}

    .region {
      position: relative;
      width: 100%;
      min-height: 60vh;
      padding: 1.5vh 0px 3.5vh 0px;
      font-size: 20px;

      header { font-size: 2.5em; }
      section {
        font-size: 1.5em;
        min-height: 80%;
      }

      &:nth-child(odd) { background-color: #f8fceb; }
      &:nth-child(even){ background-color: #f6f7d3; }
    }
  }
</style>
