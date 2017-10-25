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
          <div class="photo border">
            <video ref="video" id="myvideo" :src="videoSrc" :poster="videoImg"
                   :muted="muteStatus" :autoplay="isPlay"
                   height="414" width="375"
                   :controls="controls">
              your browser does not support the video tag
            </video>
            <div class="btn" @click="playClick($event, $index)" v-show="!isPlay"></div>
            <p class="duration">0:59</p>
            <p class="play">300次播放</p>
          </div>
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
  import player from './playVideo.vue'
  import Loading from '../../components/loading/Loading.vue'
  //  import VideoPlayer from '../../../node_modules/vue-video-player/src/player'
  export default {
    data () {
      return {
        list: [],
        _dom: '',
        videoSrc: 'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
        videoImg: 'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
        playStatus: '',
        muteStatus: '',
        controls: false,
        isMute: true,
        isPlay: false
      }
    },
    components: {
//      VideoPlayer,
      player,
      Loading: Loading
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
      setTimeout(() => {
        this.$axios.get('/api/video')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              self.video = res.data
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
      },
//      playClick () {
//        this._dom = this.$refs.video[0]
//        console.log(this.$refs.video)
//        this.isPlay = !this.isPlay
//        this._dom.play()
//        this.controls = !this.controls
//      },
      playClick: function (event) {
        let play = event.target
        let video = event.path[1].firstChild
        console.log(play, video)
        if (video.play()) {
          video.play()
          video.controls = 'controls'
          play.style.display = 'none'
        } else {
          video.pause()
          play.style.display = 'block'
        }
        if (!video.pause()) {
          video.play()
          play.style.display = 'block'
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

  video {
    width: 375px;
  }

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
          .btn {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 45px;
            height: 45px;
            margin-left: -22.5px;
            margin-top: -22.5px;
            background-image: url("../../common/img/icon.png");
            background-size: 250px 237.5px;
            background-repeat: no-repeat;
            background-position: -200px -125px;
          }
          .img {
            display: block;
            width: 100%;
            height: 100%;
            background: url(http://image.uc.cn/s/uae/g/0q/product/default.png) 50% 50% no-repeat;
            background-size: 140px 38px;
            background-color: #f4f4f4;
          }
          .duration {
            position: absolute;
            right: 0;
            bottom: 10px;
            width: 45px;
            height: 22px;
            z-index: 1;
            background: rgba(0, 0, 0, 0.5);
            color: #ddd;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
          }
          .play {
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 80px;
            height: 22px;
            z-index: 1;
            background: rgba(0, 0, 0, 0.5);
            color: #ddd;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
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
