import { reactive } from 'vue'

export const store = reactive ({
    searchText: " ",
    filmsUrl: 'https://api.themoviedb.org/3/search/movie?query=',
    seriesUrl: 'https://api.themoviedb.org/3/search/tv?query=',
    foundFilmsArray: [],
    foundSeriesArray: [],
});