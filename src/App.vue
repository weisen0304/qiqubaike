<template>
  <div id="app">
    <!--主页路由页面-->
    <Index class="index"></Index>
    <!--登录页面-->
    <Login class="login"></Login>
    <!--评论-->
    <detail class="detail"></detail>
  </div>
</template>

<script>
  import index from './components/index/Index'
  import login from './components/login/Login'
  import swiper from 'vue-awesome-swiper'
  import detail from './components/detail/Detail'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.$nextTick(() => {
      })
    },
    components: {
      Login: login,
      Index: index,
      swiper,
      detail
    }
  }
</script>


<style lang="less">
  #app {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    max-width: 375px;

  }
</style>
