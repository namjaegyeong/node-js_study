<template>
  <div>
    <h1>Write Memo</h1>
    
    <h3>title </h3>
    <input type="text" v-model="titleVal">
    <h5>text</h5>
    <input type="text" v-model="textVal">
    <hr>
    <button @click="onWriteMemo" >write</button>

    <h2 v-show="bWaitWindow" > Uploading... </h2>


  </div>
</template>
<script>
export default {
  name: "WriteMemo",
  data() {
    return {
      titleVal: "",
      textVal: "",
    };
  },
  computed: {
      bWaitWindow() {
        return this.$store.state.bNowWriting
      } 
  },
  methods: {
      onWriteMemo() {
          this.$store.dispatch('writeMemo',{
              title : this.titleVal,
              text : this.textVal
          })
          console.log(this.titleVal,this.textVal);
      }
  },
  created() {},
};
</script>
<style scoped>
</style>