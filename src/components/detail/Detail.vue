<template>
  <div v-show="isShowDetail" class="p-detail">
    <div class="detail-header">
      <span @click="hideDetail(), goBack()" class="detail-header-back"></span>
      <p class="detail-header-title">
        <span slot="title">奇趣百科</span>
      </p>
      <span class="detail-header-share"></span>
    </div>
    <div>
      <!--detail-content-->
        <div class="detail-content it">
          <div class="header">
            <img class="avatar">
            <div class="username">小贱日报</div>
            <span class="noenter">举报</span>
          </div>
          <div class="text">Vue 提供了 transition 外层包裹容器组件(wrapper component)，可以给下列情形中的任何元素和组件添加进入/离开(enter/leave)过渡</div>
          <div class="photo border">
            <div class="btn"></div>
            <img class="img">
          </div>
          <div class="meta">
              <span class="like it-left">
                <i class="icon active-like"></i>
                <span class="num">66</span>
              </span>
            <span class="dislike it-left">
                <i class="icon active-dislike"></i>
                <span class="num">55</span>
              </span>
            <span class="comment it-right">
                <i class="icon"></i>
                <span class="num">44</span>
              </span>
          </div>
        </div>
      <!--底部按钮-->
      <div class="detail-paginator">
        <div class="prev-btn">上一条</div>
        <div class="next-btn">下一条</div>
      </div>
    </div>
    <!--comment-->
    <div class="comm-wrap">
      <!--热门评论-->
      <h3 class="comm-title sprite comm-title_hot"></h3>
      <div class="hotComm-warp">
        <div class="comm hairlines">
          <!--评论头像-->
          <img class="it-avatar" src="../../common/img/user_1@2x.png">
          <!--评论作者昵称及评论内容-->
          <div class="comm-rbox">
            <p class="comm-author">错觉</p>
            <p class="comm-msg">坐在地上的人，我是谁，我在哪，怎么会有龙卷风，我的车呢</p>
          </div>
          <!--点赞数-->
          <div class="comm-like">47</div>
        </div>
        <div class="comm hairlines">
          <!--评论头像-->
          <img class="it-avatar" src="../../common/img/user_1@2x.png">
          <!--评论作者昵称及评论内容-->
          <div class="comm-rbox">
            <p class="comm-author">错觉</p>
            <p class="comm-msg">坐在地上的人，我是谁，我在哪，怎么会有龙卷风，我的车呢</p>
          </div>
          <!--点赞数-->
          <div class="comm-like">47</div>
        </div>
      </div>
      <!--普通评论-->
      <h3 class="comm-title sprite">
        <span class="comm-total">(60)</span>
      </h3>
      <div class="hotComm-warp">
        <div class="comm hairlines">
          <!--评论头像-->
          <img class="it-avatar" src="../../common/img/user_1@2x.png">
          <!--评论作者昵称及评论内容-->
          <div class="comm-rbox">
            <p class="comm-author">错觉</p>
            <p class="comm-msg">坐在地上的人，我是谁，我在哪，怎么会有龙卷风，我的车呢</p>
          </div>
          <!--点赞数-->
          <div class="comm-like">47</div>
        </div>
        <div class="comm hairlines">
          <!--评论头像-->
          <img class="it-avatar" src="../../common/img/user_1@2x.png">
          <!--评论作者昵称及评论内容-->
          <div class="comm-rbox">
            <p class="comm-author">错觉</p>
            <p class="comm-msg">坐在地上的人，我是谁，我在哪，怎么会有龙卷风，我的车呢</p>
          </div>
          <!--点赞数-->
          <div class="comm-like">47</div>
        </div>
      </div>
      <!--更多说明-->
      <p class="comm-more">更多震惊神论，来奇趣百科</p>
    </div>
    <!--意见反馈-->
    <div class="footer">
      我都这么谦虚了，可以来这里提意见 >
    </div>
  </div>
</template>

<script>
  import bus from '../../store/eventBus'
  export default {
    data () {
      return {
        list: [],
        isShowDetail: '',
        isShowIndex: ''
      }
    },
    created () {
      let self = this
      setTimeout(() => {
        this.$axios.get('/api/list')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              self.list = res.data
//              self.RECEIVE_BANNER({banner: self.banner})
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }, 5000)
    },
    methods: {
      hideDetail () {
//        alert('showDetail:' + this.isShowDetail)
//        alert('showIndex:' + this.isShowIndex)
        this.isShowDetail = !this.isShowDetail
        this.isShowIndex = !this.isShowIndex
        bus.$emit('detailToIndex', this.isShowLogin, this.isShowIndex)
      },
      goBack () {
        this.$router.back()
      }
    },
    mounted () {
      var self = this
      bus.$on('indexToDetail', function (isShowDetail, isShowIndex) {
        self.isShowDetail = isShowDetail
        self.isShowIndex = isShowIndex
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";
  .p-detail {
    /*display: block;*/
    z-index: 1;
    margin: 0;
    padding: 0;
    text-align: left;
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
      .detail-header-back, .detail-header-share {
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
        background-color: rgba(255,176,0,0.1);
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
      .detail-header-share {
        right: 2px;
        background-image: url("../../common/img/share.png");
        background-position: 9px 9px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
      }
    }
    .it{
      position: relative;
      background: #fff;
    }
    .detail-content {
      margin: 60px 10px 0;
      .header {
        position: relative;
        padding: 16px 18px;
        .avatar {
          display: inline-block;
          float: left;
          width: 30px;
          height: 30px;
          margin-right: 5px;
          border-radius: 50%;
          background: url("../../common/img/user_1@2x.png") no-repeat;
          background-size: 30px 30px;
        }
        .username {
          display: inline-block;
          max-width: 250px;
          font-size: 14px;
          line-height: 30px;
          color: #888;
          -webkit-box-flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .noenter {
          display: inline-block;
          float: right;
          padding: 2px;
          margin-top: 6px;
          border: 1px solid #ccc;
          font-size: 12px;
          color: #ccc;
          border-radius: 4px;
        }
      }
      .text {
        margin: 0;
        padding: 0 18px 10px;
        font-size: 15px;
        color: #4e4e4e;
        line-height: 22px;
        word-break: break-all;
        overflow: hidden;
      }
      .photo {
        position: relative;
        padding: 10px 0;
        .border-1px(rgba(0, 0, 0, 0.1));
        .img {
          display: block;
          width: 100%;
          height: 100%;
          background: url(http://image.uc.cn/s/uae/g/0q/product/default.png) 50% 50% no-repeat;
          background-size: 140px 38px;
          background-color: #f4f4f4;
        }
      }
      .meta {
        position: relative;
        height: 40px;
        margin: 0 6px;
        line-height: 40px;
        font-size: 12px;
        color: #888;
        .it-left {
          float: left;
          width: 60px;
          height: 41px;
          line-height: 41px;
        }
        .it-right {
          float: right;
          width: 60px;
          height: 41px;
          line-height: 41px;
        }
        .like {
          position: relative;
          margin-left: 12px;
          .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background: url("../../common/img/icon.png") -25px -100px no-repeat;
            background-size: 250px 237px;
          }
        }
        .dislike {
          .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background: url("../../common/img/icon.png") -75px -100px no-repeat;
            background-size: 250px 237px;
          }
        }
        .comment {
          .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background: url("../../common/img/icon.png") -200px -100px no-repeat;
            background-size: 250px 237px;
          }
          .num {
            display: inline-block;
          }
        }
      }
    }
    .detail-paginator {
      display: -webkit-box;
      margin: 10px;
      font-size: 15px;
      text-align: center;
      .prev-btn, .next-btn {
        height: 50px;
        line-height: 50px;
        border-radius: 2px;
      }
      .prev-btn {
        position: relative;
        margin-right: 6px;
        -webkit-box-flex: 2;
        background: #fff;
        color: #aaa;
      }
      .prev-btn::before {
        content: '';
        display: inline-block;
        width: 28px;
        height: 15px;
        position: relative;
        top: 3px;
        background-position: -100px -195px;
        background-image: url("../../common/img/icon.png");
        background-repeat: no-repeat;
        background-size: 250px 237.5px;
      }
      .next-btn {
        position: relative;
        margin-left: 6px;
        -webkit-box-flex: 3;
        background: #f8a514;
        color: #fff;
        text-align: center;
      }
      .next-btn::after {
        content: '';
        display: inline-block;

        position: relative;
        width: 28px;
        height: 15px;
        top: 2px;
        margin-left: 8px;
        background-position: -100px -175px;
        background-image: url("../../common/img/icon.png");
        background-repeat: no-repeat;
        background-size: 250px 237.5px;
      }
    }
    .comm-wrap {
      background: #fff;
      margin: 10px 10px 0;
      padding: 10px;
      .comm-title {
        display: inline-block;
        margin-left: 6px;
        width: 44px;
        height: 24px;
      }
      .sprite {
        background-image: url("../../common/img/icon.png");
        background-size: 250px 237.5px;
        background-repeat: no-repeat;
      }
      .comm-title_hot {
        background-position: -200px -50px;
      }
      .hotComm-warp {
        margin: 0 -10px;
        padding: 0 10px;
        .comm {
          position: relative;
          padding: 10px 6px;
          border-bottom: 1px #eaeaea solid;
          .it-avatar {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            margin-right: 10px;
            background: url("../../common/img/default-avatar.png") no-repeat;
            background-size: 30px 30px;
          }
          .comm-rbox {
            padding-left: 42px;
            .comm-author {
              width: 80%;
              min-height: 13px;
              margin: 0;
              color: #888;
              font-size: 13px;
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
            }
            .comm-msg {
              min-height: 18px;
              margin: 10px 0 0;
              color: #4e4e4e;
              font-size: 13px;
              line-height: 1.4;
              -ms-word-wrap: break-word;
              word-wrap: break-word;
            }
          }
          .comm-like {
            position: absolute;
            top: 10px;
            right: 6px;
            z-index: 1;
            width: 15px;
            height: 15px;
            padding-left: 20px;
            color: #4e4e4e;
            font-size: 12px;
            text-align: center;
          }
          .comm-like::before {
            content: '';
            width: 15px;
            height: 15px;
            position: absolute;
            top: -2px;
            left: 0;
            background-position: -200px -175px;
            background-image: url("../../common/img/icon.png");
            background-size: 250px 237.5px;
            background-repeat: no-repeat;
          }
        }
        .comm .it-avatar {
          position: absolute;
          top: 10px;
          left: 6px;
          z-index: 1;
        }
      }
      .comm-more {
        margin: 0 -10px -10px;
        padding: 15px 0;
        background-color: #f4f4f4;
        color: #4e4e4e;
        font-size: 14px;
        text-align: center;
      }
    }
    .comm-title:nth-of-type(2) {
      margin-top: 10px;
    }
    .comm-title {
      display: inline-block;
      margin-left: 6px;
      width: 44px;
      height: 24px;
      background-position: -200px -76px;
      background-image: url("../../common/img/icon.png");
      background-size: 250px 237.5px;
      background-repeat: no-repeat;
      .comm-total {
        display: inline-block;
        margin-left: 46px;
        margin-top: 6px;
        color: #888;
        font-size: 15px;
      }
    }
    .footer {
      position: relative;
      width: 210px;
      height: 24px;
      margin: 60px auto 50px;
      padding-left: 46px;
      line-height: 24px;
      font-size: 12px;
      color: #888;
      background: #cbcbcb;
      border-radius: 5px;
    }
    .footer::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 47px;
      height: 31px;
      background-position: -150px -200px;
      background-image: url("../../common/img/icon.png");
      background-repeat: no-repeat;
      background-size: 250px 237.5px;
    }
  }
</style>
