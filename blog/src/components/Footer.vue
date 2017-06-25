<template>
<div class="footer">
    <div class="columns">
        <div class='column is-4 is-offset-4'>
            <div v-if="authenticated">
                <div>
                    <router-link to="/posteditor">Editor</router-link>
                </div>
                <div>
                    <router-link to="/posts/private">Private</router-link>
                </div>
            </div>
        </div>
        <div class='column is-4'>
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
            Auth.logout(this);
        }
    },
    computed:{
        authenticated(){
            return Auth.isAuthenticated();
        }
    }
}
</script>

<style>
    .footer{
        width:100%;
        height:150px;
        padding: 1rem 1.5rem 1rem 1.5rem !important;
        clear:both;
    }
</style>
