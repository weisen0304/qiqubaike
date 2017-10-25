<template>
  <div id="MyScroller" class="main">
    <div class="warpper">
      <div id="PullDown" class="scroller-pullDown" style="display: none;">
        <img style="width: 20px; height: 20px;" src="rolling.svg" />
        <span id="pullDown-msg" class="pull-down-msg">下拉刷新</span>
      </div>
      <ul id="Content" class="dropdown-list">
      </ul>
      <div id="PullUp" class="scroller-pullUp" style="display: none;">
        <img style="width: 20px; height: 20px;" src="rolling.svg" />
        <span id="pullUp-msg" class="pull-up-msg">上拉刷新</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>

</style>
