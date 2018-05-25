import {LatLng}  from './LatLng.js';

function initMap() {
    let center:LatLng={ lat: 43.6532, lng: -79.38};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: center});
    // var marker = new google.maps.Marker({position: uluru, map: map});
}