<template>
  <div class="chapterRobot" :style="stylePosition" @click="move">
    <img class="icon" :src="robotIconSrc" :alt="robot.name">
  </div>
</template>
<script>
import { chapterMap } from 'src/data.js'

export default {
  name: 'chapterRobot',
  props: ['robot', 'position'],
  data () {
    return {
      
    }
  },
  computed: {
    stylePosition () {
      let left = this.position[0] * chapterMap.dl
      let top = this.position[1] * chapterMap.dl
      return {
        left: left + 'px',
        top: top + 'px'
      }
    },
    robotIconSrc () {
      return require('src/assets/robotIcon/' + this.robot.icon)
    }
  },
  methods: {
    move () {
      console.log('move')
      this.$set(this.position, 0, ++this.position[0]) 
    }
  },
  mounted () {
    console.log(this.position)
  }
}
</script>
<style lang="scss" scoped>
@import 'src/data.scss';

.chapterRobot {
  position: absolute;
  width: $robotLen;
  height: $robotLen;
  background: #3fa;
  transition: 1s;
}
.icon {
  width: 100%;
  height: 100%;
}
</style>
