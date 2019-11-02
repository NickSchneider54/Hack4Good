

var landingPage = {
    template:
    `
        <section id="landingPage">
            <div id="logoView"><img src="workforce-2019-logo-mo-jobs-white.png" alt="jobCenterLogo"></div>
            <div id="splashContrast">
                <button @click="component('locationPage')" type="submit" class="btn btn-primary btn-block" id="landing-btn">Search Jobs</button>
            </div>            
        </section>
    `,
    props:['component']
}

var jobsPage = {
    template: 
    `
        <h2>Jobs Near You</h2>   
    `,
    props:['component']
}

var locationPage = {
    template:
    `
        <section id="locationPage">
            <div id="loacationHeader">Set Location</div>
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
                    <button onclick="return app.formValidation(this.form)" class="btn btn-primary btn-block" name="submit" type="button" id="useAddress">Use This Address</button>
                </form>
            </div>
            <div class="bottomBanner"></div>
        </section>    
    `,
    props:['component']
}

var alertsPage = {
    template:
    `
        <section id="alerts">
            <div class="title">Alerts</div>
            <section id="alertTabs" class="form-inline m-auto">
                <div id="jobsTab"><button onclick="showJobAlerts()" class="btn btn-primary btn-block">Jobs</button></div>
                <div id="eventsTab"><button onclick="showEventAlerts()" class="btn btn-primary btn-block">Events</button></div>
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
                <div id="searchBanner">
                    <input type="text" placeholder="Search.." name="search">
                    <i class="settingsCog"></i>
                </div>
                <div class="card border-dark mb-3 m-auto" style="max-width: 20rem;">
                    <div class="card-header"></div>
                    <div class="card-body text-dark">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>  
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
                <div class="card border-dark mb-3 m-auto" style="max-width: 20rem;">
                    <div class="card-header"></div>
                    <div class="card-body text-dark">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>  
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
            <div>
                <label for="educationLvl">Education Level</label>
                <select id="educationLvl"></select>
            </div>
            <div>
                <label id="jobType">Job Type</label>
                <select id="jobType"></select>
            </div>
            <div class="row" id="searchSettings">
                <div class="col-sm-8>
                    <p>Test</p>
                </div>
                <div class="custom-control custom-switch">
                    <label class="custom-control-label" for="customSwitch1">Walking Distance</label>  
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">                                                         
                </div>
                <div class="custom-control custom-switch">
                    <label class="custom-control-label" for="customSwitch2">Biking Distance</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch2">                    
                </div>
                <div class="custom-control custom-switch">
                    <label class="custom-control-label" for="customSwitch3">Busing Distance</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch3">                    
                </div>
                <div class="custom-control custom-switch">
                    <label class="custom-control-label" for="customSwitch4">Driving Distance</label>
                    <input type="checkbox" class="custom-control-input" id="customSwitch4">                    
                </div>
            </div>
            <input @click="component('locationPage')" class="btn" type="button" value="location">
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
            <div id="transportationTypes" class="form-inline m-auto">
                <button onclick="showMapWalk()" id="fix-btn" class="btn btn-primary btn-block">Walk</button>
                <button onclick="showMapBike()" class="btn btn-primary btn-block">Bike</button>
                <button onclick="showMapBus()" class="btn btn-primary btn-block">Bus</button>
                <button onclick="showMapCar()" class="btn btn-primary btn-block">Car</button>
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
        lat: "",
        lng: "",
        favorites: [],
        currentJobs: [],
        trvlConstraints: [],
        currentComponent: 'landingPage',
        },
    components:{
        'landingPage' : landingPage,
        'locationPage' : locationPage,
        'alertsPage' : alertsPage,
        'favoritesPage' : favoritesPage,
        'eventsPage' : eventsPage,
        'settings' : settings,
        'jobDetails' : jobDetails,
        'mapPage' : mapPage,
        'eventDetails' : eventDetails,
        'jobsPage' : jobsPage
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
       population: function(aryOfJobs) {
        var jobCards = ""
        for (var i = 0; i < 10; i++) {
            jobCards += `
                <section id="jobsPage">
                    <div class="card border-dark mb-3" style="max-width: 20rem;">
                        <div class="card-header">${ [i] } </div>
                        <div class="card-body text-dark">
                        <p class="card-text">${ [i]}</p>
                            getDistance(.lat, this.lat, currentjob.locations)</p>
                        </div>
                    </div>
                </section>
            `
        }
        console.log(aryOfJobs)
        return jobCards;
    },
    mounted(){
        var newLocation;
        var newLat;
        var newLng;
        if(localStorage.location){
            this.location = localStorage.location;
        }
        if(localStorage.lat){
            this.lat = localStorage.lat;
        }
        if(localStorage.lng){
            this.lng = localStorage.lng;
        }
        axios.get('https://jobs.api.sgf.dev/api/job?api_token=iyOSd0gsuR9TZIqWe9wAWuRbLai0HYCmLG3OrUFfFct1ePozfiCoZlOVKVfqfTMGung2IxC9LY2WGZUf').then(response => {
            this.currentJobs = response.data.data
        })
    },
    watch:{
        location(newLocation){
            localStorage.location = newLocation;
            
        },
        lat(newLat){
            localStorage.lat = newLat;
        },
        lng(newLng){
            localStorage.lng = newLng;
        }
    }
});

function getDistance(originLat, originLong, destinationsLat, destinationsLong)
  {
      
     //Find the distance
     var distanceService = new google.maps.DistanceMatrixService();
     distanceService.getDistanceMatrix({
        origins: [{lat: origin[0], lng: origin[1]}],
        destinations: [{lat: destinationsLat, lng: destinationsLong}],
        travelMode: google.maps.TravelMode.WALKING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        durationInTraffic: true,
        avoidHighways: false,
        avoidTolls: false
    },
    function (response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            console.log('Error:', status);
        } else {
            console.log(response);
            // response.rows[0].elements[0].distance.text;
            // response.rows[0].elements[0].duration.text;
        }
    });
  }


function getLocation(){         
    navigator.geolocation.getCurrentPosition(locationFound);
}

function locationFound(position){
    app.lat = position.coords.latitude;
    app.lng = position.coords.longitude;
    convertLatLng(app.lat, app.lng);
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

//app.component('jobsPage')
