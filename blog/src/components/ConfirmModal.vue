<template>
    <div class="confirm-modal modal" v-bind:class="{'is-active': active}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p class="title">{{ title }}</p>
                    <hr />
                    <p class="subtitle">{{ body }}</p>
                    <button class="button" v-on:click="emitCancel">Cancel</button>
                    <button class="button" v-on:click="emitConfirm">Confirm</button>
                </div>
            </div>
            <button class="modal-close"></button>
        </div>
</template>

<script>
export default {
    name: "confirm-modal",
    props:['active', 'title', 'body'],
    data(){
        return {

        }
    },
    methods: {
        emitCancel (){
            this.$emit("cancel");
        },
        emitConfirm (){
            this.$emit("confirm");
        }
    }
}
</script>

<style>
    .confirm-modal{
        z-index:1;
    }
</style>