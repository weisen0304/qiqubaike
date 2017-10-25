<template>
  <div v-show="isShowWrap" class="fb-wrap">
    <div class="fb-cont">
      <span class="fb-item">淫秽色情</span>
      <span class="fb-item">政治风险</span>
      <span class="fb-item">垃圾广告</span>
      <span class="fb-item">煽情骗赞</span>
      <span class="fb-item">我看过了</span>
      <span class="fb-item">内容无聊</span>
      <span class="fb-item">其他</span>
      <p @click="hideWrap()" class="fb-btn">取消</p>
    </div>
  </div>
</template>

<script>
  import bus from '../../store/eventBus'
  export default {
    data () {
      return {
        isShowWrap: ''
      }
    },
    mounted () {
      var self = this
      bus.$on('userDefinedEvent', function (isShowWrap) {
        self.isShowWrap = isShowWrap
      })
    },
    methods: {
      hideWrap () {
        this.isShowWrap = !this.isShowWrap
      }
    }
  }
</script>

<style lang="less" scoped>
  .fb-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 50;
    background: rgba(0,0,0,0.5);
    .fb-cont {
      width: 250px;
      height: 205px;
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -122.5px;
      margin-top: -102.5px;
      z-index: 1;
      text-align: center;
      transition: opacity 0.5s;
      transform: translateZ(0);
      padding-top: 15px;
      background: #fff;
      border-radius: 4px;
      color: #333;
      .fb-item {
        position: relative;
        float: left;
        width: 50%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        font-size: 15px;
      }
      .fb-item::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        margin: -2px 7px 0 18px;
        border: 1px solid #888;
        vertical-align: middle;
      }
      /*.fb-item::after {*/
        /*content: '';*/
        /*position: absolute;*/
        /*left: 20px;*/
        /*top: 12px;*/
        /*z-index: 1;*/
        /*width: 12px;*/
        /*height: 12px;*/
        /*border-radius: 100%;*/
        /*background: #ffab00;*/
      /*}*/
      .fb-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        margin: 0;
        height: 40px;
        font-size: 15px;
        line-height: 40px;
        border-top: 1px #eaeaea solid;
      }
    }
  }
</style>
