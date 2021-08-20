<template>
    <div>
        <input type="text" v-model="this.user.id"><br>
        <input type="text" v-model="user.passwd"><br>
        <button @click="lohinCheck">login</button>
    </div>
</template>
<script>
export default {
    name : "LoginBox",
    props : ["id"],
    emits : ["login"],
    data() {
        return{
            user : {}
        }
    },
    created(){
        this.user.id = this.id
        this.user.passwd = ''
    },
    methods:{
        loginCheck(){
            if(this.user.passwd == 'qwer'){
                console.log('login success');
                this.$emit("login",true)
            }
            else{
                console.log('login failed');
                this.$emit("login",false)
            }
        }
    }
}
</script>
<style>
    
</style>