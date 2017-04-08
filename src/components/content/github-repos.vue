<template>
<article id="github-repos" class="region">
  <header>GitHub 最近有活動的專案</header>
  <section>
    <div v-show="this.error" class="error" >Error Fetching Data</div>
    <card-wall v-show="this.loaded && !this.error" v-bind:repos="repos"></card-wall>
    <cat-loading v-show="!this.loaded"></cat-loading>
  </section>
</article>
</template>

<script>
import CatLoading from '@/components/cat-loading.vue'
import CardWall from './github-repos/card-wall.vue'

export default {
  name: 'github-repos',
  components: {
    CardWall,
    CatLoading
  },
  data: function () {
    return {
      repos: [],
      loaded: false,
      error: false
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
        var repos = resp.data.slice(0, 9).map((repo) => {
          return {
            link: repo.html_url,
            name: repo.name,
            full_name: repo.full_name,
            desc: repo.description,
            updated_at: repo.updated_at
          }
        })

        Promise.all(repos.map((repo) => {
          return self.$http.get(
            'https://api.github.com/repos/' + repo.full_name,
            {
              before: function (req) {
                req.headers.set('Accept',
                  'application/vnd.github.mercy-preview+json, ' + req.headers.get('Accept'))
                return req
              }
            }
          ).then(
            (res) => {
              res = res.data
              repo.status = 'success'
              repo.fork = res.fork
              repo.topics = res.topics
              if (res.fork) {
                repo.parent = {}
                repo.parent.name = res.parent.full_name
                repo.parent.link = res.parent.html_url
              }
              return repo
            },
            (err) => {
              return {
                status: 'failure',
                error: err
              }
            }
          )
        })).then((res) => {
          self.repos = res.filter((i) => { return i.status === 'success' })
                          .sort((a, b) => {
                            if (a.updated_at && b.updated_at) {
                              if (a.updated_at > b.updated_at) {
                                return -1
                              } else if (a.updated_at < b.updated_at) {
                                return 1
                              } else {
                                return 0
                              }
                            } else {
                              return a.updated_at ? -1 : 1
                            }
                          })
          self.loaded = true
        })
      }
    ).catch(
      (resp) => {
        console.log(resp)
        self.loaded = true
        self.error = true
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