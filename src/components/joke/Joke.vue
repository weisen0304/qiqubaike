<template>
  <div class="video">
    <transition name="fade">
      <div class="upd-banner" v-show="list.length === 0">
        <div>已更新{{list.length}}条内容</div>
      </div>
    </transition>

    <div v-show="list.length === 0">
      <Loading></Loading>
    </div>

    <div class="list">
      <div class="list-group">
        <div v-for="item in list" class="list-content">
          <div class="header">
            <img class="avatar">
            <div class="username">{{item.title}}</div>
            <span class="noenter">举报</span>
          </div>
          <div class="text">{{item.desc}}</div>
          <!--<div class="photo border">-->
            <!--<div class="btn"></div>-->
            <!--<img :src="item.cover" class="img">-->
          <!--</div>-->
          <div class="meta">
              <span class="like it-left">
                <i class="icon"></i>
                <span class="num">{{item._incrs.like}}</span>
              </span>
            <span class="dislike it-left">
                <i class="icon"></i>
                <span class="num">{{item._incrs.dislike}}</span>
              </span>
            <span class="comment it-right">
                <i class="icon"></i>
                <span class="num">{{item._incrs.jian}}</span>
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '../loading/Loading'
  export default {
    data () {
      return {
        list: []
      }
    },
    components: {
      Loading
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
      }, 1000)
    },
    methods: {
      backTop () {
        document.body.scrollTop = 99 + 'px'
        console.log('123')
      }
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

  .list {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background: #eaeaea;
    .list-group {
      min-height: 0;
      margin: 30px 10px 0;
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
    }
  }

  .back-Top {
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
</style>
