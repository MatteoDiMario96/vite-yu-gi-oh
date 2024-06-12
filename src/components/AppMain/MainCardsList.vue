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
    padding: 1rem;
    background-color: white;
    section{
        width: 100%;
        h2{
            background-color: black;
            color: $text_color;
        }
            div#cards{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                div.card{
                    width: calc((100% / 5) - .4rem);
                    margin-right: .35rem;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
    


</style>