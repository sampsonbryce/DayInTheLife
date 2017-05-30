<template>
    <transition name="slide-fade">
        <div class='box' ref="toast" v-show="show" id="toast">
            <p class="subtitle">{{ title }}</p>
            <hr />
            <p>{{ body }}</p>
        </div>
    </transition>
</template>

<script>
import EventBus from '../services/eventBus';

export default {
    name: 'toast',
    data(){
        return{
            title: "",
            body: "",
            show: false,
            types: ['error', 'success', 'info']
        }
    },
    methods: {
        toast(title, body, type){
            console.log('showing', title, body, type);
            if(this.types.indexOf(type) >= 0){
                this.title = title;
                this.body = body;
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                }, 2000);
            }else{
                throw "Invalid toast type";
            }
        }
    },
    created (){
        EventBus.$on('toast',this.toast);
    }
}
</script>

<style lang="sass">
    #toast{
        text-align:left;
        position:fixed;
        top:20px;
        right:20px;
        z-index:9999;
        width:300px;
        padding: .5rem;
        & hr,.subtitle{
             margin: .5rem 0 .5rem 0;
        }
    }
    .slide-fade-enter-active, .slide-fade-leave-active{
        transition: all .3s ease;
    }
    .slide-fade-enter{
        transform: translateX(-10px);
        opacity:0;
    }
    .slide-fade-leave-active{
        transform: translateX(10px);
    }
    .slide-fade-leave-to{
        opacity:0;
    }
</style>