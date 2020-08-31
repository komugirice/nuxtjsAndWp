import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (date) => {
  if (!date) { return '' }
  moment.locale('ja')
  return moment(date).format('LLL')
})

Vue.filter('postLink', (post) => {
  const linkName = post.link.replace(
    process.env.WORDPRESS_BASE_URL + '/',
    ''
  )
  const link = `${linkName}`
  return encodeURI(link)
})
