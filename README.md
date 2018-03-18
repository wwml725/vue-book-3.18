## 项目用到less
```
npm install less less-loader --save-dev
npm install axios vuex bootstrap
```
- mock模拟数据
- api 代表的是所有的接口
- base 基础组件
- components 页面组件

## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api,如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件
- 写一个基础组件
  - 1.创建一个.vue文件
  - 2.在需要使用这个组件的父级中引用这个组件
  - 3.在组件中注册
  - 4.以标签的形式引入
  
  
  
  
  # 创建项目框架
  #### 在全局安装一个脚手架
  ```
  npm install vue-cli -g
  ```
  #### 生成项目
  ```
  vue init webpack vue-book
  ```
  ```
  
  ? Project name vue-book
  ? Project description A Vue.js project
  ? Author 1129942397@qq.com <1129942397@qq.com>
  ? Vue build (Use arrow keys)
  > Runtime + Compiler: recommended for most users
    Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - r
  ender functions are required elsewhereender functions are required elsewhere  
  ```
  - Runtime + Compiler :可以使用模板方式。
  如：
  ```
  new Vue({
      template:
  })
  ```
  - Runtime-only：不可以这样（相比较而言，压缩了）
  翻译：推荐大多数用户运行时:大约6KB较轻的min + gzip，但是模板(或任何特定于vue的HTML)只允许进入。vue文件- render函数是其他地方所需的其他函数
  
  - 今天我们 选第一个：Runtime + compiler
  ```
  ? Project name vue-book
  ? Project description A Vue.js project
  ? Author 1129942397@qq.com <1129942397@qq.com>
  ? Vue build standalone
  ? Install vue-router? Yes
  ? Use ESLint to lint your code? No
  ? Setup unit tests with Karma + Mocha? No
  ? Setup e2e tests with Nightwatch? No
  
     vue-cli · Generated "vue-book".
  
     To get started:
  
       cd vue-book
       npm install
       npm run dev
  
     Documentation can be found at https://vuejs-templates.github.io/webpack
  ```
  
  - 到这一步的时候创建出了vue-book框架
  
  - 进入vue-book,安装依赖，再npm run dev看看效果
  
  #### 项目中各个文件夹的用途
  
  - mock : 用来模拟数据
      - 设置服务端数据，设置轮播图并且创建一个接口，用axios引入到前端
      - 先安装 axios ：npm install axios --save   //帮助我们获取数据
  - src 文件夹最重要
      - api：放置接口
          - index.js
      - assets:放置共有样式  (在main中引入)
          - index.less(需要引入插件 ：npm install less less-loader --save)
      - main.js：主要文件
      - App.vue：根组件
      - components文件夹 这里放子组件
          - Hello.vue
              - scoped:代表局部样式
          - Tab
          - Slider 并且要nmp install swiper --save  
      - containers文件夹   创建一个代替components放页面级组件    
          - Home :导入接口 在挂载的时候执行方法，返回promise 使用then
          由于造成跨域  需要设置config中的index.js  再重启服务
          ```
          proxyTable: {
                   '/api':'http://localhost:3000'
                 },
  
          ```
          - Add
          - Collect
          
          - List
          - Update
      - router文件夹
          - index.js 
              - 引入组件  使用组件 配置路径  并且将router-view 放到App.vue上
              - 设置激活状态（选中状态）linkActiveClass: 'active'(router平级)  然后在tab下直接设置颜色属性选择器
          ```
                {//404 
                //路由  如果访问路径不存在 直接跳到主页
                      path:'*',
                      redirect:'/home'
                    }
          ```
      - assets文件夹
  - config文件夹
      - index.js中可以设置端口号（默认是：8080）
      
  - build文件夹：放的是webpack配置文件
      - base.conf.js：可以配置别名
  - index.html:
      - 添加mv-p移动端
      - 引入字体库
      
      
  
      
  
  
  
  > 注：每次更改配置文件都必须要从新run一下
  
  
  
## 项目注意事项
1、首页中使用轮播图，需要安装vue-swiper
```$xslt

```
  

