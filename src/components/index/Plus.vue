<template>
  <div class="plus"></div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .plus {
    width: 50px;
    height: 50px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -25px;
    margin-left: -25px;
    border-radius: 4px;
    transition: opacity 0.5s;
    transform: translateZ(0);
    z-index: 30;
    line-height: 50px;
    background-color: rgba(255,171,0,0.8);
    color: #fff;
    opacity: 1;
  }
</style>
