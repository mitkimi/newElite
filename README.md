# Elite Admin Panel EAP

> The new Elite, Vue 家族的后台面板前端解决方案(ts)

## 写在前面
> 在上一版 Elite 中，我们的项目有幸被收入了 github 北极代码仓库中

Elite Admin Panel 是一个基于 vue.js 开发，以及用 ElementUI 作为基础UI框架完成的一个后台管理控制台的脚手架，帮助你快速的构建中后台产品。基于以上理念，我们提供了以下的典型模板，共开发者使用和设计者参考。

```
+ Dashboard
| +-- 分析页
| +-- 监控页
| +-- 工作台
+ 表单页
| +-- 基础表单页
| +-- 分步表单页
| +-- 高级表单页
+ 列表页
| +-- 查询表格
| +-- 标准列表
| +-- 卡片列表
| +-- 搜索列表（项目/应用/文章）
+ 详情页
| +-- 基础详情页
| +-- 高级详情页
+ 结果
| +-- 成功页
| +-- 失败页
+ 异常
| +-- 403 无权限
| +-- 404 找不到
| +-- 500 服务器出错
+ 个人页
| +-- 个人中心
| +-- 个人设置
+ 帐户
| +-- 登录
| +-- 注册
| +-- 注册成功
```

## 开发者
```bash
git clone https://github.com/mitkimi/newElite.git
cd newElite
npm install
npm run watch
## Serve with hot reload at localhost:8080
```

### 前期准备
你的本地环境需要安装 node 和 git。 我们的技术栈基于 ES2015+、 vue.js、 TypeScript、 ElementUI、 axios、 moment.js、 webpack 以及 eslint，提前了解和学习这些只是会非常有帮助。


### 构建生产版本
```bash
npm run build
```

### 代码检查和修复
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
