<script>
    import FilmCard from './FilmCard.vue'
    import { store } from '../../store'
    export default {
        name: "FilmList",
        components:{
            FilmCard,
        },
        data(){
            return{
                store
            }
        },
    }
</script>






<template>
    <div>
        <h2 class="text-center text-light pt-4">Film</h2>
        <div class="d-flex flex-wrap p-5" id="FilmListBody">
            <FilmCard v-for="element,index in store.foundFilmsArray"
            :key="index"
            :propsElement="element"
            />
        </div>
    </div>

    <div>
        <h2 class="text-center text-light pt-4">Series</h2>
        <div class="d-flex flex-wrap p-5" id="FilmListBody">
            <FilmCard v-for="element,index in store.foundSeriesArray"
            :key="index"
            :propsElement="element"
            />
        </div>
    </div>
  


</template>








<style lang="scss" scoped>
    
    #FilmListBody{
        gap: 2rem;
    }



</style>