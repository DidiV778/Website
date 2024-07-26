// script.js

function initMap() {
    var location = {lat: -25.344, lng: 131.036}; // Coordenadas da localização
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
