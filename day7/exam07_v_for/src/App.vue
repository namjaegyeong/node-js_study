<template>
  <div>
    <h1>Ad Todo</h1>
    title : <input type="text" v-model="title"><br>
    text : <input type="text" v-model="text">
    <button @click="addTodo"> Add </button>
  </div>
  <div>
    <ul>
      <li v-for="(item,index) in todoList" :key=index >
        <h5>{{item.title}}</h5>
        <p>{{item.title}}</p>
        <button @click=delTodo(index)"> X </button>
        
      </li>
    </ul>
  </div>
</template>

<script>

import {slice} from 'loadsh'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      title : '',
      text : '',
      todoList :[
        {
          title : '고양이밥주기',
          text : '오전9시까지..'
        },
        {
          title : '운동하기',
          text : '마스크 쓰고 나가기'
        },
        {
          title : '백신신청하기',
          text : '다음주 마감'
        }
      ]
    }
  },
  methods:{
    addTodo(){
      this.todoList.push({
        title : this.title,
        text : this.text
      })
    },
    delTodo(index){
      console.log(index)
      pullAt(this.todoList,[index])
    }
  }

}

</script>

<style scoped>
div{
  border: solid black 1px;
  margin: 4px;
}
li {
  background-color : beige;
  border-bottom: dotted gray 1px;
  margin-bottom: 2px;
}

</style>
