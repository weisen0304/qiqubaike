<template>
  <div v-show="isShowLogin" class="profile">
    <div class="detail-header">
        <span @click="hideLogin(), goBack()" class="detail-header-back"></span>
      <p class="detail-header-title">
        <span slot="title">个人管理</span>
      </p>
    </div>
    <div class="prof-cont">
      <div class="prof-user border">
        <img class="prof-avatar galleryLink" src="../../common/img/anonymous.png">
        <p class="prof-username">点击头像登录</p>
      </div>
      <div class="prof-row border">
        <div class="prof-ico"></div>
        <div class="prof-txt">我的评论</div>
      </div>
      <div class="prof-row">
        <div class="prof-ico"></div>
        <div class="prof-txt">意见反馈</div>
      </div>
    </div>
    <p class="prof-meta">温馨提示：账号管理请前往浏览器个人中心</p>
  </div>
</template>

<script>
  import bus from '../../store/eventBus'
  export default {
    data () {
      return {
        isShowIndex: '',
        isShowLogin: ''
      }
    },
    created () {
      this.$nextTick(() => {
        this.login()
      })
    },
    methods: {
      hideLogin () {
//        alert('showLogin:' + this.isShowLogin)
//        alert('showIndex:' + this.isShowIndex)
        this.isShowLogin = !this.isShowLogin
        this.isShowIndex = !this.isShowIndex
        bus.$emit('loginToIndex', this.isShowLogin, this.isShowIndex)
      },
      goBack () {
        this.$router.back()
      }
    },
    mounted () {
      var self = this
      bus.$on('indexToLogin', function (isShowLogin, isShowIndex) {
        self.isShowLogin = isShowLogin
        self.isShowIndex = isShowIndex
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

  .profile {
    position: relative;
    margin: 0 auto;
    text-align: center;
    max-width: 375px;
    .detail-header {
      position: fixed;
      max-width: 375px;
      margin: 0 auto;
      top: 0;
      left: 0;
      right: 0;
      z-index: 30;
      /*height: 50px;*/
      background-image: url("../../common/img/detailBg1.png");
      background-size: 385px 50px;
      background-position: 50% 0;
      background-repeat: no-repeat;
      border-bottom: 1px solid #d5ba75;
      .detail-header-back {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 50px;
        height: 50px;
      }
      .detail-header-back {
        left: 2px;
        background-image: url("../../common/img/back.png");
        background-position: 9px 9px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
      }
      .detail-header-title {
        background-color: rgba(255, 176, 0, 0.1);
        height: 50px;
        margin: 0 auto;
        text-align: center;
        line-height: 54px;
        font-size: 18px;
        color: #000;
        font-weight: 600;
        letter-spacing: 4px;
        p {
          display: inline-block;
        }
      }
    }
    .prof-cont {
      margin: 10px;
      margin-top: 60px;
      background: #fff;
      font-size: 14px;
      .prof-user {
        /*height: 90px;*/
        padding: 30px 0;
        text-align: center;
        .border-1px(rgba(0, 0, 0, 0.1));
        .prof-avatar {
          width: 55px;
          height: 55px;
          border-radius: 100%;
        }
        .prof-username {
          color: #ffab00;
          margin-top: 18px;
        }
      }
      .prof-row {
        display: -webkit-box;
        /*height: 64px;*/
        padding: 13.5px 12px;
        .border-1px(rgba(0, 0, 0, 0.1));
        .prof-ico {
          -webkit-box-flex: 1;
        }
        .prof-ico::after {
          content: '';
          background-position: 0 -111px;
          display: block;
          width: 37px;
          height: 37px;
          background-size: 74px 148px;
          background-image: url("../../common/img/prof-sprite-2.png");
        }
        .prof-txt {
          position: relative;
          -webkit-box-flex: 12;
          height: 37px;
          line-height: 38px;
          text-align: left;
          color: #4e4e4e;
        }
        .prof-txt::after {
          content: '';
          width: 6px;
          height: 6px;
          position: absolute;
          top: 50%;
          right: 0;
          z-index: 1;
          margin-top: -3px;
          border-bottom: 1px solid #eaeaea;
          border-right: 1px solid #eaeaea;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
    }
    .prof-meta {
      margin: 20px 0;
      color: #888;
      font-size: 12px;
      text-align: center;
    }
  }
</style>
