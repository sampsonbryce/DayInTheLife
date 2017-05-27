<template>
    <div style="height:100%">
        <section class="hero is-info column is-12 ">
            <div class="container">
                <div class='columns'>
                    <div class="column is-6 has-text-left">
                        <h1 class="title">Editor</h1>
                    </div>
                    <div class="column is-6 has-text-right">
                        <button class="button is-white" v-on:click="modal_active = true">
                            <icon name="plus"></icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class='section' style="height:100%">
            <div class="container" style="height:100%">
                <div class="columns" style="height:100%">
                    <div class="column is-6">
                        <textarea v-model="input" id="mdtext" class="textarea"></textarea>
                    </div>
                    <div class="column is-6">
                        <vue-markdown v-bind:source="input"></vue-markdown>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal" v-bind:class="{'is-active': modal_active}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="subtitle" style="color:white">Title of Post</p>
                <input v-model="new_title" class="input">
                <button class="button" v-on:click="createPost">Create</button>
            </div>
            <button class="modal-close"></button>
        </div>
    </div>
</template>

<script>
import API from '../api';

export default {
    data() {
        return {
            new_title: "",
            modal_active: false,
            input: "test"
        }
    },
    methods: {
        createPost() {
            this.$http.post(API.url + '/post/create', { title: this.new_title }, { emulateJSON: true }).then(response => {
                console.log('created post', response);
                this.modal_active = false;
            }, response => {
                console.log('error', response)
            });
        }
    }
}

</script>

<style>
.modal-content>* {
    margin-top: 15px;
}

#mdtext{
    height:100%;
}
</style>