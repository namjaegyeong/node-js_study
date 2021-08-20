<template>
  <div>
    <h1 : class="{red : isOn,bg_gray:true}"> Blink </h1>
    <button @click="toggle"> Toggle </button>
  </div>

  <div>
    <h1 : class="{green : coinValue >= 50, yellow : coinValue < 50 && coinValue >10,red : coinValue < 10}" >{{coinValue}}</h1>
    <input v-model="coinValue">
  </div>
    <p v-if="coinValue >=50"> 충분합니다.</p>
    <p v-else-if="coinValue" < 50 && coinValue > 10"> 부족합니다</p>
    <p v-else>너무 부족합니다.</p>
  <div>

  </div>

</template>

<script>

export default {
  name: 'App',
  components: {},
  data(){
    return{
      coinValue : 0,
      isOn : false,
      isOn2 : false
    }
  },
  methods : {
    toggle(){
      this.isOn = !this.isOn
    }
    toggle2(){
      this.isOn = !this.isOn
    }
  }
}
</script>

<style scoped>
div{
  border : solid 1px black;
}
.red {
  color:red;
}
.yellow{
  color:yellow;
}
.green{
  color:green;
}
h1{
  text-align:center;
}
.bg-gray{
  background-color:gray;
}

</style>
