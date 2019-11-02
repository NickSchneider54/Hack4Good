//window.addEventListener("load", getJobs);

//var aryCurrentJobs = getJobs();


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
            <button @click="component('locationPage')" type="submit" class="btn btn-primary">Search Jobs</button>
        </section>
    `,
    props:['component']
}

var locationPage = {
    template:
    `
        <section id="locationPage">
            <div id="currentLocation"><button onclick="getLocation()" class="btn btn-primary">Use Current Location</button></div>
            <div id="divider"><i class="line"></i><span id="or">OR</span><i class="line"></i></div>
            <div id="locationForm">
                <form action="component(jobsPage)">
                    <div id="alertAddress" class="alertMsg"></div>
                    Street Address<br>
                    <input type="text" id="address" name="address">
                    <div id="alertCity" class="alertMsg"></div>
                    City<br>
                    <input type="text" id="city" name="city">
                    <div id="alertZip" class="alertMsg"></div>
                    Postal Code<br>
                    <input type="text" id="zip" name="zip"><br><br>
                    <button onclick="return app.formValidation(this.form)" class="btn btn-primary" name="submit" type="button">Use This Address</button>
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
                <div class="card border-dark mb-3" style="max-width: 20rem;">
                <div class="card-header">{{currentJobs[0].title}}</div>
                <div class="card-body text-dark">
                  
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              
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
                <div id="jobsTab"><button onclick="showJobAlerts()" class="btn btn-primary">Jobs</button></div>
                <div id="eventsTab"><button onclick="showEventAlerts()" class="btn btn-primary">Events</button></div>
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
        <section id="favoritesPage">
            <div class="title">Favorite Jobs</div>
            <div id="favJobsList">
                <div id="favJob"></div>
            </div>
        </section>
    `,
    props:['component']
}

var eventsPage = {
    template:
    `
        <section id="eventsPage">
            <div class="title">Events</div>
            <div id="eventListings">
                <div id="eventLisitng"></div>
            </div>
        </section>
    `,
    props:['component']
}

var settings = {
    template:
    `
        <section id="settings">
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
            <button onclick="callSiteForMore()" class="btn btn-primary">More</button>
            <div id="mapBar">
                <div id="openMap"><button onclick="openMap()" class="btn btn-primary">Map</button></div>
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

var mapPage = {
    template:
    `
        <section id="mapToJob mapToEvent">
            <div class="title">
                <div id="jobMap">Job Map</div>
                <div id="eventMap">Event Map</div>
            </div>
            <!-- Add Map -->
            <div id="transportationTypes">
                <button onclick="showMapWalk()" class="btn btn-primary">Walk</button>
                <button onclick="showMapBike()" class="btn btn-primary">Bike</button>
                <button onclick="showMapBus()" class="btn btn-primary">Bus</button>
                <button onclick="showMapCar()" class="btn btn-primary">Car</button>
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
                <div id="addCalander"><button onclick="addCalander()" class="btn btn-primary">Add To Calander</button></div>
                <div id="moreDetails"><button onclick="linkToEventInfo()" class="btn btn-primary">More</button></div>
            </div>
            <div id="map"><button onclick="openMap()" class="btn btn-primary">Map</button></div>
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
        currentComponent: 'landingPage',
        },
    components:{
        'landingPage' : landingPage,
        'locationPage' : locationPage,
        'jobsPage' : jobsPage,
        'alertsPage' : alertsPage,
        'favoritesPage' : favoritesPage,
        'eventsPage' : eventsPage,
        'settings' : settings,
        'jobDetails' : jobDetails,
        'mapPage' : mapPage,
        'eventDetails' : eventDetails
    },
    
    methods:{
       component: function(component){
           this.currentComponent = component;
       },
       formValidation: function(frm){
            var isValid = true;
            var alertAddress = document.getElementById('alertAddress');
            var alertCity = document.getElementById('alertCity');
            var alertZip = document.getElementById('alertZip');
            var regexAddress = /^\d+\s[A-z]+\s[A-z]+/;
            var regexCity = /[a-z]+[a-z]+[a-z]+./;
            var regexZip = /\d{5}/;
            if(frm.address.value == ""){                
                alertAddress.innerHTML = "required fields are missing";      
                isValid = false;                 
            } 
            else if(regexAddress.test(frm.address.value) != true){
                alertAddress.innerHTML = "invalid address";
                isValid = false;  
            } 
            if(frm.city.value == ""){                
                alertCity.innerHTML = "required fields are missing";
                isValid = false;
            }
            else if(regexCity.test(frm.city.value)){
                alertCity.innerHTML = "invalid city name";
            }
            if(frm.zip.value == ""){                
                alertZip.innerHTML = "required fields are missing";   
                isValid = false;              
            }
            else if(regexZip.test(frm.zip.value) != true){
                alertZip.innerHTML = "invalid postal code";
                isValid = false;
            }
            if(isValid == false){
                return isValid; 
            }   
            else{
                this.setLocation(`${frm.address.value} ${frm.city.value} ${frm.zip.value}`);
                this.component('jobsPage');
            }          
       },
       setLocation: function(frmLocation){
            this.location = frmLocation;
            console.log(this.location);
       }
       
    },
    mounted(){
        var newLocation;
        if(localStorage.location){
            this.location = localStorage.location;
        }
        axios.get('https://jobs.api.sgf.dev/api/job?api_token=iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf').then(response => {
            this.currentJobs = response.data
        })
    },
    watch:{
        location(newLocation){
            localStorage.location = newLocation;
        }
    }
});

//get JOBS

function getJobs() {
    var aryJobs = []
    $.ajax({url: "https://jobs.api.sgf.dev/api/job?api_token=iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf", success: (result) => {
        result.data.forEach((element, index) => {
            aryJobs.push(element); 
        });
        
    }});
    
    return aryJobs;
    
}



function getLocation(){         
    navigator.geolocation.getCurrentPosition(locationFound);
}

function locationFound(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    convertLatLng(lat, lng);
}

function convertLatLng(lat, lng){
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat,lng);
    geocoder.geocode({'location' : latlng}, function(results, status){
        if(status == google.maps.GeocoderStatus.OK){
            if(results[1]){
                app.location = results[0].formatted_address;
            }
            else{
                alert("Could not find your current location");
            }
        }
    });            
}





