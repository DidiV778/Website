// script.js

function initMap() {
    var location = {lat: 38.736946, lng: -9.142685}; // Coordenadas para Lisboa, Portugal
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
