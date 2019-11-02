window.addEventListener("load", function(){
    document.getElementById('app').innerHTML = Vue.landing;
});


Vue.component('landing',{
    template:
<<<<<<< Updated upstream
   
    
=======

    `
        <section id="landing">
            <div id="logoView"></div>
            <button onclick="searchFunction()"></button>
        </section>

    `
>>>>>>> Stashed changes

})



var app = new Vue({
    el: "#app",
    data:{
        location: "",
        favorites: [],
        currentJobs: [],

    },
})