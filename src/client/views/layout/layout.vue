<template>
  <div class="layout-container">
      <siderbar></siderbar>
      <appMain></appMain>
  </div>
</template>

<script>
import siderbar from './siderbar.vue'
import appMain from './appMain.vue'
export default {
  components: {
    siderbar, appMain
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.layout-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  display: flex;
}
</style>
