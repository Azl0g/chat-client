<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  *, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body{
    // background-color: #363D6A;
    margin: 0;
  }

  #app {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //text-align: center;
    color: white;
    // overflow: hidden;
  }

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>
