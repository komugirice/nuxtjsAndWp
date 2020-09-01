import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$fetchPostsByCategories = async (params, params2) => {
  const categoryResponse = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/categories',
    params
  )
  const categories = categoryResponse.data
  const response = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/posts',
    params2
  )
  const posts = response.data

  const postsByCategories = []

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    // console.log('i=' + i)
    for (let n = 0; n < post.categories.length; n++) {
      const catId = post.categories[n]
      // console.log('n=' + n)
      for (let x = 0; x < categories.length; x++) {
        const cat = categories[x]
        // console.log('x=' + x)
        if (catId === cat.id) {
          let flag = false
          for (let y = 0; y < postsByCategories.length; y++) {
            // console.log('y=' + y)
            // console.log(this.postsByCategories[y])

            if (postsByCategories[y].id === catId) {
              flag = true
              postsByCategories[y].posts.push(post)
            }
          }
          if (!flag) {
            postsByCategories.push(
              {
                id: cat.id,
                name: cat.name,
                link: cat.link,
                posts: [post]
              }
            )
          }
        }
      }
    }
  }
  // console.log(postsByCategories)
  return postsByCategories
}

Vue.prototype.$fetchTags = async (params) => {
  const tagResponse = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/tags'
  )
  const tags = tagResponse.data

  return tags
}
