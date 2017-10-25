<template>
  <div>
    <video id="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" height="414"
           width="375">
      your browser does not support the video tag
    </video>
    <!--<span class="ico ico-sound" :class="{ active: isMute }" v-on:click="closeSoundClick()"></span>-->
    <!--<span class="ico ico-skip"></span>-->
    <!--<span class="ico ico-video" :class="{ hide: isPlay }" v-on:click="playClick()"></span>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        _dom: '',
        videoSrc: 'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
        videoImg: 'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
        playStatus: '',
        muteStatus: '',
        isMute: true,
        isPlay: false
      }
    },
    methods: {
      playClick () {
        this.isPlay = !this.isPlay
        this.playStatus = 'autoplay'
      },
      closeSoundClick () {
        this.isMute = !this.isMute
        if (this.isMute) {
          this.muteStatus = ''
        } else {
          this.muteStatus = 'muted'
        }
      },
      playC () {
        this._dom = document.getElementById('myvideo')
        this.isPlay = !this.isPlay
        this._dom.play()
      },
      showOtherVideo () {
        let _this = this
        setTimeout(function () {
          _this.flag = _this._dom.paused
          if (!_this.flag) {
            _this.showOtherVideo()
            console.log(_this.flag)
          }
        }, 1000)
      }
    }
  }
</script>

