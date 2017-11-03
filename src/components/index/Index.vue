<template>
  <div v-show="!isShowIndex" class="index">
    <!--头部-->
    <div class="header">
      <div class="header-cont">
        <transition name="move">
          <div class="header header-nohead">
            <router-link to="/login">
              <div @click="showLogin()" class="user"></div>
            </router-link>
            <div @click="changeBtn()" class="add">
            </div>
            <ul class="btn" v-show="addShow">
              <li class="item">审核</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <!--导航栏-->
    <div class="header-nav">
      <transition name="fade">
        <div class="nav" ref="headWrapper">
          <ul class="nav-ul">
            <!--<mt-badge type="error">3</mt-badge>-->
            <li class="nav-item">
              <router-link to="/Selection">精选</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Video">视频</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Joke">段子</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Find">发现<span class="badge"></span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Column">奇趣专栏</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <!--body-->

    <transition :name="direction" mode="out-in">
      <mt-loadmore ref="loadmore" :top-method="loadTop" @top-status-change="handleTopChange">
        <router-view class="app-view" wechat-title>
        </router-view>
      </mt-loadmore>
    </transition>
    <!--底部-->
    <p class="footerLine border" style="text-align: center; font-size: 14px; color: #ccc;margin: 5px auto">
      兄弟，我可是有底线的</p>
    <!--传送门-->
    <transition name="move">
      <div @click="entryOpen()">
        <img class="advertise" src="../../common/img/entry.png">
      </div>
    </transition>
    <!--返回顶部-->
    <div v-show="showBack" @click="backTop()" class="backTop"></div>
    <!--举报栏-->
    <Wrap></Wrap>
  </div>
</template>

<script>
  import wrap from './wrap'
  import bus from '../../store/eventBus'
  import Loadmore from 'mint-ui'
  export default {
    data () {
      return {
        showBack: false,
        showEntry: false,
        isShowIndex: this.$store.state.isShowIndex,
        isShowLogin: this.$store.state.isShowLogin,
        addShow: false,
        headerShow: true,
        getScoreLog: [],
        pageNo: 1,
        allLoaded: false,
        bottomText: '上拉加载更多...',
        bottomDropText: '快点释放我！！',
        totalCount: ''
      }
    },
    computed: {
      direction () {
        const viewDir = this.$store.state.viewDirection
        let tranName = ''
        if (viewDir === 'left') {
          tranName = 'view-out'
        } else if (viewDir === 'right') {
          tranName = 'view-in'
        } else {
          tranName = 'fade'
        }
        return tranName
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
        this.scroll()
      })
      $(function () {
        $(document).scroll(function () {
          if (document.body.scrollTop < 600) {
            $('.backTop').css('display', 'none')
          } else {
            $('.backTop').css('display', 'block')
          }
        })
      })
    },
    methods: {
      loadTop () {
        this.$refs.loadmore.onTopLoaded()
//        console.log(this.$refs.loadmore)
      },
      loadBottom () {
//        this.allLoaded = true // 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded()
      },
      handleTopChange (status) {
        this.toStatus = status
        console.log(this.toStatus)
      },
      scroll () {
        window.addEventListener('scroll', () => {
//          console.log(document.body.scrollTop)
          this.getHeaderHeight()
        })
      },
      showLogin () {
        this.isShowIndex = !this.isShowIndex
        this.isShowLogin = !this.isShowLogin
//        alert(this.isShowIndex)
//        alert(this.isShowLogin)
        bus.$emit('indexToLogin', this.isShowLogin, this.isShowIndex)
      },
      backTop () {
        document.body.scrollTop = 99 + 'px'
      },
      entryOpen () {
        alert(this.isShowLogin)
        $(function () {
          this.showEntry = !this.showEntry
          if (this.showEntry) {
            $('.advertise').css('right', 0)
          } else {
            $('.advertise').css('right', -22)
          }
        })
      },
      changeBtn () {
        this.addShow = !this.addShow
      },
      initScrollTemplate () {
        if (this.$refs.headWrapper) {
//          console.log(this.$refs.headWrapper)
          this.getHeaderHeight()
        }
      },
      getHeaderHeight () {
        let nav = this.$refs.headWrapper
        let top = document.body.scrollTop
//        console.log(top)
        if (top >= 99 / 2) {
          nav.style.position = 'fixed'
          this.headerShow = false
          nav.style.top = 0 + 'px'
        } else if (top < 99) {
          nav.style.position = 'absolute'
//          this.headerShow = true
          nav.style.top = 99 + 'px'
        }
      }
    },
    components: {
      Wrap: wrap,
      Loadmore
    },
    mounted () {
      var self = this
      bus.$on('loginToIndex', function (isShowLogin, isShowIndex) {
        self.isShowLogin = isShowLogin
        self.isShowIndex = isShowIndex
      })
      bus.$on('indexToDetail', function (isShowDetail, isShowIndex) {
        self.isShowDetail = isShowDetail
        self.isShowIndex = isShowIndex
      })
      bus.$on('detailToIndex', function (isShowDetail, isShowIndex) {
        self.isShowDetail = isShowDetail
        self.isShowIndex = isShowIndex
      })
    }
  }
</script>

<style>
  /*图片加载中...*/
  img[lazy=loading] {
    width: 100px;
    height: 100px;
    background-position: center center !important;
    background: url("../../common/img/loading.gif");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  img[lazy=error] {
    width: 100px;
    height: 100px;
    background-position: center center !important;
    background: url("../../common/img/error.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  img[lazy=loaded] {
    width: 100px;
    height: 100px;
    background-position: center center !important;
    background: url("http://cdn-img.easyicon.net/image/mix.png");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: green;
  }

  /*
   or background-image
   */
  .yourclass[lazy=loading] {
    /*your style here*/
  }

  .yourclass[lazy=error] {
    /*your style here*/
  }

  .yourclass[lazy=loaded] {
    /*your style here*/
  }
</style>

<style lang="less" scoped>
  .header {
    position: relative;
    z-index: 8;
    width: 100%;
    height: 139px;
    background: url("../../common/img/bj.png") 50% 0 no-repeat;
    overflow: hidden;
    transition: all 1s;
    top: 0px;
    background-size: 100% 139px;
    &.move.enter &.move.leave.to {
      transform: translateY(-139px);
    }
    .user, .add {
      position: absolute;
      width: 32px;
      height: 32px;
      background-size: 32px 32px;
      background-position: 0 0 !important;
    }
    .user {
      left: 0;
      margin: 32px 0 0 12px;
      background-image: url("../../common/img/user_1@2x.png") !important;
    }
    .add {
      right: 0;
      margin: 32px 12px 0 0;
      background-image: url("../../common/img/add_1@2x.png") !important;
    }
    .btn {
      position: absolute;
      top: 70px;
      right: 15px;
      z-index: 9;
      padding: 0;
      font-size: 14px;
      color: #4e4e4e;
      background: #fff;
      box-shadow: 0 0.8px 4px 0 rgba(9, 5, 7, 0.235);
      list-style: none;
      text-align: center;
      border-radius: 2px;
      .item {
        border-top: 0;
        background: 0 0;
        width: 60px;
        height: 20px;
        padding: 5px;
        line-height: 20px;
        position: relative;
        z-index: 1000;
      }
      .item::before {
        content: '';
        width: 21px;
        height: 24px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        background-image: url("../../common/img/icon.png");
        background-size: 250px 237.5px;
        background-repeat: no-repeat;
        background-position: -150px -175px;
      }
    }
    .btn::before {
      content: '';
      position: absolute;
      top: -5px;
      right: 8px;
      width: 10px;
      height: 10px;
      background: #fff;
      transform: rotate(45deg);
      box-shadow: -2px -2px 4px 0 rgba(9, 5, 7, 0.1);
    }

    .detail {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      -webkit-backdrop-filter: blur(10px);
      overflow: auto;
      z-index: 999;
      transition: all 0.5s;
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
    }
  }

  .nav {
    z-index: 999;
    position: absolute;
    width: 100%;
    max-width: 375px;
    top: 99px;
    overflow: hidden;
    background-color: rgb(255, 176, 0);
    transition: all 0.1s;
    /*transform: translateY(-99px);*/
    &.fade.enter &.fade.leave.to {
      /*top: -109px;*/
    }
    .nav-ul {
      display: flex;
      .nav-item {
        position: relative;
        flex: 1;
        line-height: 40px;
        font-size: 16px;
        .badge {
          width: 6px;
          height: 6px;
          background: red;
          border: 1px solid #fff;
          border-radius: 50%;
          position: absolute;
          right: 2px;
          top: 8px;
        }
        & > a {
          display: block;
          color: #0f0f0f;
          &.active {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
  }

  .swiper-contaoner {
    width: 100%;
    .child-view {
      /*position: absolute;*/
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
    .silde-left-enter, .slide-right-leave-active {
      /*opacity: 0;*/
      transform: translate(100%, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      /*opacity: 0;*/
      transform: translate(-30px, 0);
    }
  }

  .advertise {
    position: fixed;
    width: 56px;
    height: 100px;
    right: -22px;
    bottom: 70px;
    z-index: 999;
    transition: transform 2s;
  }

  .backTop {
    position: fixed;
    right: 10px;
    bottom: 50px;
    z-index: 1000;
    width: 35px;
    height: 35px;
    background-position: -100px -125px;
    background-image: url("../../common/img/icon.png");
    background-size: 250px 237.5px;
    background-repeat: no-repeat;
  }
</style>

<style lang="scss" scoped>
  // Variables
  $AnimateHook: "animated";
  $AnimateDuration: 0.8s;

  // Mixins

  // Base Style
  .#{$AnimateHook} {
    -webkit-animation-duration: $AnimateDuration;
    animation-duration: $AnimateDuration;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    // Modifier for infinite repetition
    &.infinite {
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }

  }

  // Slide
  @-webkit-keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

  }

  @keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

  }

  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
  }

  @-webkit-keyframes slideInRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

  }

  @keyframes slideInRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

  }

  .slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
  }

  @-webkit-keyframes slideOutLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

  }

  @keyframes slideOutLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

  }

  .slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
  }

  @-webkit-keyframes slideOutRight {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

  }

  @keyframes slideOutRight {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

  }

  .slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
  }

  @-webkit-keyframes inRight {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

  }

  @keyframes inRight {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

  }

  @-webkit-keyframes outLeft {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

  }

  @keyframes outLeft {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }

  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .view-in-enter-active,
  .view-out-leave-active {
    position: absolute;
    top: 0;
    width: 100%;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .view-in-enter-active {
    -webkit-animation-name: inRight;
    animation-name: inRight;
  }

  .view-out-leave-active {
    -webkit-animation-name: outLeft;
    animation-name: outLeft;
  }
</style>
