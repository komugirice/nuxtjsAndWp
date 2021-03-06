import axios from 'axios'

require('dotenv').config()

const {
  WORDPRESS_BASE_URL,
  WORDPRESS_REST_API_ENDPOINT,
} = process.env

export default {
  env: {
    WORDPRESS_BASE_URL,
    WORDPRESS_REST_API_ENDPOINT,
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}
    ],
    bodyAttrs: {
      class: 'fz-18px fw-400'
    }
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/filters.js',
    '~plugins/methods.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */

  generate: {
    interval: 1000,
    routes () {
      return Promise.all([
        axios.get(`${WORDPRESS_REST_API_ENDPOINT}/posts?per_page=100&page=1&_embed=1`),
        axios.get(`${WORDPRESS_REST_API_ENDPOINT}/categories`),
        axios.get(`${WORDPRESS_REST_API_ENDPOINT}/tags`),
      ]).then((data) => {
        const posts = data[0]
        const categories = data[1]
        const tags = data[2]
        return posts.data.map((post) => {
          const link = post.link.replace(WORDPRESS_BASE_URL + '/', '')
          return { route: `${link}`, payload: post }
        }).concat(categories.data.map((category) => {
          return { route: `category/${category.slug}/`, payload: category }
        })).concat(tags.data.map((tag) => {
          return { route: `tag/${tag.slug}/`, payload: tag }
        }))
      })
    }
  },

  build: {
    extend (config, ctx) {
      config.devtool = 'inline-cheap-module-source-map'
    }
  }
}
