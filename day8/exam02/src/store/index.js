import { createStore } from 'vuex'

export default createStore({
  state() {
    let _counter=10
    if(localStorage.getItem('counter')!==null){
      _counter=parseInt(localStorage.getItem('counter'))
    }
    else{
      localStorage.setItem('counter',_counter)
    }

    console.log(_counter)
    return {
      counter:_counter
    }
  },
  mutations: {
    inc(state){
      state.counter++
      localStorage.setItem('counter',state.counter)
    },
    dec(state){
      state.counter--
      localStorage.setItem('counter',state.counter)
    },
    clear(state,playload){
      state.counter = playload.value
      localStorage.setItem('counter',state.counter)
    }
  },
  actions: {
  },
  modules: {
  }
})
