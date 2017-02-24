<template>
  <div class="chapterMap">
    <canvas id="chapterMap"></canvas>
  </div>
</template>
<script>
import { chapterMap } from 'src/data'
export default {
  name: 'chapterMap',
  data () {
    return {
      width: 20,
      height: 28,
      detail: {}
    }
  },
  mounted () {
    // let deviceWidth = window.innerWidth
    // let deviceHeight = window.innerHeight
    // let cvs = document.getElementById('chapterMap')
    // cvs.width = deviceWidth //  在此处设置canvas画布的宽，不能用绑定变量的方式
    // cvs.height = deviceHeight
    // let ctx = cvs.getContext('2d')
    // let dx = deviceWidth / this.width //  每格的x间距
    // let dy = deviceHeight / this.height //  每个的y间距
    // ctx.beginPath()
    // for (let i = 0; i <= this.width; i++) {
    //   ctx.moveTo(i * dx, 0)
    //   ctx.lineTo(i * dx, deviceHeight)
    //   ctx.stroke()
    // }
    // for (let i = 0; i <= this.height; i++) {
    //   ctx.moveTo(0, i * dy)
    //   ctx.lineTo(deviceWidth, i * dy)
    //   ctx.stroke()
    // }
    let dl = chapterMap.dl
    let cvs = document.getElementById('chapterMap')
    cvs.width = dl * this.width
    cvs.height = dl * this.height
    let ctx = cvs.getContext('2d')
    ctx.beginPath()
    for (let i = 0; i <= this.width; i++) {
      ctx.moveTo(i * dl, 0)
      ctx.lineTo(i * dl, cvs.height)
      ctx.stroke()
    }
    for (let i = 0; i <= this.height; i++) {
      ctx.moveTo(0, i * dl)
      ctx.lineTo(cvs.width, i * dl)
      ctx.stroke()
    }
    ctx.closePath()

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
