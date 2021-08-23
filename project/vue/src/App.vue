<template>
  <LoginBox v-show="bShowLoginBox" id="tommy" @login="onLogin" />
  <p v-show="login_success" id="center">로그인 성공!</p>
  <p v-show="login_failed" id="center">로그인 실패!</p>
  <hr />

  <div v-show="bShowList">
    <TextBox title="블로그 글" text="날짜와 내용을 적어주세요!" />
  </div>

</template>

<script>
import TextBox from "./components/TextBox.vue";
import LoginBox from "./components/LoginBox.vue";
export default {
  name: "app",
  components: {
    TextBox,
    LoginBox
  },
  data() {
    return {
      login_success: false,
      login_failed: false,
      bShowLoginBox: true,
      bShowList : false,
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
    }
  }
};
</script>

<style scoped >
#center {
  text-align:center;
}
</style>