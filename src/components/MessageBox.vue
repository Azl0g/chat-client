<template>
    <div>
        <form  @submit.prevent="onSubmit">
            <input type="text" v-model='message'>
            <button>Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ''
    }
  }
}
</script>
