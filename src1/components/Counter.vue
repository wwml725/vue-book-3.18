<template>
    <div>
      当前数值：{{$store.state.count}}<br>
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      {{$store.getters.val}}
    </div>
</template>
<script>
  import * as Types from '../store/mutation-types'

  export default {
        data() {
          return {}
        },
        created() {
        },
        methods: {
          increase(){
            this.$store.commit(Types.INCREASE,2)//会自动去找mutation中的increase
          },
          decrease(){
            this.$store.commit(Types.DECREASE)
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
