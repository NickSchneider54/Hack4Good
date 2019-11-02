window.addEventListener("load", getJobs);

 //get JOBS
 function getJobs() {
    var httpRequest = new XMLHttpRequest();
    var token = "iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf"
    httpRequest.open("get", `https://jobs.api.sgf.dev/api/job?api_token=${token}`);
    httpRequest.onreadystatechange = loadJobs;
    
    function loadJobs() {
        
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var jobs = httpRequest.responseText;
            var jobListings = JSON.parse(jobs);
            console.log(jobListings);
        }
    }
};

function job(title, company, location){
    this.title = title,
    this.company = company,
    this.location = location
}

var app = new Vue({
    el: "#app",
    data:{
        location: "",
        favorites: [],
        currentJobs: [],

    },
    methods:{
       
    }
});



