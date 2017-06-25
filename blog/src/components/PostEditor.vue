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
        <section class='section content'>
            <div class="columns content-container">
                <div class="column is-2">
                    <posts-title-list @selected="changeSelection" ref="postlist"></posts-title-list>
                </div>
                <div class="column is-5 markdown-editor">
                    <input v-model="edit_post.title" id="ptitle" class="input" placeholder="title"></input>
                    <input v-model="edit_post.subtitle" id="psubtitle" class="input" placeholder="subtitle"></input>
                    <textarea v-model="edit_post.content" id="pcontent" class="textarea" placeholder="content" @keyup="saveTimer"></textarea>
                </div>
                <div class="column is-5 has-text-left rendered-markdown">
                    <vue-markdown v-bind:source="edit_post.content"></vue-markdown>
                </div>
            </div>
            <div class="columns button-container">
                <div class="column is-12 has-text-centered">
                    <div class="private-container">
                        <select v-model="edit_post.type" id="pprivate" class='select'>
                            <option v-for="option in post_types" >{{ option }}</option>
                        </select>
                    </div>
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
import PostsTitleList from './PostsTitleList.vue';
import EventBus from '../services/eventBus';

export default {
    data() {
        return {
            new_title: "",
            modal_active: false,
            post_types: ['public', 'private'],
            edit_post: {},
            timer: null
        }
    },
    methods: {
        getPost(id, type) {
            PostsService.getPost(this, id, type).then(response => {
                console.log('got post', response.body);
                this.edit_post = response.body;
                this.$router.push({"hash": this.id});
            }, response => {
                console.error('error', response);
            });
        },
        updatePost(){
            PostsService.updatePost(this, this.edit_post).then(response => {
                this.$refs.postlist.getPosts();
                EventBus.$emit('toast', "Updated!", "Good job!", "success");
            }, response => {
                console.error('error', response);
            });
        },
        createPost(){
            PostsService.createPost(this, this.new_title, "").then(response => {
                this.modal_active = false;
                this.$refs.postlist.getPosts();
                this.$router.push({"hash": response.body._id});
                this.getPost(response.body._id);
            }, response => {
                console.error('error', response);
            });
        },
        changeSelection(data){
            console.log('change selection', data);
            this.getPost(data.id, data.type);
        },
        saveTimer(){
            if(this.timer != null){
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.updatePost()
            }, 2000);
        }
    },
    components: {
        PostsTitleList
    },
    created(){
        var post_id = this.$route.hash;
        if(post_id){
            this.getPost(post_id.slice(1));
        }
    }
}
</script>

<style lang="sass">
.modal-content > * {
    margin-top: 15px;
}

#pcontent {
    flex:1;
    resize: none;
}
.markdown-editor{
    display:flex;
    flex-direction: column;
}
body{
}
#app{
    height: 100vh;
}
.nav{
    height:50px;
    overflow: hidden;
}
.hero{
    height:50px;
    overflow: hidden;
}
.content{
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
}

.content > .content-container{
    flex:1;
    & .rendered-markdown{
        overflow-y: auto;
    }
}
.content > .button-container{
}

.footer{
    height:100px;
    overflow: hidden;
}
.content:not(:last-child){
    margin:0;
}
</style>