<script>
import axios from 'axios';
import { store } from '../../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods:{
        getArchetype(){
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                // handle success
                this.store.optionsArchetype = response.data
                console.log(this.store.optionsArchetype);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
        consoleLog(indice){
            console.log(`Mi dai l'${indice}`)
        },
        comunicateAndPickArchetype(indice){
            this.store.pickedArchetype = this.store.optionsArchetype[indice].archetype_name;
            console.log(this.store.pickedArchetype)
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.store.pickedArchetype}`)
            .then((response) => {
            
                this.store.archetypeCardsFounded = response.data
                console.log('archetpecards', this.store.archetypeCardsFounded)
                // this.store.optionsArchetype = response.data
                console.log(this.store.pickedArchetype);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
    },
    created(){
        this.getArchetype();
    }
}
</script>

<template>
    <select name="card-type" id="card-type">
        <option value="option" v-for="(option,index) in this.store.optionsArchetype" :key="index" @click="comunicateAndPickArchetype(index)">
            {{ option.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
select{
    margin-bottom: 2rem;
    padding: .4rem .3rem;
}
</style>