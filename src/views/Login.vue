<template>
    <div>
        <!-- <div class="error" v-if="error">
            {{ error }}
        </div> -->
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="username">
            <button>Se connecter</button>
        </form>
    </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit () {
      store.userRegister(this.username)
      this.username = ''
    }
  }
}
</script>
