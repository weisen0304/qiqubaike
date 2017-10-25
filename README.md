## vuexdemo

学习了一个多月vue，刚开始听说vue还是在几个月前的事，现在很高兴搞出了自己的第一个demo，
而且涉及了挺多知识的，列如，页面切换，组件数值传递，实现的动画效果等等。

# 高仿UC奇趣百科
>vue2.0、vuex、vue-router、axios、webpack、eslint、swiper

>奇趣百科是一款以搞笑，图片，视频为内容深受年轻人一族喜爱的webAPP

## 演示
在线演示待定(请使用chrome开发者手机演示模式预览)

## 移动端演示
扫二维码在手机上查看效果更好

## 组件

>首页路由-精彩页面

>首页路由-视频页面

>首页路由-搞笑页面

>首页路由-段子页面

>首页路由-专栏页面

>点赞点坑飞入动画

>精彩详情页面

>登录页面

>举报功能

>轮播图功能

>传送门和返回顶部功能

>视频播放功能

## 构建

vue利用自己的脚手架构建工具vue-cli，再利用IDE编辑使用起来非常方便，使用webpack来集成各种开发编辑工具，例如：

>Eslint,统一代码风格，规范避免错误，之前使用起来还觉得特别不习惯，不过多敲几次代码，就感觉出错的地方很容易找，而且写出来的代码看起来舒服很多；

>bable，ES2015出来已经有一段时间了，但是不少浏览器还没有兼容ES6.有了bable，放心使用ES6语法，它会自动转义成ES5语法;

>Stylus,以前习惯性使用css的小伙伴们请注意了，当你使用了SASS/SCSS，惊讶的发现写的样式很容易找，重点是不用在写{}和“：”,使用起来特别方便

>代码热更新，修改代码之后网页无刷新改变，对前端开发来说非常的方便

>PostCss，再也不用去管兼容性的问题了，只针对chrome写css代码，会自动编译生成支持多款浏览器的css代码

>vue-cli使用node配置本地服务器和安装命令，利用npm命令本地运行以及打包

## 目录结构

\<br>├─.idea                                        
\<br>├─build
\<br>│      build.js
\<br>│      check-versions.js
\<br>│      dev-client.js
\<br>│      dev-server.js
\<br>│      utils.js
\<br>│      vue-loader.conf.js
\<br>│      webpack.base.conf.js
\<br>│      webpack.dev.conf.js
\<br>│      webpack.prod.conf.js
\<br>├─node_modules
\<br>│  │  
\<br>│  ├─.bin
\<br>├─src
\<br>│  │  App.vue
\<br>│  │  main.js
\<br>│  │  
\<br>│  ├─assets
\<br>│  │      logo.png
\<br>│  │      
\<br>│  ├─common
\<br>│  │  ├─css
\<br>│  │  │      common.css
\<br>│  │  │      
\<br>│  │  ├─img
\<br>│  │  │      add_1@2x.png
\<br>│  │  │      anonymous.png
\<br>│  │  │      back.png
\<br>│  │  │      bj.png
\<br>│  │  │      default-avatar.png
\<br>│  │  │      detailBg1.png
\<br>│  │  │      entry.png
\<br>│  │  │      error.png
\<br>│  │  │      icon.png
\<br>│  │  │      loading.gif
\<br>│  │  │      prof-sprite-2.png
\<br>│  │  │      share.png
\<br>│  │  │      top-icon.png
\<br>│  │  │      user_1@2x.png
\<br>│  │  │      
\<br>│  │  └─less
\<br>│  │          basic.less
\<br>│  │          index.less
\<br>│  │          mixin.less
\<br>│  │          
\<br>│  ├─components
\<br>│  │  │  NotFound404.vue
\<br>│  │  │  
\<br>│  │  ├─banner
\<br>│  │  │      banner.vue
\<br>│  │  │      
\<br>│  │  ├─column
\<br>│  │  │      Column.vue
\<br>│  │  │      
\<br>│  │  ├─detail
\<br>│  │  │      Detail.vue
\<br>│  │  │      
\<br>│  │  ├─find
\<br>│  │  │      Find.vue
\<br>│  │  │      
\<br>│  │  ├─index
\<br>│  │  │      banner.vue
\<br>│  │  │      Header.vue
\<br>│  │  │      Index.vue
\<br>│  │  │      Nav.vue
\<br>│  │  │      Plus.vue
\<br>│  │  │      scroller-pull.vue
\<br>│  │  │      wrap.vue
\<br>│  │  │      
\<br>│  │  ├─joke
\<br>│  │  │      Joke.vue
\<br>│  │  │      
\<br>│  │  ├─loading
\<br>│  │  │      Loading.vue
\<br>│  │  │      
\<br>│  │  ├─login
\<br>│  │  │      Login.vue
\<br>│  │  │      Login2.vue
\<br>│  │  │      
\<br>│  │  ├─selection
\<br>│  │  │      Selection.vue
\<br>│  │  │      
\<br>│  │  └─video
\<br>│  │          player.vue
\<br>│  │          playVideo.vue
\<br>│  │          Video.vue
\<br>│  │          
\<br>│  ├─router
\<br>│  │      header.js
\<br>│  │      index.js
\<br>│  │      
\<br>│  └─store
\<br>│      │  actions.js
\<br>│      │  eventBus.js
\<br>│      │  get.js
\<br>│      │  index.js
\<br>│      │  mutation-types.js
\<br>│      │  mutations.js
\<br>│      │  store.js
\<br>│      │  
\<br>│      ├─modules
\<br>│      │      header.js
\<br>│      │      selection.js
\<br>│      │      
\<br>│      └─video
\<br>│              mutations.js
\<br>└─static
\<br>    │  .gitkeep
\<br>    │  animate.min.css
\<br>    │  error.png
\<br>    │  idangerous.swiper.scrollbar-2.4.1.css
\<br>    │  idangerous.swiper.scrollbar-2.4.1.min.js
\<br>    │  idangerous.swiper2.7.6.css
\<br>    │  idangerous.swiper2.7.6.js
\<br>    │  jquery-1.10.1.min.js
\<br>    │  loading.gif
\<br>    │  swiper-3.4.2.min.css
\<br>    │  swiper-3.4.2.min.js
\<br>    │  zepto.min.js
\<br>    │  
\<br>    └─css
\<br>            reset.css
            

 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
