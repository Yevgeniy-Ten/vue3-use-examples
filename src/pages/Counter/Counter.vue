<template>
  <div class="text-center">
    <p>Count {{ incrementTwo }}</p>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn mr-2 btn-info" @click="increment">Increment</button>
    <!--    <button class="btn mr-2 btn-info" @click="counter++">Increment</button> без vuex-->
    <!--    <button class="btn btn-outline-info" @click="counter&#45;&#45;">Decrement</button>-->
  </div>
</template>
<script>
import {mapState} from "vuex"
// mapState, mapGetters, mapMutations, mapActions это более удобные вещи взавимодействия с store, чтобы не писать this.$store и итд
// через массив пишем когда нам нужно просто сами функции или данные, а через обьект когда нам нужно видоизменять эти функции или данные

// особенность dispatch то что он имеет поддержку прописов
export default {
  name: "Counter",
  computed: mapState({
    count: state => state.count,
    incrementTwo(state) { // такого рода функции используются для преобзравания, они не меняют стор, аналог getter
      return state.count + 2
    },
  }),
  // computed: mapState(["count"]),
  // data() {
  //   return { это без vuex
  //     counter: 0
  //   }
  // },
  methods: {
    increment() {
      this.$store.commit("increment")
    }
  }
}
</script>