<script>
import MainCard from './MainCard.vue';
import { store } from '../../store.js';
export default {
    components:{
        MainCard,
    },
    data() {
        return {
            store,
        }
    },
    methods:{

    },
    updated() {
        console.log(555555555, store.archetypeCardsFounded)
    },
    created(){
        console.log(3436466633 ,store.archetypeCardsFounded)
    }
}
</script>

<template>
    <div id="container">
        <section>
            <h2>
                Found {{ store.archetypeCardsFounded.length }} cards
            </h2>
            <div id="cards">
                <MainCard  v-for="(card,index) in store.archetypeCardsFounded.data" :key="index"
                :singleCard="card"
                />
            </div>
        </section>
    </div>
    <!--MainCard-->
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div#container{
    width: 100%;
    padding: 3rem 2rem 1rem 3rem;
    background-color: white;
    section{
        width: 100%;
        h2{
            background-color: black;
            color: $text_color;
            padding: .5rem .7rem .5rem .7rem;
            font-size: 1rem;
            margin-right: 1rem;
        }
            div#cards{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                
            }
        }
    }
    


</style>