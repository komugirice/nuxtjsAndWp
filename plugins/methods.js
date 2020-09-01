import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$fetchPostsByCategories = async (params, params2) => {
  const response = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/posts', params
  )
  const posts = response.data

  // console.log('params2=' + params2)
  const categoryResponse = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/categories', params2
  )
  const categories = categoryResponse.data
  // console.log(categories)

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
    process.env.WORDPRESS_REST_API_ENDPOINT + '/tags',
    params
  )
  const tags = tagResponse.data

  return tags
}

Vue.prototype.$fetchPostsByTag = async (params, params2) => {
  const response = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/posts',
    params
  )
  const posts = response.data

  const tagResponse = await axios.get(
    process.env.WORDPRESS_REST_API_ENDPOINT + '/tags',
    params2
  )
  const tag = tagResponse.data[0]

  let postsByTag = {}

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    for (let n = 0; n < post.tags.length; n++) {
      const tagId = post.tags[n]
      // console.log('y=' + y)

      if (tagId === tag.id) {
        // console.log('postsByTag.posts=' + postsByTag.posts)
        if (postsByTag.posts === undefined) {
          postsByTag =
            {
              id: tag.id,
              name: tag.name,
              posts: [post]
            }
        } else {
          postsByTag.posts.push(post)
        }
      }
    }
  }
  console.log(postsByTag)
  return postsByTag
}
