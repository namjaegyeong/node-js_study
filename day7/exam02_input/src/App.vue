<template>
  <div>
    <h1>none v-model</h1>
    <h5>{{textVal}}</h5>
    <input type="text" :value="textVal" @change="onChange" ><br>    
    <input type="text" :value="textVal" @input="onInput" ><br>
    <input type="text" value="textVal"><br>
    <button @click="onOK">ok</button>
  </div>

  <div>
    <h1>with v-model</h1>
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm">
  </div>

  


</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      textVal : 'hello',
      textVal_vm : 'hi vue'
    }
  },
  methods: {
    onOK() {
      // console.log(this.textVal)
      this.textVal = this.tempText
    },
    onChange(evt) {
      console.log(evt.target.value)
      this.tempText = evt.target.value
    },
    onInput(evt) {
      console.log(evt.target.value)
      this.textVal = evt.target.value
    }
  },
  created() {
    this.tempText = ''
  }
}
</script>

<style scoped>
div {
  border: solid black 1px;
}
</style>