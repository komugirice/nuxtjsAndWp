<template>
  <div id="sidebar" class="sidebar nwa cf" role="complementary">
    <aside id="categories" class="widget widget-sidebar widgert_categories">
      <h3 class="widget-sidebar-title widget-title">カテゴリー</h3>
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
}
</script>
<style scoped>
.sidebar {
  height: 100%;
}
</style>
