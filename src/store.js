import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    filmsUrl: 'https://api.themoviedb.org/3/search/movie?query=',
    foundFilmsArray: [],
    info: false,
});

//'https://api.themoviedb.org/3/search/movie?query=ritorno&include_adult=false&language=it-IT&page=1'