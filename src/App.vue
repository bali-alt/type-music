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