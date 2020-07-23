import Vue from 'vue'

export default Vue.extend({
  data () {
    return {}
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      console.log('init page')
    }
  }
})
