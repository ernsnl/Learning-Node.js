var browserLocation = {
    lat: '',
    long: ''
};

// If supported get current location info
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            browserLocation.lat = position.coords.latitude;
            browserLocation.long = position.coords.longitude;
            console.log(browserLocation);
        });
    } else {
        console.log('Location cannot be obtained');
    }
}

function getInsts() {

};

function getTweets() {

};

function get4Squares() {

};

function getWikis() {

};

function getMaps() {

};

window.onload = function() {
    getLocation();
}
