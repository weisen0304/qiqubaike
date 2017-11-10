## vuexdemo

学习了一个多月vue，刚开始听说vue还是在几个月前的事，现在很高兴搞出了自己的第一个demo，
而且涉及了挺多知识的，列如，页面切换，组件数值传递，实现的动画效果等等。

# 高仿UC奇趣百科
>vue2.0、vuex、vue-router、axios、webpack、eslint、swiper

>奇趣百科是一款以搞笑，图片，视频为内容深受年轻人一族喜爱的webAPP

## 演示
>在线演示待定(请使用chrome开发者手机演示模式预览)<br>
      ![](https://github.com/1205403102/qiqubaike/blob/master/imgCh/home.gif)
      ![](https://github.com/1205403102/qiqubaike/blob/master/imgCh/content.gif)<br>
      ![](https://github.com/1205403102/qiqubaike/blob/master/imgCh/video.gif)
      ![](https://github.com/1205403102/qiqubaike/blob/master/imgCh/login.gif)

## 移动端演示
扫二维码在手机上查看效果更好

## 项目运行

      git clone https://github.com/1205403102/qiqubaike.git
      
      cd qiqubaike
      
      npm install
      
      npm run dev


## 组件

* 首页路由-精彩页面
* 首页路由-视频页面
* 首页路由-搞笑页面
* 首页路由-段子页面
* 首页路由-专栏页面
* 点赞点坑飞入动画
* 精彩详情页面
* 登录页面
* 举报功能
* 轮播图功能
* 传送门和返回顶部功能
* 视频播放功能

## 构建

vue利用自己的脚手架构建工具vue-cli，再利用IDE编辑使用起来非常方便，使用webpack来集成各种开发编辑工具，例如：

>Eslint,统一代码风格，规范避免错误，之前使用起来还觉得特别不习惯，不过多敲几次代码，就感觉出错的地方很容易找，而且写出来的代码看起来舒服很多；

>bable，ES2015出来已经有一段时间了，但是不少浏览器还没有兼容ES6.有了bable，放心使用ES6语法，它会自动转义成ES5语法;

>Stylus,以前习惯性使用css的小伙伴们请注意了，当你使用了SASS/SCSS，惊讶的发现写的样式很容易找，重点是不用在写{}和“：”,使用起来特别方便

>代码热更新，修改代码之后网页无刷新改变，对前端开发来说非常的方便

>PostCss，再也不用去管兼容性的问题了，只针对chrome写css代码，会自动编译生成支持多款浏览器的css代码

>vue-cli使用node配置本地服务器和安装命令，利用npm命令本地运行以及打包

## 目录结构

      ├─.idea                                        
      ├─build
      │      build.js
      │      check-versions.js
      │      dev-client.js
      │      dev-server.js
      │      utils.js
      │      vue-loader.conf.js
      │      webpack.base.conf.js
      │      webpack.dev.conf.js
      │      webpack.prod.conf.js
      ├─node_modules
      │  │  
      │  ├─.bin
      ├─src
      │  │  App.vue
      │  │  main.js
      │  │  
      │  ├─assets
      │  │      logo.png
      │  │      
      │  ├─common
      │  │  ├─css
      │  │  │      common.css
      │  │  │      
      │  │  ├─img
      │  │  │      add_1@2x.png
      │  │  │      anonymous.png
      │  │  │      back.png
      │  │  │      bj.png
      │  │  │      default-avatar.png
      │  │  │      detailBg1.png
      │  │  │      entry.png
      │  │  │      error.png
      │  │  │      icon.png
      │  │  │      loading.gif
      │  │  │      prof-sprite-2.png
      │  │  │      share.png
      │  │  │      top-icon.png
      │  │  │      user_1@2x.png
      │  │  │      
      │  │  └─less
      │  │          basic.less
      │  │          index.less
      │  │          mixin.less
      │  │          
      │  ├─components
      │  │  │  NotFound404.vue
      │  │  │  
      │  │  ├─banner
      │  │  │      banner.vue
      │  │  │      
      │  │  ├─column
      │  │  │      Column.vue
      │  │  │      
      │  │  ├─detail
      │  │  │      Detail.vue
      │  │  │      
      │  │  ├─find
      │  │  │      Find.vue
      │  │  │      
      │  │  ├─index
      │  │  │      banner.vue
      │  │  │      Header.vue
      │  │  │      Index.vue
      │  │  │      Nav.vue
      │  │  │      Plus.vue
      │  │  │      scroller-pull.vue
      │  │  │      wrap.vue
      │  │  │      
      │  │  ├─joke
      │  │  │      Joke.vue
      │  │  │      
      │  │  ├─loading
      │  │  │      Loading.vue
      │  │  │      
      │  │  ├─login
      │  │  │      Login.vue
      │  │  │      Login2.vue
      │  │  │      
      │  │  ├─selection
      │  │  │      Selection.vue
      │  │  │      
      │  │  └─video
      │  │          player.vue
      │  │          playVideo.vue
      │  │          Video.vue
      │  │          
      │  ├─router
      │  │      header.js
      │  │      index.js
      │  │      
      │  └─store
      │      │  actions.js
      │      │  eventBus.js
      │      │  get.js
      │      │  index.js
      │      │  mutation-types.js
      │      │  mutations.js
      │      │  store.js
      │      │  
      │      ├─modules
      │      │      header.js
      │      │      selection.js
      │      │      
      │      └─video
      │              mutations.js
      └─static
          │  .gitkeep
          │  animate.min.css
          │  error.png
          │  idangerous.swiper.scrollbar-2.4.1.css
          │  idangerous.swiper.scrollbar-2.4.1.min.js
          │  idangerous.swiper2.7.6.css
          │  idangerous.swiper2.7.6.js
          │  jquery-1.10.1.min.js
          │  loading.gif
          │  swiper-3.4.2.min.css
          │  swiper-3.4.2.min.js
          │  zepto.min.js
          │  
          └─css
                  reset.css
