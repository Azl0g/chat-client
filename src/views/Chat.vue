<template>
    <div>
       <UsersList :users="users" />
       <MessageList :messages="messages"/>
       <MessageBox @sendMessage="onSendMessage" />
    </div>
</template>

<script>

import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'
import UsersList from '../components/UsersList'

export default {
  data () {
    return {
      users: [
        { name: 'Pierre' },
        { name: 'Paul' },
        { name: 'Jack' }
      ],
      messages: [
        { user: { name: 'Pierre' }, text: 'Hey salut les nazes' },
        { user: { name: 'Paul' }, text: 'slt' }
      ]
    }
  },
  methods: {
    onSendMessage (text) {
      this.messages.push({
        user: { name: 'Robin L' },
        text
      })
    }
  },
  components: {
    MessageBox,
    MessageList,
    UsersList
  }
}
</script>
