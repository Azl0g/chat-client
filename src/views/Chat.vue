<template>
    <div>
       <UsersList :users="store.users" />
       <MessageList :messages="store.messages"/>
       <MessageBox @sendMessage="onSendMessage" />
    </div>
</template>

<script>

import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'
import UsersList from '../components/UsersList'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    }
  },
  components: {
    MessageBox,
    MessageList,
    UsersList
  }
}
</script>
