// import Home from '@/views/Home.vue'
import Dashboard from '@/scene/dashboard/index.vue'
import SignIn from '@/scene/signIn/index.vue'
import { VueConstructor } from 'vue'

interface RouteItem {
  path: string | null;
  name: string;
  label?: string;
  isMenu?: boolean;
  icon?: string;
  fa?: string;
  component: Function | VueConstructor;
  children?: Array<RouteItem>;
}
const routes: Array<RouteItem> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  /**
   * isMenu 属性告知程序是否用于渲染菜单，只在首层路由中有效
   * icon 属性告知渲染菜单时使用 ElementUI 提供的 icon，非必选
   * fa 属性告知渲染菜单时使用 font awesome 时的类名，非必选
   * label 属性告知渲染菜单时显示的文字
   * children 属性用于渲染子路由（数组），当且仅当只有一个数组成员时，将会渲染在一级菜单上
   */
  {
    path: '/dashboard',
    isMenu: true,
    fa: 'fa fa-dashboard',
    label: '控制台',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/form',
    isMenu: true,
    icon: 'el-icon-c-scale-to-original',
    label: '表单页',
    name: 'Form',
    component: Dashboard,
    children: [
      {
        path: 'basic',
        name: 'BasicForm',
        label: '基础表单页',
        component: () => import('../../views/form/basic/index.vue')
      },
      {
        path: 'step',
        name: 'StepForm',
        label: '分步表单页',
        component: () => import('../../views/form/step/index.vue')
      }
    ]
  },
  {
    path: '/list',
    isMenu: true,
    icon: 'el-icon-document-copy',
    label: '列表页',
    name: 'List',
    component: Dashboard,
    children: [
      {
        path: 'table',
        name: 'TableList',
        label: '查询表格',
        component: () => import('../../views/underdevelop/index.vue')
      },
      {
        path: 'standard',
        name: 'StandardList',
        label: '标准列表',
        component: () => import('../../views/underdevelop/index.vue')
      },
      {
        path: 'card',
        name: 'CardList',
        label: '卡片列表',
        component: () => import('../../views/underdevelop/index.vue')
      },
      {
        path: 'search',
        name: 'SearchList',
        label: '搜索列表',
        component: () => import('../../views/underdevelop/index.vue')
      }
    ]
  },
  {
    path: '/detail',
    isMenu: true,
    icon: 'el-icon-document',
    label: '详情页',
    name: 'Detail',
    component: Dashboard,
    children: [
      {
        path: 'basic',
        name: 'BasicDetail',
        label: '基础详情页',
        component: () => import('../../views/underdevelop/index.vue')
      },
      {
        path: 'advance',
        name: 'AdvanceDetail',
        label: '高级详情页',
        component: () => import('../../views/underdevelop/index.vue')
      }
    ]
  },
  {
    path: '/result',
    isMenu: true,
    icon: 'el-icon-circle-check',
    label: '结果',
    name: 'Result',
    component: Dashboard,
    children: [
      {
        path: 'success',
        name: 'SuccessResult',
        label: '成功页',
        component: () => import('../../views/result/success/index.vue')
      },
      {
        path: 'fail',
        name: 'FailResult',
        label: '失败页',
        component: () => import('../../views/result/fail/index.vue')
      }
    ]
  },
  {
    path: '/error',
    isMenu: true,
    icon: 'el-icon-close',
    label: '异常',
    name: 'Error',
    component: Dashboard,
    children: [
      {
        path: '403',
        name: '403Error',
        label: '403 无访问权限',
        component: () => import('../../views/error/403/index.vue')
      },
      {
        path: '404',
        name: '404Error',
        label: '404 找不到页面',
        component: () => import('../../views/error/404/index.vue')
      },
      {
        path: '500',
        name: '500Error',
        label: '500 服务器出错',
        component: () => import('../../views/error/500/index.vue')
      }
    ]
  },
  {
    path: '/user',
    isMenu: true,
    icon: 'el-icon-user',
    label: '个人页',
    name: 'User',
    component: Dashboard,
    children: [
      {
        path: 'center',
        name: 'Center',
        label: '个人中心',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        label: '个人设置',
        component: () => import('../../views/home/index.vue')
      }
    ]
  }
]

export default routes
