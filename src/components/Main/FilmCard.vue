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
        methods:{
            wikName(name){
                const wikName = name.replace(/ /g, "_");
                return wikName
            }
        }
    }
</script>






<template>
  
    <div class="rounded filmCard">
            <img :src="'https://image.tmdb.org/t/p/w342'+ propsElement.poster_path" :alt="propsElement.poster_path" v-if="propsElement.info === false" class="rounded">
            <div class="d-flex flex-column text-light gap-4 p-3 mediaInfo" v-else>
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
                    <span class="fw-bold">
                        Lingua originale:
                    </span> 
                    <img class="languageFlag"
                        :src="'https://flagcdn.com/16x12/'+ propsElement.original_language +'.png'"
                        :alt="propsElement.original_language"
                    >
                </span>
                <span>
                    <span class="text-light fw-bold">
                        Attori nel film:
                    </span> 
                    <br>
                    <a :href="'https://it.wikipedia.org/wiki/'+ wikName(propsElement.cast[index].name)" target=”_blank” v-for="index in 4" class="link-underline link-underline-opacity-0">{{propsElement.cast[index].name}} &nbsp; </a>
                </span>
                <span>
                    <span class="text-light fw-bold">
                        Voto:
                    </span>
                    <span v-for="index in propsElement.vote_average">
                        &#11088;
                    </span>
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
    .h-0{
        height: 0px;
    }
    .filmCard{
        background: rgb(68,68,68);
        background: radial-gradient(circle, rgba(68,68,68,1) 0%, rgba(0,0,0,1) 100%);
        --gap: 2rem;
        --columns: 5;
        flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
        img{
            width: 100%;
            height: 100%;
        }
        .mediaInfo{
            width: 100%;
            height: 503.69px;
            .languageFlag{
                width: 15px;
                height: 10px;
            }
        }
    }
    #filmCard:hover{
        -webkit-box-shadow: 0px 0px 20px 2px #ffffff85; 
        box-shadow: 0px 0px 20px 2px #ffffff85;
    }

    
    #overview {
    --sb-track-color: #ffffff00;
    --sb-thumb-color: #969696;
    --sb-size: 2px;
    }

    #overview::-webkit-scrollbar {
        width: var(--sb-size)
    }

    #overview::-webkit-scrollbar-track {
        background: var(--sb-track-color);
        border-radius: 3px;
    }

    #overview::-webkit-scrollbar-thumb {
        background: var(--sb-thumb-color);
        border-radius: 3px;
    }

    @supports not selector(::-webkit-scrollbar) {
        #overview {
            scrollbar-color: var(--sb-thumb-color)
            var(--sb-track-color);
        }
    }
    




</style>