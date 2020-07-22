import Vue from 'vue'
import eMenu from '@/components/menu/index.vue'
import eLogo from '@/components/logo/index.vue'

export default Vue.extend({
  components: {
    eMenu,
    eLogo
  },
  data () {
    return {
      headImgUrl: 'https://www.heelysfly.com/_nuxt/img/person-01.8867315.jpg',
      loading: false
    }
  },
  mounted () {
    this.initScene()
  },
  methods: {
    initScene () {
      console.log(1)
      this.loadingDemo() // loading 展示
    },
    loadingDemo () {
      setInterval(() => {
        this.loading = !this.loading
      }, 1500)
    }
  }
})
