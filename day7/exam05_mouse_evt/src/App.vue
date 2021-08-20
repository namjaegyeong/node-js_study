<template>
  <h1>{{score}}</h1>
  <p>{{mousePos.x}},{{mousePos.y}}</p>
  <div class="blue-box" @mousemove="onMouseMove($event,1)"></div>
  <div class="red-box" @mousemove="onMouseMove($event,-1)"></div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      score : 0,
      mousePos:{x:0,y:0}
    }
  },
  method : {
    onMouseMove(evt,val){
      this.mousePos.x=evt.pageX
      this.mousePos.y=evt.pageY
      this.score += val
    }
  }
};
</script>

<style scoped>

.blue-box{
  width: 200px;
  height: 200px;
  background-color:blue;
}
.red-box{
  width: 200px;
  height: 200px;
  background-color:red;
}

</style>
