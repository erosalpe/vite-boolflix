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
  
    <div class="d-flex flex-wrap p-5">
        <FilmCard v-for="(element, index) in store.foundFilmsArray"/>
    </div>
    

  


</template>








<style lang="scss" scoped>
    




</style>