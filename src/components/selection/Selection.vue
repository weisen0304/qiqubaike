<template>
  <div class="s-body">
    <!--更新栏-->
    <transition name="fade">
      <div class="upd-banner" v-show="list.length === 0">
        <div>已更新{{list.length}}条内容</div>
      </div>
    </transition>
    <!--加载栏-->
    <div v-show="banner.length === 0">
      <Loading></Loading>
    </div>

      <!--轮播图-->
      <banner :banner="banner"></banner>
      <!--内容栏-->
      <div ref="menuWrapper" v-if="banner.length" class="list-fixedHead">
        <div class="list">
          <div class="list-group">
            <div ref="listWrapper" class="list-top item-top item-icon">
              <div class="item-content">
                <img class="content-l" :src="list[0].cover">
                <div class="content-r">
                  <p class="title">{{list[0].title}}</p>
                  <p class="desc">{{list[0].desc}}</p>
                </div>
              </div>
              <div class="item-meta">
                <div class="left">
                  <i class="opinion"></i>
                  <span @click="showDetail()" class="keng">{{list[0]._incrs.keng}}</span>
                </div>
                <div class="right">
                  <i class="menment"></i>
                  <span @click="showDetail()" class="jian">{{list[0]._incrs.jian}}</span>
                </div>
              </div>
            </div>
            <div v-for="item in list" class="list-content">
              <div class="header">
                <img class="avatar">
                <div class="username">{{item.title}}</div>
                <span @click="showWrap()" class="noenter">举报</span>
              </div>
              <router-link to="/detail">
                <div @click="showDetail()" class="text">{{item.desc}}</div>
                <div class="photo border">
                  <div class="btn"></div>
                  <img @click="showDetail()" v-lazy="item.cover" :src="item.cover" class="img">
                </div>
              </router-link>
              <div class="meta">
              <span class="like it-left">
                <i @click="likeClick($event,$index), item._incrs.like += 1" class="icon active-like"></i>
                <span class="num">{{item._incrs.like}}</span>
              </span>
                <span class="dislike it-left">
                <i @click="dislikeClick($event,$index), item._incrs.dislike += 1" class="icon active-dislike"></i>
                <span class="num">{{item._incrs.dislike}}</span>
              </span>
                <span class="comment it-right">
                <router-link to="/detail">
                  <i @click="showDetail()" class="icon"></i>
                <span class="num">{{item._incrs.jian}}</span>
                </router-link>
              </span>
              </div>
            </div>
            <!--点击动画-->
            <transition name="p-fade">
              <div v-show="showPlus" class="plus">屌+1</div>
            </transition>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import Loading from '../loading/Loading'
  import banner from '../banner/banner'
  import bus from '../../store/eventBus'
//  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        banner: [],
        list: [],
        showPlus: false,
        isShowWrap: this.$store.state.isShowWrap,
        isShowDetail: this.$store.state.isShowDetail,
        isShowIndex: this.$store.state.isShowIndex,
        topStatus: ''
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
        this.scroll()
      })
      let self = this
      setTimeout(() => {
        this.$axios.get('/api/banner')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              self.banner = res.data
//              self.RECEIVE_BANNER({banner: self.banner})
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }, 1000)
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
      }, 1000)
    },
    computed: {
    },
    methods: {
      scroll () {
        window.addEventListener('scroll', () => {
//          console.log(document.body.scrollTop)
//          this.backShow()
        })
      },
      initScrollTemplate () {
        if (this.$refs.listWrapper) {
          this.listScroll = new IScroll(this.$refs.listWrapper, {
            click: true
          })
        }
      },
      likeClick: function (event) {
        let like = event.target
        $(function () {
          $('.plus').css('display', 'block').text('屌+1').addClass('animated bounceInDown')
          $('.active-like').addClass('animated flip')
          like.style.backgroundColor = 'yellow'
//          like.classNanme = 'animated bounceOutLeft'
          setTimeout(function () {
//            this.showPlus = false
            $('.plus').css('display', 'none').removeClass('animated bounceInDown')
            $('.active-like').removeClass('animated flip')
          }, 1500)
        })
      },
      dislikeClick: function (event) {
        let dislike = event.target
        $(function () {
          $('.plus').css('display', 'block').text('坑+1').addClass('animated bounceInDown')
          $('.active-dislike').addClass('animated flip')
          dislike.style.backgroundColor = 'yellow'
          setTimeout(function () {
//            this.showPlus = false
            $('.plus').css('display', 'none').removeClass('animated bounceInDown')
            $('.active-dislike').removeClass('animated flip')
          }, 1500)
        })
      },
      showWrap () {
        this.isShowWrap = true
        alert(this.isShowWrap)
        bus.$emit('userDefinedEvent', this.isShowWrap)
      },
      showDetail () {
        this.isShowIndex = !this.isShowIndex
        this.isShowDetail = !this.isShowDetail
//        alert('showDetail:' + this.isShowDetail)
//        alert('showIndex:' + this.isShowIndex)
        bus.$emit('indexToDetail', this.isShowIndex, this.isShowDetail)
      }
    },
    components: {
      Loading,
      banner
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

  .upd-banner {
    /*display: none;*/
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 20;
    width: 375px;
    height: 40px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: all 5s;
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }
  }

  .list-fixedHead {
    .list {
      width: 100%;
      overflow: hidden;
      padding: 0;
      margin: 0;
      background: #eaeaea;
      .list-group {
        min-height: 0;
        margin: 30px 10px 0;
        .list-top.item-top.item-icon {
          position: relative;
          margin-top: 5px;
          margin-bottom: 10px;
          padding: 5px;
          background: #fff;
          .item-content {
            display: flex;
            padding-bottom: 10px;
            .border-1px(rgba(0, 0, 0, 0.1));
            .content-l {
              flex: 0 0 112px;
              width: 92px;
              height: 92px;
              margin-right: 10px;
              display: block;
              background-size: 50% 50%;
              background-repeat: no-repeat;
              background-size: 49px 24px;
              background-color: #f4f4f4;
            }
            .content-r {
              flex: 1;
              position: relative;
              height: 92px;
              margin-top: 4px;
              text-align: left;
              .title {
                box-sizing: border-box;
                padding: 10px;
                max-width: 212px;
                border-radius: 3px;
                font-size: 14px;
                font-weight: 700;
                color: #333;
                background: #eaeaea;
                word-break: break-all;
                /*white-space: nowrap;*/
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .desc {
                margin: 10px 0;
                padding: 0 50px 0 10px;
                max-width: 180px;
                font-size: 12px;
                color: #888;
                word-break: break-all;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .content-r::after {
              content: '';
              position: absolute;
              right: 60px;
              bottom: 31px;
              z-index: 1;
              height: 0;
              width: 0;

            }
          }
          .item-meta {
            display: flex;
            padding: 5px;
            border: 1px solid rgba(255, 255, 255, 0);
            color: #aaa;
            .left {
              flex: 1;
              .opinion {
                display: inline-block;
                width: 22px;
                height: 22px;
                line-height: 40px;
                vertical-align: top;
                background-image: url("../../common/img/icon.png");
                background-position: -150px -100px;
                background-size: 250px 242px;
              }
              .keng {
                display: inline-block;
                width: 22px;
                height: 22px;
                line-height: 22px;
              }
            }
            .right {
              flex: 1;
              .menment {
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                background-image: url("../../common/img/icon.png");
                background-position: -200px -100px;
                background-size: 250px 238px;
              }
              .jian {
                display: inline-block;
                width: 22px;
                height: 22px;
                line-height: 22px;
              }
            }
          }
        }
        .item-top::before {
          content: '';
          position: absolute;
          top: -14px;
          left: -8px;
          z-index: 10;
          width: 37px;
          height: 31px;
          background-position: -50px -125px;
          background-image: url("../../common/img/icon.png");
          background-size: 250px 237.5px;
          background-repeat: no-repeat;
        }
        .item-icon::after {
          content: '';
          position: absolute;
          right: 12px;
          bottom: 50px;
          z-index: 1;
          background-image: url("../../common/img/top-icon.png");
          background-size: 48px 47px;
          background-repeat: no-repeat;
          width: 48px;
          height: 47px;
        }

        .list-content {
          position: relative;
          margin-bottom: 10px;
          background: #fff;
          text-align: left;
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
          :before {
            background-image: url("../../common/img/icon.png");
            background-size: 250px 237.5px;
            background-repeat: no-repeat;
          }
        }
        .plus {
          width: 50px;
          height: 50px;
          position: fixed;
          left: 50%;
          top: 50%;
          margin-top: -25px;
          margin-left: -25px;
          border-radius: 4px;
          z-index: 30;
          line-height: 50px;
          background-color: rgba(255, 171, 0, 0.8);
          color: #fff;
          opacity: 1;
          transition: opacity 0.5s;
          transform: translateZ(0);
        }
      }
    }
  }
</style>
