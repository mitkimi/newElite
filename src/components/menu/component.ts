import Vue from 'vue'
import routes from '@/router/routes/routes'

interface MenuItem {
  text?: string;
  icon?: string;
  fa?: string;
  path?: string;
  children: Array<MenuItem>;
}
const menu: Array<MenuItem> = []
const Component = Vue.extend({
  data () {
    return {
      active: '/user/profile',
      menu
    }
  },
  mounted () {
    this.formatRoutes()
    this.formatDefaultActive()
  },
  methods: {
    formatRoutes () {
      // 根据路由文件生成菜单
      const menu: Array<MenuItem> = []
      routes.map((e) => {
        if (e.isMenu) {
          console.log(e)
          menu.push(e)
        }
      })
      this.menu = menu
    },
    formatDefaultActive () {
      // 根据路由 path 确定展开的菜单
      this.active = this.$route.path
    }
  }
})

export default Component
