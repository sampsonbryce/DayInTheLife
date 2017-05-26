<template>
    <section class="section">
        <div class="container">
            <div class="box columns">
                <form method="post" action="/register" class="column is-8 is-offset-2" id="register-form">
                    <div class="field">
                        <label class="label">Email</label>
                        <p class="control">
                            <input class="input" v-bind:class="fieldError('email')" name="email" />
                        </p>
                        <p v-if="'email' in this.errors" class="help is-danger">{{ errors['email'] }}</p>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <p class="control">
                            <input class="input" v-bind:class="fieldError('password')" type="password" name="password" />
                        </p>
                        <p v-if="'password' in this.errors" class="help is-danger">{{ errors['password'] }}</p>
                    </div>
                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <p class="control">
                            <input class="input confirm-password" v-bind:class="fieldError('confirm_password')" type="password" />
                        </p>
                        <p v-if="'confirm_password' in this.errors" class="help is-danger">{{ errors['confirm_password'] }}</p>
                    </div>
                    <button v-on:click="submit" class="button is-primary" type="button">Register</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import API from '../api'
import getFormData from 'get-form-data'

export default {
    name: "register",
    data () {
        return {
            errors: {}
        }
    },
    methods: {
        submit (event) {
            this.errors = {};
            let form = document.getElementById("register-form");
            var pass = document.querySelector('form input[name="password"]');
            var c_pass = document.querySelector('form .confirm-password');
            console.log('pass', pass.value, c_pass.value);
            if (pass.value != c_pass.value){
                this.$set(this.errors, 'confirm_password', "Passwords do not match!");
                return;
            }
            console.log('form', form)
            let data = getFormData(form);
            console.log('data', data);
            this.$http.post(API.url + '/signup', data, {
                emulateJSON: true
                //headers: {
                    //'Content-Type': 'multipart/form-data'
                    //'Content-Type': 'application/json'
                //}
            }).then(response => {
                //success
                console.log('success');
            }, response => {
                //error
                console.log('error', response);
            });
        },
        fieldError(name) {
            if(name in this.errors){
               return 'is-danger'; 
            }
            return '';
        }
    }
}
</script>
