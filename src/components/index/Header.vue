<template>
  <div class="header-cont">
    <transition name="move">
      <div v-show="showHeader" style="display: block" class="header header-nohead">
        <router-link to="/login">
          <div @click="showLogin()" class="user"></div>
        </router-link>
        <div @click="changeBtn" class="add">
        </div>
        <ul class="btn" v-show="addShow">
          <li class="item">审核</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  //  import $ from '../assets/js/jquery.js'
  import bus from '../../store/eventBus'
  export default {
    data () {
      return {
        addShow: false,
        headHide: true,
        isShowLogin: this.$store.state.isShowLogin
      }
    },
    created () {
      this.$nextTick(() => {
        this.scroll()
        this.fade()
      })
    },
    methods: {
      showLogin () {
//        alert(this.isShowLogin)
        bus.$emit('userDefinedEvent', !this.isShowLogin)
      },
      scroll () {
        window.addEventListener('scroll', () => {
//          console.log($('#header-cont'))
        })
      },
      changeBtn () {
        this.addShow = !this.addShow
      },
      showHeader () {
        if (document.body.scrollTop > 40) {
          this.headHide = false
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

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
</style>
