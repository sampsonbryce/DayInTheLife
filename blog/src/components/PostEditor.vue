<template>
    <div>
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
        <section class='section'>
            <div class="columns">
                <div class="column is-2">
                    <posts-title-list @selected="changeSelection" ref="postlist"></posts-title-list>
                </div>
                <div class="column is-5">
                    <input v-model="title" id="ptitle" class="input" placeholder="title"></input>
                    <textarea v-model="content" id="pcontent" class="textarea" placeholder="content"></textarea>
                </div>
                <div class="column is-5">
                    <vue-markdown v-bind:source="content"></vue-markdown>
                </div>
            </div>
            <div class="columns">
                <div class="column is-12 has-text-centered">
                    <button class="button is-primary" v-on:click="updatePost">Update</button>
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
import PostsService from '../services/posts';
import PostsTitleList from './PostsTitleList.vue'

export default {
    data() {
        return {
            new_title: "",
            modal_active: false,
            content: "",
            title: "",
            id: null
        }
    },
    methods: {
        getPost(id) {
            PostsService.getPost(this, id).then(response => {
                console.log('got post', response.body);
                this.title = response.body.title || "";
                this.content = response.body.content || "";
                this.id = response.body._id;
            }, response => {
                console.error('error', response);
            });
        },
        updatePost(){
            console.log('content', this.content);
            PostsService.updatePost(this, this.id, this.title, this.content).then(response => {
                console.log('udpated');
                this.$refs.postlist.getPosts();
            }, response => {
                console.error('error', response);
            });
        },
        createPost(){
            PostsService.createPost(this, this.new_title, "").then(response => {
                console.log('created');
                this.modal_active = false;
            }, response => {
                console.error('error', response);
            });
        },
        changeSelection(id){
            this.getPost(id);
        }
    },
    components: {
        PostsTitleList
    }
}

</script>

<style>
.modal-content>* {
    margin-top: 15px;
}

#pcontent {
    height: 300px;
}
</style>