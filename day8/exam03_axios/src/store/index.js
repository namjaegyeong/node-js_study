import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    updateTodos(state,playload) {
      console.log(playload)
      state.todos = playload
    }
  },
  actions: {
    updateTodos(context) {
      //axios
      console.log(context);
      // console.log(this)
      (async () => {
        try {
          let url = 'https://jsonplaceholder.typicode.com/todos';
          let { status, data } = await axios.get(url);
          console.log(status);
          // console.log(data);
          context.commit('updateTodos',data)

          // state.todos = data
        }
        catch (e) {
          console.log(e)
        }
      })();
    }
  },
  modules: {
  }
})