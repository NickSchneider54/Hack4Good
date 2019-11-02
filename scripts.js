window.addEventListener("load", getJobs);



function job(title, company, description, location){
    this.title = title,
    this.company = company,
    this.description = description,
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

var favoritesPage = {
    template: 
    `
        <section id="favJobs">
            <div class="title">Favorite Jobs</div>
            <div id="favJobsList">
                <div id="favJob"></div>
            </div>
        </section>
    `,
    props:['component']
}

var events = {
    template:
    `
        <section id="events">
            <div class="title">Events</div>
            <div id="eventListings">
                <div id="eventLisitng"></div>
            </div>
        </section>
    `,
    props:['component']
}

var jobSearchSettings = {
    template:
    `
        <section id="jobSearchSettings">
            <div class="title">Search Settings</div>
            <div id="educationLvl"></div>
            <div id="jobType"></div>
            <form action="" id="travelSettings">
                <select name="maxTravel">
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                </select>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </form>
        </section>
    `,
    props:['component']
}

var jobDetails = {
    template:
    `
        <section id="jobDetails">
            <div class="title">Job Details</div>
            <div id="jobTitle"></div>
            <div id="jobDescription"></div>
            <button onclick="callSiteForMore()">More</button>
            <div id="mapBar">
                <div id="openMap"><button onclick="openMap()">Map</button></div>
                <div id="address"></div>
            </div>
            <div id="jobInfo">
                <div id="pay">10.00/hr</div>
                <div id="hourType">Part-Time</div>
                <div id="jobRequirements">High School</div>
            </div>
        </section>
    `,
    props:['component']
}

var placeholder = {
    template:
    `
        <section id="mapToJob mapToEvent">
            <div class="title">
                <div id="jobMap">Job Map</div>
                <div id="eventMap">Event Map</div>
            </div>
            <!-- Add Map -->
            <div id="transportationTypes">
                <button onclick="showMapWalk()">Walk</button>
                <button onclick="showMapBike()">Bike</button>
                <button onclick="showMapBus()">Bus</button>
                <button onclick="showMapCar()">Car</button>
            </div>
            <div id="address"></div>
            <div id="transportInfo">
                <div id="travelTime"></div>
                <div id="distance"></div>
                <div id="transportType"></div>
            </div>
        </section>
    `,
    props:['component']
}

var eventDetails = {
    template:
    `
        <section id="eventDetails">
            <div class="title">Event Details</div>
            <div id="eventTitle"></div>
            <div id="eventDescription"></div>
            <div id="actionButtons">
                <div id="addCalander"><button onclick="addCalander()">Add To Calander</button></div>
                <div id="moreDetails"><button onclick="linkToEventInfo()">More</button></div>
            </div>
            <div id="map"><button onclick="openMap()">Map</button></div>
            <div id="address"></div>
            <div id="eventInfo">
                <div id="date"></div>
                <div id="time"></div>
                <div id="cost"></div>
            </div>
        </section>
    `,
    props:['component']
}

var app = new Vue({
    el: "#app",
    data: {
        location: "",
        favorites: [],
        currentJobs: [],
        currentComponent: 'landingPage'
    },
    components:{
        'landingPage' : landingPage,
        'locationPage' : locationPage,
        'jobsPage' : jobsPage,
        'favJobs' : favJobs
    },
    methods:{
       component: function(component){
           this.currentComponent = component;
       }
    }
});

//get JOBS
function getJobs() {
    $.ajax({url: "https://jobs.api.sgf.dev/api/job?api_token=iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf", success: (result) => {
        
    }});
}






