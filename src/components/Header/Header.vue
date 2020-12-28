<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="navbar-nav">
        <router-link v-for="route in routes" :to="route.name" :key="route.path" class="nav-link" active-class="active">
          {{ route.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import {routes} from "@/routes/routes"

export default {
  name: "Header",
  data() {
    return {
      routes
    }
  }
}
</script>