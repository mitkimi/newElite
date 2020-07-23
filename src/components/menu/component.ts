import Vue, { VueConstructor } from 'vue'
import routes from '@/router/routes/routes'

interface RouteItem {
  path: string | null;
  name: string;
  text?: string;
  isMenu?: boolean;
  icon?: string;
  fa?: string;
  component: Function | VueConstructor;
  children?: Array<RouteItem>;
}
const menu: Array<RouteItem> = []
const Component = Vue.extend({
  data () {
    return {
      active: '/user/profile',
      isCollapse: false,
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
      const menu: Array<RouteItem> = []
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
