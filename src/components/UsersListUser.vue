<template>
<div>
    <img :src="avatar" alt="" width="15%">
    <ul>{{ user.username }}</ul>
  </div>
</template>

<script>

import store from '../store'
export default {

  computed: {
    avatar () {
      return store.avatars[this.user.username]
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    avatar: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

  ul{
    height: 50px;
    color: white;
    padding: 0;
    margin: auto;
    margin-left: 0;
    text-align: center;
    // border: solid red;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  div{
    margin-left: 0;
    text-align: left;
    padding-left: 10%;
    // margin-top: 18px;
    // margin-bottom: 18px;
    display: flex;
  }

  img{
    margin: auto;
    margin-left: 0;
    width: 36px;
  }
</style>
