<template>
    <div>
        <section class="hero is-info column is-12 has-text-left">
            <div class="container">
                <h1 class="title">{{ post.title }}</h1>
                <h2 class="subtitle">{{ post.subtitle }}</h2>
            </div>
        </section>
        <section class='section'>
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2 has-text-left">
                        <vue-markdown :source="post.content"></vue-markdown>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PostsService from "../services/posts"

export default {
    name: "FullPost",
    props: ['id', 'type'],
    data() {
        return {
            post: {}
        }
    },
    created(){
        console.log('getting post', this.id, this.type)
        PostsService.getPost(this, this.id, this.type).then(response =>{
            console.log('got post', response.body)
            this.post = response.body;
        }, response => {
            console.error("Failed to get post");
        });
    }
}
</script>