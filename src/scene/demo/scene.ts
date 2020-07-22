import Vue from 'vue'
import eLogo from '@/components/logo/index.vue'

export default Vue.extend({
  components: {
    eLogo
  },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.initScene()
  },
  methods: {
    initScene () {
      console.log('hello')
    }
  }
})
