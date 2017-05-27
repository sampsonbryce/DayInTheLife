<template>
    <div>
        <section class="hero is-info column is-12 ">
            <div class="container">
                <div class='columns'>
                    <div class="column is-6 has-text-left">
                        <h1 class="title">Editor</h1>
                    </div>
                    <div class="column is-6 has-text-right">
                        <button class="button is-white"><icon name="plus"></icon></button>
                    </div>
                </div>
            </div>
        </section>
        <section class='section'>
            <div class="container">
                <div class="columns">
                    <div v-for='card in post_cards' class='box column is-8 is-offset-2'>
                        <h2 class="title">{{ card.title }}</h2>
                        <p>
                            <vue-markdown>{{ card.content }}</vue-markdown>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </section>
    </div>

</template>