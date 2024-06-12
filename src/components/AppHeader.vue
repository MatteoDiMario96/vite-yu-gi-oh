<script>
export default {
    data() {
        return {
            logoPagina:{
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg',
                title: 'Yu-Gi-Oh, Gioco Di Carte',
            }
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <header>
        <img :src="logoPagina.url" :alt="logoPagina.title">
        <h1>
            Yu-Gi-Oh Api
        </h1>
    </header>
</template>

<style lang="scss" scoped>
header{
    display: flex;
    align-items: center;
    height: 90px;
    padding: 1rem;
    img{
        height: 38%;
    }
    h1{
        margin-left: 2rem;
        font-size: 1.9rem;
    }
}

</style>