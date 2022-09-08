<template>
  <div id="app">
    <!-- recupero evento custom e lo gestisco con una funzione onSearch in questo caso -->
    <HeaderComponent :msg="title" @search="onSearch" />
    <!-- mando i dati elaborati all'altro figlio - MainComponent -->
    <MainComponent :search="searchProp" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  
  data() {
    return {
      title: 'Rick & Morty',
      searchProp: ''
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },
  methods: {
    onSearch(data){
      this.searchProp = data
    }
  },
}
</script>

<style lang="scss">

</style>
