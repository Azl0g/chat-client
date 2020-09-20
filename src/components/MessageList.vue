<template>
    <ul ref="list">
        <MessagesListMessage
        v-for="(message, i) in messages"
        :key="i"
        :message="message" />
    </ul>
</template>

<script>
import MessagesListMessage from '../components/MessagesListMessage'
export default {
  props: {
    messages: {
      type: Array
    }
  },
  data () {
    return {
      userControlScroll: false
    }
  },
  watch: {
    messages () {
      this.scrollDown()
    }
  },
  methods: {
    scrollDown () {
      const list = this.$refs.list
      this.$nextTick(() => {
        if (!this.userControlScroll) {
          list.scrollTop = list.scrollHeight
        }
      })
    },
    onScroll () {
      const list = this.$refs.list
      this.userControlScroll =
        list.scrollTop + list.clientHeight < list.scrollHeight
    }
  },

  components: {
    MessagesListMessage
  }
}
</script>

<style lang="scss" scoped>
ul{
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  // height: 20vh;
  // border: solid 3px pink;
  // margin-bottom: 10px;
}
ul::-webkit-scrollbar {
  display: none;
}
</style>
