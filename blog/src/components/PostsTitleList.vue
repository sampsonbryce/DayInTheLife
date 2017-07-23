<template>
    <div>
        <ul>
           <li v-for="post in posts" class="title-item">
               <a :data-id="post._id" @click="selected(post._id, post.type)">{{ post.title }}</a>
               <span @click="to_delete = {id: post._id, title: post.title}">
                   <icon name="trash"></icon>
               </span>
           </li>
        </ul>
        <confirm-modal :active="confirm_active" :body="'Are you sure you want to delete?'" :title="'Delete ' + to_delete.title + '?'" @cancel="to_delete = {}" @confirm="deletePost"></confirm-modal>
    </div>
</template>

<script>
import PostsService from '../services/posts';
import ConfirmModal from './ConfirmModal.vue';

export default {
    name: 'posts-title-list',
    data(){
        return {
            posts: [],
            to_delete: {}
        }
    },
    computed: {
        confirm_active (){
           return Object.keys(this.to_delete).length > 0; 
        }
    },
    methods:{
        selected(id, type){
            this.$emit('selected', {id: id, type: type});
        },
        getPosts(){
            this.posts = []
            PostsService.getPosts(this).then(response => {
                this.posts = this.posts.concat(response.body);
            }, response => {
                console.error('error', response);
            });

            PostsService.getPosts(this, 'private').then(response => {
              this.posts = this.posts.concat(response.body);
            }, response => {
                console.error('error', response);
            });
        },
        deletePost(){
            PostsService.deletePost(this, this.to_delete.id).then(response => {
                this.to_delete = {};
                this.getPosts();
            }, response => {
                console.error('error', response);
            });
        }
    },
    mounted(){
        this.getPosts();
    },
    components: {
        ConfirmModal
    } 
}
</script>

<style lang="sass">
    .title-item{
        width:100%;
        display:flex;

        & a{
            flex:1;
            &:hover{
                background-color: aquamarine;
            }
        }

        & span{
            margin:0 10px 0 10px;
            display:flex;
            align-items: center;
            opacity:0.5;
            cursor:pointer;
            &:hover{
                opacity:1;
            }
        }
    }
</style>