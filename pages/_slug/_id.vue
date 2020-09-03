<template>
  <div>
    <div v-if="post" class="post">
      <header class="article-header entry-header">
        <h1 class="entry-title" itemprop="headline">
          {{ post.title.rendered }}
        </h1>
      </header>
      <!-- eslint-disable vue/no-v-html -->
      <div class="entry-content cf" itemprop="mainEntityOfPage" v-html="post.content.rendered" />
      <!--eslint-enable-->
    </div>
    <script src="/enlighterjs/enlighterjs.min.js" />
    <script type="text/javascript">
      // - highlight all pre + code tags (CSS3 selectors)
      // - use javascript as default language
      // - use theme "enlighter" as default theme
      // - replace tabs with 2 spaces
      EnlighterJS.init('pre', 'code', {
      language : 'kotlin',
      theme: 'classic',
      indent : 2
      });
    </script>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const postsResponse = await axios.get(
      process.env.WORDPRESS_REST_API_ENDPOINT + '/posts/' + params.id
    )
    const post = postsResponse.data
    return {
      post
    }
  },
  data () {
    return {
      post: null
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/enlighterjs/enlighterjs.min.css'
        }
      ]
    }
  }
}
</script>
<style scoped>
p {
  margin: 0 0 0.5em 0 !important;
  line-height: 2em !important;
}

.entry-title, .list-title, .archive-title {
  font-size: 40px;
  margin: 16px 0;
  line-height: 1.3;
}
</style>
