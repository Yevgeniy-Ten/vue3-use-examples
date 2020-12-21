<template>
  <ul>
    <li :key="todo.id" :class="{'strike':todo.isCompleted}" v-for="todo in todos">
      {{ todo.title }}
    </li>
  </ul>
  <Counter/>
</template>

<script>
import "@/main.css"
import Counter from "@/containers/Counter/Counter.vue";

export default {
  name: "App",
  components: {
    Counter
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          isCompleted: false,
          title: "Купить хлеб"
        },
        {
          id: 2,
          isCompleted: true,
          title: "Купить Масло"
        }, {
          id: 3,
          isCompleted: false,
          title: "Выебать мир"
        }, {
          id: 4,
          isCompleted: false,
          title: "Сделать движ"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
