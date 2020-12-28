<template>
  <ul v-if="todos.length" class="list-group w-100">
    <Todo v-for="todo in todos"
          :removeTodo="removeTodo.bind(null,todo.id)"
          :key="todo.id" :title="todo.title"
          :id="todo.id"
          :completeTodo="completeTodo.bind(null,todo.id)"
          :isCompleted="todo.completed"/>
  </ul>
  <p v-else class="text-center">
    No todos
  </p>
</template>

<script>
import Todo from "@/components/TodoList/Todo/Todo";

export default {
  name: "Todos",
  props: {
    todos: {
      type: Array
    },
    removeTodo: Function,
    completeTodo: Function
  },
  components: {
    Todo
  },
}
</script>