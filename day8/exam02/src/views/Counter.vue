<template>
    <div>
        <h1>The Counter</h1>
        <h2>{{counter}}</h2>
        <button @click="inc">inc</button>
        <button @click="dec">dec</button>
        <button @click="clear">clear</button>
    </div>
</template>
<script>
export default {
    name:"Counter",
    computed : {
        counter(){
            if(localStorage.getItem('counter')!=undefined){

            }
            return this.$store.state.counter
        }
    },
    methods:{
        inc(){
            this.$store.commit('inc');
            //this.$store.state.counter++
        },
        dec(){
            this.$store.commit('dec');
        },
        clear(){
            this.$store.commit('clear');
            value : 10
        }
    }
}
</script>
<style>
    
</style>