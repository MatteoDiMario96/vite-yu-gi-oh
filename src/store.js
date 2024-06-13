import { reactive } from 'vue'

export const store = reactive({
    cards: [],
    optionsArchetype: [],
    pickedArchetype: null,
    archetypeCardsFounded: [],
})