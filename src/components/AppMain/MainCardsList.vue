<script>
import MainCard from './MainCard.vue';
import { store } from '../../store.js';
export default {
    components:{
        MainCard,
    },
    props:{
        cards:{
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            // store,
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <div id="container">
        <section>
            <h2>
                Found * cards
            </h2>
            <div id="cards">
                <div class="card" v-for="(card,index) in cards" :key="card.id">
                <div>
                    <img :src="card.card_images[0].image_url" :alt="card.name">
                </div>
                <h3>
                    {{ card.name }}
                </h3>
                <h4>
                    {{ card.type }}
                </h4>
            </div>
            </div>
        </section>
    </div>
    <!--MainCard-->
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div#container{
    width: 100%;
    padding: 2rem 2rem 1rem 2rem;
    background-color: white;
    section{
        width: 100%;
        h2{
            background-color: black;
            color: $text_color;
            padding: .5rem .7rem .5rem .7rem;
            font-size: 1rem;
        }
            div#cards{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                div.card{
                    width: calc((100% / 5) - 1rem);
                    margin-right: 1rem;
                    background-color: $main_color;
                    margin-bottom: .8rem;
                    img{
                        width: 100%;
                        margin-bottom: .4rem;
                    }
                    h3{
                        color: $text_color;
                        text-align: center;
                        margin-bottom: .4rem;
                        font-size: .8rem;
                    }
                    h4{
                        font-weight: 100;
                        text-align: center;
                        font-size: .7rem;
                        margin-bottom: .4rem;
                    }
                }
            }
        }
    }
    


</style>