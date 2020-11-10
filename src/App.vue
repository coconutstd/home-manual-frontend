<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import GlobalNavigation from './components/GlobalNavigation.vue'

export default {
  name: 'app',
  components: {GlobalNavigation},
  data () {
    return {

    }
  }
}
</script>

<style>
body{
  background-color: #8fcafe;
}



</style>
