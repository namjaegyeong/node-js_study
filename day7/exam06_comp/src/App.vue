<template>
  <LoginBox v-show="bSshowLoginBox" @login="onLogin"/>
  <p v-show="login_success">로그인 성공</p>
  <p v-show="login_failed">로그인 실패</p>
  <hr />

  <TextBox title="당신만이" text="눈부신 태양이..."/>
  <TextBox title="붙이지 못한 편지" text="눈부신 태양이..."/>
  <TextBox title="인연" text="안개비가 내려와...."/>

</template>

<script>

import TextBox from './components/TextBox.vue'
import LoginBox from './components/LoginBox.vue'

export default {
  name: 'App',
  components: {
    TextBox,
    LoginBox
  },
  data(){
    return{
      login_success:false,
      login_failed:false,
      bShowLoginBox:true,
    }
  },
  method :{
    onLogin(result) {
      console.log(result)
      if(result){
        this.login_success=true
        this.login_failed=false
        this.bShowLoginBox=false;
      }
      else{
        this.login_success=false
        this.login_failed=true
      }
    }
  }
}
</script>

<style>


</style>
