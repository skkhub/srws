<template>
  <div class="chapter">
    <chapter-map></chapter-map>
    <chapter-robot v-for="(robot, i) in robots" :robot="robot" :position="positions[i]" :driver="drivers[i]"></chapter-robot>
    <chapter-controller v-show="openCtrl" :status="status"></chapter-controller>
    </h1>章节篇<h1>
  </div>
</template>
<script>
import chapterMap from 'components/chapter/chapterMap'
import chapterRobot from 'components/chapter/chapterRobot'
import chapterController from 'components/chapter/chapterController'
import { robots, positions, drivers } from 'src/data'

export default {
  name: 'chapter',
  components: { chapterMap, chapterRobot, chapterController },
  data () {
    return {
      robots,
      positions,
      drivers,
      status: {},
      openCtrl: false
    }
  },
  methods: {

  },
  mounted () {
    this.$root.store.$on('openController', (status) => {
      this.status = status
      this.openCtrl = true
    })
  }
}
</script>
<style lang="scss">
.chapter {
  position: relative;
  height: 100%;
  overflow: auto;
}
</style>
