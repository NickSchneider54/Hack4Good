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

var landingPage = {
    template:
    `
        <section id="landingPage">
            <div id="logoView"></div>
            <button @click="component('locationPage')" type="submit">Search Jobs</button>
        </section>
    `,
    props:['component']
}

var locationPage = {
    template:
    `
        <section id="locationPage">
            <div id="currentLocation"><button @click="component('jobsPage')">Use Current Location</button></div>
            <div id="divider"><i class="line"></i><span id="or">OR</span><i class="line"></i></div>
            <div id="locationForm">
                <form action="">
                    Street Address<br>
                    <input type="text" id="address">
                    City<br>
                    <input type="text" id="city">
                    Postal Code<br>
                    <input type="text" id="zip">
                    <button @click="component('jobsPage')" type="submit">Use This Address</button>
                </form>
            </div>
            <div class="bottomBanner"></div>
        </section>    
    `,
    props:['component']
}

var jobsPage = {
    template: 
    `
        <section id="jobsPage">
            <div id="topBanner">Jobs Near Me</div>
                <div id="searchBanner">
            </div>
        </section> 
    `,
    props:['component']
}

var alertsPage = {
    template:
    `
        <section id="alerts">
            <div class="title">Alerts</div>
            <section id="alertTabs">
                <div id="jobsTab"><button onclick="showJobAlerts()">Jobs</button></div>
                <div id="eventsTab"><button onclick="showEventAlerts()">Events</button></div>
                <div id="jobListingAlerts">
                    <div id="jobListingAlert"></div>
                </div>
                <div id="eventListingAlerts">
                    <div id="eventLisitngAlert"></div>
                </div>
            </section>
        </section>
    `,
    props:['component']
}

var app = new Vue({
    el: "#app",
    data:{
        location: "",
        favorites: [],
        currentJobs: [],
        currentComponent: 'landingPage'
    },
    components:{
        'landingPage' : landingPage,
        'locationPage' : locationPage,
        'jobsPage' : jobsPage
    },
    methods:{
       component: function(component){
           this.currentComponent = component;
       }
    }
});



