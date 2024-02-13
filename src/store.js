import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    filmsUrl: 'https://api.themoviedb.org/3/search/movie?query=',
    seriesUrl: 'https://api.themoviedb.org/3/search/tv?query=',
    foundFilmsArray: [],
    foundSeriesArray: [],
});

//'https://api.themoviedb.org/3/search/movie?query=ritorno&include_adult=false&language=it-IT&page=1'

//https://api.themoviedb.org/3/search/tv?query=big&include_adult=false&language=it-IT&page=1