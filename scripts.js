window.addEventListener("load", function(){
    document.getElementById('app').innerHTML = Vue.landing;
});


app.getJobs();

var app = new Vue({
    el: "#app",
    data:{
        location: "",
        favorites: [],
        currentJobs: [],

    },
    methods:{
        //get JOBS
        getJobs: function() {
            var httpRequest = new XMLHttpRequest();
            var token = "iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf"
            httpRequest.open("get", `https://jobs.api.sgf.dev/api/job?api_token='${token}`);
            httpRequest.send(null);
            httpRequest.onreadystatechange = loadJobs;

            function loadJobs() {
                if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    var jobs = httpRequest.responseText;
                    console.log(jobs);
                    //var jsObject = JSON.parse(launches);
                }
            }
        }
    }
})
