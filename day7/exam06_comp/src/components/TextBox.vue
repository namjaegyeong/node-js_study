<template>
    <div>
        <h1 class="title">{{Title}}</h1>
        <p> {{text}} </p>
    </div>
</template>

<script>
export default {
    name : "TextBox",
    data() {
        return{
        }
    },
    props : ["title","text"],
    method:{

    },
    created(){

    }
}
</script>
<style scoped>

div {
  border : solid black 1px;
  background-color:gainsboro;
}
    
</style>