<template>
  <div id="sidebar" class="sidebar nwa cf" role="complementary">
    <aside id="categories" class="widget widget-sidebar widget_categories">
      <h3 class="widget-sidebar-title widget-title">カテゴリー</h3>
      <ul>
        <li v-for="category in postsByCategories" :key="category.id" class="cat-item">
          <a :href="category.link" class="cf">{{category.name}}
            <span class="post-count">{{category.posts.length}}</span>
          </a>
        </li>
      </ul>
    </aside>
      <aside id="tag_cloud" class="widget widget-sidebar widgert_tag_cloud">
        <h3 class="widget-sidebar-title widget-title">タグ</h3>
    </aside>
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
      postsByCategories: [],
      postsByTags: []
    }
  },
  created () {
    this.fetchData({
    })
  },
  methods: {
    async fetchData (params) {
      this.postsByCategories = await this.$fetchPostsByCategories({})
    }
  }
}
</script>
<style scoped>
.sidebar {
  height: 100%;
}
.widget_categories ul li a {
  color: #333;
  text-decoration: none;
  padding: 10px 0;
  display: block;
  padding-right: 4px;
  padding-left: 4px;

}
.post-count {
  display: block;
  float: right;
}
</style>
