<template>
  <div id="app">
    <transition name="fade">
      <div class="upd-banner" v-show="find.length === 0">
        <div>已更新{{find.length}}条内容</div>
      </div>
    </transition>

    <div v-show="find.length === 0">
      <Loading></Loading>
    </div>

    <div class="list-pos">
      <div class="list">
        <div class="list-item border" v-for="item in find">
          <img class="img" :src="item.tag_img">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
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
        list: [],
        find: []
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
      }, 1000)
      setTimeout(() => {
        this.$axios.get('/api/find')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              self.find = res.data
//              self.RECEIVE_BANNER({banner: self.banner})
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }, 1000)
    },
    components: {
      Loading
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

  #app {
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

    .list-pos {
      width: 100%;
      height: 1000px;
      background-color: #ddd;
    }
    .list {
      background: #fff;
      margin: 10px 10px 0;
      .list-item:nth-of-type(odd) {
        /*border-right: 1px solid #7e8c8d;*/
      }
      .list-item:nth-of-type(odd)::before {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background: #d6d6d6;
        transform: scaleX(0.5);
      }
      .list-item {
        background: #fff;
        position: relative;
        float: left;
        width: 49.5%;
        padding-bottom: 50%;
        .border-1px(rgba(0, 0, 0, 0.1));
        .img, .title, .desc {
          position: absolute;
          left: 10px;
          right: 10px;
          z-index: 1;
          text-align: center;
        }
        .img {
          width: 70px;
          height: 70px;
          border-radius: 100%;
          top: 12%;
          margin: 0 auto;
        }
        .title {
          top: 62%;
          color: #333;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .desc {
          top: 72%;
          font-size: 12px;
          color: #888;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .list::before {
      content: '';
      display: table;
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
  }
</style>
