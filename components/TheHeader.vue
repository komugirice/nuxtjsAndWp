<template>
  <div id="header-container" class="header-container">
    <div id="header-container-in" class="header-container-in hlt-center-logo">
      <header id="header" class="header cf" itemscope="" itemtype="https://schema.org/WPHeader">
        <div id="header-in" class="header-in wrap cf" itemscope="" itemtype="https://schema.org/WebSite">
          <h1 class="logo logo-header logo-text">
            <a :href="'https://www.komugirice.com/' | postLink" class="site-name site-name-text-link" itemprop="url"><span class="site-name-text" itemprop="name about">KomugiriceのBlog</span></a>
          </h1>
          <div class="tagline" itemprop="alternativeHeadline">
            Android等のプログラミングや趣味のブログです
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    postLink (post) {
      const linkName = post.replace(
        process.env.WORDPRESS_BASE_URL + '/',
        ''
      )
      const link = `${linkName}`
      return encodeURI(link)
    }
  }
// async asyncData({ app, params }) {
//     const { data } = await app.$axios.get(
//     `${WORDPRESS_REST_API_ENDPOINT}/settings`
//     );
//     return { title: data.title, description: data.description};
// },
// data() {
//     return {
//         title: '',
//         description: ''
//     }
// },
// head() {
// return {
//     title: `${this.title}`,
//     meta: [{ description: this.description }]
// }
// }
}
</script>
<style scoped>

header {
    background-color: #7a24e2;
}

.header, .header .site-name-text, #navi .navi-in a, #navi .navi-in a:hover {
    color: #fff;
}
.logo-text {
    padding: 20px 0 30px;
    font-size: 1em;
}
.site-name-text {
    font-size: 28px;
}
.site-name-text-link {
    color: #333;
    text-decoration: none;
    font-weight: normal !important;
}
.tagline {
    text-align: center;
    font-size: 14px;
    margin: .6em 1em;
}
</style>
