<template>
    <div>
        <section class="hero is-info column is-12 has-text-left">
            <div class="container">
                <h1 class="title">{{ post.title }}</h1>
                <!--<h2 class="subtitle"></h2>-->
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
    data() {
        return {
            post: {}
        }
    },
    created(){
        PostsService.getPost(this, this.$route.params.id).then(response =>{
            this.post = response.body;
        }, response => {
            console.error("Failed to get post");
        });
    }
}
</script>