<template>
  <div class="entry">
    <img class="logo" src="../assets/logo.png">
    <h1>SUPER WAR S</h1>
    <div class="operator">
      <router-link to="" replace>start</router-link>
      <router-link to="countinue" replace>countinue</router-link>
      <router-link to="load" replace>load</router-link>
      <router-link to="chapter" replace>chapter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {
      msg: '超级萌！',
      checked: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.entry {
  height: 100%;
  text-align: center;
  background: url('../assets/entry.jpg') no-repeat center;
  background-size: cover;

  .logo {
    padding-top: 10%;
  }
}
.operator {
  width: 50%;
  margin: 40% auto 0;
  border: 1px double #070;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.5);
}
h1 {
  font-weight: normal;
  color: #fff;
  text-shadow: 1px 1px 2px darkslategray;
}

a {
  display: block;
  color: #000;
  &:hover {
    background-color: rgba(200,200,0,0.5);
  }
}
</style>
