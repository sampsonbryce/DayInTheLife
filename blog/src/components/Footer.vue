<template>
    <div class="footer columns">
        <div class='column is-4 is-offset-8'>
            <div >
                <router-link to="/login">Login</router-link>
            </div>
            <div>
                <a href="#" v-on:click="logout">Logout</a>
            </div>
        </div>
    </div>
</template>
<script>
import Auth from '../services/auth'

export default {

    methods:{
        logout(){
            Auth.logout();
        }
    }
}
</script>

<style>
    .footer{
        position:absolute;
        bottom:0;
        width:100%;
    }
</style>
