import Vue from 'vue'
const Component = Vue.extend({
  data () {
    return {
      year: 0
    }
  },
  mounted () {
    const date = new Date()
    this.year = date.getFullYear()
  }
})

export default Component
