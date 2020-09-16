<template>
    <li>
        <strong v-if="isCurrentUser">{{ message.user.username }}</strong>
        <em v-else>{{ message.user.username }}</em>
        : {{ message.text }}
    </li>
</template>

<script>
import store from '../store'
export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    }
  },
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
