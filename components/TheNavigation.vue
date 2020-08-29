<template>
  <nav id="navi" class="navi cf" itemscope="" itemtype="https://schema.org/SiteNavigationElement" style="">
    <div id="navi-in" class="navi-in wrap cf">
      <ul id="menu-navigation" class="menu-top menu-header menu-pc">
        <li v-for="category in categories" :key="category.name" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-no-description">
          <a :href="'category/' + category.slug">
            <div class="caption-wrap"><div class="item-label">{{ category.name }}</div></div>
          </a>
        </li>
        <!-- <li id="menu-item-382" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-no-description"><a href="https://www.komugirice.com/category/qiitaapplication/" style=""><div class="caption-wrap"><div class="item-label" style="">QiitaApplicaton</div></div></a></li>
                <li id="menu-item-381" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-no-description"><a href="https://www.komugirice.com/category/general/" style=""><div class="caption-wrap"><div class="item-label" style="">一般</div></div></a></li> -->
      </ul>
    </div><!-- /#navi-in -->
  </nav>
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
      categories: []
    }
  },
  created () {
    this.asyncData({})
  },
  methods: {
    async asyncData ({ params }) {
      const response = await this.$axios.get(
            `${process.env.WORDPRESS_REST_API_ENDPOINT}/categories`
            , { params }
      )
      this.categories = response.data
    }
  }
}
</script>
<style scoped>
.navi, #navi .navi-in>.menu-header .sub-menu {
    background-color: #a06ae2;
}
.item-label {
    color: #fff;
}
</style>
