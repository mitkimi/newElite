import Vue from 'vue'
import routes from '@/router/routes/routes'
const menu: any = []
const Component = Vue.extend({
  data () {
    return {
      active: null,
      menu
    }
  },
  mounted () {
    this.formatRoutes()
  },
  methods: {
    formatRoutes () {
      const menu: Array<string | object> = []
      routes.map((e) => {
        if (e.isMenu) {
          console.log(e)
          menu.push(e)
        }
      })
      this.menu = menu
    }
  }
})

export default Component
