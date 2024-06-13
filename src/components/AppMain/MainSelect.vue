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
        comunicateArchetype(indice){
            this.store.pickedArchetype = this.store.optionsArchetype[indice].archetype_name;
            console.log(this.store.pickedArchetype)
        }
    },
    created(){
        this.getArchetype();
    }
}
</script>

<template>
    <select name="card-type" id="card-type">
        <option value="option" v-for="(option,index) in store.optionsArchetype" :key="index" @click="comunicateArchetype(index)">
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