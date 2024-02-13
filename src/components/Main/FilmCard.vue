<script>
    import { store } from '../../store'
    export default {
        name: "FilmCard",
        data(){
            return{
                store
            }
        },
    }
</script>






<template>
  
    <div id="filmCard">
        <img :src="store.foundFilmsArray" alt="">
    </div>

  


</template>








<style lang="scss" scoped>
    #filmCard{
        background-color: black;
        --gap: 2rem;
        --columns: 5;
        flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
    }




</style>