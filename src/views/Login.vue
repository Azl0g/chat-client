<template>
    <div class="body">
        <div class="container">
            <div class="logo">
          <img src="../img/logo.gif" alt="">

        </div>
          <form @submit.prevent="onSubmit">
              <input type="text" v-model="username" placeholder="Username">
              <button>Login</button>
          </form>
        </div>
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

<style lang="scss" scoped>

  .body{
    display: flex;
    justify-content: center;
    height: 100vh;
    // margin: auto
    position: relative;
    overflow: hidden;
    // background-image: url("../img/bg-login.png");
    // background-image: url("../img/bg-login.png"), linear-gradient(to bottom, #192D61, #0C1837);
    background-image: url("../img/bg-login.png"), url("../img/bg-sky.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container{
    margin: auto;
    margin-top: 5%;
  }

  .logo{
    width: 350px;
    height: 200px;
    margin: auto;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  form{
    background-color: #2B3052;
    width: 550px;
    height: 250px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // margin: auto;
    box-shadow: 10px 3px 5px rgba(0, 0, 0, 0.116);
    position: relative;
    z-index: 3;

    & input {
      width: 80%;
      height: 50px;
      background-color: #535980;
      border: none;
      border-radius: 100px;
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.212);
      color: white;
      font-size: 1rem;
      padding-left: 30px;
      margin-bottom: 30px;

      &::placeholder {
        color: white;
      }

      &:focus{
          outline: none;
      }
    }

    & button {
      width: 80%;
      height: 50px;
      background-color: #354AD0;
      border: none;
      border-radius: 100px;
      color: white;
      font-size: 1.125rem;
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.137);
    }
  }

</style>
