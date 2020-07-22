import { RouteConfig } from 'vue-router'
import eliteRoutes from './routes'

interface RouteItem {
  path: string;
  name: string;
  component: any;
  children?: Array<RouteItem>;
}

const foo: Function = (arr: Array<string | any>) => {
  const tempArr: Array<RouteItem> = []
  arr.map(e => {
    let tempObj: RouteItem
    if (e.children) {
      tempObj = {
        path: e.path,
        name: e.name,
        component: e.component,
        children: foo(e.children)
      }
    } else {
      tempObj = {
        path: e.path,
        name: e.name,
        component: e.component
      }
    }
    tempArr.push(tempObj)
  })
  return tempArr
}

const routes: Array<RouteConfig> = foo(eliteRoutes)

export default routes
