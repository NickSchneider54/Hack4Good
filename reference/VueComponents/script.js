$(document).ready ( () => {
    $.ajax({url: "https://api.themoviedb.org/3/movie/now_playing?api_key=464d170d39ade5227cdfd296fa729627&language=en-US&page=1", success: (result) => {
        var aryMovies = [];
        result.results.forEach((element, index) => {
             aryMovies[index] = element;
        });
    }});
});

Vue.component('list-movies', {
    template: 
    `
        
    `
});

new Vue({
    el: '#app',
    data:
    {
        movies: aryMovies
    }
});