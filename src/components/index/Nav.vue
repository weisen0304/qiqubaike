<template>
  <div class="header-nav">
    <transition name="fade">
      <div style="display: block" class="nav" ref="headWrapper">
        <ul class="nav-ul">
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
            <router-link to="/Find">发现</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Column">奇趣专栏</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headerShow: true
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
        this.scroll()
      })
    },
    methods: {
      scroll () {
        window.addEventListener('scroll', () => {
//          console.log(document.body.scrollTop)
          this.getHeaderHeight()
        })
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
    }
  }
</script>

<style lang="less" scoped>
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
</style>
