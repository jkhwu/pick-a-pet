// const yelp = require('./yelp.js');
// ---------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('#map').length > 0) {
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'en';

        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAhEDd6KCc_-MNLSCwo18cnT_8ZnhmsrV8&callback=launchMap&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
    }
});


// Set map to initial point \\

function launchMap() {
    var myLocation = {
        lat: 32.88,
        lng: -117.014
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 11
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: myLocation,
            pov: {
                heading: 34,
                pitch: -10
            }
        });
    map.setStreetView(panorama);

    var icon = {
        path: 'M -15,-15 15,-15 15,15 -15,15 -15,-15',
        fillColor: 'grey',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'black',
        strokeWeight: 2
    };

    //add Marker function
    //call add marker function for each of the 5 results of yelp search
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: icon,
            label: props.resultNum /* RESULT NUMBER*/
        })
        var infoWindow = new google.maps.InfoWindow({
            content: '<div><h4>' + props.name + '</h4><hr><p>' + props.address + '</p></div>' /*Location name and address*/
        })
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        })
    };
    addMarker({
        coords: { longitude: -117.07374572753906, latitude: 32.995952419569704 },
        resultNum: '1',
        name: 'French Market Grille',
        address: '123 Main'
    })
}

// Set map to target address lat + long \\