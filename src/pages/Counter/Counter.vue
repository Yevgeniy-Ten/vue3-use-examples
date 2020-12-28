<template>
  <div class="text-center">
    <p>Count {{ counter }}</p>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn mr-2 btn-info" @click="counter++">Increment</button>
    <button class="btn btn-outline-info" @click="counter--">Decrement</button>
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