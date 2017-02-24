<template>
  <div class="load">
  <transition
  appear
  appear-class="custom-appear-class"
  appear-active-class="custom-appear-active-class"
>
   <h1 @click="changeShow">loading...</h1>
</transition>
    <transition-group class="transition-group" name="tab" tag="div">
      <div v-show="show" class="way" key="1">
        <span>How are you?</span>
      </div>
      <div v-show="!show" class="way" key="2">
        <span>I am fine, thank you. And you?</span>
      </div>
    </transition-group>
    <transition name="slide">
      <button class="slide">确定</button>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'load',
  data () {
    return {
      show: true
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
.load {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.way {
  height: 200px;
  border: 1px solid ;
  // transition: all 1s;
}
.way:first-of-type {
  background: yellow;
  height: 250px;
}
.slide {
  transition: 0.5s;
}
</style>
