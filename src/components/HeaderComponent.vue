<template>
  <div class="hello">
    <h1 class="main-title my-5">{{ msg }}</h1>
    <div class="search-bar text-center mb-5">
      <!-- emetto un evento custom -->
      <input
        v-model="search"
        type="text"
        class="rounded"
        >
        <!-- @keyup="$emit('search', search)" -->
        <!-- @keyup="onChange" -->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'HeaderComponent',
    props: {
      msg: String
    },
    data() {
      return {
        listCharacters: [],
        search: ''
      }
    },
    // creo evento emit da un metodo e aggiungo un watcher a search per scatenarlo
    watch: {
      search: function(/*a,b*/){
        // console.log('Nuovo valore: ', a, 'Valore precedente: ', b);
        // this.onChange();
        this.$emit('search', this.search)
      }
    },
    // methods: {
    //   onChange() {
    //     // this.$emit('search', this.search)
    //   }
    // },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/general.scss';
</style>
