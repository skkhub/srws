<template>
  <div class="chapterController">
    <div class="menu" @click="move">移动</div>
    <div class="menu">攻击</div>
    <div class="menu">精神</div>
    <div class="menu">能力</div>
    <canvas ref="ctrlMove" v-show="showMoveRange"></canvas>
  </div>
</template>
<script>
import { chapterMap } from '../../data'

let $p = (x) => {
  return x * chapterMap.dl
}
export default {
  name: 'chapterController',
  props: ['status'],
  data () {
    return {
      showMoveRange: true
    }
  },
  mounted () {
    console.log(this.$refs.ctrlMove)
  },
  methods: {
    move () {
      this.showMoveRange = true
      let moveLength = this.status.robot.move
      this.$refs.ctrlMove.width = this.$refs.ctrlMove.height = 2 * moveLength * chapterMap.dl + 1
      this.$refs.ctrlMove.style.top = (this.status.position.y - moveLength) * chapterMap.dl + 'px'
      this.$refs.ctrlMove.style.left = (this.status.position.x - moveLength) * chapterMap.dl + 'px'
      let c = this.$refs.ctrlMove.getContext('2d')
      let dir = 'up'
      let x = $p(this.status.position.x)
      let y = $p(this.status.position.y) - $p(1)
      c.fillStyle = '#000'
      c.beginPath()
      c.fillRect(x, y, $p(1), $p(1))

      this.drawPath(dir)
    },
    drawPath (dir) {

    }
  }
}
</script>
<style scoped lang="scss">
.chapterController {
  width: 100px;
  border: 1px solid #000;
  background: #0c3;
}
.menu {
  width: 100%;
  text-align: center;
&:active, &:hover {
  background: #063;
}
}
#ctrlMove {
  position: absolute;
  border: 1px solid gray;
}
</style>
