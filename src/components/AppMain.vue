<script>
import MainCardsList from '../components/AppMain/MainCardsList.vue';
import MainSelect from './AppMain/MainSelect.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    components:{
        MainCardsList,
        MainSelect,
    },
    data() {
        return {
            cards: [],
            store,
        }
    },
    methods:{
    },
    created(){

    }
}
</script>

<template>
    <main>
        <div>
            <MainSelect/>
            <MainCardsList/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
main{
    background-color: $main_color;
    display: flex;
    div{
        max-width: $width_container;
        margin: 0 auto;
        padding-top: 3rem;
    }
}

</style>