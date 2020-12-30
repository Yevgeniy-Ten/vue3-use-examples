<template>
  <div>
    {{ JSON.stringify(findUser) }}
  </div>
</template>

<script>
import {useRoute} from "vue-router"
import {useStore} from "vuex"
import {ref} from "vue"
import {getUserById} from "@/store/users/users";

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const userId = ref(route.params.id)
    const user = store.getters[`users/${getUserById}`]
    const findUser = user(userId)
    return {
      userId,
      findUser
    }
  }
}
</script>