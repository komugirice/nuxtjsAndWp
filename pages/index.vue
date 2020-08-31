<template>
  <div>
    <div class="list ect-entry-card ecb-entry-border front-page-type-category">
      <ul v-for="category in postsByCategories" :key="category.id" class="list">
        <h1 class="list-title">
          <span class="list-title-in">{{category.name}}</span>
        </h1>
        <li v-for="post in category.posts" :key="post.id">
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
      posts: [],
      postsByCategories: []
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
      const categoryResponse = await this.$axios.get(
        process.env.WORDPRESS_REST_API_ENDPOINT + '/categories'
      )
      const categories = categoryResponse.data
      const response = await this.$axios.get(
        process.env.WORDPRESS_REST_API_ENDPOINT + '/posts',
        { params }
      )
      this.posts = response.data

      this.postsByCategories = []

      for (let i = 0; i < this.posts.length; i++) {
        const post = this.posts[i]
        // console.log('i=' + i)
        for (let n = 0; n < post.categories.length; n++) {
          const catId = post.categories[n]
          // console.log('n=' + n)
          for (let x = 0; x < categories.length; x++) {
            const cat = categories[x]
            // console.log('x=' + x)
            if (catId === cat.id) {
              let flag = false
              for (let y = 0; y < this.postsByCategories.length; y++) {
                // console.log('y=' + y)
                // console.log(this.postsByCategories[y])

                if (this.postsByCategories[y].id === catId) {
                  flag = true
                  this.postsByCategories[y].posts.push(post)
                }
              }
              if (!flag) {
                this.postsByCategories.push(
                  {
                    id: cat.id,
                    name: cat.name,
                    posts: [post]
                  }
                )
              }
            }
          }
        }
      }

      // this.postsByCategories = [
      //   { id: 'ID' , name: 'カテゴリ名', posts: [
      //     { 記事データ },
      //     { 記事データ }
      //   ]}
      // ]
    }
  }
}
</script>
<style>
ul.list {
  margin-bottom: 50px;
}
.entry-card-content {
  margin-left: 0;
}
.list-title {
  font-size: 40px;
  margin: 16px 0;
  line-height: 1.3;
}
.list-title-in {
  position: relative;
  display: inline-block;
  padding: 0 75px;
}
.list-title-in:before {
    left: 0;
    margin-right: 10px;
}
.list-title-in:after {
    right: 0;
    margin-left: 10px;
}
.list-title-in:before, .list-title-in:after {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: black;
}
</style>
