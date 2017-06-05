<template>
    <section class="section">
        <div class="container">
            <div class="box columns">
                <form method="post" action="/login" class="column is-8 is-offset-2" id="login-form">
                    <div class="field">
                        <label class="label">Email</label>
                        <p class="control">
                            <input class="input" name="email" />
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <p class="control">
                            <input class="input" type="password" name="password" />
                        </p>
                    </div>
                    <button v-on:click="submit" class="button is-primary" type="button">Login</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import API from '../api'
import getFormData from 'get-form-data'
import Auth from '../services/auth'

export default {
    name: "login",
    methods: {
        submit (event) {
            let form = document.getElementById("login-form");
            console.log('form', form)
            let data = getFormData(form);
            console.log('data', data);
            Auth.login(this, data, '/');
        }
    }
}
</script>