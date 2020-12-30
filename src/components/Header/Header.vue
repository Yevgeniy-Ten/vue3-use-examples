<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">VUE 3</router-link>
      <div class="navbar-nav">
        <router-link v-for="route in routes" :to="route.path" :key="route.path" class="nav-link"
                     active-class="active">
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
      routes: routes.filter(route => !route.path.includes(":"))
    }
  }
}
</script>