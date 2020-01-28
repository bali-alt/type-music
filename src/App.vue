<template>
  <div id="app">
    <router-view/>
    <Singsong></Singsong>
    <!-- <Liu></Liu> -->
  </div>
</template>
<script>
import Singsong from './components/Singsong'
import Liu from './components/Liu'
export default {
  components:{
    Singsong,
    Liu
  }
}
</script>
<style scoped>
.van-nav-bar {
    position: relative;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    position: fixed;
    width: 100%;
    top:0
}
</style>