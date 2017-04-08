<template>
<article id="github-repos" class="region">
  <header>GitHub 最近有活動的專案</header>
  <section>
    <card-wall v-show="this.loaded" v-bind:header="header" v-bind:items="items"></card-wall>
    <cat-loading v-show="!this.loaded"></cat-loading>
  </section>
</article>
</template>

<script>
import CatLoading from '@/components/CatLoading.vue'
import CardWall from './github-repos/card-wall.vue'

export default {
  name: 'github-repos',
  components: {
    CardWall,
    CatLoading
  },
  data: function () {
    return {
      items: [],
      loaded: false
    }
  },
  mounted: function () {
    var self = this
    this.$http.get(
      'https://api.github.com/users/Nightfeather/repos',
      {
        params: {
          type: 'all',
          sort: 'updated'
        }
      }
    ).then(
      (resp) => {
        function xmlTime (xmlString) {
          var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/i
          var month = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
          var match = pattern.exec(xmlString)
          return match[3] + ' ' + month[(match[2] - '') - 1] + ' ' + match[1]
        }

        var items = resp.data.slice(0, 5)
        items = items.map((item) => {
          return {
            left: {
              href: item.html_url,
              name: item.name
            },
            right: xmlTime(item.updated_at)
          }
        })

        self.items = items
        self.loaded = true
      }
    ).catch(
      (resp) => {
        console.log(resp)
      }
    )
  }
}
</script>

<style lang="scss">
  #github-repos {
    section { width: 80%; margin: 0 auto; }
    a { text-decoration: none; }
  }
</style>