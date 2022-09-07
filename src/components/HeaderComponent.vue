<template>
  <div class="hello">
    <h1 class="main-title my-5">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/general.scss';
</style>
