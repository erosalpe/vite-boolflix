<script>
    import { store } from '../store'
    import axios from 'axios'
    export default {
        name: "HeaderComponent",
        data(){
            return{
                store
            }
        },
        methods:{
            getFilm(){
                store.filmsUrl='https://api.themoviedb.org/3/search/movie?query='
                if(store.searchText != ""){
                    const options = {
                        method: 'GET',
                        url: store.filmsUrl += `${store.searchText}&include_adult=false&language=it-IT&page=1`,
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                        }
                    };
                    axios
                        .request(options)
                        .then(function (response) {
                            console.log(response.data);
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                }
                store.searchText = "";
            }
        }
    }
</script>


<template>
    <header class="d-flex justify-content-between p-3 align-items-center">
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <div>
                <input type="search" name="title" id="boolFlixSearch" placeholder="Search" v-model="store.searchText"  @keyup.enter="getFilm()">
                <button @click="getFilm()">
                    <svg width="20" height="20" viewBox="0 0 25 25">
                        <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                     </svg>
                </button>
            </div>
        </div>
    </header>
</template>








<style lang="scss" scoped>
    header{
        background-color: black;
        div{
            h1{
                color: white;
            }
            div{
                position: relative;
                input::placeholder{
                    position: absolute;
                    left: 30px;
                }
                input{
                    padding-left: 30px;
                }
                button{
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border: none;
                    background-color: transparent;
                }
            }
        }
    }
</style>
