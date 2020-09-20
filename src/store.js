import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const AVATARS = [
  'https://www.robinleroux.fr/images/chat/rond1.png',
  'https://www.robinleroux.fr/images/chat/rond2.png',
  'https://www.robinleroux.fr/images/chat/rond3.png',
  'https://www.robinleroux.fr/images/chat/rond4.png',
  'https://www.robinleroux.fr/images/chat/rond5.png']

const store = new Vue({
  data: {
    isRegistered: false,
    error: null,
    user: {},
    users: [],
    messages: [],
    avatars: {}
  },
  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  methods: {
    registerListener () {
      socket.on('connect', () => {
        console.log('connected')
        const sessionUser = sessionStorage.getItem('user')

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username)
        }
      })

      socket.on('disconnect', () => {
        this.isRegistered = false
        this.user = {}
      })

      socket.on('users update', ({ users, user, type }) => {
        if (this.users.length > 0) {
          // Test user
          if (type === 'join') {
            this.avatars[user.username] = this.generateRandomAvatar()
          } else {
            delete this.avatars[user.username]
          }
        } else {
          users.forEach((user) => {
            this.avatars[user.username] = this.generateRandomAvatar()
          })
        }

        this.users = users
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.error = null
        // console.log('user registered', infos)
        this.user = user
        sessionStorage.setItem('user', JSON.stringify(user))
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = this.parseGiphy(messages)
      })

      socket.on('message new', ({ message }) => {
        message = this.parseGiphy([message])[0]
        this.messages.push(message)
      })

      socket.on('command new', ({ command, value }) => {

      })

      socket.on('chat error', (error) => {
        // this.error = error;
        console.log('chat error', error)
      })

      socket.on('command new', (data) => {
        switch (data.command) {
          // case 'kaaris' :
          //   socket.emit('message new', 'https://media.giphy.com/media/Y0ylbvEL34tsk/giphy.gif')
          //   break
          // case 'relax' :
          //   socket.emit('message new', 'https://media.giphy.com/media/FQJc7IpnrsHle/giphy.gif')
          //   break
          case 'space' :
            socket.emit('message new', 'https://media.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif')
            break
          case 'star' :
            socket.emit('message new', 'https://media.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif')
            break
          case 'planet' :
            socket.emit('message new', 'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')
            break
        }
      })
    },

    generateRandomAvatar () {
      return AVATARS[Math.floor(Math.random() * AVATARS.length)]
    },

    logout () {
      sessionStorage.clear()
      this.isRegistered = false
      router.push('/login')
    },

    parseGiphy (messages) {
      const regex = /https:\/\/.*giphy\.com.*\.gif/

      return messages.map((message) => {
        const giphyLink = message.text.match(regex)
        if (giphyLink) {
          message = {
            user: message.user,
            text: message.text.replace(regex, `<img src="${giphyLink[0]}" height="200">`),
            html: true
          }
        }
        return message
      })
    },

    // API calls
    userRegister (username) {
      const avatar = 'https://www.robinleroux.fr/images/chat/or.png'
      socket.emit('user register', { username, avatar })
    },
    userTyping () {

    },
    messageNew (message) {
      socket.emit('message new', message)
    }
  },

  created () {
    this.registerListener()
  }
})

export default store
