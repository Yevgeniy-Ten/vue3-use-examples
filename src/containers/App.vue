<template>
  <Header/>
  <div class="container pt-5">
    <router-view/>
  </div>
</template>

<script>
import "@/main.css";
import Header from "@/components/Header/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>
