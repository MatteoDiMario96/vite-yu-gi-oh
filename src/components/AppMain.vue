<script>
import MainCardsList from '../components/AppMain/MainCardsList.vue';
import MainSelect from './AppMain/MainSelect.vue';
import axios from 'axios';
export default {
    components:{
        MainCardsList,
        MainSelect,
    },
    data() {
        return {
            cards: [],
        }
    },
    methods:{
        get20CardsApi(){
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0')
            .then((response) => {
                // handle success
                this.cards.push(...response.data.data);
                console.log(this.cards);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
    },
    created(){
        this.get20CardsApi();
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
    }
}

</style>