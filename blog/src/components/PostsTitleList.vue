<template>
    <div>
        <ul>
           <li v-for="post in posts" class="title-item">
               <a :data-id="post._id" @click="selected(post._id)">{{ post.title }}</a>
           </li>
        </ul>
    </div>
</template>

<script>
import PostsService from '../services/posts'
export default {
    name: 'posts-title-list',
    data(){
        return {
            posts: []
        }
    },
    methods:{
        selected(id){
            this.$emit('selected', id);
        },
        getPosts(){
            PostsService.getPosts(this).then(response => {
                this.posts = response.body;
            }, response => {
                console.error('error', response);
            });
        }
    },
    mounted(){
        this.getPosts();
    }
}
</script>

<style>
    .title-item{
        width:100%;
    }
</style>