<template>
  <LoginBox v-show="bShowLoginBox" id="tommy" @login="onLogin" />
  <p v-show="login_success">로그인 성공</p>
  <p v-show="login_failed">로그인 실패</p>
  <hr />

  <div v-show="bShowList" >
    <TextBox title="당신만이" text="눈부신태양이..." />
    title : <input type="text" v-model="title" > <br>
    text : <input type="text" v-model="text" > <br>
    <button @click="addTodo"> Add </button>


  <div>
    <ul>
      <li v-for="(item,index) in todoList" :key=index >
        <h5>{{item.title}}</h5>
        <p>{{item.text}}</p>
        <button @click="delTodo(index)" > X </button>        
      </li>
    </ul>
  </div>

  </div>
</template>

<script>
import TextBox from "./components/TextBox.vue";
import LoginBox from "./components/LoginBox.vue";
import {pullAt} from 'lodash';
export default {
  name: "App",
  components: {
    TextBox,
    LoginBox,
  },
  data() {
    return {
      login_success: false,
      login_failed: false,
      bShowLoginBox: true,
      bShowList : false,
      todoList : [
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
    };
  },
  methods: {
    onLogin(result) {
      console.log(result);
      if (result) {
        this.login_success = true;
        this.login_failed = false;
        this.bShowLoginBox = false;
        this.bShowList = true;
      } else {
        this.login_success = false;
        this.login_failed = true;
      }
    },
    addTodo() {
      this.todoList.push({
      title : this.title,
      text : this.text
      })
    },
    delTodo(index) {
      console.log(index)
      pullAt(this.todoList,[index])
    }
  },
};
</script>

<style scoped >
div {
  border: solid black 1px;
  margin: 4px;
}
li {
  background-color: beige;
  border-bottom: dotted gray 1px;
  margin-bottom: 2px;
}
</style>