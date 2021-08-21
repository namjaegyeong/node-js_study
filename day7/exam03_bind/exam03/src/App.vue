<template>
  <div v-html="tags" >    
  </div>
  <button @click="changeHtml"> change </button>

  <div>
    <img :src =imgSrc >
    <br>
    <button @click="onSize100">size 100</button>
    <button @click="onSize200">size 200</button>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      tags : '<h1> hello view </h1>',
      // imgSrc100 : 'https://placeimg.com/100/100/tech',
      // imgSrc200 : 'https://placeimg.com/200/200/tech',
      imgSrc : ''
    }
  },
  methods : {
    changeHtml() {
      this.tags = '<ul><li>item1</li><li>item2</li></ul>'
    },
    onSize100() {
      this.imgSrc = 'https://placeimg.com/100/100/tech'
    },
    onSize200() {
      this.imgSrc = 'https://placeimg.com/200/200/tech'
    }
  }
}
</script>

<style scoped>
div {
  margin: 4px;
  border: solid 1px black;
}
</style>