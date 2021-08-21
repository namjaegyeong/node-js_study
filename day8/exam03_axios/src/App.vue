<template>
  <div>
    <h1>Todo manager</h1>
    <div>
      <button @click="getTodoList">get todos</button>
      <button @click="getTodoList_store">get todos store</button>
      <ul>
        <li v-for="(item ,index) in todoList" :key="index" >
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed : {
    todoList() {
      return this.$store.state.todos
    }
  },
  methods : {
    getTodoList_store() {
      this.$store.dispatch('updateTodos');
    },
    getTodoList() {
      let url = 'https://jsonplaceholder.typicode.com/todos';
      console.log(url);
      (async ()=> {
        let {status,data} = await this.axios.get(url);
        console.log(status);
        console.log(data);
      })();
    }
  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>