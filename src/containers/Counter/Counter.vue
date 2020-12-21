<template>
  <div>
    <p>{{ counter }}</p>
  </div>
  <div>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    }
  }
}
</script>