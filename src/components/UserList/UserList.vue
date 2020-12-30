<template>
  <div class="row">
    <div class="col-4" v-for="user in users" :key="user.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ user.name + " " + user.username }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <router-link :to="{ name: 'User', params: { id: user.id }}" class="btn btn-primary">FULL INFO</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: Array
  },
}
</script>