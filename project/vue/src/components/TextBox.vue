<template >

<div>
  <h1 class="title">{{title}}</h1>
  <p> {{text}} </p>
</div>
    
</template>

<script>
export default {
    name : "TextBox",
    data() {
        return {
        }
    },
    props : ["title","text"],
    methods:{
    },
    created() {
    }
}
</script>

<style scoped>
div {
  border: solid black 1px;
  background-color: gainsboro;
}
    
</style>