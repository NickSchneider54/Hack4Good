var aryMovies = ['Matrix', 'Mulan', 'Footloose']

Vue.component('section-list', {
    props: ['themovies'],
    template: 
    `
        <section>
            <h5><slot></slot></h5>
            <img v-bind:src="imgsrc">
            <list-item v-for="movie in themovies">{{movie}}</list-item>
        </section>
    `,
    data: function() 
    {
        return {
            imgsrc: "mushu.png"
        }
    }
})

Vue.component('list-item', {
    template: `
        <p><slot></slot></p>
    `
})

var testVue = new Vue({
    el: "#app",
    data: 
    {
        mess: "Aloha",
        movies: aryMovies,
        tvshows: ['New Amsterdam', 'Sirens', 'NCIS']
    }
});