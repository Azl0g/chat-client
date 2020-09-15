<template>
    <ul>{{ user.name }}</ul>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
