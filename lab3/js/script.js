let map;
let center;
let coolLocations;
let geoCoder;
let indexForMarkers = 0;
let markers = [];
class MapMarker {
    constructor(address, latlng) {
        this.Address = address;
        this.LatLong = latlng;
    }
}
function initMap() {
    center = { lat: 43.6532, lng: -79.38 };
    map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: center });
    // var marker = new google.maps.Marker({position: uluru, map: map});
    geoCoder = new google.maps.Geocoder();
    fetch('./js/locations.json?v=1.00')
        .then(data => data.json())
        .then(showLocations);
}
function createMarkerForLocation() {
    geoCoder.geocode({ address: 'Toronto ' + coolLocations[indexForMarkers].address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let coolLocationCoords = results[0].geometry.location;
            //i don't use these MapMarker but since it was in a task, I do create them
            markers.push(new MapMarker(coolLocations[indexForMarkers].address, { lat: coolLocationCoords.lat(), lng: coolLocationCoords.lng() }));
            var marker = new google.maps.Marker({
                map: map,
                position: coolLocationCoords
            });
            if (indexForMarkers === coolLocations.length - 1)
                return;
            indexForMarkers++;
            createMarkerForLocation();
        }
        else {
            setTimeout(createMarkerForLocation, 2000);
        }
    });
}
function showLocations(locations) {
    coolLocations = locations;
    console.log(coolLocations);
    createMarkerForLocation();
}
