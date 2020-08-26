<template>
  <div>
    <div v-if="post" class="post">
      <h1>{{ post.title.rendered }}</h1>
      <!-- eslint-disable vue/no-v-html -->
      <div class="content" v-html="post.content.rendered" />
      <!--eslint-enable-->
    </div>
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
  }
}
</script>
