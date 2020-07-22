import Home from '@/views/Home.vue'
import Dashboard from '@/scene/dashboard/index.vue'
import SignIn from '@/scene/signIn/index.vue'
interface RouteItem {
  path: string | null;
  name: string;
  text?: string;
  isMenu?: boolean;
  icon?: string;
  fa?: string;
  component: any;
  children?: Array<RouteItem>;
}
const routes: Array<RouteItem> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  /**
   * isMenu 属性告知程序是否用于渲染菜单，只在首层路由中有效
   */
  {
    path: '/dashboard',
    isMenu: true,
    fa: 'fa fa-dashboard',
    text: '控制台',
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
    text: '表单页',
    name: 'Form',
    component: Dashboard,
    children: [
      {
        path: 'basic',
        name: 'BasicForm',
        text: '基础表单页',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'step',
        name: 'StepForm',
        text: '分步表单页',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'advance',
        name: 'AdvanceForm',
        text: '高级表单页',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/list',
    isMenu: true,
    icon: 'el-icon-document-copy',
    text: '列表页',
    name: 'List',
    component: Dashboard,
    children: [
      {
        path: 'table',
        name: 'TableList',
        text: '查询表格',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'standard',
        name: 'StandardList',
        text: '标准列表',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'card',
        name: 'CardList',
        text: '卡片列表',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'search',
        name: 'SearchList',
        text: '搜索列表',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/detail',
    isMenu: true,
    icon: 'el-icon-document',
    text: '详情页',
    name: 'Detail',
    component: Dashboard,
    children: [
      {
        path: 'basic',
        name: 'BasicDetail',
        text: '基础详情页',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'advance',
        name: 'AdvanceDetail',
        text: '高级详情页',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/result',
    isMenu: true,
    icon: 'el-icon-circle-check',
    text: '结果',
    name: 'Result',
    component: Dashboard,
    children: [
      {
        path: 'success',
        name: 'SuccessResult',
        text: '成功页',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'fail',
        name: 'FailResult',
        text: '失败页',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/error',
    isMenu: true,
    icon: 'el-icon-close',
    text: '异常',
    name: 'Error',
    component: Dashboard,
    children: [
      {
        path: '403',
        name: '403Error',
        text: '403 无访问权限',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: '404',
        name: '404Error',
        text: '404 找不到页面',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: '500',
        name: '500Error',
        text: '500 服务器出错',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/user',
    isMenu: true,
    icon: 'el-icon-user',
    text: '个人页',
    name: 'User',
    component: Dashboard,
    children: [
      {
        path: 'center',
        name: 'Center',
        text: '个人中心',
        component: () => import('../../views/home/index.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        text: '个人设置',
        component: () => import('../../views/home/index.vue')
      }
    ]
  }
]

export default routes
