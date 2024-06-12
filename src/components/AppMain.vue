<script>
import MainCardsList from '../components/AppMain/MainCardsList.vue';
export default {
    components:{
        MainCardsList,
    },
    data() {
        return {
            
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
        <h1>
            Sono Main
        </h1>
        <!--MainCardsList-->
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
main{
    background-color: $main_color;
}

</style>