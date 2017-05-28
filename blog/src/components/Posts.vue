<template>
    <div>
        <section class="hero is-info column is-12 has-text-left">
            <div class="container">
                <h1 class="title">Posts</h1>
                <h2 class="subtitle">Recent</h2>
            </div>
        </section>
        <section class='section'>
            <div class="container">
                <div class="columns is-multiline">
                    <div v-for='card in post_cards' class='box column is-8 is-offset-2'>
                        <h2 class="title">{{ card.title }}</h2>
                        <p>
                            <vue-markdown>{{ card.content }}</vue-markdown>
                        </p>
                        <!--<button v-if="Auth.authenticated">
                                <router-link to="/posteditor">
                                    <icon class="edit"></icon>
                                </router-link>
                            </button>-->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Auth from '../services/auth'
// var Auth = require('../services/auth.js');
// console.log('Auth', Auth);
import PostsService from '../services/posts'

export default {
    name: 'posts',
    data() {
        return {
            post_cards: []
        }
    },
    methods: {
        getCards() {
            PostsService.getPosts(this).then(response => {
                // success
                this.post_cards = response.body;
            }, response => {
                // error
            });
        }
    },
    beforeMount() {
        this.getCards();
    }
}
</script>