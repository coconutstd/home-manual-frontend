<template>
  <div>
    Home
    <h1 v-if="this.$store.state.email">{{this.$store.state.email}}</h1>
  </div>
</template>

<script>

export default {
  data(){
    return {
      msg : 'Home'
    }
  }
}
</script>

<style scoped>

</style>
