<template>
    <div>
        <form  @submit.prevent="onSubmit">
            <input type="text" v-model='message' placeholder="Envoyer un message">
            <button>Send</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      score: 0
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

<style lang="scss" scoped>
  p{
    margin: 0;
    color: white;
  }

  form{
    height: 100%;
    margin-left: 10px;
    // margin-top: 10px;

    & input {
      height: 100%;
      width: 65%;
      background-color: #2B3052;
      border: none;
      color: white;
      font-size: 1rem;
      padding-left: 30px;

      &::placeholder {
        color: #707070;
      }

      &:focus{
          outline: none;
      }
    }
      & button {
        margin-left: 10px;
        // margin-right: 10px;
        text-decoration: none;
        color: white;
        font-weight: normal;
        background-color: #2B3052;
        padding: 10px;
        border-radius: 50px;
        border: none;
      }
  }
</style>
