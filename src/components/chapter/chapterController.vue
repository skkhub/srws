<template>
  <div class="chapterController">
    <div class="menu">移动</div>
    <div class="menu">攻击</div>
    <div class="menu">精神</div>
    <div class="menu">能力</div>
  </div>
</template>
<script>
export default {
  name: 'chapterController',
  props: ['status'],
  data () {
    return {
    }
  },
  mounted () {
    
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
</style>
