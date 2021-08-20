<template>
<div>
  <button @click="goBack">Back</button>
</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/Help">Help</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name : "App",
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background-color: grey;
}
</style>
