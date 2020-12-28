<template>
  <li class="list-group-item btn-cursor" :class="isCompleted && 'list-group-item-success'" @click="completeTodo">
    <div class="d-flex">
      #{{ id }}
      <p class="text-capitalize ml-2">
        {{ title }}
      </p>
    </div>
    <div>
      <button @click.stop="removeTodo" class="btn btn-outline-danger">
        &times;
      </button>
    </div>
  </li>
</template>
<script>
export default {
  name: "Todo",
  props: {
    title: String,
    isCompleted: Boolean,
    id: Number,
    removeTodo: Function,
    completeTodo: Function
  },
}
</script>