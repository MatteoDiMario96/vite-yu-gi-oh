<script>
import MainCardsList from '../components/AppMain/MainCardsList.vue';
import MainSelect from './AppMain/MainSelect.vue';
export default {
    components:{
        MainCardsList,
        MainSelect,
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
        <div>
            <MainSelect/>
        <!--MainCardsList-->
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