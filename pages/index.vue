<template>
  <div>
    <ul class="list">
      <li v-for="post in posts" :key="post.id">
        <div class="post">
          <a :href="post | postLink">
            <div>
              <h2>{{ post.title.rendered }}</h2>
              <p class="modified-date">
                最終更新日：{{ post.modified }}
              </p>
            </div>
          </a>
        </div>
      </li>
    </ul>
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

<style></style>
