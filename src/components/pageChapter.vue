<template>
  <div class="chapter">
    <chapter-map></chapter-map>
    <chapter-robot v-for="(robot, i) in robots" :robot="robot" :position="position[i]"></chapter-robot>
    </h1>章节篇<h1>
  </div>
</template>
<script>
import chapterMap from 'components/chapter/chapterMap'
import chapterRobot from 'components/chapter/chapterRobot'
import { robots, position } from 'src/data'

export default {
  name: 'chapter',
  data () {
    return {
      robots,
      position
    }
  },
  components: { chapterMap, chapterRobot }
}
</script>
<style lang="scss">
.chapter {
  position: relative;
  height: 100%;
  overflow: auto;
}
</style>
