<template>
  <div v-if="isLoad" class="spinner-border"/>
  <UserList v-else-if="users.length" :users="users"/>
  <p v-else>
    No users
  </p>
</template>
<script>
import {useStore} from "vuex"
import {onMounted, computed} from "vue"
import {axiosUsers} from "@/store/users/users";
import UserList from "@/components/UserList/UserList";

export default {
  setup() {
    let module = "users/"
    const store = useStore()
    const users = computed(() => store.getters["users/getUsers"])

    onMounted(() => {
      store.dispatch(`${module}${axiosUsers}`)
    })
    return {
      users,
      isLoad: computed(() => store.getters["users/getLoading"])
    }
  },
  components: {UserList}
}
</script>