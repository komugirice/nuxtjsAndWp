import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (date) => {
  if (!date) { return '' }
  moment.locale('ja')
  return moment(date).format('LLL')
})
