<template>
  <div>
    <div class="list ect-entry-card ecb-entry-border front-page-type-category">
      <ul class="list">
        <li v-for="post in posts" :key="post.id">
          <a :href="post | postLink" class="entry-card-wrap a-wrap border-element cf" :title="post.title.rendered">
            <article class="entry-card e-card cf post type-post status-publish format-standard hentry">

              <div class="entry-card-content card-content e-card-content">
                <h2 class="entry-card-title card-title e-card-title" itemprop="headline">{{post.title.rendered}}</h2>
                            <div class="entry-card-meta card-meta e-card-meta">
                  <div class="entry-card-info e-card-info"></div>
                  <div class="entry-card-categorys"><span class="modified-date">{{post.modified}}</span></div>
                </div>
              </div><!-- /.entry-card-content -->
            </article>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    postLink (post) {
      const linkName = post.link.replace(
        process.env.WORDPRESS_BASE_URL + '/',
        ''
      )
      const link = `${linkName}`
      return encodeURI(link)
    }
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchData({
      page: 1,
      per_page: 50
    })
  },
  methods: {
    async fetchData (params) {
      const response = await this.$axios.get(
        process.env.WORDPRESS_REST_API_ENDPOINT + '/posts',
        { params }
      )
      this.posts = response.data
    }
  }
}
</script>
<style>
.entry-card-content {
  margin-left: 0;
}
</style>
