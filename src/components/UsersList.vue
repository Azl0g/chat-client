<template>
    <ul>
        <UsersListUser v-for="(user, i) in users"
        :key="i"
        :user="user"/>
    </ul>
</template>

<script>
import UsersListUser from '../components/UsersListUser'
export default {
  props: {
    users: {
      type: Array
    }
  },

  components: {
    UsersListUser
  }
}
</script>

<style lang="scss" scoped>
  ul{
    // border: solid 3px lightgreen;
    padding: 0;
    // margin: auto;
    // text-align: center;
    overflow-y: scroll;
    background-color: #2B3052;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
