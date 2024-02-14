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
    <div id="filmListBg">
        <div>
            <h2 class="ps-5 text-light pt-4 fs-1">Film</h2>
            <div class="d-flex flex-wrap p-5" id="FilmListBody">
                <FilmCard v-for="element,index in store.foundFilmsArray"
                :key="index"
                :propsElement="element"
                @click="element.info = !element.info"
                />
            </div>
        </div>
    
        <div>
            <h2 class="ps-5  text-light pt-4 fs-1">Series</h2>
            <div class="d-flex flex-wrap p-5" id="FilmListBody">
                <FilmCard v-for="element,index in store.foundSeriesArray"
                :key="index"
                :propsElement="element"
                @click="element.info = !element.info"
                />
            </div>
        </div>
    </div>
</template>








<style lang="scss" scoped>
    #filmListBg{
        background: rgba(255, 255, 255, 0.1);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(91,91,91,1) 50%, rgba(0,0,0,1) 100%);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        #FilmListBody{
            gap: 2rem;
        }
    }
</style>