<template>
    <div class="chatbox">
      <div class="user">
          <div class="score">
            <p>Score : <br> <strong>{{ score }}</strong></p>
           </div>
          <UsersList :users="store.users" class="users-list"/>
          <div class="my-user">
            <img :src="store.user.avatar" alt="" width="45px" height="50px">
            <p>{{ store.$data.user.username }}</p>
            <!-- <a href="logout">Off</a> -->
            <router-link to="/logout">Off</router-link>
          </div>
       </div>
       <div class="message">
          <MessageList :messages="store.messages" class="message-list"/>
          <MessageBox @sendMessage="onSendMessage" class="message-box" />
       </div>
    </div>
</template>

<script>

import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'
import UsersList from '../components/UsersList'

import axios from 'axios'
import store from '../store'

export default {
  data () {
    return {
      store,
      score: 0
    }
  },
  methods: {
    // onSendMessage (text) {
    //   store.messageNew(text)
    //   this.score += 500
    // },

    onSendMessage (text) {
      const match = text.match(/^\/gif (.+)/)
      if (match) {
        const tag = match[1]
        console.log('sending request for tag', tag)
        axios
          .get(`https://api.giphy.com/v1/gifs/random?api_key=nffCpgos75ySGMcuVchDKgc1AAHE2C57&tag=${tag}&rating=g`)
          .then((response) => {
            store.messageNew(response.data.data.image_original_url)
          })
        return
      }
      store.messageNew(text)
      this.score += 500
    },
    onSendGif (tag) {
    },

    onScore () {
      setInterval(() => {
        this.score += 100
      }, 10000)
    }
  },

  created: function () {
    this.onScore()
  },

  components: {
    MessageBox,
    MessageList,
    UsersList
  }
}
</script>

<style lang="scss" scoped>
  .chatbox{
    // background-image: linear-gradient(to bottom, #1A2F64, #0A142E);
    background-image: url("../img/bg-sky.gif");
    // background-image: url("../img/bg-chat.png"), linear-gradient(to bottom, #1A2F64, #0A142E);
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    margin: 0;
    display: flex;
    height: 100vh;
    width: 100%;

    & .message-list{
      height: 85%;
      // border: solid 10px #535980;
      // border-bottom: solid 5px #535980;
      margin: 0;
      margin-bottom: 24px;
    }

    & .message-box{
      // border: solid 10px #535980;
      // border-top: solid 5px #535980;
      height: 10%;
      // border: solid red;
    }

  }

  .user{
    // border: solid 3px yellow;
    width: 15%;
    height: 97vh;
    align-self: center;
    margin-left: 10px;

    & .score{
      height: 15%;
      background-color: #3C476D;
      display: flex;
      // margin: auto;

    }

    & .my-user{
      height: 10%;
      background-color: #3C476D;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .users-list{
      height: 75%;
      margin: 0;
    }
  }

  .score p{
    margin: auto;
    font-size: 1.125rem;
    text-align: center;
  }

  .my-user p, .my-user a {
    margin: auto;
  }

  .my-user a{
    margin-left: 0;
    text-decoration: none;
    color: white;
    font-weight: normal;
    background-color: #2B3052;
    padding: 10px;
    border-radius: 50px;
  }

  .my-user img{
    margin-left: 10px;
  }

  .message{
    // border: solid 3px black;
    width: 85%;
    margin-top: 10px;
  }
</style>
