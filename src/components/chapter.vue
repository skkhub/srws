<template>
  <div class="chapter">
    <chapter-map></chapter-map>
    </h1>章节篇<h1>
  </div>
</template>
<script>
import chapterMap from 'components/chapter/chapterMap'
export default {
  name: 'chapter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { chapterMap }
}
</script>
<style lang="scss">
.chapter {
  position: relative;
  height: 100%;
  overflow: auto;
}
</style>
