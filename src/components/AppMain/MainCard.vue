<script>
export default {
    props:{
        singleCard:{
            type: Object,
            required: true,
        }
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
    <div class="card">
        <div>
            <img :src="singleCard.card_images[0].image_url" :alt="singleCard.name">
        </div>
        <h3>
            {{ singleCard.name }}
        </h3>
        <h4>
            {{ singleCard.type }}
        </h4>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
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

</style>