<template>
<div>
  <p>click {{count}} times count is {{evenOrOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">increment if odd</button>
  <button @click="incrementAsync">inerement async</button>
</div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
  export default {
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
    methods:{
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']),
    }
    /*computed:{
     count(){
     return this.$store.state.count
     },
     evenOrOdd(){
     return this.$store.getters.evenOrOdd
     }
     },*/
    /* methods:{
     increment(){
     this.$store.dispatch('increment')
     },
     decrement(){
     this.$store.dispatch('decrement')
     },
     incrementIfOdd(){
     this.$store.dispatch('incrementIfOdd')
     },
     incrementAsync(){
     this.$store.dispatch('incrementAsync')
     }
     }*/

  }

</script>

<style>

</style>
