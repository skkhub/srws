<template>
  <div class="chapterMap">
    <canvas id="chapterMap"></canvas>
  </div>
</template>
<script>
export default {
  name: 'chapterMap',
  data () {
    return {
      width: 12,
      height: 21,
      detail: {}
    }
  },
  mounted () {
    let deviceWidth = window.innerWidth
    let deviceHeight = window.innerHeight
    let cvs = document.getElementById('chapterMap')
    cvs.width = deviceWidth //  在此处设置canvas画布的宽，不能用绑定变量的方式
    cvs.height = deviceHeight
    let ctx = cvs.getContext('2d')
    let dx = deviceWidth / this.$data.width //  每格的x间距
    let dy = deviceHeight / this.$data.height //  每个的y间距
    ctx.beginPath()
    for (let i = 0; i <= this.$data.width; i++) {
      ctx.moveTo(i * dx, 0)
      ctx.lineTo(i * dx, deviceHeight)
      ctx.stroke()
    }
    for (let i = 0; i <= this.$data.height; i++) {
      ctx.moveTo(0, i * dy)
      ctx.lineTo(deviceWidth, i * dy)
      ctx.stroke()
    }
  }
}
</script>
<style scoped lang="scss">
.chapterMap {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  #chapterMap {
    background: seagreen;
    display: block;
  }
}
</style>
