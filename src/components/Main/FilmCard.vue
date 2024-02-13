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
  
    <div id="filmCard">
        <img :src="'https://image.tmdb.org/t/p/w342'+ propsElement.poster_path" :alt="propsElement.poster_path" v-if="propsElement.info === false">
        <div id="mediaInfo" class="d-flex flex-column text-light gap-4 p-3" v-else>
            <span>
                <span class="fw-bold">
                    Titolo:
                </span> 
                {{ propsElement.title }}
            </span>
            <span>
                <span class="text-light fw-bold">
                    Titolo originale:
                </span> 
                {{ propsElement.original_title }}
            </span>
            <span>
                <span class="text-light fw-bold">
                    Voto:
                </span>
                {{ propsElement.vote_average }}
            </span>
            <div class="d-flex flex-column overflow-y-auto">
                <span class="text-light fw-bold mb-2">
                    Overview:
                </span>
                <span id="overview" class="overflow-y-auto">
                    {{ propsElement.overview }}
                </span>
            </div>
            
        </div>
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
        #mediaInfo{
            width: 100%;
            height: 503.69px;
        }
    }




</style>