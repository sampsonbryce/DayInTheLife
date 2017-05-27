<template>
<div class="footer">
    <div class="columns">
        <div class='column is-4 is-offset-8'>
            <div>
                <router-link to="/posteditor">Editor</router-link>
            </div>

            <div>
                <router-link to="/login">Login</router-link>
            </div>

            <div>
                <a href="#" v-on:click="logout">Logout</a>
            </div>
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
        position:relative;
        bottom:0;
        width:100%;
        margin-top:-150px !important;
        height:150px;
        padding: 1rem 1.5rem 1rem 1.5rem !important;
        clear:both;
    }
</style>
