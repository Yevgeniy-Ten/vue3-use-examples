<template>
  <div class="row">
    <div class="col col-md-6">
      <TodoForm @createTodo="createTodo"/>
    </div>
    <div class="col col-md-6">
      <TodoList :todos="todos" :removeTodo="removeTodo" :completeTodo="completeTodo"/>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import TodoList from "@/components/TodoList/TodoList";
import TodoForm from "@/components/TodoForm/TodoForm";

export default {
  name: "Todos",
  components: {TodoList, TodoForm},
  data() {
    return {
      todos: []
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    completeTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      todo.completed = !todo.completed
    },
    createTodo(title) {
      let id = 1
      if (this.todos.length) {
        id = this.todos[this.todos.length - 1].id + 1
      }
      const newTodo = {
        title,
        completed: false,
        id
      }
      this.todos.push(newTodo)
    }
  },
  async mounted() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=6")
    this.todos = response.data
  }
}
</script>