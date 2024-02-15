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
                if(store.searchText && store.searchText.trim()){
                    store.filmsUrl='https://api.themoviedb.org/3/search/movie?query='
                    store.seriesUrl='https://api.themoviedb.org/3/search/tv?query='
                    store.foundFilmsArray = [];
                    store.foundSeriesArray = [];
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
                            store.foundFilmsArray = response.data.results
                            store.foundFilmsArray.forEach(element => {
                                element.info = false;

                                let x = 0;
                                x = Math.round((element.vote_average * 5) / 10);
                                element.vote_average = x;
                                if (element.original_language === "en"){
                                    element.original_language = "gb"
                                } else if (element.original_language === "ko"){
                                    element.original_language = "kr"
                                } else if (element.original_language === "ja"){
                                    element.original_language = "jp"
                                } else if (element.original_language === "zh"){
                                    element.original_language = "cn"
                                }   else if (element.original_language === "hi"){
                                    element.original_language = "in"
                                }


                                const castList = {
                                    method: 'GET',
                                    url: `https://api.themoviedb.org/3/movie/${element.id}/credits?language=it-IT`,
                                    headers: {
                                        accept: 'application/json',
                                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                                    }
                                };
                                axios
                                .request(castList)
                                .then(function (response) {
                                console.log(response.data);
                                element.cast = response.data.cast
                                });
                            });
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                }




                if(store.searchText && store.searchText.trim()){
                    const options = {
                        method: 'GET',
                        url: store.seriesUrl += `${store.searchText}&include_adult=false&language=it-IT&page=1`,
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                        }
                    };
                    axios
                        .request(options)
                        .then(function (response) {
                            console.log(response.data);
                            store.foundSeriesArray = response.data.results
                            store.foundSeriesArray.forEach(element => {
                                element.info = false;
                                let x = 0;
                                x = Math.round((element.vote_average * 5) / 10);
                                element.vote_average = x;
                                if (element.original_language === "en"){
                                    element.original_language = "gb"
                                } else if (element.original_language === "ko"){
                                    element.original_language = "kr"
                                } else if (element.original_language === "ja"){
                                    element.original_language = "jp"
                                }  else if (element.original_language === "zh"){
                                    element.original_language = "cn"
                                }  else if (element.original_language === "hi"){
                                    element.original_language = "in"
                                }

                                const castListSeries = {
                                    method: 'GET',
                                    url: `https://api.themoviedb.org/3/tv/${element.id}/aggregate_credits?language=it-IT`,
                                    headers: {
                                        accept: 'application/json',
                                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                                    }
                                };
                                axios
                                .request(castListSeries)
                                .then(function (response) {
                                console.log(response.data);
                                element.cast = response.data.cast
                                });
                            });
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                }

                store.searchText = "";
            }
        },
        mounted() {
                store.foundFilmsArray = [];
                store.foundSeriesArray = [];
                const optionsStartFilms = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/trending/movie/week?language=it-IT',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                    }
                };
                axios
                    .request(optionsStartFilms)
                    .then(function (response) {
                        console.log(response.data);
                        store.foundFilmsArray = response.data.results
                        store.foundFilmsArray.forEach(element => {
                            element.info = false;

                            let x = 0;
                            x = Math.round((element.vote_average * 5) / 10);
                            element.vote_average = x;
                            if (element.original_language === "en"){
                                element.original_language = "gb"
                            } else if (element.original_language === "ko"){
                                element.original_language = "kr"
                            } else if (element.original_language === "ja"){
                                element.original_language = "jp"
                            } else if (element.original_language === "zh"){
                                element.original_language = "cn"
                            }   else if (element.original_language === "hi"){
                                element.original_language = "in"
                            }

                            const castList = {
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/movie/${element.id}/credits?language=it-IT`,
                                headers: {
                                    accept: 'application/json',
                                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                                }
                            };
                            axios
                            .request(castList)
                            .then(function (response) {
                            console.log(response.data);
                            element.cast = response.data.cast
                            });

                        });
                    })
                    .catch(function (error) {
                        console.error(error);
                    });




            
                const optionsStartSeries = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/trending/tv/week?language=it-IT',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                    }
                };
                axios
                    .request(optionsStartSeries)
                    .then(function (response) {
                        console.log(response.data);
                        store.foundSeriesArray = response.data.results
                        store.foundSeriesArray.forEach(element => {
                            element.info = false;
                            let x = 0;
                            x = Math.round((element.vote_average * 5) / 10);
                            element.vote_average = x;
                            if (element.original_language === "en"){
                                element.original_language = "gb"
                            } else if (element.original_language === "ko"){
                                element.original_language = "kr"
                            } else if (element.original_language === "ja"){
                                element.original_language = "jp"
                            }  else if (element.original_language === "zh"){
                                element.original_language = "cn"
                            }  else if (element.original_language === "hi"){
                                element.original_language = "in"
                            }

                            const castListSeries = {
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/tv/${element.id}/aggregate_credits?language=it-IT`,
                                headers: {
                                    accept: 'application/json',
                                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2N2Q3NjYzY2UzNzUxMjNkYzgxNTI2MTBkYmQ2ZiIsInN1YiI6IjY1Y2IzMDZiODliNTYxMDE4NDY5M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-w1WbxZCsRTB_FDcElctfWPtKQWSug8oADWIYtpHfY'
                                }
                            };
                            axios
                            .request(castListSeries)
                            .then(function (response) {
                            console.log(response.data);
                            element.cast = response.data.cast
                            });

                        });
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            store.searchText = "";
        }
    }
</script>


<template>
    <header class="d-flex justify-content-between p-3 align-items-center">
        <div>
            <h1>BoolFlix</h1>
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
        position: fixed;
        z-index: 1;
        width: 100%;
        background-color: rgb(0, 0, 0);
        div{
            h1{
                color: red;
                text-shadow: 4px 1px 3px rgba(255, 255, 255, 1);
            }
            div{
                position: relative;
                input::placeholder{
                    position: absolute;
                    left: 30px;
                }
                input{
                    padding-left: 30px;
                    border: none;
                    border-radius: 10px;
                    -webkit-box-shadow: 0px 0px 10px 1px #FFFFFF; 
                    box-shadow: 0px 0px 10px 1px #FFFFFF;
                }
                input:hover{
                    -webkit-box-shadow: 0px 0px 30px 1px #FFFFFF; 
                    box-shadow: 0px 0px 30px 1px #FFFFFF;
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
