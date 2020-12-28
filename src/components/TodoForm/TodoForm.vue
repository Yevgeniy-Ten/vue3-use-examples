<template>
  <form @submit.prevent="createNewTodo">
    <div class="mb-3">
      <label for="todoInput" class="form-label">Your Todo</label>
      <input type="text" class="form-control" id="todoInput" v-model="todo">
    </div>
    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todo: ""
    }
  },
  methods: {
    createNewTodo() {
      if(this.todo.length){
        this.$emit("createTodo", this.todo)
      }
    }
  }
}
</script>