<template>
    <li>
        <strong v-if="message.user.name === 'Robin L'">{{ message.user.name }}</strong>
        <em v-else>{{ message.user.name }}</em>
        : {{ message.text }}
    </li>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
