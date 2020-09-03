<template>
  <div>
    <div class="list ect-entry-card ecb-entry-border front-page-type-tag">
      <ul v-if="postsByTag.posts" class="list">
        <h1 class="list-title">
          <span class="list-title-in">{{ postsByTag.name }}</span>
        </h1>
        <li v-for="post in postsByTag.posts" :key="post.id">
          <a :href="post | postLink" class="entry-card-wrap a-wrap border-element cf" :title="post.title.rendered">
            <article class="entry-card e-card cf post type-post status-publish format-standard hentry">

              <div class="entry-card-content card-content e-card-content">
                <h2 class="entry-card-title card-title e-card-title" itemprop="headline">{{ post.title.rendered }}</h2>
                <div class="entry-card-meta card-meta e-card-meta">
                  <div class="entry-card-info e-card-info" />
                  <div class="entry-card-tags"><span class="modified-date">{{ post.modified | formatDate }}</span></div>
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
  data () {
    return {
      postsByTag: []
    }
  },
  created () {
    this.fetchData({
      slug: this.$route.params.slug
    })
  },
  methods: {
    async fetchData (params) {
      // console.log(params)
      this.postsByTag = await this.$fetchPostsByTag({}, params)
      console.log(this.postsByTag)

      // this.postsByTag = [
      //   { id: 'ID' , name: 'タグ名', posts: [
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
.modified-date {
  font-size: 0.7em;
  padding: 2px;
}
</style>
