<template>
  <div id="sidebar" class="sidebar nwa cf" role="complementary">
    <aside id="categories" class="widget widget-sidebar widget_categories">
      <h3 class="widget-sidebar-title widget-title">
        カテゴリー
      </h3>
      <ul>
        <li v-for="category in postsByCategories" :key="category.id" class="cat-item">
          <a :href="category | postLink" class="cf">{{ category.name }}
            <span class="post-count">{{ category.posts.length }}</span>
          </a>
        </li>
      </ul>
    </aside>
    <aside id="tag_cloud" class="widget widget-sidebar widgert_tag_cloud">
      <h3 class="widget-sidebar-title widget-title">
        タグ
      </h3>
      <ul class="tagcloud">
        <li v-for="tag in tags" :key="tag.id" class="tag-item">
          <a :href="tag | postLink" class="tag-cloud-link">
            <span class="tag-caption">
              <span class="fa fa-tag" aria-hidden="true" />
              {{ tag.name }}
            </span>
            <span class="tag-link-count">{{ tag.count }}</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  filters: {
    postLink (post) {
      const linkName = post.link.replace(
        process.env.WORDPRESS_BASE_URL,
        ''
      )
      const link = `${linkName}`
      return encodeURI(link)
    }
  },
  data () {
    return {
      postsByCategories: [],
      tags: []
    }
  },
  created () {
    this.fetchData({
    })
  },
  methods: {
    async fetchData (params) {
      this.postsByCategories = await this.$fetchPostsByCategories({}, {})

      this.tags = await this.$fetchTags({})
    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
}
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
.tagcloud {
  display: block;
  flex-wrap: wrap;
}
.tagcloud a {
    border: 1px solid #eee;
    border-radius: 2px;
    color: #555;
    padding: 3px 8px;
    text-decoration: none;
    font-size: 12px;
    margin: 2px;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
}
</style>
