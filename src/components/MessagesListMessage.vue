<template>
    <span class="message-group" :class="[isCurrentUser ? 'current-message' : 'other-message']">
      <div class="message-icon">
        <img :src="isCurrentUser ? message.user.avatar : store.avatars[message.user.username] " alt="">
        <strong style="text-align: center" v-if="isCurrentUser">{{ message.user.username }}</strong>
        <em style="text-align: center" v-else>{{ message.user.username }}</em>
      </div>
    <li :class="[isCurrentUser ? 'current-user' : 'other-user']">
          <span v-if="message.html" v-html="message.text"></span>
          <p v-else class="text">{{ message.text }}</p>
    </li>
    </span>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      store
    }
  },
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    }
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    avatar: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
  .message-group{
    display: flex;
    align-items: center;
    // margin-left: 20px;
    // border: solid red;
  }

  .current-message{
    flex-direction: row-reverse;
    margin-right: 20px;
  }

  .other-message{
    margin-left: 20px;
  }

  .message-icon{
    display: flex;
    flex-direction: column;
    // border: solid green;

    & img {
      max-width: 50px;
      border-radius: 100px;
    }
  }
  li{
    list-style: none;
    padding: 20px;
    margin: 30px 30px;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.315);
    max-width: max-content;

    & .text {
      text-overflow: ellipsis;
      word-wrap: break-word;
    }

    &.current-user{
      border-right: 5px solid #7AADBC;
      background-color: #1D3A81;
      text-align: right;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
    &.other-user{
      border-left: solid 5px #354AD0;
      background-color: #2B3052;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }

  }

</style>
