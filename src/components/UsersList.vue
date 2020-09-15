<template>
    <ul>
        <UsersListUser v-for="(user, i) in users"
        :key="i"
        :user="user"/>
    </ul>
</template>

<script>
import UsersListUser from '../components/UsersListUser'
export default {
  props: {
    users: {
      type: Array
    }
  },

  components: {
    UsersListUser
  }
}
</script>
