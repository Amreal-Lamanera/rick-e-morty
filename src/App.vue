<template>
  <div id="app">
    <HeaderComponent :msg="title"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Rick & Morty'
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">

</style>
