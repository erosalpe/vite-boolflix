<script>
    import { store } from '../../store'
    export default {
        name: "FilmCard",
        props: [
            'propsElement','key'
        ],
        data(){
            return{
                store
            }
        },
    }
</script>






<template>
  
    <div id="filmCard"
    @click="store.info = !store.info"
    >
        <img :src="'https://image.tmdb.org/t/p/w342'+ propsElement.poster_path" :alt="propsElement.poster_path">
    </div>

  


</template>








<style lang="scss" scoped>
    #filmCard{
        background-color: black;
        --gap: 2rem;
        --columns: 5;
        flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
        img{
            width: 100%;
            height: 100%;
        }
    }




</style>