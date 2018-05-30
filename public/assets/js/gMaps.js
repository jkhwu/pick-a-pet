document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('#map').length > 0) {
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'en';
        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAhEDd6KCc_-MNLSCwo18cnT_8ZnhmsrV8&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
        // $('#mapContainer').prepend('<h5>Input a Zip Code and Click a Term to Search. We will map the top results for you!</h5>')
    }
});
$(document).ready(() => {
    $('#map').hide();
    $('#pano').hide();
    $('.mapButton').on('click', function() {
        let selectedTerm = $(this).val().trim();
        // let zip = parseFloat($('#mapZip').val().trim().trim());
        let zip = $('#mapZip').text();
        console.log(zip);
        validateZip(zip, selectedTerm);
    })
})

function validateZip(zip, selectedTerm) {
    let valid = true;
    if (isNaN(zip)) {
        valid = false;
    }
    if (zip.toString().length !== 5) {
        valid = false;
    }
    if (valid === false) {
        alert('Enter Valid Zip Code')
    } else {
        post(zip, selectedTerm);
    }
}

function post(zip, selectedTerm) {
    $.post('/yelp', { searchTerm: selectedTerm, zipCode: zip }, function(data) {
        let results = data.serverSideData;
        let topFiveArray = [];
        for (let i = 0; i < 5; i++) {
            const result = results[i];
            const location = result.location;
            let label = i + 1;
            var n = label.toString();
            resultInfo = {
                resultNum: n,
                name: result.name,
                coordinates: result.coordinates,
                address: location.address1 + ", " + location.city + ", " + location.state + " " + location.zip_code
            }
            topFiveArray.push(resultInfo);
        }
        let latArray = [];
        let lngArray = [];
        let latSum = 0;
        let lngSum = 0;
        topFiveArray.forEach(element => {
            latArray.push(element.coordinates.latitude)
            lngArray.push(element.coordinates.longitude)
        });
        latArray.forEach(latitude => {
            latSum += parseFloat(latitude);
        });
        let averageLatitude = latSum / latArray.length;
        lngArray.forEach(longitude => {
            lngSum += parseFloat(longitude);
        });
        let averageLongitude = lngSum / lngArray.length;
        let center = { averageLatitude, averageLongitude }
        launchMap(center, topFiveArray);
    });
}

function launchMap(coords, results) {
    $("#map").show();
    var myLocation = {
        lat: coords.averageLatitude,
        lng: coords.averageLongitude
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 11
    });
    var icon = {
        path: 'M -15,-15 15,-15 15,15 -15,15 -15,-15',
        fillColor: 'grey',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'black',
        strokeWeight: 2
    };

    function addMarker(props) {
        let label = props.resultNum;
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: icon,
            label: label
        })
        var infoWindow = new google.maps.InfoWindow({
            content: '<div><p><b>' + props.name + '</b></p><hr><p>' + props.address + '</p></div>'
        });
        // var infoWindow = new google.maps.InfoWindow({
        //     content: '<div><h2>' + props.name + '</h2><hr><p>' + props.address + '</p></div>'
        // })
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        })
    };
    results.forEach(element => {
        addMarker({
            coords: { lat: element.coordinates.latitude, lng: element.coordinates.longitude },
            resultNum: element.resultNum,
            name: element.name,
            address: element.address
        })
    });
}
const googleInfo = {
    resultNum: '1',
    name: 'GooglePlex',
    coordinates: { averageLatitude: 37.4220, averageLongitude: -122.0841 },
    address: '1600 Amphitheatre Pkwy, Mountain View, CA 94043'
}