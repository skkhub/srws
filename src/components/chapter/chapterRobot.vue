<template>
  <div class="chapterRobot" :style="stylePosition" @click="openController">
    <img class="icon" :src="robotIconSrc" :alt="robot.name">
  </div>
</template>
<script>
import { chapterMap } from 'src/data.js'

export default {
  name: 'chapterRobot',
  props: ['robot', 'position', 'driver'],
  data () {
    return {
    }
  },
  computed: {
    stylePosition () {
      let left = this.status.position.x * chapterMap.dl
      let top = this.status.position.y * chapterMap.dl
      return {
        left: left + 'px',
        top: top + 'px'
      }
    },
    status () {
      let robot = JSON.parse(JSON.stringify(this.robot))
      let position = JSON.parse(JSON.stringify(this.position))
      let driver = JSON.parse(JSON.stringify(this.driver))
      return {
        robot,
        position,
        driver,
        canAct: true
      }
    },
    robotIconSrc () {
      return require('src/assets/robotIcon/' + this.robot.icon)
    }
  },
  methods: {
    openController () {
      this.$root.store.$emit('openController', this.status)
    }
  },
  mounted () {
    
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
