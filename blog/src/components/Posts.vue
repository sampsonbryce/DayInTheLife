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
                        <h2 class="title">
                            <router-link :to="{ path: '/post/' + card._id }">
                                {{ card.title }}
                            </router-link>
                        </h2>
                        <p class="has-text-left post-content">
                            <vue-markdown>{{ card.content }}</vue-markdown>
                        </p>
                        <div class="meta-link-container">
                            <div class="dates">
                                <span>Created: {{ getDate(card.created) }}</span>
                                <span v-if="card.updated != card.created">Updated: {{ getDate(card.updated) }}</span>
                            </div>
                            <router-link :to="{ path: '/post/' + card._id }">Read More...</router-link>
                        </div>
                        <div class="has-text-right">
                            <router-link :to="{ path: '/posteditor', hash: card._id }" v-if="authenticated" class="button is-primary edit-link">
                                <span class="icon">
                                    <icon name="pencil-square-o"></icon>
                                </span>
                            </router-link>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Auth from '../services/auth.js';
import PostsService from '../services/posts';

export default {
    name: 'posts',
    data() {
        return {
            post_cards: [],
            authenticated: Auth.authenticated
        }
    },
    methods: {
        getCards() {
            PostsService.getPosts(this).then(response => {
                // success
                this.post_cards = response.body;
            }, response => {
                // error
                console.error('Failed to get cards');
            });
        },
        getDate(date){
            var new_date = new Date(date);
            return (new_date.getMonth()+1) + '/' + new_date.getDate() + '/' + new_date.getFullYear();
        }
    },
    beforeMount() {
        this.getCards();
    }
}
</script>

<style>
.post-content{
    max-height:150px;
    overflow:hidden;
    text-overflow: ellipsis;
}
.dates{
    color:#cacaca;
}
.meta-link-container{
    display: flex;
    justify-content: space-between;
}
</style>
