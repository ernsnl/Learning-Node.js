var browserLocation = {
    lat: '',
    long: ''
};
var map;
var allowMap = false;

// If supported get current location info
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            browserLocation.lat = position.coords.latitude;
            browserLocation.long = position.coords.longitude;
            console.log(browserLocation);
            initMap();
        });
    } else {
        console.log('Location cannot be obtained');
        initMap();
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

function getAjax() {
    console.log('Ajax Init');
    $.ajax({
        url: '/getSearchResults',
        method: 'GET',
        data: {
            searchAPI: 'Instagram'
        },
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }


    });
};

function initMap() {
    // Styles Thank you for https://snazzymaps.com/style/70/unsaturated-browns
    // Simon Goellner
    var map_style = [{
        "elementType": "geometry",
        "stylers": [{
            "hue": "#ff4400"
        }, {
            "saturation": -68
        }, {
            "lightness": -4
        }, {
            "gamma": 0.72
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.icon"
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{
            "hue": "#0077ff"
        }, {
            "gamma": 3.1
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "hue": "#00ccff"
        }, {
            "gamma": 0.44
        }, {
            "saturation": -33
        }]
    }, {
        "featureType": "poi.park",
        "stylers": [{
            "hue": "#44ff00"
        }, {
            "saturation": -23
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "hue": "#007fff"
        }, {
            "gamma": 0.77
        }, {
            "saturation": 65
        }, {
            "lightness": 99
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "gamma": 0.11
        }, {
            "weight": 5.6
        }, {
            "saturation": 99
        }, {
            "hue": "#0091ff"
        }, {
            "lightness": -86
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "lightness": -48
        }, {
            "hue": "#ff5e00"
        }, {
            "gamma": 1.2
        }, {
            "saturation": -23
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "saturation": -64
        }, {
            "hue": "#ff9100"
        }, {
            "lightness": 16
        }, {
            "gamma": 0.47
        }, {
            "weight": 2.7
        }]
    }];

    if (browserLocation.long != "" && browserLocation.lat != "") {
        map = new google.maps.Map(document.getElementById('SearchMap'), {
            center: {
                lat: browserLocation.lat,
                lng: browserLocation.long
            },
            zoom: 8,
            styles: map_style
        });
    } else {
        map = new google.maps.Map(document.getElementById('SearchMap'), {
            center: {
                lat: 51.508530,
                lng: -0.076132
            },
            zoom: 8,
            styles: map_style
        });
    }

    var divContain = document.getElementById("SearchDiv");
    var input = document.getElementById('SearchBeforeGoBox');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(divContain);

    searchBox.addListener('places_changed', searchIt);
};
